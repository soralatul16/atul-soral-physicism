/* ==========================================================================
   asp-papers.js · keeps mark schemes and answers away from students
   --------------------------------------------------------------------------
   Students used to download the whole question bank (with mark schemes) to
   attempt an assignment. Now:

   TEACHER (dp-teacher-assignments.html)
   - Whenever an assignment is created or edited, its questions are copied to
       <programme>Assignments/{assignmentId}/paper/{questionId}
     with the secret fields removed (mark scheme, correct option, etc).
   - When a submission is released, the secret fields for that assignment are
     attached to the submission as  markKeys , so feedback can show them.
   - On every visit it quietly brings all papers and released submissions
     up to date (only rewrites what changed).

   STUDENT (dp-student-dashboard.html)
   - aspLoadPaper(assignmentId, submission) returns the paper, plus the
     answers only if the submission has been released.
   ========================================================================== */
(function () {
  'use strict';
  var TEACHER_UID = 'dkc2ZtpolTTQ6kFvtJtYeStRuhf1';
  var SECRET = ['markScheme', 'markscheme', 'ms', 'correct', 'answer', 'answers', 'explanation', 'solution',
                'workedSolution', 'modelAnswer', 'sampleAnswer', 'exemplar', 'rubric', 'markBands', 'notes', 'teacherNotes'];
  var PROGS = [
    { asg: 'dpAssignments',   sub: 'dpSubmissions',   q: 'dpQuestions' },
    { asg: 'mypAssignments',  sub: 'mypSubmissions',  q: 'mypQuestions' },
    { asg: 'igAssignments',   sub: 'igSubmissions',   q: 'igQuestions' }
  ];
  function progBy(key, name) { for (var i = 0; i < PROGS.length; i++) if (PROGS[i][key] === name) return PROGS[i]; return null; }
  function fs() { return firebase.firestore(); }

  function split(data) {
    var pub = {}, key = {}, k;
    for (k in data) if (Object.prototype.hasOwnProperty.call(data, k)) {
      if (SECRET.indexOf(k) > -1) { if (data[k] !== undefined && data[k] !== null && data[k] !== '') key[k] = data[k]; }
      else pub[k] = data[k];
    }
    return { pub: pub, key: key };
  }
  function hash(s) { var h = 5381; for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36) + '.' + s.length; }

  /* Which question docs belong to an assignment (same rules the student page uses) */
  function partsFor(asgn, questionDocs) {
    var ids = asgn.orderedQuestionGroups && asgn.orderedQuestionGroups.length ? asgn.orderedQuestionGroups : (asgn.questionIds || []);
    var want = {}; ids.forEach(function (g) { want[g] = 1; });
    var excluded = asgn.excludedQuestionIds || [];
    return questionDocs.filter(function (d) {
      var gid = d.data.questionGroup || d.id;
      return want[gid] && excluded.indexOf(d.id) === -1;
    });
  }

  /* ---------------- STUDENT ---------------- */
  window.aspLoadPaper = function (assignmentId, submission) {
    var asgCol = (typeof col === 'function') ? col('dpAssignments') : 'dpAssignments';
    var qCol = (typeof col === 'function') ? col('dpQuestions') : 'dpQuestions';
    var db = fs();
    return db.collection(asgCol).doc(assignmentId).collection('paper').get().then(function (snap) {
      if (snap.empty) {
        // Paper not published yet: try the old way (works only until the rules are tightened)
        return db.collection(qCol).get().catch(function () {
          throw new Error('Your teacher is still preparing this assignment. Please try again in a few minutes.');
        });
      }
      var keys = (submission && submission.status === 'released' && submission.markKeys) || {};
      var docs = [];
      snap.forEach(function (d) {
        var data = Object.assign({}, d.data(), keys[d.id] || {});
        docs.push({ id: d.id, data: function () { return data; } });
      });
      return { empty: false, size: docs.length, docs: docs, forEach: function (cb) { docs.forEach(cb); } };
    });
  };

  /* ---------------- TEACHER ---------------- */
  var qCache = {};
  function loadQuestions(qCol, fresh) {
    if (!fresh && qCache[qCol]) return Promise.resolve(qCache[qCol]);
    return fs().collection(qCol).get().then(function (snap) {
      var list = []; snap.forEach(function (d) { list.push({ id: d.id, data: d.data() }); });
      qCache[qCol] = list; return list;
    });
  }

  function publishPaper(p, asgnId, asgn, questionDocs) {
    var db = fs();
    var parts = partsFor(asgn, questionDocs);
    var pubs = parts.map(function (d) { return { id: d.id, pub: split(d.data).pub }; });
    var sig = hash(JSON.stringify(pubs));
    if (asgn.paperSig === sig) return Promise.resolve(0);
    var paperRef = db.collection(p.asg).doc(asgnId).collection('paper');
    return paperRef.get().then(function (old) {
      var keep = {}; pubs.forEach(function (x) { keep[x.id] = 1; });
      var ops = [];
      old.forEach(function (d) { if (!keep[d.id]) ops.push(['del', paperRef.doc(d.id)]); });
      pubs.forEach(function (x) { ops.push(['set', paperRef.doc(x.id), x.pub]); });
      var chain = Promise.resolve();
      for (var i = 0; i < ops.length; i += 400) {
        (function (chunk) {
          chain = chain.then(function () {
            var b = db.batch();
            chunk.forEach(function (o) { if (o[0] === 'del') b.delete(o[1]); else b.set(o[1], o[2]); });
            return b.commit();
          });
        })(ops.slice(i, i + 400));
      }
      return chain.then(function () {
        return _update.call(db.collection(p.asg).doc(asgnId), { paperSig: sig, paperPublishedAt: firebase.firestore.FieldValue.serverTimestamp() });
      }).then(function () { return 1; });
    });
  }

  function keysFor(asgn, questionDocs) {
    var out = {};
    partsFor(asgn, questionDocs).forEach(function (d) {
      var k = split(d.data).key;
      if (Object.keys(k).length) out[d.id] = k;
    });
    return out;
  }

  function attachKeys(p, subId, fresh) {
    var db = fs();
    var subRef = db.collection(p.sub).doc(subId);
    return subRef.get().then(function (s) {
      var sub = s.data(); if (!sub || !sub.assignmentId) return 0;
      return Promise.all([db.collection(p.asg).doc(sub.assignmentId).get(), loadQuestions(p.q, fresh)]).then(function (r) {
        var asgn = r[0].data(); if (!asgn) return 0;
        return _update.call(subRef, { markKeys: keysFor(asgn, r[1]) }).then(function () { return 1; });
      });
    });
  }

  function syncProgramme(p) {
    var db = fs(), papers = 0, keys = 0;
    return Promise.all([loadQuestions(p.q, true), db.collection(p.asg).get(), db.collection(p.sub).where('status', '==', 'released').get()])
      .then(function (r) {
        var qs = r[0], asgns = {}, jobs = [];
        r[1].forEach(function (d) {
          var a = d.data(); asgns[d.id] = a;
          jobs.push(publishPaper(p, d.id, a, qs).then(function (n) { papers += n; }));
        });
        r[2].forEach(function (d) {
          var s = d.data(), a = asgns[s.assignmentId];
          if (!a) return;
          var k = keysFor(a, qs);
          if (JSON.stringify(k) === JSON.stringify(s.markKeys || {})) return;
          jobs.push(_update.call(db.collection(p.sub).doc(d.id), { markKeys: k }).then(function () { keys++; }));
        });
        return Promise.all(jobs);
      })
      .then(function () { return { papers: papers, keys: keys }; })
      .catch(function (e) { console.warn('[papers] ' + p.asg + ':', e.message); return { papers: 0, keys: 0, error: e.message }; });
  }

  function toast(msg, bad) {
    var t = document.getElementById('aspPapersToast');
    if (!t) {
      t = document.createElement('div'); t.id = 'aspPapersToast';
      t.style.cssText = 'position:fixed;left:16px;bottom:16px;z-index:99999;max-width:360px;padding:10px 14px;border-radius:12px;font:600 13px/1.4 system-ui,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.15);transition:opacity .4s';
      document.body.appendChild(t);
    }
    t.style.background = bad ? '#FEE2E2' : '#E0F7FA'; t.style.color = bad ? '#991B1B' : '#0B7285';
    t.textContent = msg; t.style.opacity = 1;
    clearTimeout(t._h); t._h = setTimeout(function () { t.style.opacity = 0; }, 6000);
  }

  /* Hook writes made by the teacher page so papers and keys update straight away */
  var _add, _update, _set;
  function installHooks() {
    var F = firebase.firestore;
    if (!F || !F.CollectionReference || !F.DocumentReference) return false;
    _add = F.CollectionReference.prototype.add;
    _update = F.DocumentReference.prototype.update;
    _set = F.DocumentReference.prototype.set;

    F.CollectionReference.prototype.add = function (data) {
      var p = progBy('asg', this.id);
      var res = _add.apply(this, arguments);
      if (p) res.then(function (ref) { afterAssignmentWrite(p, ref.id); });
      return res;
    };
    function wrapDoc(orig) {
      return function (data) {
        var ref = this, parentId = ref.parent && ref.parent.id;
        var res = orig.apply(ref, arguments);
        var pa = progBy('asg', parentId), ps = progBy('sub', parentId);
        if (pa) res.then(function () { afterAssignmentWrite(pa, ref.id); });
        if (ps && data && data.status === 'released') res.then(function () {
          attachKeys(ps, ref.id, false).catch(function (e) { toast('Could not attach the mark scheme: ' + e.message, true); });
        });
        return res;
      };
    }
    F.DocumentReference.prototype.update = wrapDoc(_update);
    F.DocumentReference.prototype.set = wrapDoc(_set);
    return true;
  }
  function afterAssignmentWrite(p, id) {
    var db = fs();
    Promise.all([db.collection(p.asg).doc(id).get(), loadQuestions(p.q, true)]).then(function (r) {
      if (!r[0].exists) return;
      return publishPaper(p, id, r[0].data(), r[1]);
    }).catch(function (e) { toast('Could not publish the student paper: ' + e.message, true); });
  }

  function startTeacher() {
    if (!installHooks()) { _update = function (d) { return this.update(d); }; }
    var ran = false;
    firebase.auth().onAuthStateChanged(function (u) {
      if (!u || u.uid !== TEACHER_UID || ran) return;
      ran = true;
      Promise.all(PROGS.map(syncProgramme)).then(function (res) {
        var papers = 0, keys = 0, err = null;
        res.forEach(function (r) { papers += r.papers; keys += r.keys; if (r.error) err = r.error; });
        if (err && !papers && !keys) toast('Student papers could not be updated: ' + err, true);
        else if (papers || keys) toast('Student papers up to date: ' + papers + ' published, ' + keys + ' feedback sets attached.');
      });
    });
  }

  function whenReady(fn) {
    var tries = 0;
    (function wait() {
      if (window.firebase && firebase.apps && firebase.apps.length && firebase.auth && firebase.firestore) return fn();
      if (++tries < 100) setTimeout(wait, 100);
    })();
  }
  if (document.currentScript && document.currentScript.hasAttribute('data-teacher')) whenReady(startTeacher);
})();
