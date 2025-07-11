const números = [];
const num= parseInt(prompt("Ingrese la cantidad de números que quier generar"));

for (let i = 0; i < num; i++) {
  const aleatorio = Math.floor(Math.random() * 100); // entre 1 y 100
  números.push(aleatorio);
}

console.log(`Se generaron ${num} números aleatorios:`);
console.log(números);

