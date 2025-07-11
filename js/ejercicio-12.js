
const numeroadivinar = Math.floor(Math.random() * 10) + 1;

const numingresado = parseInt(prompt("Adivina el número (esta entre 1 y 10):"));

if (numingresado=== numeroadivinar) {
  alert("¡BUEN TRABAJO! Adivino el número.");
} else {
  alert(`Vuelve a intentarlo. El número correcto era ${numeroadivinar}.`);
}
