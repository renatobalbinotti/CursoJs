require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    console.log("Conectei na base");
    app.emit("pronto");
  })
  .catch((e) => console.error(e));

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const routes = require("./routes");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");

const sessionOptions = session({
  secret: "Renatinho",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(
  express.urlencoded({
    extended: true,
  }),
  express.static(path.resolve(__dirname, "public")),
  middlewareGlobal,
  sessionOptions,
  flash(),
  routes
);

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});
