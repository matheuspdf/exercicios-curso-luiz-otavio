class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ')
    this.nome = valor.shift()
    this.sobrenome = valor.join(' ')
  }
}

const p1 = new Pessoa('Matheus', 'Lopes')
p1.nomeCompleto = 'Matheus Lopes'
console.log(p1.nome)
console.log(p1.sobrenome)
