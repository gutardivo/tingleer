const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {
  if (msg === "1") {
    banco.db[user].stage = 0;
    return ["A Tinglee agradece seu contato, tenha um ótimo dia!"];
  }

  if (msg === "2") {
    banco.db[user].stage = "botoff";
    return ["Ok, um de nossos atendentes irá te atender assim que disponível. Caso queira finalizar o atendimento ou voltar ao início *digite #*"];
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
