// const multiplicação = require("./mod");

//console.log(multiplicação(3, 5));
/* 

const Cachorro = require("./z/mod2");
const c1 = new Cachorro("Thor");
c1.latir();

Pra frente ./<pasta>/arquivo.js
Voltar  ../../<pasta>/arquivo.js
*/

/* 
console.log(__filename); Caminho atual até o arquivo
console.log(__dirname); Caminho atual até a pasta
 */

/* 
const path = require("path");
console.log(__dirname);
console.log(path.resolve(__dirname, "..", "..", "arquivos", "imagens"));
 */

const Cachorro = require("./z/mod2.js");
const c2 = new Cachorro("Tobi");
c2.latir();
