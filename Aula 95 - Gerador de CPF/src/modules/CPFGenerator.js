import CPFValidator from "./CPFValidator.js";

export default class CPFGenerator {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  generateNewCPF() {
    const CPFWithoutDigit = this.rand();
    console.log(CPFWithoutDigit);
    const digit1 = CPFValidator.generateDig(CPFWithoutDigit);
    const digit2 = CPFValidator.generateDig(CPFWithoutDigit + digit1);
    const newCPF = CPFWithoutDigit + digit1 + digit2;

    return this.format(newCPF);
  }

  format(cpf) {
    return (
      cpf.slice(0, 3) +
      "." +
      cpf.slice(3, 6) +
      "." +
      cpf.slice(6, 9) +
      "-" +
      cpf.slice(9, 11)
    );
  }
}
