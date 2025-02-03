let numeros = [];
for (i = 1; i <= 5; i++) {
  numeros[i - 1] = parseInt(
    prompt("Ingrese " + i + " de 5 numeros distintos al azar : ")
  );
}
let numeroMayor = 0;

for (i = 0; i <= 4; i++) {
  if (numeros[i] > numeroMayor) {
    numeroMayor = numeros[i];
  }
}
console.log(numeros);
console.log(`El mayor numero ingresado es : ${numeroMayor}`);
