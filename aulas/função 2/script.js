// Exercício 1: Escrever uma função que recebe dois argumentos, largura e altura de uma imagem. Retorne true se a imagem estiver no modo paisagem.
// A.
function ePaisagem(largura, altura) {
  return largura > altura
}
console.log(ePaisagem(1920, 1080))

//-----------------------------
//B.
const ePaisagem = (largura, altura) => largura > altura
console.log(ePaisagem(1080, 1920))
