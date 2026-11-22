/* ===== sims/fleming-rules.js =====
 Fleming's left- and right-hand rules, taught step by step with a hand you can turn round.
 World axes: x → right, y → up, z → out of the screen.
 Left hand (motor effect): first finger = field B, second finger = current I, thumb = force, along I × B.
 Right hand (generator): first finger = field B, thumb = motion v, second finger = induced current, along v × B. */
(function(){
'use strict';
const $q=(s,r=document)=>r.querySelector(s),$a=(s,r=document)=>[...r.querySelectorAll(s)];
const V={up:[0,1,0],down:[0,-1,0],left:[-1,0,0],right:[1,0,0],out:[0,0,1],in:[0,0,-1]};
const VN={up:'up ↑',down:'down ↓',left:'to the left ←',right:'to the right →',out:'out of the page ⊙',in:'into the page ⊗'};
const KEYS=Object.keys(V);
const X3=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const SC=(a,k)=>a.map(c=>c*k),AD=(a,b)=>a.map((c,i)=>c+b[i]);
const keyOf=v=>KEYS.find(k=>V[k].every((c,i)=>c===v[i]))||null;
const perp=F=>[[1,0,0],[0,1,0],[0,0,1]].filter(a=>!a.some((c,i)=>c&&F[i]));
let CL={};
function readCol(){const s=getComputedStyle(document.documentElement),g=(n,d)=>s.getPropertyValue(n).trim()||d;
 CL={ink:g('--ink','#1d1b18'),muted:g('--muted','#6f675b'),bg:g('--panel2','#f6f9fc'),F:g('--ep','#2f62b0'),C:g('--ek','#c8362f'),M:g('--ok','#13805f'),
  N:'#d64b3c',S:'#2f62b0',skin:'#f0c8a0',wire:g('--cu','#b87333')};}
readCol();

/* the three parts of the hand for a set-up */
function hand(S){const F=V[S.f],X=V[S.x],A=X3(X,F);
 return S.h==='L'?{first:F,second:X,thumb:A,ans:A,ansPart:'thumb',order:['first','second','thumb']}
  :{first:F,second:A,thumb:X,ans:A,ansPart:'second',order:['first','thumb','second']};}
const PART={L:{first:'First finger: Field',second:'seCond finger: Current',thumb:'thuMb: Motion (force)'},
 R:{first:'First finger: Field',second:'seCond finger: induced Current',thumb:'thuMb: Motion'}};

function proj(S,v){const cy=Math.cos(S.yaw),sy=Math.sin(S.yaw),cp=Math.cos(S.pitch),sp=Math.sin(S.pitch);
 const x=v[0]*cy+v[2]*sy,z=-v[0]*sy+v[2]*cy,y=v[1],y2=y*cp-z*sp,z2=y*sp+z*cp;
 return [S.cx+S.k*x,S.cy-S.k*y2,z2];}
function line(ctx,a,b,c,w,al=1){ctx.globalAlpha=al;ctx.strokeStyle=c;ctx.lineWidth=w;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);ctx.stroke();ctx.globalAlpha=1;}
function head(ctx,a,b,c,h,al=1){const t=Math.atan2(b[1]-a[1],b[0]-a[0]);ctx.globalAlpha=al;ctx.fillStyle=c;ctx.beginPath();
 ctx.moveTo(b[0]+Math.cos(t)*h*.7,b[1]+Math.sin(t)*h*.7);ctx.lineTo(b[0]+Math.cos(t+2.45)*h,b[1]+Math.sin(t+2.45)*h);ctx.lineTo(b[0]+Math.cos(t-2.45)*h,b[1]+Math.sin(t-2.45)*h);ctx.closePath();ctx.fill();ctx.globalAlpha=1;}
function label(ctx,t,x,y,c,sz=15,al='center'){ctx.font=`700 ${sz}px "Times New Roman",Times,serif`;ctx.textAlign=al;ctx.lineJoin='round';ctx.lineWidth=4;ctx.strokeStyle=CL.bg;ctx.strokeText(t,x,y);ctx.fillStyle=c;ctx.fillText(t,x,y);}

function draw(S,t){const cv=S.cv,dpr=window.devicePixelRatio||1,w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return;
 if(cv.width!==Math.round(w*dpr)||cv.height!==Math.round(h*dpr)){cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);}
 const ctx=cv.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
 S.cx=w/2;S.cy=h/2+8;S.k=Math.min(w,h)/(S.small?6.6:7);
 const H=hand(S),F=V[S.f],X=V[S.x],par=!H.ans.some(c=>c),P=p=>proj(S,p);
 H.order.forEach((p,i)=>{const tg=S.step>i&&!(par&&i===2)?1:0;S.g[p]=S.g[p]==null?tg:S.g[p]+(tg-S.g[p])*.14;});
 /* the wire moves: always along the motion for a generator, along the force once it is found for a motor */
 const saw=((t*.45)%1)*.6-.3;let off=[0,0,0];
 if(S.h==='R'&&!par)off=SC(X,saw);else if(S.h==='L'&&S.step>=3&&!par)off=SC(H.ans,saw+.3);
 /* magnet poles and field lines (N → S) */
 const [u,v2]=perp(F);
 const pole=(c0,col,tx)=>{const cs=[[1,1],[1,-1],[-1,-1],[-1,1]].map(([a,b])=>P(AD(c0,AD(SC(u,a*1.25),SC(v2,b*1.25)))));
  ctx.globalAlpha=.2;ctx.fillStyle=col;ctx.beginPath();cs.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.closePath();ctx.fill();
  ctx.globalAlpha=.75;ctx.strokeStyle=col;ctx.lineWidth=2;ctx.stroke();ctx.globalAlpha=1;const c=P(c0);label(ctx,tx,c[0],c[1]+8,col,24);};
 pole(SC(F,-2.7),CL.N,'N');
 for(const a of [-.85,0,.85])for(const b of [-.85,0,.85]){const o=AD(SC(u,a),SC(v2,b));line(ctx,P(AD(o,SC(F,-2.5))),P(AD(o,SC(F,2.5))),CL.F,1.4,.35);head(ctx,P(AD(o,SC(F,1))),P(AD(o,SC(F,1.3))),CL.F,8,.55);}
 pole(SC(F,2.7),CL.S,'S');
 /* the wire */
 const wa=S.h==='L'?X:(par?u:H.ans),w1=P(AD(off,SC(wa,-2.3))),w2=P(AD(off,SC(wa,2.3)));
 line(ctx,w1,w2,CL.wire,8);line(ctx,w1,w2,'rgba(255,255,255,.4)',2);
 const iDir=S.h==='L'?X:H.ans;
 if(S.h==='L'||(S.g.second>.6&&!par)){[-1.6,1.4].forEach(s0=>head(ctx,P(AD(off,SC(iDir,s0-.3))),P(AD(off,SC(iDir,s0+.1))),CL.C,13));
  const lp=P(AD(off,SC(iDir,2.6)));label(ctx,S.h==='L'?'current I':'induced current',lp[0],lp[1],CL.C,14);}
 if(S.h==='R'&&!par){const a=P(AD(off,SC(wa,-2.3))),b=P(AD(AD(off,SC(wa,-2.3)),SC(X,1.1)));line(ctx,a,b,CL.M,4,.8);head(ctx,a,b,CL.M,13,.8);label(ctx,'wire moved',b[0],b[1]-10,CL.M,14);}
 if(S.h==='L'&&S.g.thumb>.6){const a=P(AD(off,SC(wa,2.3))),b=P(AD(AD(off,SC(wa,2.3)),SC(H.ans,1.1)));line(ctx,a,b,CL.M,5);head(ctx,a,b,CL.M,15);label(ctx,'force F',b[0],b[1]-10,CL.M,14);}
 /* the hand: palm plus three fingers, drawn far to near */
 const items=[{z:0,palm:1}];['first','second','thumb'].forEach(p=>{if((S.g[p]||0)>.02)items.push({p,z:P(H[p])[2]-P([0,0,0])[2]});});
 items.sort((a,b)=>a.z-b.z).forEach(it=>{const o=P(off);
  if(it.palm){ctx.fillStyle=CL.skin;ctx.strokeStyle='#b07a50';ctx.lineWidth=2;ctx.beginPath();ctx.arc(o[0],o[1],S.small?14:19,0,6.283);ctx.fill();ctx.stroke();return;}
  const p=it.p,g=S.g[p],d=H[p],col=p==='first'?CL.F:p==='second'?CL.C:CL.M,L=1.7*g,tip=P(AD(off,SC(d,L))),tip2=P(AD(off,SC(d,L+.28)));
  line(ctx,o,tip,col,S.small?17:23);line(ctx,o,tip,CL.skin,S.small?11:16);head(ctx,tip,tip2,col,S.small?11:15);
  if(g>.7){const lp=P(AD(off,SC(d,L+.75)));label(ctx,PART[S.h][p],lp[0],lp[1]+5,col,S.small?13:15);}});
 label(ctx,S.h==='L'?'LEFT hand · motor effect':'RIGHT hand · generator effect',12,22,CL.ink,S.small?14:16,'left');
 if(par&&S.step>=2)label(ctx,S.h==='L'?'Current parallel to the field: NO force':'Moving along the field lines: NO induced current',w/2,h-14,CL.C,15);
 else if(!S.small)label(ctx,'⊙ = out of the page (towards you) · ⊗ = into the page · drag to turn',w/2,h-12,CL.muted,13);}

