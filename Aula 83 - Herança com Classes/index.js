class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  switchOnOff() {
    this.ligado = !this.ligado;
    console.log(`${this.nome} está ` + (this.ligado ? "Ligado" : "Desligado"));
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(marca, cor, modelo) {
    super(marca);
    this.modelo = modelo;
    this.cor = cor;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  switchOnOff() {
    console.log("Você está usando essa função a partir de agora");
  }
}

const s1 = new Smartphone("Motorola", "Azul", "G9 Plus");
console.log(s1);

const t1 = new Tablet("Ipad", true);
t1.switchOnOff();
