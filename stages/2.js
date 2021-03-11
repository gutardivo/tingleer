const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {

  if (msg === "1") {
    banco.db[user].stage = 0;
    return ["Você pode pegar seus códigos em nosso site www.apptinglee.com/meus_tinglees\nÉ só colocar o email em que foi feita a compra!\nCaso esteja faltando algum ou dê algum erro nos avise em nosso email ;)\n\nemail: contato@tinglee.co"];
  }

  if (msg === "2") {
    banco.db[user].stage = 22;
    return ["*1* - Está dando erro na *hora da ativação*\n*2* - Está dando erro na *hora da leitura*\n*3* -  Está dando *código inválido* no app"];
  }

  if (msg === "3") {
    banco.db[user].stage = "ynpattern";
    return ["Aqui está:\n\nApp iOS: https://apps.apple.com/us/app/tinglee/id1539299377\nApp Android: https://play.google.com/store/apps/details?id=com.apptinglee\n\nCertifique-se que seu celular é compatível na lista: shop.tinglee.co/pages/celulares-compativeis\nCaso não seja compatível faça esse processo com outro celular que esteja na lista.\n\nNão se preocupe pois depois da ativação o Tinglee não depende mais do celular\n\n*1* - Isso resolveu\n*2* - Isso não resolveu\n*#* - Para finalizar seu atendimento"];
  }
  
  if (msg === "4") {
    banco.db[user].stage = 0;
    return ["Certo, neste momento você encosta seu Tinglee na parte *traseira central* do seu celular! Verifique se seu NFC está ativado nas configurações do celular (Na aba Tutorial dentro do app mostra onde está essa opção).\nCaso não aconteça nada mesmo assim, envie um email com o assunto *Preparado para ativar* e seu problema\ncontato@tinglee.co"];
  }

  if (msg === "4") {
    banco.db[user].stage = 0;
    return ["Certo, neste momento você encosta seu Tinglee na parte *traseira central* do seu celular! Verifique se seu NFC está ativado nas configurações do celular (Na aba Tutorial dentro do app mostra onde está essa opção).\nCaso não aconteça nada mesmo assim, envie um email com o assunto *Preparado para ativar* e seu problema\ncontato@tinglee.co"];
  }

  if (msg === "#") {
    banco.db[user].stage = 0;
    return ["A Tinglee agradece seu contato, tenha um ótimo dia!\n\nCaso queira iniciar outro atendimento envie *Oi*"];
  }

  if (msg === "!") {
    banco.db[user].stage = "botoff";
    return ["Robô desativado! Caso queira finalizar o atendimento ou voltar ao início digite *#*"]
  }

  if (msg !== '1' && msg !== '2' && msg !== '3' && msg !== '4' && msg !== '#' && msg !== '!') {
    return ["Desculpe não entendi, responda apenas com um caractere de número. *Ex: 1*\nCaso eu não possa te ajudar envie um email para contato@tinglee.co para que um *humano* possa te atender ;)\n\n*#* - Caso queira finalizar o atendimento ou *voltar ao início*"];
  }
}

exports.execute = execute;

