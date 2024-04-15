class ValidateForm {
  constructor() {
    this.form = document.querySelector(".form");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.validateFields();
    const validPassword = this.validatePasswords();

    if(validFields && validPassword) {
      alert('Formulário enviado');
      this.form.submit();
    }
  }

  validateFields() {
    let valid = true;

    this.form.querySelectorAll(".error-text").forEach((e) => {
      e.remove();
    });

    for (let field of this.form.querySelectorAll(".validate")) {
      if (!field.value) {
        const label = field.previousElementSibling.innerText;
        this.createError(field, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if (field.classList.contains("user")) {
        if (!this.validateCPF(field)) valid = false;
      }

      if (field.classList.contains("cpf")) {
        if (!this.validateCPF(field)) valid = false;
      }
    }

    return valid;
  }

  validateUser(field) {
    let isValid = true;
    if (field.value.length < 3 || field.value.length > 12) {
      this.createError(field, "Usuário precisa ter entre 3 e 12 caracteres");
      isValid = false;
    }

    if (field.value.match(/^[a-zA-z0-9]+$/g)) {
      this.createError(
        field,
        "Nome de Usuário precisa conter apenas letras e números"
      );
      isValid = false;
    }

    return true;
  }

  validateCPF(field) {
    const cpfValidator = new CPFValidator(field.value);

    if (!cpfValidator.validate()) {
      this.createError(field, "CPF inválido");
      return false;
    }
    return true;
  }

  validatePasswords() {
    let valid = true;

    const password = this.form.querySelector(".password");
    const rePassword = this.form.querySelector(".re-password");

    if (password.value !== rePassword.value) {
      this.createError(password, "As senhas não coincidem");
      this.createError(rePassword, "As senhas não coincidem");
      valid = false;
    }
    if (password.value.length < 6 || password.value.length > 12) {
      this.createError(
        password,
        "Senhas precisam estar entre 6 e 12 caracteres."
      );
      valid = false;
    }

    return valid;
  }

  createError(field, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    field.insertAdjacentElement("afterend", div);
  }
}

const validaForm = new ValidateForm();
