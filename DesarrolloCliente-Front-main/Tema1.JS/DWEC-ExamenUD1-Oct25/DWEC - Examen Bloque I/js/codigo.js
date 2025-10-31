datosIniciales();

let oAlmacen = new Almacen();
let oLavadora = new Lavadora('Balay',40,100)
let oStock = new StockProducto(oLavadora,0)

function datosIniciales() {}

// Gestión de formularios
function gestionFormularios(sFormularioVisible) {
  ocultarTodosLosFormularios();

  // Hacemos visible el formulario que llega como parámetro
  switch (sFormularioVisible) {
    case "frmAltaCatalogo":
      frmAltaCatalogo.style.display = "block";
      break;
    case "frmEntradaStock":
      frmEntradaStock.style.display = "block";
      break;
    case "frmSalidaStock":
      frmSalidaStock.style.display = "block";
      break;
  }
}

function ocultarTodosLosFormularios() {
  let oFormularios = document.querySelectorAll("form");

  for (let i = 0; i < oFormularios.length; i++) {
    oFormularios[i].style.display = "none";
  }
}

function aceptarAltaCatalogo() {
  // Añadir código
  let nombre = frmAltaCatalogo.txtNombre.value.trim();
  let precio = parseFloat(frmAltaCatalogo.txtPrecio.value.trim());
  let pulgadas = parseInt(frmAltaCatalogo.txtPulgadas.value.trim());
  let fullHD = frmAltaCatalogo.rbtFullHD.value;
  let carga = frmAltaCatalogo.txtCarga.value.trim()

  let oElectro;

  if (frmAltaCatalogo.rbtElectrodomestico.value == "televisor") {
      oElectro = new Televisor(nombre, precio, pulgadas, fullHD);
    } else {
      oElectro = new Lavadora(nombre, precio, carga);
    }

   if (oAlmacen.altaCatalogo(oElectro)) {
      alert("Electrodomestico registrado OK");
      frmAltaCatalogo.reset(); // Vaciamos los campos del formulario
      frmAltaCatalogo.style.display = "none";
    } else {
      alert("Electrodomestico registrado previamente");
    }


}

function aceptarEntradaStock() {
  // Añadir código
  nombre = frmEntradaStock.txtNombre.value.trim();
  unidades = parseInt(frmEntradaStock.txtUnidades.value.trim());

  let sRespuesta = oAlmacen.entradaStock(nombre, unidades);

  alert(sRespuesta);
}

function aceptarSalidaStock() {
  // Añadir código
  nombre = frmSalidaStock.txtNombre.value.trim();
  unidades = parseInt(frmSalidaStock.txtUnidades.value.trim());

  let sRespuesta = oAlmacen.salidaStock(nombre, unidades);

  alert(sRespuesta);
}

function mostrarListadoCatalogo() {
  // Añadir código
  console.log(oAlmacen.listadoCatalogos());
}

function mostrarListadoStock() {
  // Añadir código
    console.log(oAlmacen.listadoStock());

}

function mostrarTotales() {
  // Añadir código

  console.log(oAlmacen.numTelevisoresStock())

  console.log(oAlmacen.numLavadorasStock())

  console.log(oAlmacen.importeTotal())

}
