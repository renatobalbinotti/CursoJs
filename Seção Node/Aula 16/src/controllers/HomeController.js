exports.paginaInicial = (req, res) => {
  res.render("index", {
    // titulo: 'Este será o <span style="color: red;">título</span> da página', 
    numeros: [0, 1, 2, 3, 4, 5]
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
