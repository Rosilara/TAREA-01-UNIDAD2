const numero = parseInt(prompt("Ingresa un número para mostrar su tabla de multiplicar:"));
let i = 1;

while (i <= 12) {
  console.log(`${numero} x ${i} = ${numero * i}`);
  i++;
}
