//Filter sempre retorna um array com a mesma quantidade de elementos ou menos que o original

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27]
const numerosFiltrados = numeros.filter(valor => valor > 10)
console.log(numerosFiltrados)

// --------------------------------------------

//1.Filtrar nomes com mais de 5 letras
//2.Filtrar pessoas com mais de 50 anos
//3.Filtrar nomes que terminam com a letra 'a'

const pessoas = [
  { nome: 'luiz', idade: 62 },
  { nome: 'joao', idade: 52 },
  { nome: 'maria', idade: 42 },
  { nome: 'matheus', idade: 32 },
  { nome: 'agnes', idade: 26 }
]

//1.
const nomeGrande = pessoas.filter(obj => obj.nome.length >= 5)

//2.
const maisDeCinquanta = pessoas.filter(obj => obj.idade >= 50)

//3.
const nomeTerminaComA = pessoas.filter(obj =>
  obj.nome.toLowerCase().endsWith('a')
)

console.log(nomeGrande)
console.log(maisDeCinquanta)
console.log(nomeTerminaComA)
