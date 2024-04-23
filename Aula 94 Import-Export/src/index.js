import soma from "./modulo1";
// import * as Modulo1 from "./modulo1"; Maneira de exportar tudo sobre o modulo1.js
import { nome } from "./modulo1";
import { sobrenome as segundoNome } from "./modulo1";
import { nome as alias2, sobrenome as alias3, idade } from "./modulo1";
import soma2, * as outroModulo from "./modulo1";

const p1 = new Pessoa("Jhonathan", "Eduardo");

console.log(p1);

console.log(nome);
console.log(outroNome);
console.log(sobrenome);
console.log(idade);
console.log(soma(5, 5));
