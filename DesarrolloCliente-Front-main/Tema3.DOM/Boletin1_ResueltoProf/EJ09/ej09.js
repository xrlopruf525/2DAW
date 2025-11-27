const label = document.getElementById("captcha");
const p = document.getElementById("code");
const form = document.forms["formulario"];
const input = document.getElementById("verify");

let codigo = "";

// Al pasar el ratón: generar y mostrar el código
label.addEventListener("mouseover", function () {
  codigo = "" + (Math.floor(Math.random() * 9000) + 1000);
  p.textContent = codigo;
  p.style.visibility = "visible";
});

// Al quitar el ratón: ocultar el código
label.addEventListener("mouseout", function () {
  p.style.visibility = "hidden";
});

// Al enviar el formulario: comprobar
form.addEventListener("submit", function (e) {
  if (input.value !== codigo) {
    e.preventDefault();
    alert("Código incorrecto");
  }
});