const SCENES=[];let fr=0;
function loop(ts){if(fr++%30===0)readCol();const t=ts/1000;SCENES.forEach(S=>{if(S.cv.offsetParent!==null)draw(S,t);});requestAnimationFrame(loop);}
function scene(cv,o){const S=Object.assign({cv,h:'L',f:'right',x:'out',step:3,yaw:-.55,pitch:.38,g:{},small:false},o);
 let d=null;cv.style.cursor='grab';cv.style.touchAction='none';
 cv.addEventListener('pointerdown',e=>{d=[e.clientX,e.clientY,S.yaw,S.pitch];cv.setPointerCapture(e.pointerId);cv.style.cursor='grabbing';});
 cv.addEventListener('pointermove',e=>{if(!d)return;S.yaw=d[2]+(e.clientX-d[0])*.01;S.pitch=Math.max(-1.3,Math.min(1.3,d[3]+(e.clientY-d[1])*.01));});
 const up=()=>{d=null;cv.style.cursor='grab';};cv.addEventListener('pointerup',up);cv.addEventListener('pointercancel',up);
 SCENES.push(S);return S;}
function statics(root){$a('canvas.flStatic',root).forEach(cv=>{if(cv._fl)return;cv._fl=1;const [h,f,x]=cv.dataset.cfg.split(',');scene(cv,{h,f,x,small:true});});}
const fig=(cfg,cap,ht=300)=>`<figure class="fig" style="margin:0"><div class="cv" style="height:${ht}px"><canvas class="flStatic" data-cfg="${cfg}"></canvas></div><figcaption>${cap}</figcaption></figure>`;

