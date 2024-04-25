const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generatesCapitalLetters = () => String.fromCharCode(rand(65, 91));
const generatesSmallLetters = () => generatesCapitalLetters().toLowerCase();
const generatesNumbers = () => String.fromCharCode(rand(48, 58));
const simbolos = ",.;~^[]{}!@#$%*()_+=-";
const generatesSymbols = () => simbolos[rand(0, simbolos.length)];

export default function generatePassword(
  maxCharacters,
  capitalLetter,
  smallLetter,
  addNumbers,
  symbolLetters
) {
  const passwordArray = [];

  maxCharacters = Number(maxCharacters);
  let randomize = 1;
  while (true) {
    randomize = rand(1, 5);

    capitalLetter &&
      randomize === 1 &&
      passwordArray.push(generatesCapitalLetters());

    smallLetter &&
      randomize === 2 &&
      passwordArray.push(generatesSmallLetters());

    addNumbers && randomize === 3 && passwordArray.push(generatesNumbers());

    symbolLetters && randomize === 4 && passwordArray.push(generatesSymbols());

    if (passwordArray.length >= maxCharacters) break;
  }

  return passwordArray.join("").slice(0, maxCharacters);
}
