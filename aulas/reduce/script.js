const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27, 50]

//1. Some todos os números do array (reduce)
const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor
  return acumulador
}, 0)
console.log(total)
//--------------------------------------------------------
//2. Retorne um array com os pares (filter)
const pares = numeros.reduce(function (acumulador, valor, indice, array) {
  if (valor % 2 === 0) acumulador.push(valor)
  return acumulador
}, [])
console.log(pares)
//--------------------------------------------------------
//3. Retorne um array com o dobro dos valores (map)
const dobro = numeros.reduce(function (acumulador, valor) {
  acumulador.push(valor * 2)
  return acumulador
}, [])
console.log(dobro)

//Retorne a pessoa mais velha

const pessoas = [
  { nome: 'luiz', idade: 62 },
  { nome: 'joao', idade: 52 },
  { nome: 'maria', idade: 42 },
  { nome: 'matheus', idade: 32 },
  { nome: 'agnes', idade: 26 }
]
const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador
  return valor
})

console.log(maisVelha)
