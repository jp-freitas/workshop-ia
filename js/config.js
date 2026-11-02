// ============================================================
// CONFIGURAÇÃO (edite só este arquivo)
// 1) Cole aqui o firebaseConfig do seu projeto Firebase
//    (Configurações do projeto > Seus apps > App da Web).
//    Precisa ter "databaseURL" (Realtime Database).
// 2) Se deixar vazio, o site funciona em MODO LOCAL (só neste
//    navegador/aparelho): serve para testar, não para a turma.
// ============================================================
export const firebaseConfig = {
  apiKey: "AIzaSyBJVFjT99NeOQQMzRFZrfVrwRACmU3zR5I",
  authDomain: "workshop-ia-77b7e.firebaseapp.com",
  databaseURL: "https://workshop-ia-77b7e-default-rtdb.firebaseio.com",
  projectId: "workshop-ia-77b7e",
  storageBucket: "workshop-ia-77b7e.firebasestorage.app",
  messagingSenderId: "429904909050",
  appId: "1:429904909050:web:84eb30df5f471a3a812f43"
};

// Código da sessão (separa dados de turmas diferentes). Pode trocar a cada workshop.
export const SESSAO_PADRAO = "workshop";

// Código do painel do facilitador (proteção simples, não é segurança forte).
export const CODIGO_PAINEL = "ia2026";

// Número de grupos (4 pessoas = 2 duplas por grupo). O painel também permite mudar.
export const GRUPOS_PADRAO = 10;
