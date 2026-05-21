/* ═══════════════════════════════════════════════════════════
   TEACHER FEEDBACK & INTELLIGENCE LAYER — Phase 5
   
   Provides endpoints for recording teacher edits, markscheme
   rejections, scenario blacklists, and reusable templates.
   Calculates a rolling Trust Score for generation blocks.
   ═══════════════════════════════════════════════════════════ */

const functions = require("firebase-functions");
const admin = require("firebase-admin");

/**
 * Calculates a Trust Score (0-10) for a generated block based on analytics.
 * @param {Object} blockData - The generation metadata
 * @param {Object} feedback - Teacher feedback signals
 */
function calculateTrustScore(blockData, feedback) {
  let score = 10;
  
  // Detractors
  if (feedback.editCount > 0) score -= (feedback.editCount * 1.5);
  if (feedback.markschemeRejected) score -= 3;
  if (feedback.difficultyAdjusted) score -= 1;
  if (blockData.softRegenerations > 0) score -= 1;
  
  // Boosters
  if (feedback.markedExcellent) score += 2;
  if (feedback.pinnedContext) score += 2;
  if (feedback.approvedMarkscheme) score += 1;
  
  return Math.max(0, Math.min(10, score));
}

/**
 * Submits structured teacher feedback for a specific generated question block.
 */
exports.submitTeacherFeedback = functions.https.onCall(async (data, context) => {
  const { generationId, blockIndex, topic, grade, feedback } = data;
  if (!generationId || blockIndex === undefined) {
    throw new functions.https.HttpsError("invalid-argument", "Missing generationId or blockIndex");
  }

  const db = admin.firestore();
  
  // 1. Log the structured edit
  const editRecord = {
    generationId,
    blockIndex,
    topic,
    grade,
    editType: feedback.editType || "minor_correction",
    beforeText: feedback.beforeText || "",
    afterText: feedback.afterText || "",
    markschemeCorrected: feedback.markschemeCorrected || false,
    difficultyAdjusted: feedback.difficultyAdjusted || false,
    markedExcellent: feedback.markedExcellent || false,
    timestamp: admin.firestore.FieldValue.serverTimestamp()
  };

  await db.collection("teacher_edits").add(editRecord);

  // 2. Calculate and store Trust Score
  const blockRef = db.collection("generation_analytics").doc(generationId);
  const blockDoc = await blockRef.get();
  
  if (blockDoc.exists) {
    const analyticsData = blockDoc.data();
    const trustScore = calculateTrustScore(analyticsData, feedback);
    
    // Update block-level analytics
    const trustScores = analyticsData.trustScores || {};
    trustScores[blockIndex] = trustScore;
    await blockRef.update({ trustScores });

    // 3. Weight memory heavily based on feedback (do not overfit, use damped weights)
    const memoryDocId = `${topic.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_grade_${grade}`;
    const memRef = db.collection("exam_memory").doc(memoryDocId);
    
    await db.runTransaction(async (t) => {
      const mDoc = await t.get(memRef);
      if (mDoc.exists) {
        const mData = mDoc.data();
        
        // If explicitly blacklisted
        if (feedback.blacklistScenario && feedback.scenarioText) {
           const generic = {
             text: feedback.scenarioText,
             usageCount: 5, // Force high usage to trigger orchestrator avoidance
             repetitionWeight: 3.0, // High suppression
             lastUsedAt: Date.now(),
             expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000) // 30 days
           };
           mData.scenarios = mData.scenarios || [];
           mData.scenarios.push(generic);
        }

        // Adjust validation score equivalent based on feedback (damped by 0.1 to avoid overfitting)
        const oldAvg = mData.averageValidationScore || 10;
        const newAvg = (oldAvg * 0.9) + (trustScore * 0.1);
        
        t.update(memRef, {
          scenarios: mData.scenarios || [],
          averageValidationScore: newAvg,
          lastFeedbackAt: admin.firestore.FieldValue.serverTimestamp()
        });
      }
    });
  }

  return { success: true, message: "Feedback processed securely." };
});

/**
 * Saves a high-quality generated question as a reusable template.
 */
exports.saveTrustedTemplate = functions.https.onCall(async (data, context) => {
  const { blockData, topic, grade } = data;
  
  if (!blockData || !blockData.data) {
    throw new functions.https.HttpsError("invalid-argument", "Missing block data");
  }

  const db = admin.firestore();
  await db.collection("trusted_templates").add({
    ...blockData,
    topic,
    grade,
    savedAt: admin.firestore.FieldValue.serverTimestamp(),
    usageCount: 0
  });

  return { success: true };
});
