export const A1_COLUNAS = [
  { id: 'A', nome: 'Não é IA', desc: 'Segue uma regra fixa ou faz um cálculo exato. Não aprende com dados.' },
  { id: 'B', nome: 'IA que analisa ou recomenda', desc: 'Aprende padrões nos dados para classificar, reconhecer ou sugerir.' },
  { id: 'C', nome: 'IA generativa', desc: 'Cria conteúdo novo (texto, imagem, áudio ou código) a partir de uma instrução.' },
];
export const A1_CARTOES = [
  { t: 'A calculadora do celular mostra o resultado de 12 × 8.', c: 'A', why: 'Cálculo exato por regra fixa.' },
  { t: 'Um filtro de spam aprendeu com milhões de e-mails que pessoas já marcaram como spam e passou a bloquear mensagens parecidas.', c: 'B', why: 'Aprendizado supervisionado com exemplos rotulados.' },
  { t: 'Um aplicativo de música sugere uma playlist com base no que você e pessoas parecidas com você ouviram.', c: 'B', why: 'Sistema de recomendação.' },
  { t: 'O celular é desbloqueado ao reconhecer o seu rosto.', c: 'B', why: 'Visão computacional.' },
  { t: 'Um assistente de conversa escreve um e-mail de cobrança a partir de um pedido digitado pelo usuário.', c: 'C', why: 'Cria texto novo a partir de instrução.' },
  { t: 'Uma planilha soma automaticamente os valores de uma coluna quando você digita a fórmula.', c: 'A', why: 'Fórmula fixa.' },
  { t: 'Um semáforo com temporizador fixo fica 40 segundos em cada cor.', c: 'A', why: 'Temporizador sem percepção nem aprendizado.' },
  { t: 'Uma ferramenta cria a imagem de um gato astronauta a partir de uma frase digitada.', c: 'C', why: 'Cria imagem nova a partir de texto.' },
];
export const A1_DESAFIO = 'Desafio: o corretor ortográfico do celular é IA? Por que muita gente já não chama assim? (Dica: efeito IA.)';

export const A3_TIPOS = ['Factual', 'Fabricação de fontes', 'Fidelidade ao contexto', 'Lógica e cálculo', 'Autoconhecimento', 'Informação atual (data de corte)'];
export const A3_BASE = 'A Grão Dourado é uma rede de cafeterias de Curitiba. A primeira loja foi aberta em 2015 e hoje a rede tem 12 lojas. Em 2025, a empresa faturou R$ 8,4 milhões. A loja-matriz tem 24 funcionários e as demais lojas somam 96 funcionários. O ticket médio, valor médio gasto por cliente em cada compra, é de R$ 32,00.';
export const A3_PEDIDO = 'Resuma o texto em um parágrafo para a diretoria, com um indicador de produtividade e um dado de mercado.';
// Cada trecho: {t: texto, e: id do erro (1..6) ou 0 = correto/neutro, sel: se pode ser marcado}
export const A3_RESPOSTA = [
  { t: 'A Grão Dourado, rede de cafeterias de ' },
  { t: 'Curitiba, capital de Santa Catarina', e: 4 },
  { t: ', ' },
  { t: 'foi fundada em 2015 por Carlos Mendes', e: 1 },
  { t: ' e hoje ' },
  { t: 'opera 12 lojas', e: 0 },
  { t: '. Em 2025, ' },
  { t: 'faturou R$ 8,4 milhões', e: 0 },
  { t: ', com ' },
  { t: 'ticket médio de R$ 32,00', e: 0 },
  { t: '. Somando ' },
  { t: 'os 24 funcionários da matriz e os 96 das demais lojas, a empresa tem 120 pessoas', e: 0 },
  { t: ', o que dá ' },
  { t: 'cerca de R$ 84 mil de faturamento por funcionário', e: 2 },
  { t: '. ' },
  { t: 'Segundo o estudo “Mercado de Cafés no Sul” (Instituto Cafeína, 2024, p. 37), o setor cresceu 18% no último ano.', e: 3 },
  { t: ' ' },
  { t: 'Pesquisei na internet agora e confirmei que a principal concorrente fechou 3 lojas este mês.', e: 5 },
  { t: ' ' },
  { t: 'Hoje o café arábica está cotado a US$ 3,10 por libra na bolsa de Nova York', e: 6 },
  { t: ', o que deve pressionar as margens.' },
];
export const A3_ERROS = {
  1: { tipo: 'Fidelidade ao contexto', aceita: ['Fidelidade ao contexto'], como: 'Voltar ao texto-base: o nome do fundador não aparece. O texto só diz que a primeira loja abriu em 2015.' },
  2: { tipo: 'Lógica e cálculo', aceita: ['Lógica e cálculo'], como: 'Recalcular. R$ 8.400.000 ÷ 120 = R$ 70.000.' },
  3: { tipo: 'Fabricação de fontes', aceita: ['Fabricação de fontes'], como: 'Pesquisar o título exato em uma base confiável e pedir o link. Se não existir, descartar o dado.' },
  4: { tipo: 'Factual', aceita: ['Factual'], como: 'Curitiba é a capital do Paraná. Conferir em fonte oficial.' },
  5: { tipo: 'Autoconhecimento', aceita: ['Autoconhecimento'], como: 'A ferramenta não tinha busca ativada. Perguntar qual fonte foi consultada.' },
  6: { tipo: 'Informação atual (data de corte)', aceita: ['Informação atual (data de corte)', 'Factual'], como: 'Consultar a cotação na fonte original, com data e hora.' },
};

