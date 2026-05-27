var curYear='y1', curView='ref';
function authCheck(){
  var p=document.getElementById('authPw').value;
  if(p==='physicism2025'||p==='myp2025'||p==='teacher'){
    document.getElementById('auth').style.display='none';
    document.getElementById('app').style.display='flex';
    initApp();
  } else { document.getElementById('authErr').style.display='block'; }
}
function initApp(){ buildSidebar(); buildWelcome(); }

function switchView(v){
  curView=v;
  document.getElementById('tabRef').style.cssText=v==='ref'?'background:var(--accent);color:#fff;border-color:var(--accent)':'';
  document.getElementById('tabUnit').style.cssText=v==='unit'?'background:var(--accent);color:#fff;border-color:var(--accent)':'';
  buildSidebar();
  document.getElementById('welcomePane').style.display='block';
  document.getElementById('topicView').style.display='none';
  buildWelcome();
}

function buildWelcome(){
  var wp=document.getElementById('welcomePane');
  if(curView==='ref'){
    var t=MYP_PLANNER.topics;
    wp.innerHTML='<div style="font-size:52px;margin-bottom:12px">🔬</div><h1>MYP Topic Reference</h1><p>Browse topics by strand — each with MYP framework, year progression, investigations, and assessments.</p><div class="stats"><div class="stat"><div class="v">'+t.length+'</div><div class="l">Topics</div></div><div class="stat"><div class="v">'+MYP_PLANNER.strands.length+'</div><div class="l">Strands</div></div><div class="stat"><div class="v">4</div><div class="l">Criteria</div></div><div class="stat"><div class="v">3</div><div class="l">Year Levels</div></div></div>';
  } else {
    var u=typeof MYP_UNITS!=='undefined'?MYP_UNITS:[];
    var tl=0;u.forEach(function(x){tl+=x.totalLessons});
    wp.innerHTML='<div style="font-size:52px;margin-bottom:12px">📋</div><h1>MYP Unit Lesson Plans</h1><p>Detailed lesson-by-lesson plans with experiments, simulations, differentiation, and 5E phasing.</p><div class="stats"><div class="stat"><div class="v">'+u.length+'</div><div class="l">Units</div></div><div class="stat"><div class="v">'+tl+'</div><div class="l">Lessons</div></div></div>';
  }
}

function buildSidebar(){
  var h='';
  if(curView==='ref'){
    h='<div class="side-title">Topics by Strand</div>';
    MYP_PLANNER.strands.forEach(function(strand){
      var topics=MYP_PLANNER.topics.filter(function(tp){return tp.strand===strand.code});
      h+='<div class="strand-hdr" onclick="toggleStrand(this)" style="border-left-color:'+strand.color+'"><span>'+strand.icon+' '+strand.name+' <span style="font-family:var(--fm);opacity:.5">('+topics.length+')</span></span><span class="sc">▼</span></div>';
      h+='<div class="strand-body" style="max-height:999px">';
      topics.forEach(function(tp){h+='<div class="t-link" data-id="'+tp.id+'" onclick="showTopic(\''+tp.id+'\')"><span class="code" style="color:'+strand.color+'">'+tp.id+'</span><span class="nm">'+tp.title+'</span></div>'});
      h+='</div>';
    });
  } else {
    h='<div class="side-title">Unit Plans</div>';
    var units=typeof MYP_UNITS!=='undefined'?MYP_UNITS:[];
    var yrs={};units.forEach(function(u){if(!yrs[u.year])yrs[u.year]=[];yrs[u.year].push(u)});
    Object.keys(yrs).forEach(function(yr){
      h+='<div class="strand-hdr" onclick="toggleStrand(this)" style="border-left-color:var(--accent)"><span>📚 '+yr+'</span><span class="sc">▼</span></div>';
      h+='<div class="strand-body" style="max-height:999px">';
      yrs[yr].forEach(function(u){h+='<div class="t-link" data-id="'+u.id+'" onclick="showUnit(\''+u.id+'\')"><span class="code" style="color:var(--accent)">'+u.id+'</span><span class="nm">'+u.title+'</span></div>'});
      h+='</div>';
    });
  }
  document.getElementById('sidebarContent').innerHTML=h;
}

