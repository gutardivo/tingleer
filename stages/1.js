const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {

  if (msg === "1") {
    banco.db[user].stage = 0;
    return ["Certo, peço para que envie um print ou gravação de tela para nós em nosso email contato@tinglee.co"];
  }

  if (msg === "2") {
    banco.db[user].stage = "ynpattern";
    return ["Ok, nesses modelos em específico o Leitor de Etiqueta deve estar ativo na Central de Controle conforme dito no link shop.tinglee.co/pages/celulares-compativeis.\n\nDepois de estar na Central de Controle só pressionar e aproximar o Tinglee na parte superior do celular.\n\n*1* - Isso resolveu\n*2* - Isso não resolveu\n*#* - Para finalizar seu atendimento"];
  }

  if (msg === "#") {
    banco.db[user].stage = 0;
    return ["A Tinglee agradece seu contato, tenha um ótimo dia!\n\nCaso queira iniciar outro atendimento envie *Oi*"];
  }

  if (msg === "!") {
    banco.db[user].stage = "botoff";
    return ["Robô desativado! Caso queira finalizar o atendimento ou voltar ao início digite *#*"]
  }

  if (msg !== '1' && msg !== '2' && msg !== '#' && msg !== '!') {
    return ["Desculpe não entendi, responda apenas com um caractere de número. *Ex: 1*\nCaso eu não possa te ajudar envie um email para contato@tinglee.co para que um *humano* possa te atender ;)\n\n*#* - Caso queira finalizar o atendimento ou *voltar ao início*"];
  }
}

exports.execute = execute;

