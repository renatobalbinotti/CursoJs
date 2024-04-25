import generatePassword  from "./generators.js";

const passwordGenerated = document.querySelector(".generated-password");
const maxCharacters = document.querySelector(".maxCharacters");
const chk_addNumbers = document.querySelector(".chk_addNumbers");
const chk_capitalLetters = document.querySelector(".chk_capitalLetters");
const chk_smallLetters = document.querySelector(".chk_smallLetters");
const chk_symbolLetters = document.querySelector(".chk_symbolLetters");
const btn_generatePassword = document.querySelector(".btn_generatePassword");

export default () => {
  btn_generatePassword.addEventListener("click", async (e) => {
    e.preventDefault();

    if (maxCharacters.value <= 0) alert('Informe um tamanho máximo para a geração da senha!');

    passwordGenerated.innerHTML = generatePassword(
      maxCharacters.value,
      chk_capitalLetters.checked,
      chk_smallLetters.checked,
      chk_addNumbers.checked,
      chk_symbolLetters.checked
    );
  });
};