/* ---------- ✋ Hand rules tab: step-by-step simulation ---------- */
const STEPS={L:['① First finger → Field','② seCond finger → Current','③ thuMb → Force'],R:['① First finger → Field','② thuMb → Motion','③ seCond finger → induced Current']};
const PRESETS={L:[['dc motor, side A (⊙)','right','out',''],['dc motor, side B (⊗)','right','in',''],['electron beam → in a field ⊗','in','left','The electrons move to the right, but they are negative, so the <b>conventional current</b> is to the <b>left</b>. Always point the second finger along conventional current. '],['wire along the field','right','right','']],
 R:[['wire pushed down','right','down',''],['generator side moving up','right','up',''],['magnet field up, wire moved right','up','right',''],['wire moved along the field','right','right','']]};
function buildRules(){const root=$q('#s-magnet-rules');if(!root||$q('#flCard'))return;
 root.insertAdjacentHTML('afterbegin',`<div class="card" id="flCard" style="margin-bottom:18px">
 <div class="row" style="margin-top:0;justify-content:space-between"><h3 style="margin:0">✋ How to use Fleming’s rules, step by step</h3>
 <div class="seg" id="flHand" style="min-width:380px"><button data-fh="L" class="on">Left hand · motor effect</button><button data-fh="R">Right hand · generator</button></div></div>
 <p class="lead" id="flLead" style="margin:6px 0 10px"></p>
 <div class="grid2"><div>
  <div class="cv" style="height:clamp(360px,54vh,500px)"><canvas id="flCv"></canvas></div>
  <div class="row" id="flSteps"><button class="btn" data-st="1"></button><button class="btn" data-st="2"></button><button class="btn" data-st="3"></button><button class="btn pri" data-st="play">▶ Play all steps</button><button class="btn sm" data-st="0">↺ Start again</button><button class="btn sm" data-st="view">Reset view</button></div>
  <p class="status">Hold up your own hand and copy each step. Drag the picture to look at it from another side.</p></div>
 <div class="stack"><div class="card"><h4>Magnetic field (N → S)</h4><div class="row" id="flF" style="margin-top:0"></div>
  <h4 style="margin-top:12px" id="flXl"></h4><div class="row" id="flX" style="margin-top:0"></div>
  <div class="row"><button class="btn sm" id="flRand">🎲 Random set-up</button><label style="display:flex;gap:6px;align-items:center;font-size:15px"><input type="checkbox" id="flPred" checked> Predict before step ③</label></div>
  <h4 style="margin-top:12px">Real examples</h4><div class="row" id="flPre" style="margin-top:0"></div></div>
  <div class="card"><h4>What to do now</h4><div class="explain" id="flEx"></div><div id="flGuess"></div><div class="fb" id="flFb"></div><p class="status" id="flSc"></p></div></div></div></div>
 <div class="gridH" style="margin-bottom:18px"><div class="card"><h4>Left hand or right hand?</h4><table><thead><tr><th></th><th>Left hand</th><th>Right hand</th></tr></thead><tbody>
  <tr><td><b>Effect</b></td><td>Motor effect: a current in a field feels a force</td><td>Generator effect: a wire moving through a field has a current induced in it</td></tr>
  <tr><td><b>You know</b></td><td>field + current</td><td>field + motion</td></tr><tr><td><b>You find</b></td><td>force (thumb)</td><td>induced current (second finger)</td></tr>
  <tr><td><b>Used in</b></td><td>dc motor, loudspeaker, moving-coil meter</td><td>ac generator, dynamo, moving-coil microphone</td></tr></tbody></table>
  <p class="status">Memory aid: <b>L</b>eft = motor, <b>R</b>ight = gene<b>R</b>ator. Thumb, first, second = <b>F B I</b> (Force, B-field, current I).</p></div>
 <div class="card"><h4>Common mistakes</h4><ul style="padding-left:20px;font-size:15.5px;line-height:1.7"><li>Using the wrong hand: check the effect first.</li><li>Pointing the first finger from S to N. The field goes <b>N → S</b>.</li><li>Following the electrons. The second finger shows <b>conventional current</b> (+ → −), opposite to electron flow.</li><li>Fingers not at 90° to each other.</li><li>Using the rule when the wire is <b>parallel</b> to the field: there is no force and no induced current.</li></ul></div></div>
 <h3 style="font-size:24px;margin:4px 0 10px">🎯 Now test yourself: random set-ups</h3>`);
 const S=scene($q('#flCv'),{step:0});let timers=[],score=0,tries=0,guessed=false,note='';
 const clearT=()=>{timers.forEach(clearTimeout);timers=[];};
 const H=()=>hand(S),par=()=>!H().ans.some(c=>c);
 function chips(){$q('#flF').innerHTML=KEYS.map(k=>`<button class="chip${S.f===k?' on':''}" data-ff="${k}">${VN[k]}</button>`).join('');
  $q('#flX').innerHTML=KEYS.map(k=>`<button class="chip${S.x===k?' on':''}" data-fx="${k}">${VN[k]}</button>`).join('');
  $q('#flPre').innerHTML=PRESETS[S.h].map((p,i)=>`<button class="chip" data-fp="${i}">${p[0]}</button>`).join('');}
 function text(){const L=S.h==='L',h=H(),a=keyOf(h.ans),p=par();
  $a('#flSteps [data-st]').forEach(b=>{const n=+b.dataset.st;if(n>=1&&n<=3){b.textContent=STEPS[S.h][n-1];b.classList.toggle('pri',S.step===n-1&&!(n===3&&p&&S.step>=2));}});
  $q('#flXl').textContent=L?'Current (conventional, + → −)':'Motion of the wire';
  $q('#flLead').innerHTML=L?'A wire carrying a current sits in a magnetic field. Which way is it pushed? Use your <b>left</b> hand.':'A wire is moved through a magnetic field. Which way does the induced current flow? Use your <b>right</b> hand.';
  const ex=[`Choose a field and a ${L?'current':'motion'} (or pick a real example), then press <b>①</b>. Hold up your own <b>${L?'LEFT':'RIGHT'}</b> hand and stretch the thumb, first finger and second finger so they are all at right angles. Fold the other two fingers away.`,
   `Point your <b>First finger</b> along the <b>Field</b>: ${VN[S.f]}. The field always goes from N to S.`,
   L?`Keep your first finger there. Turn your wrist until your <b>seCond finger</b> points along the <b>Current</b>: ${VN[S.x]}.`:`Keep your first finger there. Turn your wrist until your <b>thuMb</b> points along the <b>Motion</b> of the wire: ${VN[S.x]}.`,
   L?`Your <b>thuMb</b> now points <b>${VN[a]}</b>. That is the direction of the <b>force</b>, so the wire is pushed ${VN[a]}.`:`Your <b>seCond finger</b> now points <b>${VN[a]}</b>. That is the direction of the <b>induced current</b> in the wire (if the circuit is complete).`];
  let s=ex[Math.min(S.step,3)];
  if(p&&S.step>=2)s=L?`The current is <b>parallel</b> to the field. Your first and second fingers point the same way, so they cannot be at right angles. There is <b>no force</b> on the wire.`:`The wire moves <b>along</b> the field lines, so it does not cut any. <b>No emf is induced</b> and there is no current.`;
  $q('#flEx').innerHTML=(S.step===0&&note?note:'')+s;$q('#flSc').textContent=tries?`Predictions: ${score} / ${tries} correct`:'';}
 function guessUI(){const L=S.h==='L';guessed=false;$q('#flGuess').innerHTML=`<p style="margin-top:10px;font-weight:700">Predict: which way will your ${L?'thumb (force)':'second finger (induced current)'} point?</p>
  <div class="gopts" style="grid-template-columns:repeat(2,1fr);margin-top:6px">${KEYS.map(k=>`<button data-fg="${k}">${VN[k]}</button>`).join('')}<button data-fg="none" style="grid-column:1/-1">${L?'no force':'no current'}</button></div>`;}
 function go(n){clearT();$q('#flFb').className='fb';
  if(n===3&&$q('#flPred').checked&&!guessed){S.step=2;text();guessUI();return;}
  S.step=n;if(n<3)$q('#flGuess').innerHTML='';text();}
 function reset(){clearT();S.step=0;S.g={};guessed=false;$q('#flGuess').innerHTML='';$q('#flFb').className='fb';chips();text();}
 const root2=$q('#flCard');
 root2.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const d=b.dataset;
  if(d.fh){S.h=d.fh;$a('[data-fh]').forEach(x=>x.classList.toggle('on',x===b));note='';reset();return;}
  if(d.ff){S.f=d.ff;note='';reset();return;}if(d.fx){S.x=d.fx;note='';reset();return;}
  if(d.fp!=null){const p=PRESETS[S.h][+d.fp];S.f=p[1];S.x=p[2];note=p[3];reset();return;}
  if(d.fg){const a=keyOf(H().ans)||'none',ok=d.fg===a;guessed=true;tries++;if(ok)score++;
   $a('[data-fg]').forEach(x=>{x.disabled=true;if(x.dataset.fg===a)x.classList.add('right');else if(x===b)x.classList.add('wrong');});
   const f=$q('#flFb');f.className='fb '+(ok?'ok':'no');f.innerHTML=ok?'✔ Correct! Watch the hand confirm it.':`✘ Not quite: it is <b>${a==='none'?(S.h==='L'?'no force':'no current'):VN[a]}</b>. Follow the hand to see why.`;
   S.step=3;text();return;}
  if(d.st==='view'){S.yaw=-.55;S.pitch=.38;return;}
  if(d.st==='play'){reset();go(1);timers.push(setTimeout(()=>go(2),1700),setTimeout(()=>go(3),3400));return;}
  if(d.st!=null){const n=+d.st;if(n===0)reset();else go(n);return;}
  if(b.id==='flRand'){S.f=KEYS[Math.floor(Math.random()*6)];const ok=KEYS.filter(k=>!V[k].some((c,i)=>c&&V[S.f][i]));S.x=ok[Math.floor(Math.random()*ok.length)];note='';reset();}});
 reset();}