function toggleStrand(el){el.classList.toggle('collapsed');el.nextElementSibling.style.maxHeight=el.classList.contains('collapsed')?'0':'999px'}

// ═══════════ UNIT PLANS VIEW ═══════════
function showUnit(id){
  var unit=(typeof MYP_UNITS!=='undefined'?MYP_UNITS:[]).find(function(u){return u.id===id});
  if(!unit)return;
  document.getElementById('welcomePane').style.display='none';
  var tv=document.getElementById('topicView');tv.style.display='flex';
  document.querySelectorAll('.t-link').forEach(function(l){l.classList.remove('active')});
  var a=document.querySelector('.t-link[data-id="'+id+'"]');if(a)a.classList.add('active');
  var h='';
  h+='<div class="tv-hdr"><div class="code">'+unit.id+' — '+unit.year+' · '+unit.term+'</div><h2>'+unit.title+'</h2>';
  h+='<div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap"><span class="pill pill-blue">'+unit.totalLessons+' Lessons</span><span class="pill pill-green">'+unit.objectives+'</span><span class="pill pill-purple">'+unit.atlSkill+'</span></div></div>';
  h+=phaseOpen(1,'Plan','MYP framework','#1565C0');
  h+='<div class="sub-sec"><div class="sub-title"><span class="ico">💡</span> Key Concept</div><span class="pill pill-blue" style="font-size:13px;padding:5px 16px">'+unit.keyConcept+'</span>';
  if(unit.kcWhy)h+='<div class="why-box"><strong>Why?</strong><br>'+unit.kcWhy+'</div>';h+='</div>';
  h+='<div class="sub-sec"><div class="sub-title"><span class="ico">🔗</span> Related Concepts</div>';
  unit.relatedConcepts.forEach(function(c){h+='<span class="pill pill-purple">'+c+'</span>'});
  if(unit.rcWhy)h+='<div class="why-box rc"><strong>Why?</strong><br>'+unit.rcWhy+'</div>';h+='</div>';
  h+='<div class="sub-sec"><div class="sub-title"><span class="ico">🌍</span> Global Context</div><span class="pill pill-green" style="font-size:13px;padding:5px 16px">'+unit.globalContext+'</span>';
  if(unit.gcWhy)h+='<div class="why-box gc"><strong>Why?</strong><br>'+unit.gcWhy+'</div>';h+='</div>';
  h+='<div class="sub-sec"><div class="sub-title"><span class="ico">✨</span> Statement of Inquiry</div><div class="soi-box">'+unit.soi+'</div></div>';
  h+=phaseClose();
  h+=phaseOpen(2,'Inquiry','Driving questions','#7B2D8E');
  h+=iqGroup('Factual','#1565C0',unit.iq.f);h+=iqGroup('Conceptual','#7B2D8E',unit.iq.c);h+=iqGroup('Debatable','#E65100',unit.iq.d);
  h+=phaseClose();
  h+=phaseOpen(3,'Action',unit.totalLessons+' lessons','#2D6A4F');
  unit.lessons.forEach(function(les){h+=renderLesson(les)});
  h+=phaseClose();
  h+=phaseOpen(4,'Reflection','Teacher notes','#E65100');
  h+=reflPrompt('What prior knowledge do students have?','Consider prerequisites and diagnostic results.');
  h+=reflPrompt('What adjustments are needed for different learners?','Language support, extension, modified investigations.');
  h+=reflPrompt('What worked well? What to change next year?','Pacing, activities, assessments, resources.');
  h+=phaseClose();
  tv.innerHTML=h;tv.scrollTop=0;document.getElementById('mainPane').scrollTop=0;
}

