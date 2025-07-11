
const entrada = prompt("Ingresa varias palabras separadas por coma: ");

const arreglo = entrada.split(",").map(function(valor) {
  return parseFloat(valor);
});

console.log("Array:");
console.log(arreglo);