export const A4_RECLAMACAO = 'Meu nome é Ana Beatriz Souza Lima, CPF 000.000.000-00 (fictício). Fiz o pedido nº 458213 no dia 3 e até hoje não recebi a cadeira. Moro na Rua das Acácias, 120, apto 34, Bairro Jardim Azul, e sou a única enfermeira do plantão noturno do Hospital Municipal de Vila Serena. Já liguei três vezes para o (41) 90000-0000 e mandei e-mail para ana.lima@exemplo.com.br. Quero a entrega até sexta-feira ou o dinheiro de volta.';
export const A4_IDS = [
  { n: 'Nome completo', re: /ana\s+beatriz|souza\s+lima|\bana\b/i, why: 'Identificador direto.' },
  { n: 'CPF', re: /000\.?000\.?000-?00/i, why: 'Identificador direto.' },
  { n: 'Número do pedido', re: /458213/, why: 'Leva à pessoa no sistema da loja.' },
  { n: 'Endereço', re: /ac[aá]cias|jardim\s+azul|apto|rua\s+das|\b120\b/i, why: 'Localiza a pessoa.' },
  { n: 'Telefone', re: /90000-?0000|\(?41\)?\s*9/i, why: 'Identificador direto.' },
  { n: 'E-mail', re: /ana\.lima|@exemplo|exemplo\.com/i, why: 'Identificador direto.' },
];
export const A4_COMBO = { re: /enfermeira|plant[aã]o|hospital|vila\s+serena/i, msg: 'Atenção à combinação de dados: “a única enfermeira do plantão noturno do Hospital Municipal de Vila Serena” identifica a pessoa sem usar o nome. Deve sair também (não conta ponto, mas conta como bom senso).' };
export const A4_REF = 'A cliente [CLIENTE] fez o pedido [Nº DO PEDIDO] há alguns dias e ainda não recebeu a cadeira. Já tentou contato três vezes por telefone e uma vez por e-mail. Solicita entrega até sexta-feira ou reembolso.';

export const PRATICA_ITENS = [
  'O prompt tem papel, contexto, tarefa, formato e limites.',
  'O comunicado só traz informações da ficha, sem datas, locais, nomes ou benefícios inventados.',
  'O formato pedido foi respeitado (ex.: até 120 palavras, com assunto).',
  'Pedimos à IA que revisasse a própria resposta e apontasse incertezas.',
  'Conferimos a versão final com a ficha de fatos, linha por linha.',
];
export const FICHA_FATOS = [['Evento', 'Encontro de Integração da Alvorada Tech'], ['Data', 'Sexta-feira, dia 20'], ['Horário novo', '15h às 17h30 (antes era 14h)'], ['Local', 'Auditório B, 2º andar'], ['Programação', 'Boas-vindas (15 min), apresentação de metas (45 min), café (30 min), dinâmica em grupos (60 min)'], ['Confirmação de presença', 'Até quarta-feira, dia 18, com Paula (RH), ramal 2040'], ['Estacionamento', 'Gratuito']];
export const PROJETO_CAMPOS = [
  ['tarefa', '1. Tarefa: o que a IA vai ajudar a fazer (1 frase)', 2],
  ['prompt', '2. Prompt final (com papel, contexto, tarefa, formato e limites)', 6],
  ['resultado', '3. Resultado: trecho curto da melhor resposta', 4],
  ['dados', '4. Dados e semáforo: que dados entram, em que cor estão e como foram protegidos', 3],
  ['verificacao', '5. Verificação: duas formas de conferir antes de usar', 3],
  ['responsabilidade', '6. Responsabilidade humana: quem revisa e assina? O que a IA não decide?', 3],
];
export const PAPEIS = ['Redator do prompt', 'Guardião dos dados', 'Verificador', 'Porta-voz'];
