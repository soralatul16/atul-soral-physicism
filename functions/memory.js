/* ═══════════════════════════════════════════════════════════
   GENERATION MEMORY LAYER — Phase 4
   
   Tracks recent scenarios, numerical patterns, and usage
   metrics per topic/grade to prevent repetition. Applies
   expiration and weighting to penalize generic contexts.
   Uses Firestore collection: exam_memory
   ═══════════════════════════════════════════════════════════ */

const admin = require("firebase-admin");

// Expiration time for memory items (7 days)
const EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000;

// Generic phrasing that deserves high suppression weight
const GENERIC_PHRASES = ["student in a lab", "student investigates", "consider a block", "a car travels", "an experiment is conducted"];

/**
 * Calculates repetition weight based on how generic the phrase is.
 */
function calculateRepetitionWeight(text) {
  const lower = text.toLowerCase();
  for (const phrase of GENERIC_PHRASES) {
    if (lower.includes(phrase)) return 2.5; // High suppression for generic clichés
  }
  return 1.0; // Normal weight for realistic contexts
}

/**
 * Clean up expired items from an array of memory objects.
 */
function pruneExpired(items) {
  const now = Date.now();
  return items.filter(item => item.expiresAt > now);
}

/**
 * Add or update an item in a memory array.
 */
function upsertMemoryItem(items, text, maxItems = 10) {
  if (!text) return items;
  
  const now = Date.now();
  const existing = items.find(i => i.text.toLowerCase() === text.toLowerCase());
  
  if (existing) {
    existing.usageCount = (existing.usageCount || 1) + 1;
    existing.lastUsedAt = now;
    existing.expiresAt = now + EXPIRATION_MS;
  } else {
    items.push({
      text,
      usageCount: 1,
      lastUsedAt: now,
      expiresAt: now + EXPIRATION_MS,
      repetitionWeight: calculateRepetitionWeight(text)
    });
  }
  
  // Sort by weight * usageCount (descending) to keep the most "dangerous" repetitions
  items.sort((a, b) => (b.usageCount * b.repetitionWeight) - (a.usageCount * a.repetitionWeight));
  
  return items.slice(0, maxItems);
}

/**
 * Extract common numerical values from a text string.
 * @returns {string[]} Array of numbers with units (e.g., "1500 kg", "20 m/s")
 */
function extractNumericals(text) {
  const matches = text.match(/\b\d+(\.\d+)?\s*(kg|m\/s|s|N|J|W|m|V|A|%)\b/gi) || [];
  return [...new Set(matches.map(m => m.toLowerCase().trim()))];
}

/**
 * Fetch localized memory for a specific topic and grade.
 * @param {admin.firestore.Firestore} db 
 * @param {string} topic 
 * @param {string} grade 
 * @returns {Promise<Object>} The memory profile
 */
async function getMemory(db, topic, grade) {
  const docId = `${topic.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_grade_${grade}`;
  try {
    const doc = await db.collection("exam_memory").doc(docId).get();
    if (!doc.exists) {
      return {
        scenarios: [], openings: [], numbers: [],
        averageValidationScore: 10, softRegenFrequency: 0, totalGenerations: 0
      };
    }
    const data = doc.data();
    
    // Prune expired items
    data.scenarios = pruneExpired(data.scenarios || []);
    data.openings = pruneExpired(data.openings || []);
    data.numbers = pruneExpired(data.numbers || []);
    
    return data;
  } catch (e) {
    console.error("Failed to fetch memory:", e);
    return { scenarios: [], openings: [], numbers: [], averageValidationScore: 10, softRegenFrequency: 0, totalGenerations: 0 };
  }
}

/**
 * Update the memory profile with data from a new successful generation.
 * @param {admin.firestore.Firestore} db 
 * @param {string} topic 
 * @param {string} grade 
 * @param {Object} generationResult - The final validated JSON
 * @param {Object} analyticsSummary - Score and regen data
 */
async function updateMemory(db, topic, grade, generationResult, analyticsSummary) {
  const docId = `${topic.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_grade_${grade}`;
  
  try {
    const memory = await getMemory(db, topic, grade);
    
    // Extract scenarios (content blocks)
    const contentBlocks = generationResult.blocks.filter(b => b.mode === "content");
    contentBlocks.forEach(b => {
      const text = b.data?.text?.replace(/<[^>]+>/g, '').substring(0, 100);
      if (text) memory.scenarios = upsertMemoryItem(memory.scenarios, text, 10);
      
      // Extract numbers from stimulus
      const nums = extractNumericals(b.data?.text || "");
      nums.forEach(n => {
        memory.numbers = upsertMemoryItem(memory.numbers, n, 20);
      });
    });

    // Extract question openings (first 6 words)
    const questionBlocks = generationResult.blocks.filter(b => b.mode === "question");
    questionBlocks.forEach(b => {
      const text = b.data?.question || "";
      const opening = text.split(" ").slice(0, 6).join(" ");
      if (opening.length > 10) {
        memory.openings = upsertMemoryItem(memory.openings, opening, 15);
      }
      
      // Extract numbers from question
      const nums = extractNumericals(text);
      nums.forEach(n => {
        memory.numbers = upsertMemoryItem(memory.numbers, n, 20);
      });
    });

    // Update difficulty / quality metrics (running averages)
    const totalGen = (memory.totalGenerations || 0) + 1;
    const oldScore = memory.averageValidationScore || 10;
    const newScore = analyticsSummary.score || 10;
    
    memory.averageValidationScore = ((oldScore * (totalGen - 1)) + newScore) / totalGen;
    memory.totalGenerations = totalGen;
    memory.softRegenFrequency = (memory.softRegenFrequency || 0) + (analyticsSummary.softRegenerations > 0 ? 1 : 0);
    memory.lastUpdatedAt = new Date().toISOString();

    await db.collection("exam_memory").doc(docId).set(memory);
  } catch (e) {
    console.error("Failed to update memory:", e);
  }
}

module.exports = { getMemory, updateMemory, extractNumericals };
