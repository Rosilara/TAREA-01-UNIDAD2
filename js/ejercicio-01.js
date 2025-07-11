const numero1 = parseFloat(prompt('Ingrese el primer numero'));
console.log(numero1)

const numero2= parseFloat(prompt('Ingrese el segundo numero'));
console.log(numero2)


if (numero1 > numero2) {
  console.log(`${numero1} es mayor que ${numero2}`);
} else if (numero2 > numero1) {
  console.log(`${numero2} es mayor que ${numero1}`);
} else {
  console.log("Ambos números son iguales.");
}