function renderLesson(les){
  var pc={Engage:'#1565C0',Explore:'#2D6A4F',Explain:'#7B2D8E',Elaborate:'#E65100',Evaluate:'#C62828'}[les.phase]||'#666';
  var h='<div class="lesson-card collapsed" onclick="toggleLesson(event,this)">';
  h+='<div class="lesson-head"><div class="lesson-num" style="background:'+pc+'">'+les.num+'</div>';
  h+='<div class="lesson-head-info"><div class="lesson-head-title">'+les.topic+'</div><div class="lesson-head-sub">'+les.subtopics+'</div></div>';
  h+='<span class="phase-badge" style="background:'+pc+'">'+les.phase+'</span><span class="lesson-chv">▼</span></div>';
  h+='<div class="lesson-body">';
  h+='<div class="lesson-field"><div class="lf-label">🎯 Objective</div><div class="lf-content"><strong>'+les.objectives+'</strong></div></div>';
  h+='<div class="lesson-field"><div class="lf-label">❓ Inquiry</div><div class="lf-content" style="font-style:italic;color:var(--accent)">'+les.inquiry+'</div></div>';
  h+='<div class="lesson-field"><div class="lf-label">📚 Content</div><div class="lf-content">'+les.content+'</div></div>';
  if(les.activities&&les.activities.length){h+='<div class="lesson-field"><div class="lf-label">🎮 Activities</div><div class="lf-content"><ul>';les.activities.forEach(function(a){h+='<li>'+a+'</li>'});h+='</ul></div></div>'}
  if(les.experiment){var e=les.experiment;h+='<div class="lesson-field"><div class="lf-label">🔬 Experiment</div><div class="exp-box"><h4>'+e.title+'</h4><p><strong>Aim:</strong> '+e.aim+'</p><p><strong>Equipment:</strong> '+e.equipment.join(', ')+'</p><p><strong>Method:</strong></p><ol>';e.method.forEach(function(s){h+='<li>'+s+'</li>'});h+='</ol><p><strong>Safety:</strong> '+e.safety+'</p><p><strong>Expected Results:</strong> '+e.results+'</p><p><strong>Criterion:</strong> <span class="pill pill-green" style="font-size:10px">'+e.criterionLink+'</span></p></div></div>'}
  if(les.simulation){h+='<div class="lesson-field"><div class="lf-label">💻 Simulation</div><div class="sim-box"><h4>'+les.simulation.title+'</h4><p>'+les.simulation.desc+'</p></div></div>'}
  h+='<div class="lesson-grid"><div class="lesson-field"><div class="lf-label">📝 Assessment</div><div class="lf-content">'+les.formative+'</div></div>';
  if(les.differentiation){h+='<div class="lesson-field"><div class="lf-label">🔀 Differentiation</div><div class="diff-grid"><div class="diff-box support"><div class="diff-label">Support</div>'+les.differentiation.support+'</div><div class="diff-box extend"><div class="diff-label">Extend</div>'+les.differentiation.extend+'</div></div></div>'}
  h+='</div></div></div>';
  return h;
}
function toggleLesson(e,el){if(e.target.closest('.lesson-body'))return;el.classList.toggle('collapsed')}

