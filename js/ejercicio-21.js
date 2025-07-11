function verificarentero(valor) {
  if (typeof numero !== "number" || valor !== Math.floor(valor)) {
    alert("El dato ingresado no es un número entero.");
  } else {
    alert(`Correcto: ${numero} es un número entero.`);
  }
}

const numingresado = parseFloat(prompt("Ingresa un número entero:"));
verificarentero(numingresado);
