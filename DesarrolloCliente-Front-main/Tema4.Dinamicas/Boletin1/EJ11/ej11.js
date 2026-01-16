let resolverPromesa;
let temporizador;
let promesa;

// Botones
const btnIniciar = document.getElementById("iniciaPromesa");
const btnProcesar = document.getElementById("procesarPromesa");
const salida = document.getElementById("salida");

btnIniciar.addEventListener("click", () => {
  const msjExito = document.getElementById("msjExito").value;
  const msjError = document.getElementById("msjError").value;
 

  promesa = new Promise((resolve, reject) => {
    resolverPromesa = resolve;

    temporizador = setTimeout(() => {
      reject(msjError || "Tiempo agotado");
    }, 2000);
  });

  promesa
    .then((mensaje) => {
      salida.textContent = mensaje;
    })
    .catch((error) => {
      salida.textContent = error;
    });
});

btnProcesar.addEventListener("click", () => {
  if (resolverPromesa) {
    clearTimeout(temporizador);
    const msjExito = document.getElementById("msjExito").value;
    resolverPromesa(msjExito || "Promesa procesada correctamente");
    resolverPromesa = null;
  }
});
