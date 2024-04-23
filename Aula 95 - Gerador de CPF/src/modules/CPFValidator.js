export default class CPFValidator {
  constructor(cpfSent) {
    Object.defineProperty(this, "cleanCPF", {
      value: cpfSent.replace(/\D+/g, ""),
      writable: false,
      configurable: false,
      enumerable: true,
    });
  }

  isSequence() {
    return this.cleanCPF.charAt(0).repeat(11) === this.cleanCPF;
  }

  generateNewCPF() {
    const cpfSemDig = this.cleanCPF.slice(0, -2);
    const dig1 = CPFValidator.generateDig(cpfSemDig);
    const dig2 = CPFValidator.generateDig(cpfSemDig + dig1);

    this.newCPF = cpfSemDig + dig1 + dig2;
  }

  static generateDig(cpfSemDig) {
    const cpfArray = Array.from(cpfSemDig);

    let regress = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
      ac += regress * Number(val);
      regress--;
      return ac;
    }, 0);

    const dig = 11 - (total % 11);
    return dig > 9 ? "0" : String(dig);
  }

  validate() {
    if (!this.cleanCPF) return false;
    if (typeof this.cleanCPF !== "string") return false;
    if (this.cleanCPF.length !== 11) return false;
    if (this.isSequence()) return false;
    this.generateNewCPF();

    return this.newCPF === this.cleanCPF;
  }
}