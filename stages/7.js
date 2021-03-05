const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {
  if (msg === "1") {
    banco.db[user].stage = 0;
    return ["Ah sim, isso se deve pois a modalidade que enviamos só possui 3 etapas: Objeto postado > Entrega saiu para o destinatário > Objeto entregue.\nMas não se preocupe, seu Tinglee já está a caminho ;)"];
  }

  if (msg === "2") {
    banco.db[user].stage = "ynpattern";
    return ["Ok, geralmente a carta fica com o porteiro ou algum vizinho, peço para que verifique, caso não esteja com nenhum desses sugiro que abra um chamado nos Correios pelo link: https://apps2.correios.com.br/faleconosco/app/cadastro/reclamacao/index.php?codigo=NDYz\nE também se possível pergunte para a agência mais próxima de sua residência se estão entregando carta na sua região, e para reportar o ocorrido.\n\n_Dados do Remetente: *Nome:* Tinglee Co. *CNPJ:* 34.754.154/0001-90_\n\n*1* - Isso resolveu\n*2* - Isso não resolveu\n*#* - Para finalizar seu atendimento"];
  }

  if (msg === "3") {
    banco.db[user].stage = 73;
    return ["Ok, certifique-se que os celulares que esteja usando estão em nossa lista de celulares compatíveis: shop.tinglee.co/pages/celulares-compativeis\nLembre-se que alguns Androids precisam estar com o NFC ativo e iPhones 7/8/X precisam do Leitor de Etiqueta na central de controle, assim como especificado no site acima.\n\nCaso isso não resolva nos contate por email: contato@tinglee.co\n\n1 - A notificação aparece mas não está abrindo meu perfil\n# - Para finalizar seu atendimento ou voltar ao início"];
  }

  if (msg === "4") {
    banco.db[user].stage = 0;
    return ["Claro, nossa lista de celulares compatíveis está aqui: shop.tinglee.co/pages/celulares-compativeis\n\nCaso seu celular não esteja na lista nos envie um email solicitando para verificar se seu celular é compatível ou não!"];
  }

  if (msg === "5") {
    banco.db[user].stage = "ynpattern";
    return ["Aqui está:\n\nApp iOS: https://apps.apple.com/us/app/tinglee/id1539299377\nApp Android: https://play.google.com/store/apps/details?id=com.apptinglee\n\nCertifique-se que seu celular é compatível na lista: shop.tinglee.co/pages/celulares-compativeis\nCaso não seja compatível faça esse processo com outro celular que esteja na lista.\n\nNão se preocupe pois depois da ativação o Tinglee não depende mais do celular\n\n*1* - Isso resolveu\n*2* - Isso não resolveu\n*#* - Para finalizar seu atendimento"];
  }

  if (msg === "6") {
    banco.db[user].stage = 0;
    return ["Nossas remessas acontecem entre *terça e quarta-feira* por conta da pandemia para pedidos aprovados até sábado (boletos demoram até 48h para serem aprovados) e enviamos um email para cada atualização do seu pedido, caso não esteja recebendo verifique se há algo na *caixa de spam*.\n\nCaso não tenha nada no spam, nos envie por email com o assunto *Andamento do Pedido*, assim podemos verificar se o email informado está correto e te dar mais informações ;)\n\nemail: contato@tinglee.co"];
  }

  if (msg === "7") {
    banco.db[user].stage = 0;
    return ["Ok, antes de mais nada, certifique-se que eu não possa te ajudar. Caso queira voltar para o início digite *Oi*.\n\nSe realmente não puder te ajudar, envie o que precisar via email (contato@tinglee.co)"];
  }

//Ok, antes de mais nada, certifique-se que eu não possa te ajudar. Caso queira voltar para o início digite *#* e depois *Oi*.\n\nSe realmente não puder te ajudar, aguarde até que um de nossos atendentes esteja disponível para te atender.

  if (msg === "#") {
    banco.db[user].stage = 0;
    return ["A Tinglee agradece seu contato, tenha um ótimo dia!\n\nCaso queira iniciar outro atendimento envie *Oi*"];
  }

  if (msg === "!") {
    banco.db[user].stage = "botoff";
    return ["Robô desativado! Caso queira finalizar o atendimento ou voltar ao início digite *#*"]
  }

  if (msg !== '1' && msg !== '2' && msg !== '3' && msg !== '4' && msg !== '5' && msg !== '6' && msg !== '#' && msg !== '!') {
    return ["Desculpe não entendi, responda apenas com um caractere de número. *Ex: 1*\nCaso eu não possa te ajudar envie um email para contato@tinglee.co para que um *humano* possa te atender ;)\n\n*#* - Caso queira finalizar o atendimento ou *voltar ao início*"];
  }
}

exports.execute = execute;
