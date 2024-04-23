import "./assets/css/style.css";
import CPFGenerator from "./modules/CPFGenerator";

(function () {
  const generator = new CPFGenerator();
  const generatedCPF = document.querySelector(".generated-cpf");

  generatedCPF.innerHTML = generator.generateNewCPF();
})();
