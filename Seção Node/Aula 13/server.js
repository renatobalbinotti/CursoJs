const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(
  express.urlencoded({
    extended: true,
  }),
  express.static(path.resolve(__dirname, "public")),
  middlewareGlobal,
  routes,
);

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
