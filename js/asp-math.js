/* ==========================================================================
   asp-math.js · textbook typesetting and a rearrange-and-solve engine
   for equations written as plain text (the way dp-formulas.js writes them).
     aspMath.html('F = Gm₁m₂/r²')   stacked fractions, italic symbols, roots
     aspMath.forms(eq)               the parts of eq that can be solved
     aspMath.solve(form, key, vals)  rearranges for key and works it out
   Each symbol is wrapped in <span class="sy" data-s="key"> so pages can
   highlight it or let students tap it.
   ========================================================================== */
(function () {
  'use strict';
  var WORDS = { sin: 1, cos: 1, tan: 1, ln: 1, log: 1, const: 1, useful: 1, out: 1, total: 1, 'in': 1, work: 1, input: 1, energy: 1,
    power: 1, radiated: 1, per: 1, unit: 1, area: 1, path: 1, diff: 1, Series: 1, Parallel: 1, same: 1, adds: 1, emissivity: 1,
    albedo: 1, scattered: 1, incident: 1, parsec: 1, arc: 1, second: 1, eV: 1, rad: 1 };
  var FN = { sin: 1, cos: 1, tan: 1 };
  var SUP = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-', 'ⁿ': 'n' };
  var SUB = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' };
  var GREEK = /[α-ωΑ-Ω]/, LATIN = /[A-Za-z]/;

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function plain(s, map) { return s.split('').map(function (c) { return map[c] || c; }).join(''); }

  /* ---- 1. split a run of text into symbols, words, numbers ---- */
  function lex(t) {
    var out = [], i = 0, m;
    while (i < t.length) {
      var r = t.slice(i), c = t[i];
      if ((m = r.match(/^([⁰¹²³⁴⁵⁶⁷⁸⁹]+)\/([₀₁₂₃₄₅₆₇₈₉]+)/))) { out.push({ k: 'q', n: +plain(m[1], SUP), d: +plain(m[2], SUB) }); i += m[0].length; continue; }
      if (c === '½' || c === '⅓') { out.push({ k: 'q', n: 1, d: c === '½' ? 2 : 3 }); i++; continue; }
      if ((m = r.match(/^[A-Za-z]{2,}/)) && WORDS[m[0]]) { out.push({ k: 'w', s: m[0] }); i += m[0].length; continue; }
      if ((m = r.match(/^\d+(\.\d+)?/))) { var p = r.slice(m[0].length).match(/^[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+/); out.push({ k: 'n', s: m[0], pow: p ? p[0] : '' }); i += m[0].length + (p ? p[0].length : 0); continue; }
      if (c === 'π') { var pp = r.slice(1).match(/^[⁰¹²³⁴⁵⁶⁷⁸⁹]+/); out.push({ k: 'pi', pow: pp ? pp[0] : '' }); i += 1 + (pp ? pp[0].length : 0); continue; }
      var d = false;
      if (c === 'Δ' && (LATIN.test(t[i + 1] || '') || GREEK.test(t[i + 1] || ''))) { d = true; i++; c = t[i]; }
      if (LATIN.test(c) || (GREEK.test(c) && c !== 'Δ' && c !== 'Σ')) {
        var s = { k: 's', d: d, base: c, sub: '', prime: '', pow: '' }; i++;
        if (t[i] === '_') {
          var w = t.slice(i + 1).match(/^(max|esc|orbital|Carnot)/);
          if (w) { s.sub = w[0]; i += 1 + w[0].length; } else if (t[i + 1]) { s.sub = t[i + 1]; i += 2; }
        }
        while (SUB[t[i]]) { s.sub += t[i]; i++; }
        if (t[i] === '½') { s.sub += '½'; i++; }
        while (t[i] === "'") { s.prime += "'"; i++; }
        while (SUP[t[i]]) { s.pow += t[i]; i++; }
        s.key = (d ? 'Δ' : '') + c + (s.sub ? '_' + s.sub : '') + s.prime;
        out.push(s); continue;
      }
      if (d) { i--; c = 'Δ'; }
      out.push({ k: 'c', s: c }); i++;
    }
    return out;
  }
  function symHTML(s, upright) {
    var b = upright || /[Α-Ω]/.test(s.base) ? esc(s.base) : '<i>' + esc(s.base) + '</i>';
    return (s.d ? 'Δ' : '') + b + (s.sub ? '<sub>' + esc(plain(s.sub, SUB)) + '</sub>' : '') + esc(s.prime);
  }
  function lexHTML(t, beforeSup) {
    var L = lex(t);
    return L.map(function (x, j) {
      if (x.k === 's') {
        var up = beforeSup && j === L.length - 1 && x.base === 'e' && !x.sub;   // e in e^(−λt) is a number, so upright
        return '<span class="sy" data-s="' + esc(x.key) + '">' + symHTML(x, up) + '</span>' + esc(x.pow);
      }
      if (x.k === 'q') return '<span class="frac frac--n"><span>' + x.n + '</span><span>' + x.d + '</span></span>';
      if (x.k === 'n') return esc(x.s) + esc(x.pow);
      if (x.k === 'pi') return 'π' + esc(x.pow);
      if (x.k === 'w') return '<span class="w">' + esc(x.s) + '</span>';
      return esc(x.s);                                                // a hyphen inside a word (arc-second); real minus signs are ops
    }).join('');
  }

  /* ---- 2. split an expression into pieces and find the fractions ---- */
  function items(s) {
    var out = [], i = 0, buf = '';
    function flush() { if (buf) { out.push({ t: 'tx', s: buf }); buf = ''; } }
    while (i < s.length) {
      var c = s[i];
      if (c === '(' || ((c === '√' || c === '^') && s[i + 1] === '(')) {
        var j = c === '(' ? i : i + 1, depth = 0, k = j;
        for (; k < s.length; k++) { if (s[k] === '(') depth++; else if (s[k] === ')' && !--depth) break; }
        flush(); out.push({ t: c === '(' ? 'g' : c === '√' ? 'sq' : 'sup', s: s.slice(j + 1, k) }); i = k + 1; continue;
      }
      if (c === ' ') { flush(); if (out.length && out[out.length - 1].t !== 'sp') out.push({ t: 'sp' }); i++; continue; }
      if (c === '/' && !(SUP[s[i - 1]] && SUB[s[i + 1]])) { flush(); out.push({ t: 'sl' }); i++; continue; }
      if ('+±×'.indexOf(c) > -1 || (c === '-' && !/[A-Za-z]{3}$/.test(s.slice(0, i)))) { flush(); out.push({ t: 'op', s: c }); i++; continue; }
      buf += c; i++;
    }
    flush();
    while (out.length && out[out.length - 1].t === 'sp') out.pop();
    return out;
  }
  function atom(x) { return x && /^(tx|g|sq|sup|fr)$/.test(x.t); }
  function isFn(x) { return x && x.t === 'tx' && FN[x.s]; }
  function fracs(a) {
    for (var i = 0; i < a.length; i++) {
      if (a[i].t !== 'sl') continue;
      var L = i - 1, R = i + 1;
      if (a[L] && a[L].t === 'sp' && a[R] && a[R].t === 'sp') {          // "a / b": the whole term on each side
        while (L > 0 && a[L - 1].t !== 'op') L--;
        while (R < a.length - 1 && a[R + 1].t !== 'op') R++;
        while (a[L].t === 'sp') L++;
        while (a[R].t === 'sp') R--;
      } else {                                                           // "a/b": the pieces touching the slash
        while (L > 0 && atom(a[L - 1])) L--;
        if (L >= 2 && a[L - 1].t === 'sp' && isFn(a[L - 2])) L -= 2;
        while (R < a.length - 1 && atom(a[R + 1])) R++;
        if (isFn(a[R]) && a[R + 1] && a[R + 1].t === 'sp' && atom(a[R + 2])) { R += 2; while (R < a.length - 1 && atom(a[R + 1])) R++; }
      }
      if (L < 0 || R >= a.length || L === i || R === i) continue;
      a.splice(L, R - L + 1, { t: 'fr', n: a.slice(L, i), d: a.slice(i + 1, R + 1) });
      i = L;
    }
    return a;
  }
  function parse(s, flat) { var a = items(s); return flat ? a : fracs(a); }

  function render(a, flat) {
    return a.map(function (x, j) {
      if (x.t === 'tx') return lexHTML(x.s, a[j + 1] && a[j + 1].t === 'sup');
      if (x.t === 'sp') return ' ';
      if (x.t === 'sl') return '/';
      if (x.t === 'op') return '<span class="op">' + (x.s === '-' ? '−' : esc(x.s)) + '</span>';
      if (x.t === 'g') return '(' + render(parse(x.s, flat), flat) + ')';
      if (x.t === 'sq') return '<span class="sqrt"><span class="sqrt__s">√</span><span class="sqrt__in">' + render(parse(x.s)) + '</span></span>';
      if (x.t === 'sup') return '<sup>' + render(parse(x.s, true), true) + '</sup>';
      if (x.t === 'fr') return '<span class="frac"><span>' + side(x.n) + '</span><span>' + side(x.d) + '</span></span>';
      return '';
    }).join('');
  }
  function side(a) { return a.length === 1 && a[0].t === 'g' ? render(parse(a[0].s)) : render(a); }

  var REL = /(\s+(?:=|≤|≈|→)\s+)/;
  function html(eq) {
    return String(eq).split(REL).map(function (p, i) {
      return i % 2 ? ' <span class="rel">' + esc(p.trim()) + '</span> ' : render(parse(p));
    }).join('');
  }

  /* ---- 3. solving: a part made only of products, quotients and powers ---- */
  function powOf(p) { if (!p) return 1; var v = plain(p, SUP); return /^-?\d+$/.test(v) ? +v : NaN; }
  function mono(a) {
    var m = { c: 1, f: {}, sym: {}, fn: {} }, fn = null, first = true;
    function add(key, e, s) { m.f[key] = (m.f[key] || 0) + e; if (s && !m.sym[key]) m.sym[key] = s; }
    function merge(o, e) {
      if (!o) return false;
      m.c *= Math.pow(o.c, e);
      Object.keys(o.f).forEach(function (k) { add(k, o.f[k] * e, o.sym[k]); if (o.fn[k]) m.fn[k] = o.fn[k]; });
      return true;
    }
    for (var j = 0; j < a.length; j++) {
      var x = a[j];
      if (x.t === 'sp') continue;
      if (x.t === 'op') { if (x.s === '-' && first) { m.c = -m.c; continue; } if (x.s === '×') continue; return null; }
      first = false;
      if (x.t === 'fr') { if (!merge(mono(x.n), 1) || !merge(mono(x.d), -1)) return null; continue; }
      if (x.t === 'sq') { if (!merge(mono(parse(x.s)), 0.5)) return null; continue; }
      if (x.t === 'g') { if (!merge(mono(parse(x.s)), 1)) return null; continue; }
      if (x.t !== 'tx') return null;
      var L = lex(x.s);
      for (var k = 0; k < L.length; k++) {
        var t = L[k];
        if (t.k === 'w') {
          if (t.s === 'ln' && L[k + 1] && L[k + 1].k === 'n' && !L[k + 1].pow) { m.c *= Math.log(parseFloat(L[k + 1].s)); k++; continue; }   // ln2 is just a number
          if (FN[t.s] && k === L.length - 1 && !fn) { fn = t.s; continue; }
          return null;
        }
        if (t.k === 's') {
          var e = powOf(t.pow); if (isNaN(e)) return null;
          if (fn) { var fk = fn + ' ' + t.key; add(fk, e, t); m.fn[fk] = { fn: fn, arg: t.key }; fn = null; }
          else add(t.key, e, t);
          continue;
        }
        if (fn) return null;
        if (t.k === 'n') { var pe = powOf(t.pow); if (isNaN(pe)) return null; m.c *= Math.pow(parseFloat(t.s), pe); continue; }
        if (t.k === 'pi') { m.c *= Math.pow(Math.PI, powOf(t.pow)); continue; }
        if (t.k === 'q') { m.c *= t.n / t.d; continue; }
        return null;
      }
    }
    return fn ? null : m;
  }
  /* every "left = right" pair in the equation that can be rearranged */
  function forms(eq) {
    var parts = String(eq).split(REL), out = [];
    if (parts.length < 3) return out;
    var rels = [], ps = [];
    parts.forEach(function (p, i) { if (i % 2) rels.push(p.trim()); else ps.push(p); });
    var lhs = mono(parse(ps[0]));
    if (!lhs || !/^(=|≈)$/.test(rels[0])) return out;
    for (var i = 1; i < ps.length; i++) {
      if (!/^(=|≈)$/.test(rels[i - 1])) break;
      var rhs = mono(parse(ps[i]));
      if (!rhs) continue;
      var n = {}, sym = {}, fn = {};
      [[lhs, 1], [rhs, -1]].forEach(function (pair) {
        var o = pair[0];
        Object.keys(o.f).forEach(function (k) { n[k] = (n[k] || 0) + o.f[k] * pair[1]; sym[k] = sym[k] || o.sym[k]; if (o.fn[k]) fn[k] = o.fn[k]; });
      });
      Object.keys(n).forEach(function (k) { if (Math.abs(n[k]) < 1e-12) delete n[k]; });
      if (Object.keys(n).length < 2) continue;
      out.push({ text: ps[0].trim() + ' = ' + ps[i].trim(), n: n, K: rhs.c / lhs.c, sym: sym, fn: fn });
    }
    return out;
  }

  function niceCoef(K) {                       // 4π², ½, ³/₂, ln 2 ... instead of 39.478
    var ks = [0, 1, 2, -1, -2], ls = [0, 1, -1];
    for (var b = 0; b < ls.length; b++) for (var a = 0; a < ks.length; a++) {
      var r = K / Math.pow(Math.PI, ks[a]) / Math.pow(Math.LN2, ls[b]);
      for (var q = 1; q <= 12; q++) { var p = r * q; if (Math.abs(p - Math.round(p)) < 1e-9 * Math.max(1, Math.abs(p))) return { p: Math.round(p), q: q, pi: ks[a], ln: ls[b] }; }
    }
    return { p: K, q: 1, pi: 0, ln: 0 };
  }
  function symOut(form, k, e) {
    var f = form.fn[k], s = form.sym[k];
    var h = f ? f.fn + ' ' + symHTML(s) : symHTML(s);
    if (e === 1) return h;
    var sup = String(e).replace('-', '−');
    return (f ? '(' + h + ')' : h) + '<sup>' + sup + '</sup>';
  }
  function factorHTML(c, top, bot) {
    var nc = niceCoef(c), T = [], B = [];
    var neg = nc.p < 0, p = Math.abs(nc.p);
    if (p !== 1) T.push(String(+p.toPrecision(6)));
    if (nc.pi > 0) T.push('π' + (nc.pi > 1 ? '<sup>' + nc.pi + '</sup>' : ''));
    if (nc.ln > 0) T.push("ln 2");
    if (nc.q !== 1) B.push(String(nc.q));
    if (nc.pi < 0) B.push('π' + (nc.pi < -1 ? '<sup>' + (-nc.pi) + '</sup>' : ''));
    if (nc.ln < 0) B.push("ln 2");
    T = T.concat(top); B = B.concat(bot);
    var t = T.length ? T.join('') : '1';
    return (neg ? '−' : '') + (B.length ? '<span class="frac"><span>' + t + '</span><span>' + B.join('') + '</span></span>' : t);
  }
  /* rearrange form for unknown u; vals = {key: number}. Returns html + value */
  function solve(form, u, vals) {
    // form: Π s^n = K.  u^nu = K · Π s^(−n)  →  u = (K · Π s^(−n))^(1/nu), shown as a q-th root with whole powers
    var nu = form.n[u], r = 1 / nu, others = Object.keys(form.n).filter(function (k) { return k !== u; });
    var q = [1, 2, 3, 4].filter(function (q) { return others.every(function (k) { var x = -form.n[k] * r * q; return Math.abs(x - Math.round(x)) < 1e-9; }); })[0] || 1;
    var top = [], bot = [], prod = form.K, missing = [];
    others.forEach(function (k) {
      var x = Math.round(-form.n[k] * r * q * 1e6) / 1e6;
      (x > 0 ? top : bot).push(symOut(form, k, Math.abs(x)));
      var val = form.fn[k] ? fnVal(form.fn[k].fn, vals[form.fn[k].arg]) : vals[k];
      if (typeof val !== 'number' || isNaN(val)) missing.push(k);
      else prod *= Math.pow(val, -form.n[k]);
    });
    var rhs = factorHTML(Math.pow(form.K, r * q), top, bot), lhsSym = symOut(form, u, 1);
    if (q === 2) rhs = '<span class="sqrt"><span class="sqrt__s">√</span><span class="sqrt__in">' + rhs + '</span></span>';
    else if (q > 2) rhs = '<span class="sqrt"><span class="sqrt__s"><sup>' + q + '</sup>√</span><span class="sqrt__in">' + rhs + '</span></span>';
    var res = { html: lhsSym + ' <span class="rel">=</span> ' + rhs, missing: missing };
    if (missing.length) return res;
    // prod = u^nu, so u = prod^(1/nu); a negative prod only has an odd root
    var val = Math.pow(prod, r);
    if (isNaN(val) && prod < 0) {
      if (Math.round(Math.abs(nu)) % 2 === 0) { res.err = 'No real answer: check the signs of your values.'; return res; }
      val = -Math.pow(-prod, r);
    }
    if (!isFinite(val)) { res.err = 'That needs a division by zero. Check for a zero value.'; return res; }
    var f = form.fn[u];
    if (f) {
      if (f.fn !== 'tan' && Math.abs(val) > 1 + 1e-9) { res.err = f.fn + ' can’t be bigger than 1, so no angle fits these values.'; return res; }
      res.ratio = val;
      val = (f.fn === 'sin' ? Math.asin(Math.max(-1, Math.min(1, val))) : f.fn === 'cos' ? Math.acos(Math.max(-1, Math.min(1, val))) : Math.atan(val)) * 180 / Math.PI;
      res.angle = true;
    }
    res.value = val;
    return res;
  }
  function fnVal(fn, deg) { if (typeof deg !== 'number' || isNaN(deg)) return NaN; var r = deg * Math.PI / 180; return fn === 'sin' ? Math.sin(r) : fn === 'cos' ? Math.cos(r) : Math.tan(r); }

  function readNum(s) {
    var v = String(s).trim().replace(/\s+/g, '').replace(/−/g, '-').replace(/[×x*]10\^?\(?([-+]?\d+)\)?$/i, 'e$1');
    return /^[-+]?(\d+\.?\d*|\.\d+)(e[-+]?\d+)?$/i.test(v) ? parseFloat(v) : NaN;
  }
  function fmtNum(v) {
    if (!isFinite(v)) return '—';
    var a = Math.abs(v);
    if (a !== 0 && (a >= 1e4 || a < 1e-3)) {
      var ex = Math.floor(Math.log10(a)), m = +(v / Math.pow(10, ex)).toPrecision(3);
      if (Math.abs(m) >= 10) { m = +(m / 10).toPrecision(3); ex++; }
      return m + ' × 10<sup>' + String(ex).replace('-', '−') + '</sup>';
    }
    return String(+v.toPrecision(3)).replace('-', '−');
  }

  /* "x = meaning, y = meaning" -> { key: meaning } */
  function notes(note) {
    var out = {};
    String(note || '').split(/,\s*(?=[^,=]{1,12}\s=\s)/).forEach(function (bit) {
      var m = bit.match(/^\s*([^=]{1,12}?)\s+=\s+(.+)$/); if (!m) return;
      var L = lex(m[1].trim());
      if (L.length === 1 && L[0].k === 's') out[L[0].key] = m[2].trim();
    });
    return out;
  }

  window.aspMath = { html: html, forms: forms, solve: solve, notes: notes, symHTML: function (s) { return symHTML(s); }, readNum: readNum, fmtNum: fmtNum, lex: lex };
})();
