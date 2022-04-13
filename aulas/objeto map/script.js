const pessoas = [
  { id: 3, nome: 'matheus' },
  { id: 2, nome: 'joao' },
  { id: 1, nome: 'josé' }
]

const novasPessoas = new Map()
for (const pessoa of pessoas) {
  const { id } = pessoa
  novasPessoas.set(id, { ...pessoa })
}

novasPessoas.delete(2)
console.log(novasPessoas)
