document.addEventListener("DOMContentLoaded", function() {
  console.log("eventos.js conectado");

const boton = document.getElementById("btn-saludar");
boton.addEventListener("click", function(event) {
  alert("Hola!");
  event.stopPropagation();
});

});
