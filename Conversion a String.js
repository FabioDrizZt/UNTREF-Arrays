const frutas = ['anana', 'pera', 'sandia', 'pera']
const frutasEnString =
  frutas[0] + ', ' + frutas[1] + ', ' + frutas[2] + ', ' + frutas[3]
console.log(frutasEnString) // anana, pera, sandia, pera
console.log(frutas.join())
console.log(frutas.join(', '))
console.log(frutas.join(' - '))
