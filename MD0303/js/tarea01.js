let distancia = parseInt(prompt("Ingrese distancia a recorrer :", ""));
if (distancia < 1000) {
  console.log(
    `Para recorrer ${distancia} mts La recomendacion es ir caminando`
  );
} else if (distancia >= 1000 && distancia < 10000) {
  console.log(
    `Para recorrer ${distancia} mts La recomendacion es ir en bicicleta`
  );
} else if (distancia >= 10000 && distancia < 30000) {
  console.log(
    `Para recorrer ${distancia} mts La recomendacion es ir en coletivo`
  );
} else if (distancia >= 30000 && distancia <= 100000) {
  console.log(`Para recorrer ${distancia} mts La recomendacion es ir en auto`);
} else {
  console.log(`Para recorrer ${distancia} mts La recomendacion es ir en avion`);
}
