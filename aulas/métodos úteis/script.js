const produto = { nome: 'Produto', preco: 1.8 }
const caneca = Object.assign({}, produto, { material: 'procelana' })

caneca.nome = 'Outro nome'
caneca.preco = 2.5
console.log(produto)
console.log(caneca)
//-----------------------------------------------------

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) //esse método retorna um descritor de propriedades para uma propriedade (isto é, uma diretamente presente, e não pertencente ao objeto por força da cadeia de protótipo do objeto) de um dado objeto

console.log(Object.values(produto)) //Esse método retorna um array com os valores das propriedades de um dado objeto, na mesma ordem provida pelo "for...in" laço (sendo a diferença que o laço for-in também enumera as propriedades na cadeia prototype)

console.log(Object.entries(produto)) //Esse método retorna uma array dos próprios pares "[key, value]" enumeráveis d eum dado objeto, na mesma ordem dos objetos providos através do loop "for..in" (sendo a diferença que o for-in loop enumera também propriedades dispostas na cadeia de prototipagem - prototype chain)
