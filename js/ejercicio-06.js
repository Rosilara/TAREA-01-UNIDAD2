const numero = parseInt(prompt("Ingresa un número:"));

console.log(`Los divisores del numero  ${numero} son:`);

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    console.log(i);
  }
}
