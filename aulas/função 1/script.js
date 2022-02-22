// Exercício 1: Escrever uma função que receba 2 números e retorne o maior deles.
// A.
function max(x, y) {
  if (x > y) {
    return x
  } else {
    return y
  }
}
console.log(max(1, 9))
//---------------------------------------------
// B.
function max(x, y) {
  return x > y ? x : y
}

console.log(max(10, 90))
//---------------------------------------------
// C.
const max2 = (x, y) => (x > y ? x : y)
console.log(max2(98, 56))
