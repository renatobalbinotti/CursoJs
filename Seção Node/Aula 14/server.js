require('dotenv').config();

const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.connectionString)
  .then(() => {
    console.log("Conectei na base");
    app.emit("pronto");
  })
  .catch((e) => console.error(e));

app.use(
  express.urlencoded({
    extended: true,
  }),
  express.static(path.resolve(__dirname, "public")),
  middlewareGlobal,
  routes
);

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});
