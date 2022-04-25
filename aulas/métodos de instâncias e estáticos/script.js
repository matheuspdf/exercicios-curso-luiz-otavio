class ControleRemoto {
  constructor(tv) {
    this.tv = tv
    this.volume = 0
  }
  //MÉTODO DE INSTÂNCIA
  aumentarVolume() {
    this.volume += 2
  }
  diminuirVolume() {
    this.volume -= 2
  }
  //MÉTODO ESTÁTICO
  static soma(x, y) {
    console.log(this)
  }
}

const controle = new ControleRemoto('LG')
ControleRemoto.soma()