// ═══════════ TOPIC REFERENCE VIEW ═══════════
function showTopic(id){
  var tp=MYP_PLANNER.topics.find(function(t){return t.id===id});if(!tp)return;
  var strand=MYP_PLANNER.strands.find(function(s){return s.code===tp.strand});
  document.getElementById('welcomePane').style.display='none';
  document.getElementById('topicView').style.display='flex';
  document.querySelectorAll('.t-link').forEach(function(l){l.classList.remove('active')});
  var a=document.querySelector('.t-link[data-id="'+id+'"]');if(a)a.classList.add('active');
  window._curTopic=tp;window._curStrand=strand;curYear='y1';renderTopic();
}
function switchGlobalYear(yr){curYear=yr;renderTopic()}
function renderTopic(){
  var tp=window._curTopic,strand=window._curStrand;if(!tp||!strand)return;
  var yr=curYear,yd=(tp.years&&tp.years[yr])||{},tv=document.getElementById('topicView'),h='';
  h+='<div class="tv-hdr"><div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px"><div><div class="code">'+tp.id+'</div><h2>'+tp.title+'</h2><span class="strand-tag" style="background:'+strand.color+'">'+strand.icon+' '+strand.name+'</span></div><div><div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text3);margin-bottom:4px">Year</div><div class="yr-tabs" style="margin:0">'+yrBtn('y1',yr)+yrBtn('y3',yr)+yrBtn('y5',yr)+'</div></div></div></div>';
  h+=phaseOpen(1,'Plan','Overview','#1565C0');
  if(yd.obj)h+='<div class="sub-sec"><div class="sub-title"><span class="ico">🎯</span> Objective — '+yrLabel(yr)+'</div><div class="yr-obj">'+yd.obj+'</div></div>';
  h+=phaseClose();
  h+=phaseOpen(2,'Inquiry','Framework','#7B2D8E');
  h+='<div class="sub-sec"><div class="sub-title"><span class="ico">💡</span> Key Concept</div><span class="pill pill-blue" style="font-size:13px;padding:5px 16px">'+tp.keyConcept+'</span>';if(tp.kcWhy)h+='<div class="why-box"><strong>Why?</strong><br>'+tp.kcWhy+'</div>';h+='</div>';
  h+='<div class="sub-sec"><div class="sub-title"><span class="ico">🔗</span> Related</div>';tp.relatedConcepts.forEach(function(c){h+='<span class="pill pill-purple">'+c+'</span>'});if(tp.rcWhy)h+='<div class="why-box rc"><strong>Why?</strong><br>'+tp.rcWhy+'</div>';h+='</div>';
  h+='<div class="sub-sec"><div class="sub-title"><span class="ico">🌍</span> Context</div><span class="pill pill-green" style="font-size:13px;padding:5px 16px">'+tp.globalContext+'</span>';if(tp.gcWhy)h+='<div class="why-box gc"><strong>Why?</strong><br>'+tp.gcWhy+'</div>';h+='</div>';
  h+='<div class="sub-sec"><div class="sub-title"><span class="ico">✨</span> SOI</div><div class="soi-box">'+tp.soi+'</div></div>';
  h+='<div class="sub-sec"><div class="sub-title"><span class="ico">❓</span> Questions</div>';h+=iqGroup('Factual','#1565C0',tp.iq.f);h+=iqGroup('Conceptual','#7B2D8E',tp.iq.c);h+=iqGroup('Debatable','#E65100',tp.iq.d);h+='</div>';
  if(yd.vocab&&yd.vocab.length){h+='<div class="sub-sec"><div class="sub-title"><span class="ico">📖</span> Vocabulary</div>';yd.vocab.forEach(function(v){h+='<span class="pill pill-teal">'+v+'</span>'});h+='</div>'}
  h+=phaseClose();
  h+=phaseOpen(3,'Action','Content','#2D6A4F');
  if(yd.content){h+='<div class="sub-sec"><div class="sub-title"><span class="ico">📚</span> Content</div><div class="yr-content">'+yd.content+'</div>';if(yd.activities&&yd.activities.length){h+='<div class="yr-act-title">Activities</div><ul class="yr-act-list">';yd.activities.forEach(function(a){h+='<li>'+a+'</li>'});h+='</ul>'}h+='</div>'}
  if(yd.formulas&&yd.formulas.length){h+='<div class="sub-sec"><div class="sub-title"><span class="ico">📐</span> Formulas</div><table class="f-table"><tr><th>Formula</th><th>Description</th></tr>';yd.formulas.forEach(function(f){h+='<tr><td>'+f.f+'</td><td>'+f.d+'</td></tr>'});h+='</table></div>'}
  if(yd.investigations&&yd.investigations.length){h+='<div class="sub-sec"><div class="sub-title"><span class="ico">🔬</span> Investigations</div>';yd.investigations.forEach(function(inv){h+='<div class="inv-card"><div class="inv-title">'+inv.title+' <span class="inv-crit">Crit '+inv.criteria+'</span></div><div class="inv-desc">'+inv.desc+'</div></div>'});h+='</div>'}
  if(yd.misconceptions&&yd.misconceptions.length){h+='<div class="sub-sec"><div class="sub-title"><span class="ico">⚠</span> Misconceptions</div>';yd.misconceptions.forEach(function(m){h+='<div class="misc-card"><div class="misc-w">'+m.w+'</div><div class="misc-r">'+m.r+'</div></div>'});h+='</div>'}
  if(yd.assessment){h+='<div class="sub-sec"><div class="sub-title"><span class="ico">📋</span> Assessment</div><div class="assess-grid"><div class="assess-card cA"><div class="a-label cA">Crit A</div><p>'+yd.assessment.A+'</p></div><div class="assess-card cB"><div class="a-label cB">Crit B</div><p>'+yd.assessment.B+'</p></div><div class="assess-card cC"><div class="a-label cC">Crit C</div><p>'+yd.assessment.C+'</p></div><div class="assess-card cD"><div class="a-label cD">Crit D</div><p>'+yd.assessment.D+'</p></div></div></div>'}
  h+=phaseClose();
  h+=phaseOpen(4,'Reflection','Links & notes','#E65100');
  h+='<div class="sub-sec"><div class="sub-title"><span class="ico">🔗</span> Cross-Links</div><div class="foot-box" style="background:var(--bg)"><ul>';tp.crossLinks.forEach(function(c){h+='<li>'+c+'</li>'});h+='</ul></div></div>';
  h+=reflPrompt('Prior knowledge?','');h+=reflPrompt('What to change next year?','');
  h+=phaseClose();
  tv.innerHTML=h;tv.scrollTop=0;document.getElementById('mainPane').scrollTop=0;
}

