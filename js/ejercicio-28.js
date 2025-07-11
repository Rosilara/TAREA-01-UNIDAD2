function palabrasConVocal(arreglo) {
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  return arreglo.filter(function(palabra) {
    return vocales.includes(palabra[0].toLowerCase());
  });
}


const palabras = ["árbol", "casa","perro" "elefante", "sol","cartera" "uva","avión"];
console.log(palabrasConVocal(palabras)); 