document.getElementById("texto").addEventListener("keyup", caracteres);

function caracteres() {
  let cant = document.getElementById("texto").value.length;
  document.getElementById("cantidad").innerHTML = parseInt(cant);
}
