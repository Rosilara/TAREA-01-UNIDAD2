const numero = parseInt(prompt("Ingresa un número:"));

if (numero % 5 === 0) {
  console.log(`El numerom ${numero} es divisible por 5.`);
} else {
  console.log(`El numero ${numero} no es divisible por 5.`);
}
