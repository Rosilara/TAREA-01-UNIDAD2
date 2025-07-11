const numero1 = parseFloat(prompt('Ingrese el primer numero'));
console.log(numero1)

const numero2= parseFloat(prompt('Ingrese el segundo numero'));
console.log(numero2)

const numero3= parseFloat(prompt('Ingrese el tercer numero'));
console.log(numero3)


let mayor;

if (numero1 >= numero2 && numero1 >= numero3) {
 console.log(`${numero1} es el numero mayor`);
} else if (numero2 >= numero1 && numero2 >= numero3) {
  console.log(`${numero2} es el numero mayor`);
} else {
  console.log(`${numero1} es el numero mayor`);
}


 