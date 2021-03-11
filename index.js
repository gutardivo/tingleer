// Supports ES6
// import { create, Whatsapp } from 'sulla';
const bot = require("venom-bot");
const banco = require("./banco");
const stages = require("./stages");
const tards = require("./stages/module");

bot.create().then((client) => start(client));
function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(
      message.from,
      message.body,
      message.sender.name
    );
    if ((getStage(message.from)) == 'botoff') {
      if (tards.gt == 1) {
        client.sendText("5511937159975@c.us", message.from +' disse: ' + message.body);
      }
    }
    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      client.sendText(message.from, element);
      if ((getStage(message.from)) == 'botoff') {
        client.sendText("5511937159975@c.us", message.from +' chamando!');
      }
    }
  });
  client.onIncomingCall(async (call) => {
    console.log(call);
    client.sendText(call.peerJid, "📞❌ Desculpe, ainda não posso atender chamadas!");
  });
}

function getStage(user) {
  if (banco.db[user]) {
    //Se existir esse numero no banco de dados
    return banco.db[user].stage;
  } else {
    //Se for a primeira vez que entra e contato
    banco.db[user] = {
      stage: 0,
      itens: [],
    };
    return banco.db[user].stage;
  }
}
