const path = require("path");
const filePath = path.resolve(__dirname, "teste.json");
const write = require("./modules/write");
const read = require("./modules/read");

const pessoas = [
  { nome: "Renato" },
  { nome: "Guilherme" },
  { nome: "Jhony" },
  { nome: "Cotoco" },
];
const json = JSON.stringify(pessoas, "", 2);
write(filePath, json);

async function readFile(filePath) {
  const data = await read(filePath);
  renderData(data);
}


function renderData(datas) {
  const data = JSON.parse(datas)
  
  data.forEach(element => console.log(element));
}  

readFile(filePath);