/* ---------- notes and the motor / induction / generator tabs ---------- */
const go=(s,t)=>`<a href="#" data-flgo="${s}">${t}</a>`;
function buildNotes(){const m4=$q('#s-magnet-notes #m4'),m6=$q('#s-magnet-notes #m6');if(!m4||$q('#flN4'))return;
 const k4=[...m4.querySelectorAll('.box.key')].find(b=>/left-hand/i.test(b.textContent)),a4=k4&&k4.closest('.gridH')||k4;
 const n4=`<div id="flN4"><h3 style="font-size:24px;margin:18px 0 6px">How to use the left-hand rule</h3>
 <div class="gridH">${fig('L,right,out','Left hand: field to the right, current ⊙ out of the page, so the force is upwards. Drag to turn it.')}
 <div><ol><li>Use your <b>left</b> hand. Stretch the thumb, first finger and second finger so that each is at <b>90°</b> to the other two.</li>
 <li>Point the <b>First finger</b> along the <b>Field</b>, from N to S.</li><li>Keeping it there, turn your wrist until the <b>seCond finger</b> points along the <b>Current</b> (conventional, + to −).</li>
 <li>The <b>thuMb</b> now points in the direction of the <b>force</b> (the Motion).</li></ol>
 <div class="box tip"><span class="t">Memory aid</span>Thumb, first finger, second finger = <b>F B I</b>: <b>F</b>orce, <b>B</b> (magnetic field), <b>I</b> (current).</div></div></div>
 <div class="worked"><div class="wh"><b>Example 4.1</b>A wire between a N pole (left) and a S pole (right) carries a current into the page (⊗). <span class="cmd">State</span> the direction of the force on the wire.</div>
 <p>First finger → <b>right</b> (N to S). Second finger → <b>into the page</b>. Thumb → <b>down</b>. In a dc motor, the side carrying ⊙ is pushed up and the side carrying ⊗ is pushed down, so the coil turns.</p></div>
 <div class="worked"><div class="wh"><b>Example 4.2</b>A beam of electrons travels to the right through a magnetic field directed into the page. <span class="cmd">Determine</span> which way the beam bends.</div>
 <p>Electrons are negative, so the <b>conventional current</b> is to the <b>left</b>. First finger → into the page, second finger → left, thumb → <b>down</b>. The beam curves downwards.</p></div>
 <table><thead><tr><th>Change</th><th>Effect on the force</th></tr></thead><tbody><tr><td>Reverse the current</td><td>Force reverses</td></tr><tr><td>Reverse the field (swap the poles)</td><td>Force reverses</td></tr><tr><td>Reverse both</td><td>Force is in the <b>same</b> direction as before</td></tr><tr><td>Wire parallel to the field</td><td><b>No</b> force</td></tr></tbody></table>
 <div class="box warn"><span class="t">Common mistakes</span>Using the right hand for a motor · pointing the first finger from S to N · following electron flow instead of conventional current · fingers not at right angles.</div></div>`;
 if(a4)a4.insertAdjacentHTML('afterend',n4);
 const k6=m6&&[...m6.querySelectorAll('.box.key')].find(b=>/right-hand/i.test(b.textContent));
 const n6=`<div id="flN6"><h3 style="font-size:24px;margin:18px 0 6px">How to use the right-hand rule</h3>
 <div class="gridH">${fig('R,right,up','Right hand: field to the right, wire moved up, so the induced current flows ⊗ into the page.')}
 <div><ol><li>Use your <b>right</b> hand, with the thumb, first finger and second finger at <b>90°</b> to each other.</li>
 <li>Point the <b>First finger</b> along the <b>Field</b> (N to S).</li><li>Turn your wrist until the <b>thuMb</b> points along the <b>Motion</b> of the wire.</li>
 <li>The <b>seCond finger</b> shows the direction of the induced <b>Current</b> (conventional).</li></ol>
 <div class="box tip"><span class="t">Which hand?</span><b>L</b>eft = motor (current in → force out). <b>R</b>ight = gene<b>R</b>ator (motion in → current out).</div></div></div>
 <div class="worked"><div class="wh"><b>Example 6.1</b>A wire is pushed <b>down</b> between a N pole (left) and a S pole (right). <span class="cmd">Determine</span> the direction of the induced current.</div>
 <p>First finger → <b>right</b>. Thumb → <b>down</b>. Second finger → <b>out of the page</b> (⊙).</p>
 <p><b>Check with Lenz’s law:</b> now use the <b>left</b>-hand rule on this induced current (field right, current ⊙). The force is <b>up</b>, which opposes the downward push. The induced current always opposes the motion that causes it.</p></div>
 <div class="box warn"><span class="t">Remember</span>A wire moving <b>along</b> the field lines cuts none of them, so no current is induced. Reversing the motion <b>or</b> the field reverses the induced current.</div></div>`;
 if(k6)k6.insertAdjacentHTML('afterend',n6);
 statics($q('#s-magnet-notes'));}
