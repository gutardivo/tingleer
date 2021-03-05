const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {
  if (msg === "!") {
    banco.db[user].stage = "botoff";
    return ["Robô desativado! Caso queira finalizar o atendimento ou voltar ao início digite *#*"]
  }
    banco.db[user].stage = "menu";
    return ["Olá, meu nome é Tingleer, sou o responsável pelo atendimento do WhatsApp, e irei te ajudar hoje no Suporte Técnico, mas peço para que responda *somente com NÚMEROS*. Vamos lá!\n\n*1* - O celular não está *lendo* o Tinglee\n*2* - Estou com problemas na *ativação* do Tinglee\n*3* - Estou com uma dúvida sobre o *produto*\n*4* - Perdi o meu cadastro do *perfil Tinglee*\n*5* - Quero fazer um *orçamento no atacado*\n*6* - Não recebi o *código de cadastro*\n*7* - Outro\n*#* - Para finalizar seu atendimento"];
}


exports.execute = execute;