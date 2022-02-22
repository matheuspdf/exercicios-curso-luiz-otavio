// Uma função que recebe um número e retorna o seguinte:
// número divisível por 3 = fizz
// número divisível por 5 = Buzz
// número divisível por 3 e por 5 = fizzBuzz
// numero não divisivel por 3 e 5 = retorna o proprio numero
// função com numeros de 0 a 100
function fizzBuzz(numero) {
  if (typeof numero !== 'number') return numero
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
  if (numero % 3 === 0) return 'Fizz'
  if (numero % 5 === 0) return 'Buzz'
  return numero
}

console.log('a', fizzBuzz('a'))
for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i))
}
