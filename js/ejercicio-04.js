const frase = prompt("escribe la frase:");
let cuenta = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i].toLowerCase() === 'a') {
    cuenta++;
  }
}

console.log(`La letra "a" aparece en la frase ${frase} ${cuenta} veces.`);