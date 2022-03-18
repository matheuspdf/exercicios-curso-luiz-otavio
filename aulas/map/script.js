//O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27]
const numerosDobrados = numeros.map(valor => valor * 2)
// console.log(numerosDobrados)

//Para cada elemento:
const pessoas = [
  { nome: 'luiz', idade: 62 },
  { nome: 'joao', idade: 52 },
  { nome: 'maria', idade: 42 },
  { nome: 'matheus', idade: 32 },
  { nome: 'agnes', idade: 26 }
]

//1. Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome)
// console.log(nomes)

//2. Remova apenas a chave "nome" do objeto
const idades = pessoas.map(obj => ({ idade: obj.idade }))
// console.log(idades)

//3. Adicione uma chave id em cada objeto
const comIds = pessoas.map(function (obj, indice) {
  const newObj = { ...obj }
  newObj.id = indice
  // obj.id = (indice + 1) * 1
  return newObj
})
console.log(pessoas)
