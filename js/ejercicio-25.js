const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

const coloringresado = prompt("Ingresa un color:").toLowerCase();

if (colores.includes(coloringresado)) {
  alert(`Sí, el color "${coloringresado}" está en la lista.`);
} else {
  alert(`No, el color "${coloringresado}" no se encuentra en la lista.`);
}
