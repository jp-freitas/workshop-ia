import { MODO, SESSAO, dbSet, dbOn } from './db.js';
import { GRUPOS_PADRAO } from './config.js';
export { MODO, SESSAO };
export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];
export const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const ls = {
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
};
export const deviceId = () => { let d = ls.get('ws:dev'); if (!d) { d = 'd' + Math.random().toString(36).slice(2, 10); ls.set('ws:dev', d); } return d; };
export const me = () => { try { return JSON.parse(ls.get('ws:me') || 'null'); } catch (e) { return null; } };
export const setMe = (g, d) => ls.set('ws:me', JSON.stringify({ g: +g, d: +d }));
export const clearMe = () => { try { localStorage.removeItem('ws:me'); } catch (e) {} };

export function header(titulo, { precisaIdentificar = true } = {}) {
  const m = me();
  const h = document.createElement('header');
  h.className = 'topo';
  h.innerHTML = `<a class="home" href="index.html">← Início</a><div class="tt">${esc(titulo)}</div><div class="quem">${m ? `Grupo ${m.g} · Dupla ${m.d}` : ''}</div>`;
  document.body.prepend(h);
  if (MODO === 'local') {
    const b = document.createElement('div');
    b.className = 'aviso';
    b.textContent = 'Modo local (sem Firebase): os dados ficam só neste aparelho. Configure js/config.js para a turma toda.';
    document.body.prepend(b);
  }
  if (precisaIdentificar && !m) { location.href = 'index.html?volta=' + encodeURIComponent(location.pathname.split('/').pop()); }
  return m;
}
export function toast(msg) {
  let t = $('#toast'); if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.className = 'show'; clearTimeout(toast._t); toast._t = setTimeout(() => (t.className = ''), 2600);
}
// Pontos: scores/{grupo}/{parte}/{chave}
export const salvarPontos = (g, parte, chave, valor) => dbSet(`scores/${g}/${parte}/${chave}`, valor);
export const PARTES = [
  { id: 'a1', nome: 'Ativ. 1', max: 16 },
  { id: 'a2', nome: 'Ativ. 2', max: 6 },
  { id: 'a3', nome: 'Ativ. 3', max: 12 },
  { id: 'a4', nome: 'Ativ. 4', max: 18, partes: ['a4r1', 'a4r2'] },
  { id: 'pratica', nome: 'Prática', max: 10 },
  { id: 'pitch', nome: 'Pitch', max: 8 },
  { id: 'bonus', nome: 'Bônus', max: 3 },
];
export const somaParte = (obj) => obj && typeof obj === 'object' ? Object.values(obj).reduce((a, b) => a + (+b || 0), 0) : 0;
export function totaisGrupo(sc) {
  const r = {}; sc = sc || {};
  r.a1 = somaParte(sc.a1); r.a2 = somaParte(sc.a2); r.a3 = somaParte(sc.a3);
  r.a4 = somaParte(sc.a4r1) + somaParte(sc.a4r2);
  r.pratica = somaParte(sc.pratica); r.pitch = somaParte(sc.pitch); r.bonus = somaParte(sc.bonus);
  r.total = r.a1 + r.a2 + r.a3 + r.a4 + r.pratica + r.pitch + r.bonus;
  return r;
}
export function numGrupos(cb) { dbOn('config/grupos', v => cb(+v || GRUPOS_PADRAO)); }
export const AFIRMACOES = [
  'Uso uma ferramenta de IA generativa toda semana.',
  'Sei explicar como uma IA gera uma resposta.',
  'Já recebi uma resposta de IA que parecia certa, mas estava errada.',
  'Sei quais dados eu nunca devo colar em uma IA.',
  'Confio nas respostas de IA sem precisar conferir.',
  'A IA vai fazer meu trabalho em poucos anos.',
];
