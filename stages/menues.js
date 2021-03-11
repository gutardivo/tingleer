const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {
  if (msg === "1") {
    banco.db[user].stage = 1;
    return [
      '1 - Isso resolveu!\n2 - Isso não resolveu!\n3 - A notificação aparece mas não está abrindo meu perfil\n# - Para finalizar seu atendimento',
      'Ok, este é o link da lista de Celulares Compatíveis: www.tinglee.co/pages/celulares-compativeis\nCertifique-se que o celular que está tentando ler é compatível e que esteja com o NFC ativado!',
    ];
  }

  if (msg === "2") {
    banco.db[user].stage = 2;
    return [
      '1 - Isso resolveu!\n2 - Isso não resolveu!\n3 - Não recebi o *código de ativação*\n# - Para finalizar seu atendimento',
      'Certo, o processo de ativação deve ser feito uma única vez em um celular compatível presente nesse link: www.tinglee.co/pages/celulares-compativeis\n\nVocê pode também acessar esse tutorial em vídeo: https://www.youtube.com/watch?v=lm0khPSkYkA&t=86s.\n\n_Alguns Androids o app pode ser diferente do vídeo, portanto o passo a passo seria: *Write tags > New dataset > Link > Save & Write > Write*_',
    ];
  }

  if (msg === "3") {
    banco.db[user].stage = 3;
    return [
      '1 - Isso resolveu!\n2 - Isso não resolveu!\n# - Para finalizar seu atendimento',
      'Ok, aqui está um link com as perguntas mais frequentes www.tinglee.co/pages/faq',
    ];
  }

  if (msg === "4") {
    banco.db[user].stage = "botoff";
    return ["Ok, nos mande o *email e nome* utilizado para recuperarmos para você assim que possível!\nCaso queira finalizar o atendimento *digite #*"];
  }

  if (msg === "5") {
    banco.db[user].stage = 0;
    return ["Certo, nosso canal de atendimento para tratar sobre isso é pelo email: contato.tinglee@gmail.com\nSó nos chamar que assim que possível responderemos seu contato ;)\nMuito obrigado futuro parceiro!"];
  }

  if (msg === "6") {
    banco.db[user].stage = 6;
    return ["1 - Meu pedido só marca como objeto postado\n2  - Meu pedido marca como entregue mas não chegou\n3 - Tentei em vários celulares e não pegou\n4 - Outro\n# - Para finalizar seu atendimento"];
  }

  if (msg === "#") {
    banco.db[user].stage = 0;
    return ["A Tinglee agradece seu contato, tenha um ótimo dia!"];
  }

  if (msg !== '1' && msg !== '2' && msg !== '3' && msg !== '4' && msg !== '5' && msg !== '#') {
    return [
      "Desculpe não entendi, responda apenas com um caractere de número. *Ex: 1*\nCaso eu não possa te ajudar envie um email para contato@tinglee.co com sua questão ;)",
    ];
  }
}

exports.execute = execute;
