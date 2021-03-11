const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {
  if (msg === "1") {
    banco.db[user].stage = 1;
    return ["Ok, este é o link da lista de Celulares Compatíveis: shop.tinglee.co/pages/celulares-compativeis\nCertifique-se que o celular que está tentando ler é compatível e que esteja com o NFC ativado!\nCaso não seja compatível, não se preocupe pois é possível passar seu perfil Tinglee com o *Código QR* presente na parte superior direita do seu perfil ;)\n\n*1* - A notificação aparece mas não está abrindo meu perfil\n*2* - iPhone 7/8/X não está lendo\n*#* - Para finalizar seu atendimento ou voltar ao início"];
  }

  if (msg === "2") {
    banco.db[user].stage = 2;
    return ["Certo, o processo de ativação deve ser feito uma única vez em um celular compatível presente nesse link: shop.tinglee.co/pages/celulares-compativeis\n\nVocê pode também acessar esse tutorial em vídeo: https://www.youtube.com/watch?v=wGkqa0Op14g&t=213s.\n\n*1* - Não recebi o *código de cadastro*\n*2* - Está aparecendo um *erro* na tela\n*3* - Não estou achando o app Tinglee\n*#* - Para finalizar seu atendimento ou voltar ao início"];
  }

  if (msg === "3") {
    banco.db[user].stage = 0;
    return ["Ok, aqui está um link com as perguntas mais frequentes shop.tinglee.co/pages/faq\n\nCaso sua pergunta não tenha sido respondida no link, certifique-se que eu não possa te ajudar e mande um email para nós com sua dúvida!\n\nemail: contato@tinglee.co"];
  }
  
  if (msg === "4") {
    banco.db[user].stage = "ynpattern";
    return ["Ok, para recuperar seu perfil vá em nosso app e aperte *Esqueci minha senha*, depois em *Recuperar dados* e insira o email utilizado para o cadastro, enviaremos um email automático com o seu nome de usuário e seu código caso queira mudar a senha\n\n*1* - Isso resolveu\n*2* - Isso não resolveu\n*#* - Para finalizar seu atendimento"];
  }

  if (msg === "5") {
    banco.db[user].stage = 0;
    return ["Certo, nosso canal de atendimento para tratar sobre isso é pelo email: atacado@tinglee.co\nSó nos chamar que assim que possível responderemos seu contato ;)\nMuito obrigado futuro parceiro(a)!"];
  }

  if (msg === "6") {
    banco.db[user].stage = 0;
    return ["Você pode pegar seus códigos em nosso site www.apptinglee.com/meus_tinglees\nÉ só colocar o email em que foi feita a compra!\nCaso esteja faltando algum ou dê algum erro nos avise em nosso email ;)\n\nemail: contato@tinglee.co"];
  }

  if (msg === "7") {
    banco.db[user].stage = 7;
    return ["*1* - Meu pedido só marca como *objeto postado*\n*2*  - Meu pedido marca como entregue mas *não chegou*\n*3* - Tentei em vários celulares e *não pegou*\n*4* - Gostaria de saber se meu celular é *compatível*\n*5* - Não estou achando o *app para ativar* o Tinglee\n*6* - Gostaria de saber sobre o *andamento do meu pedido*\n*7* - Meu email *não foi respondido*\n*8* - Outro\n*#* - Para finalizar seu atendimento ou voltar ao início"];
  }

  if (msg === "#") {
    banco.db[user].stage = 0;
    return ["A Tinglee agradece seu contato, tenha um ótimo dia!\n\nCaso queira iniciar outro atendimento envie *Oi*"];
  }

  if (msg === "!") {
    banco.db[user].stage = "botoff";
    return ["Robô desativado! Caso queira finalizar o atendimento ou voltar ao início digite *#*"]
  }

  if (msg === "Hola" ) {
    banco.db[user].stage = "menues";
    return ["Hola, que tal?"];
  }

  if (msg !== '1' && msg !== '2' && msg !== '3' && msg !== '4' && msg !== '5' && msg !== '6' && msg !== '7' && msg !== '#' && msg !== '!') {
    return ["Desculpe não entendi, responda apenas com um caractere de número. *Ex: 1*\nCaso eu não possa te ajudar envie um email para contato@tinglee.co para que um *humano* possa te atender ;)\n\n*#* - Caso queira finalizar o atendimento ou *voltar ao início*"];
  }
}

exports.execute = execute;
