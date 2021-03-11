var stages = {
  0: {
    descricao: "Início",
    obj: require("./stages/0"),
  },
  menu: {
    descricao: "Boas Vindas",
    obj: require("./stages/menu"),
  },
  1: {
    descricao: "Leitura Tinglee",
    obj: require("./stages/1"),
  },
  2: {
    descricao: "Ativação",
    obj: require("./stages/2"),
  },
  22: {
    descricao: "Erros de Tela",
    obj: require("./stages/22"),
  },
  3: {
    descricao: "Dúvidas",
    obj: require("./stages/3"),
  },
  4: {
    descricao: "Link",
    obj: require("./stages/4"),
  },
  5: {
    descricao: "Orçamento",
    obj: require("./stages/5"),
  },
  6: {
    descricao: "Code",
    obj: require("./stages/6"),
  },
  7: {
    descricao: "Outro",
    obj: require("./stages/7"),
  },
  73: {
    descricao: "",
    obj: require("./stages/73"),
  },
  74: {
    descricao: "",
    obj: require("./stages/74"),
  },
  ynpattern: {
    descricao: "Resolveu ou não?",
    obj: require("./stages/ynpattern"),
  },
  botoff: {
    descricao: "Atendente",
    obj: require("./stages/botoff"),
  },
};

exports.step = stages;
