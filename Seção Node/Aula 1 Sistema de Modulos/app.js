/* const mod1 = require("./mod1");
// const falaNome = require("./mod1").falaNome;

const { nome, sobrenome, falaNome } = require("./mod1");

console.log(mod1);
console.log(sobrenome, nome);
console.log(falaNome()); */

const path = require("path");
const axios = require("axios");
const { Pessoa } = require("./mod1");
const mod1 = require("./mod1");

axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
  .then((response) => console.log(response.data))
  .catch((e) => console.log(e));
