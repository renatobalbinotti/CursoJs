function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") return reject("CAI NO ERRO");

    setTimeout(() => {
      return resolve(msg.toUpperCase() + " Passei na Promise");
    }, time);
  });
}

function randomNumber(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

wait("Frase 1", randomNumber(1, 2))
  .then((resp) => {
    console.log(resp);
    return wait("Frase 2", randomNumber(1, 2));
  })
  .then((resp) => {
    console.log(resp);
    return wait("Frase 3", randomNumber(1, 2));
  })
  .then((resp) => {
    console.log(resp);
  })
  .finally((event) => {})
  .catch((err) => {
    console.log("Error: " + err);
  });

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
  wait("Promise 2", 3000),
  wait("Promise 3", 7000),
  wait("Promise 4", 2000),
];

/* Promise.all - Retorna todas as promises */
Promise.all(promises)
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

/* Promise.race - retorna a primeira promise a ser executada */
Promise.race(promises)
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.log(err);
  });

function baixaPagina() {
  let inCache = false;

  if (inCache) {
    return Promise.reject("Página em cache");
  }
  return wait("Baixei a Página", 3000);
}

baixaPagina()
  .then((resp) => console.log(resp))
  .catch((err) => console.log("Erro", err));
