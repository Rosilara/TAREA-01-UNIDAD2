const numeros = [4, -8, 10, -2];

function menorAbsoluto(arreglo) {
  return Math.abs(Math.min(...arreglo));
}

console.log("Menor absoluto:", menorAbsoluto(numeros));  
