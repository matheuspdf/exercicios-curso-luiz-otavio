//O método Object.defineProperty() define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um obj, e retorna o objeto

function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    value: estoque, //valor
    writable: true, //pode alterar?
    configurable: true //pode reconfigurar a chave?
  })

  //o método Object.defineProperties() define uma nova propriedade ou modifica uma existente no objeto, retornando o objeto

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    },
    preco: {
      enumerable: true,
      value: nome,
      writable: true,
      configurable: true
    }
  })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
