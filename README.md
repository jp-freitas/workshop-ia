# IA na Prática · Site das atividades digitais

Site estático (HTML + JavaScript puro). Cada atividade tem uma página e um QR code.
Votação, termômetro e placar ao vivo usam o **Firebase Realtime Database**.

## O que é digital e o que continua físico
| Digital (site) | Físico |
|---|---|
| Atividade 1 (IA ou não IA?), Atividade 3 (caça às alucinações), Atividade 4 **rodada 2** | Atividade 2 (jogo da corrente) e Atividade 4 **rodada 1** (conduzidas pelo facilitador, pontuadas no painel) |
| Prática, ficha do projeto, pitch (cronômetro), votação, termômetro, placar | Envelopes dos casos do mini projeto |

## 1. Criar o Firebase (5 min, grátis)
1. Acesse console.firebase.google.com e crie um projeto (pode desativar o Analytics).
2. Menu **Build > Realtime Database > Criar banco de dados**. Escolha a região e comece em **modo de teste**.
3. Aba **Regras**: cole o conteúdo de `firebase-rules.json` e publique.
4. **Configurações do projeto > Seus apps > Web (`</>`)**: registre um app e copie o objeto `firebaseConfig`.
   Confira que ele tem `databaseURL`. Se não tiver, copie a URL da aba Dados do Realtime Database.
5. Cole o objeto em `js/config.js` (substitui o `firebaseConfig` vazio).
6. No mesmo arquivo, troque `CODIGO_PAINEL` (padrão `ia2026`) e, se quiser, `SESSAO_PADRAO`.

## 2. Publicar no GitHub Pages
1. Crie um repositório e envie o conteúdo desta pasta na raiz.
2. **Settings > Pages > Deploy from a branch > main / (root)**.
3. O endereço será `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## 3. Gerar os QR codes
Abra `.../qr.html`. A página lista cada atividade com seu QR para projetar ou imprimir.
Dica: imprima também um QR da página inicial (`index.html`) na mesa de cada grupo.

## 4. Fluxo no dia
1. Projete `telao.html` (abas Placar, Votação, Termômetro) em tela cheia.
2. No seu celular ou notebook abra `painel.html` e digite o código.
   - Defina o número de grupos (10 para 40 pessoas).
   - Lance os pontos do facilitador: Atividade 2, Atividade 4 rodada 1, rubrica do pitch.
   - Controle o termômetro (fase e pergunta) e abra e feche a votação.
   - Após a votação, aplique o bônus de 3 pontos ao grupo mais votado.
3. Cada participante abre `index.html`, escolhe grupo (1 a 10) e dupla (1 ou 2). O aparelho lembra a escolha.
4. Placar máximo: 73 pontos (16+6+12+18+10+8+3).

## 5. Teste antes
- Sem Firebase configurado o site roda em **modo local** (faixa amarela no topo). Serve só para testar no mesmo aparelho.
- Antes do evento, abra o site em dois celulares e confirme que o placar do telão muda quando uma dupla confirma uma atividade.
- Use `?s=teste` no fim da URL para uma sessão de ensaio, sem misturar com a turma real.

## Limitações a conhecer
- **Segurança fraca de propósito**: sem login, qualquer pessoa com o endereço pode escrever na sessão. O código do painel só esconde os botões. As regras só limitam o acesso ao caminho `sessions/`. Para um workshop fechado é aceitável.
- Os gabaritos das atividades estão no código da página (quem abrir o código-fonte vê).
- Voto: um por aparelho, e não vale no próprio grupo. Quem limpar os dados do navegador consegue votar de novo.
- Precisa de internet para 40 celulares. Tenha o plano B de papel (PDFs) à mão e peça que quem estiver sem sinal faça em dupla.
- O plano gratuito (Spark) comporta com folga uma turma de 40.

## Depois do evento
Apague os dados no console do Firebase (Realtime Database > Dados > excluir o nó `sessions`) ou use o botão de reset do painel.
