const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {

  if (msg === "1") {
    banco.db[user].stage = "ynpattern";
    return ["Certo, tente realizar o cadastro com outro celular compatível, pode ser que tenha dado algum problema no app, caso o problema persista nos diga por email o que está havendo.\n\nemail: contato@tinglee.co\n\n*1* - Isso resolveu\n*2* - Isso não resolveu\n*#* - Para finalizar seu atendimento"];
  }

  if (msg === "2") {
    banco.db[user].stage = "ynpattern";
    return ["Certifique-se que o celular que está tentando ler é compatível e que esteja com o NFC ativado!\nLista de celulares compatíveis: shop.tinglee.co/pages/celulares-compativeis\n\nCaso seja um iPhone 7/8/X ative o Leitor de Etiqueta NFC na Central de Controle, e depois de ativo só pressioná-la para ler o Tinglee ;)\n\n*1* - Isso resolveu\n*2* - Isso não resolveu\n*#* - Para finalizar seu atendimento"];
  }

  if (msg === "3") {
    banco.db[user].stage = 0;
    return ["Ok, nos mande o código que utilizou por email, se possível coloque *Código Inválido* como o assunto do email!\n\nemail: contato@tinglee.co"];
  }

  if (msg === "#") {
    banco.db[user].stage = 0;
    return ["A Tinglee agradece seu contato, tenha um ótimo dia!\n\nCaso queira iniciar outro atendimento envie *Oi*"];
  }

  if (msg === "!") {
    banco.db[user].stage = "botoff";
    return ["Robô desativado! Caso queira finalizar o atendimento ou voltar ao início digite *#*"]
  }

  if (msg !== '1' && msg !== '2' && msg !== '3' && msg !== '#' && msg !== '!') {
    return ["Desculpe não entendi, responda apenas com um caractere de número. *Ex: 1*\nCaso eu não possa te ajudar envie um email para contato@tinglee.co para que um *humano* possa te atender ;)\n\n*#* - Caso queira finalizar o atendimento ou *voltar ao início*"];
  }
}

exports.execute = execute;

