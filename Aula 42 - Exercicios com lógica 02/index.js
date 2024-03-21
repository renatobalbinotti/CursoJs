/**
 * Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
 * Retorne true se a imagem estiver no modo paisagem;
 */ 
 
const ePaisagem = (larg = 0, alt = 0) => larg > alt;

console.log(ePaisagem(1920, 1080));