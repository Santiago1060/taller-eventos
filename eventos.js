document.addEventListener("DOMContentLoaded", function() {
  console.log("eventos.js conectado");

  const div = document.getElementById("contenedor");

  div.addEventListener("click", function() {
    alert("Hola! Soy el div");
  });
});