// Agregar al final de un array --> Push
const frutas = ['Anana', 'Pera', 'Sandia']
console.log(frutas.length)
console.log(frutas.push('Melon'))
console.log(frutas.push('Frutilla', 'Uva'))

// Quitar del final de un array --> Pop
// const frutaExtraida = frutas.pop();
console.log(frutas.pop())
/* console.log(frutas.pop());
console.log(frutas.pop());
console.log(frutas.pop());
console.log(frutas.pop());
console.log(frutas.pop());
// Cuando no quedan elementos saca undefined
console.log(frutas.pop());
console.log(frutas.pop()); */

// Agregar al principio de un array --> Unshift
console.log(frutas)
console.log(frutas.unshift('uva'))

// Quitar del principio de un array --> Shift
console.log(frutas.shift())

// Agregar, Quitar, Reemplazar, todo en uno --> Splice
// Acepta 3 argumentos
// inicio: desde donde comenzamos a cambiar el array
// cantidad a eliminar: numero de elementos que eliminaremos
// elementos a agregar: uno o mas elementos que se agregan desde "inicio"
console.log(frutas)
console.log(frutas.splice(0, 1)) // Lo mismo que un shift
console.log(frutas)
console.log(frutas.splice(-1, 1)) // Lo mismo que un pop
console.log(frutas)
console.log(frutas.splice(0, 0, 'Anana')) // Lo mismo que un unshift
console.log(frutas)
console.log(frutas.splice(frutas.length, 0, 'Frutilla')) // Lo mismo que un push
console.log(frutas)
console.log(frutas.splice(frutas.indexOf('Sandia'), 2, 'Papaya'))
console.log(frutas)
