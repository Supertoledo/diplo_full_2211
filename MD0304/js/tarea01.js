let cajaVerde = document.querySelector(".verde");
let cajaAzul = document.querySelector(".azul");
let cajaRoja = document.querySelector(".rojo");

cajaVerde.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});
cajaAzul.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});
cajaRoja.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});
