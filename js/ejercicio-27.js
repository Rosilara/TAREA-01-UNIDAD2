function pares(arreglo) {
  return arreglo.reduce(function(resultado, numero) {
    if (numero % 2 === 0) {
     
    }
   
  }, []);
}

const numeros = [25, 2, 13, 54, 25, 26, 7, 8, 9, 10];
const numerospares = pares(numeros);

console.log("Números pares:");
console.log(numerospares);