function card(id,cfg,cap,h,body){const r=$q(id);if(!r||$q(id+' .flTabCard'))return;
 r.insertAdjacentHTML('beforeend',`<div class="card flTabCard" style="margin-top:18px"><div class="gridH">${fig(cfg,cap,270)}<div><h3>${h}</h3>${body}</div></div></div>`);statics(r);}
function buildTabs(){
 card('#s-magnet-motor','L,right,out','Side A of the coil: field →, current ⊙, force ↑','✋ Why does the coil turn? The left-hand rule',
  `<p>Field: N (left) → S (right). On side <b>A</b> the current comes <b>out of</b> the page: first finger right, second finger out, thumb <b>up</b>. On side <b>B</b> the current goes <b>into</b> the page, so the thumb points <b>down</b>.</p><p>One side is pushed up and the other down, so the coil turns. After half a turn the commutator reverses the current, so the forces keep turning the coil the same way.</p><p>${go('rules','✋ Practise the steps in Hand rules →')}</p>`);
 card('#s-magnet-induct','R,right,up','Field →, wire moved ↑, induced current ⊗','✋ Which way is the induced current? The right-hand rule',
  `<p>First finger along the <b>field</b>, thumb along the <b>motion</b>: the second finger gives the induced <b>current</b>. Here the wire moves up through a field to the right, so the current flows into the page.</p><p>Move the wire the other way, or swap the poles, and the current reverses. Move it along the field lines and there is no current.</p><p>${go('rules','✋ Practise the steps in Hand rules →')}</p>`);
 card('#s-magnet-gen','R,right,up','A coil side moving up through the field: current ⊗','✋ Why is the output alternating? The right-hand rule',
  `<p>As the coil rotates, each side moves <b>up</b> through the field for half a turn and <b>down</b> for the next half. The right-hand rule shows the induced current is ⊗ when the side moves up and ⊙ when it moves down.</p><p>So the current reverses every half turn: <b>alternating current</b>. It is largest when the side moves at 90° to the field (coil parallel to the field) and zero when the side moves along the field.</p><p>${go('rules','✋ Practise the steps in Hand rules →')}</p>`);}
document.addEventListener('click',e=>{const a=e.target.closest('[data-flgo]');if(!a)return;e.preventDefault();
 if(typeof goSub==='function')goSub('magnet',a.dataset.flgo);const r=$q('#s-magnet-'+a.dataset.flgo);if(r)r.scrollIntoView({behavior:'smooth',block:'start'});});
let tries=0;
function init(){if(!$q('#s-magnet-notes #m4')&&tries++<40){setTimeout(init,250);return;}
 try{buildNotes();}catch(e){console.error('Fleming notes',e);}try{buildRules();}catch(e){console.error('Fleming rules',e);}try{buildTabs();}catch(e){console.error('Fleming tabs',e);}
 requestAnimationFrame(loop);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
