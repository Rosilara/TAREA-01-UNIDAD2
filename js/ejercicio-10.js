const angulo1 = parseFloat(prompt("Ingresa el primer ángulo:"));
const angulo2 = parseFloat(prompt("Ingresa el segundo ángulo:"));
const angulo3 = parseFloat(prompt("Ingresa el tercer ángulo:"));

const sumaangulos = angulo1 + angulo2 + angulo3;

if (sumaangulos === 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  console.log("El triángulo es válido.");
} else {
  console.log("El triángulo no es válido.");
}
