class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      value: cpfEnviado.replace(/\D+/g, ""),
      writable: false,
      configurable: false,
      enumerable: true,
    });
  }

  eSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCPF() {
    const cpfSemDig = this.cpfLimpo.slice(0, -2);
    const dig1 = ValidaCPF.geraDigito(cpfSemDig);
    const dig2 = ValidaCPF.geraDigito(cpfSemDig + dig1);

    this.novoCPF = cpfSemDig + dig1 + dig2;
  }

  static geraDigito(cpfSemDig) {
    const cpfArray = Array.from(cpfSemDig);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += regressivo * Number(val);
      regressivo--;
      return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.eSequencia()) return false;
    this.geraNovoCPF();

    return this.novoCPF === this.cpfLimpo;
  }
}

const validaCPF = new ValidaCPF("673.041.550-94");
if (validaCPF.valida()) return console.log("CPF válido!");
console.log("CPF inválido");
