// Metodo de ordenación --> sort
const frutas = ['Melon', 'Uva', 'Anana', 'Pera', 'Sandia']
console.log(frutas)
const frutasOrdenadas = [...frutas].sort()
console.log(frutas)
console.log(frutasOrdenadas)

const numeros = [42, 5, 16, 23, 163]
const numerosOrdenados = [...numeros].sort((a, b) => a - b)
console.log(numerosOrdenados)
// Revertir el orden de los elementos en el array --> reverse
console.log(numerosOrdenados.reverse())

const arreglo = ['ámbito', 'árbol', 'banana', 'manzana', 'anana']
console.log(arreglo.sort((a, b) => a.localeCompare(b)))

[ 'Anana','Melon',  'Pera','Sandia', 'Uva']