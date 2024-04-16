function waitHere(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(false);

    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

function randomNumber(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

waitHere("Frase 1", randomNumber(1, 2))
  .then((resp) => {
    console.log(resp);
    return waitHere(222, randomNumber(1, 2));
  })
  .then((resp) => {
    console.log(resp);
    return waitHere("Frase 3", randomNumber(1, 2));
  })
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.log("Error: " + err);
  });
