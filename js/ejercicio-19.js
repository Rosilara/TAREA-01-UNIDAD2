const numero = parseInt(prompt("Ingresa un número:"));
let sumadivisores = 0;

for (let i = 1; i < numero; i++) {
  if (numero % i === 0) {
    sumadivisores += i;
  }
}

if (sumadivisores === numero) {
  console.log(`${numero} es un número perfecto.`);
} else {
  console.log(`${numero} no es un número perfecto.`);
}
