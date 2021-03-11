const banco = require("../banco");
const stages = require("../stages");
const tards = require("./module");
const usertards = require("../index");

function execute(user, msg, usertards) {
  if (msg === "#") {
    banco.db[user].stage = 0;
    tards.gt = 0;
    return ["A Tinglee agradece seu contato, tenha um ótimo dia!\n\nCaso queira iniciar outro atendimento envie *Oi*"];
  }

  if (msg !== "#") {
    tards.gt = 1;
  }
}

exports.execute = execute;

