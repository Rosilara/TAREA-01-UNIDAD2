const n = parseInt(prompt("Ingresa el primer número (N):"));
const m = parseInt(prompt("Ingresa el segundo número (M):"));

let primero= Math.min(n, m);
let ultimo= Math.max(n, m);
let sumapares = 0;

while (primero <= ultimo) {
  if (primero % 2 === 0) {
    sumapares += primero;
  }
  primero++;
}

console.log(`La suma de los números pares entre ${n} y ${m} es: ${sumapares}`);
