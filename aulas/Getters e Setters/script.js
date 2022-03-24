function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  let estoquePrivado = estoque
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //mostra a chave
    // value: estoque, //valor
    // writable: true, //pode alterar?
    configurable: true, //pode reconfigurar a chave?
    get: function () {
      return estoquePrivado
    },
    set: function (valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('erro')
      }
    }
  })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1.estoque)
