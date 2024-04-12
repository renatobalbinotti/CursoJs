class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  static trocaPilha() {
    console.log("Ok, vou trocar");
  }
}

const c1 = new ControleRemoto("LG");
c1.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(c1);
