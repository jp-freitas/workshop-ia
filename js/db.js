import { firebaseConfig, SESSAO_PADRAO } from './config.js';

const url = new URL(location.href);
const s = url.searchParams.get('s');
if (s) { try { localStorage.setItem('ws:sessao', s); } catch (e) {} }
export const SESSAO = (() => { try { return s || localStorage.getItem('ws:sessao') || SESSAO_PADRAO; } catch (e) { return s || SESSAO_PADRAO; } })();
export const MODO = firebaseConfig && firebaseConfig.databaseURL ? 'firebase' : 'local';
const base = p => `sessions/${SESSAO}/${p}`.replace(/\/+$/, '');

let impl;
if (MODO === 'firebase') {
  const V = '10.12.2';
  const { initializeApp } = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`);
  const fb = await import(`https://www.gstatic.com/firebasejs/${V}/firebase-database.js`);
  const app = initializeApp(firebaseConfig);
  const db = fb.getDatabase(app);
  impl = {
    set: (p, v) => fb.set(fb.ref(db, base(p)), v),
    update: (p, v) => fb.update(fb.ref(db, base(p)), v),
    remove: p => fb.remove(fb.ref(db, base(p))),
    on: (p, cb) => fb.onValue(fb.ref(db, base(p)), snap => cb(snap.val())),
    once: async p => (await fb.get(fb.ref(db, base(p)))).val(),
  };
} else {
  // Modo local: árvore JSON no localStorage + evento 'storage' entre abas.
  const KEY = 'ws:tree';
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; } };
  const write = t => localStorage.setItem(KEY, JSON.stringify(t));
  const parts = p => base(p).split('/').filter(Boolean);
  const getAt = (t, ps) => ps.reduce((o, k) => (o && typeof o === 'object' ? o[k] : undefined), t);
  const listeners = [];
  const fire = () => { const t = read(); listeners.forEach(l => l.cb(clone(getAt(t, l.ps)))); };
  const clone = v => (v === undefined ? null : JSON.parse(JSON.stringify(v)));
  window.addEventListener('storage', e => { if (e.key === KEY) fire(); });
  impl = {
    set: async (p, v) => {
      const t = read(), ps = parts(p); let o = t;
      ps.slice(0, -1).forEach(k => { if (typeof o[k] !== 'object' || o[k] === null) o[k] = {}; o = o[k]; });
      if (v === null || v === undefined) delete o[ps[ps.length - 1]]; else o[ps[ps.length - 1]] = v;
      write(t); fire();
    },
    update: async (p, v) => { for (const [k, val] of Object.entries(v)) await impl.set(p + '/' + k, val); },
    remove: p => impl.set(p, null),
    on: (p, cb) => { const l = { ps: parts(p), cb }; listeners.push(l); cb(clone(getAt(read(), l.ps))); },
    once: async p => clone(getAt(read(), parts(p))),
  };
}
export const dbSet = (p, v) => impl.set(p, v);
export const dbUpdate = (p, v) => impl.update(p, v);
export const dbRemove = p => impl.remove(p);
export const dbOn = (p, cb) => impl.on(p, cb);
export const dbOnce = p => impl.once(p);