// ═══════════ HELPERS ═══════════
function yrBtn(yr,cur){return '<button class="yr-tab'+(yr===cur?' active':'')+'" onclick="switchGlobalYear(\''+yr+'\')">'+yrLabel(yr)+'</button>'}
function yrLabel(yr){return yr==='y1'?'Year 1':yr==='y3'?'Year 3':'Year 5'}
function iqGroup(l,c,items){var h='<div class="iq-group"><div class="iq-label"><span class="dot" style="background:'+c+'"></span>'+l+'</div><ul class="iq-list">';items.forEach(function(q){h+='<li>'+q+'</li>'});return h+'</ul></div>'}
function phaseOpen(n,t,s,c){return '<div class="phase"><div class="phase-hdr" onclick="togglePhase(this)" style="background:linear-gradient(135deg,'+c+'08,'+c+'03)"><div class="ph-title"><span class="ph-num" style="background:'+c+'">'+n+'</span>'+t+'<span class="ph-sub">'+s+'</span></div><span class="chv">▼</span></div><div class="phase-body" style="max-height:99999px">'}
function phaseClose(){return '</div></div>'}
function reflPrompt(q,hint){return '<div class="refl-prompt"><div class="rp-q">'+q+'</div>'+(hint?'<div class="rp-hint">'+hint+'</div>':'')+'<textarea class="refl-textarea" placeholder="Notes..."></textarea></div>'}
function togglePhase(el){el.classList.toggle('collapsed');var b=el.nextElementSibling;if(el.classList.contains('collapsed')){b.style.maxHeight='0';b.style.padding='0 20px'}else{b.style.maxHeight='99999px';b.style.padding='20px'}}
