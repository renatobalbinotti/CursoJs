function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => this.pressionaTeclado();

  this.pressionaTeclado = () => {
    document.addEventListener("keypress", (e) => {
      const listKey = ["+", "-", "*", "/", "(", ")"];

      if (listKey.includes(e.key)) this.display.value += e.key;
      if (e.key >= 0 && e.key <= 9) this.display.value += String(e.key);
      if (e.keyCode === 13) this.realizaConta();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Delete") this.ApagaUm();
      if (e.keyCode === 8) this.clearDisplay();
    });

    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) this.btnParaDisplay(el.innerText);
      if (el.classList.contains("btn-clear")) this.clearDisplay();
      if (el.classList.contains("btn-del")) this.ApagaUm();
      if (el.classList.contains("btn-eq")) this.realizaConta();

      this.display.focus();
    });
  };

  this.btnParaDisplay = (valor) => (this.display.value += valor);

  this.clearDisplay = () => (this.display.value = "");

  this.apagaUm = () => (this.display.value = this.display.value.slice(0, -1));

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if (!conta) {
        alert("Conta inválida!");
        return;
      }

      this.display.value = String(conta);
    } catch (err) {
      alert(`Conta inválida!`);
      return;
    }
  };
}

const calculadora = new Calculadora().inicia();
