function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") return reject("CAI NO ERRO");

    setTimeout(() => {
      return resolve(msg.toUpperCase() + " - Passei na Promise");
    }, time);
  });
}

function randomNumber(min = 0, max = 5) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

async function executa() {
  try {
    const fase1 = await wait("Fase 1", randomNumber(0, 3));
    console.log(fase1);

    const fase2 = await wait("Fase 2", randomNumber(0, 3));
    console.log(fase2);

    const fase3 = await wait("Fase 3", randomNumber(0, 3));
    console.log(fase3);

    console.log("Terminamos na Fase: " + fase3);
  } catch (error) {
    console.log("Erro: " + error);
  }
}

executa();
