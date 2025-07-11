const frase = prompt("escribe la frase:");

let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;

for (let j = 0; j < frase.length; j++) {
  let letra = frase[j].toLowerCase();

  if (letra === 'a') {
    a++;
  } else if (letra === 'e') {
    e++;
  } else if (letra === 'i') {
    i++;
  } else if (letra === 'o') {
    o++;
  } else if (letra === 'u') {
    u++;
  }
}

console.log (`En la frase "${frase}" :`)
console.log(`La letra "a" aparece ${a} veces.`);
console.log(`La letra "e" aparece ${e} veces.`);
console.log(`La letra "i" aparece ${i} veces.`);
console.log(`La letra "o" aparece ${o} veces.`);
console.log(`La letra "u" aparece ${u} veces.`);
