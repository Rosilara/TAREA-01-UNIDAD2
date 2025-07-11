const primero = parseInt(prompt("Ingresa el primer número:"));
const  ultimo = parseInt(prompt("Ingresa el segundo número:"));

let sumapares = 0;
for (let i = Math.min(primero, ultimo); i <= Math.max(n4, m4); i++) {
  if (i % 2 === 0) {
    sumapares += i;
  }
}
console.log(`La suma de pares entre ${primero} y ${ultimo} es: ${sumapares}`);
