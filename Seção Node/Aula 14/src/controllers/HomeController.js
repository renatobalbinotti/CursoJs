const HomeModel = require("../models/HomeModel");

HomeModel.create({
  titulo: "Um titulo de testes",
  descricao: "Uma descrição de testes",
})
  .then((resp) => console.log(resp))
  .catch((e) => console.log(eS));

exports.paginaInicial = (req, res) => {
  res.render("index");
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
