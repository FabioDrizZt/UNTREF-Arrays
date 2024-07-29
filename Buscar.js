// Cuando se encuentra devuelve la posición y sino -1
const frutas = ['anana', 'pera', 'sandia', 'pera']
const buscar = 'Pera'
const indice = frutas.indexOf(buscar.toLowerCase())
console.log(indice)
console.log(frutas.lastIndexOf(buscar.toLowerCase()))
console.log(frutas.includes(buscar.toLowerCase()))
console.log(frutas.includes(buscar))
