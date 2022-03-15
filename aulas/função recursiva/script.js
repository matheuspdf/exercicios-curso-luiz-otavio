function recursiva(max) {
  console.log(max)
  if (max >= 15) return
  max++
  recursiva(max)
}

recursiva(0)
