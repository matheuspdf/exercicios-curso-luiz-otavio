const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p', 'h1')

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)
for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody
  p.style.color = '#FFFFFF'
}
