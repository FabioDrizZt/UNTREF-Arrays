const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nrosPares = []
for (let index = 0; index < array.length; index++) {
  if (array[index] % 2 === 0) {
    nrosPares.push(array[index])
  }
}
console.log(nrosPares)
// Calculamos el promedio
let suma = 0
for (let index = 0; index < array.length; index++) {
  suma += array[index]
}
const promedio = suma / array.length
console.log({ suma })
console.log({ promedio })
// Queremos saber que elementos superan el promedio
const superanPromedio = []
for (let index = 0; index < array.length; index++) {
  if (array[index] > promedio) {
    superanPromedio.push(array[index])
  }
}
console.log(superanPromedio)
