//Filtrar os pares
//Dobrar os valores
//Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 11, 12, 13, 25, 26, 32]

const numerosA = numeros
  .filter(valor => valor % 2 === 0) //Filtrou
  .map(valor => valor * 2) //Dobrou
  .reduce((ac, valor) => ac + valor) //Reduziu(somou)

console.log(numerosA)
