//para funções criadas com a palavra function, existe o arguments que sustenta todos os argumentos
function funcao() {
  let total = 0
  for (let argumento of arguments) {
    total += argumento
  }

  console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
