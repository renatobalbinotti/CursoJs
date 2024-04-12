const pessoas = [
  { id: 3, nome: "Renato" },
  { id: 2, nome: "Guilherme" },
  { id: 1, nome: "Jhonathan" },
];
/* 
  Maneira onde mexe no id, mantendo a ordenação numérica, ex: id 1, 2, 3....
  const novasPessoas = {};
  for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = { ...pessoa };
  } 
*/

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

/* for (const pessoas of novasPessoas.keys()) {
  console.log(pessoas);
} */

console.log(novasPessoas);
