formularioStock.addEventListener("submit", validarFormulario);


function validarFormulario(event) {
  const regExpFabricante = /^[A-ZÑÁÉÍÓÚ][a-zñáéíóú]$/;
  const regExpNombre = /^[A-ZÑÁÉÍÓÚ][a-zñáéíóú]$/;
  const regFechaEntrada = /\d\d\d\d\/\d\d\/\d\d/;
  const regExpElectronica = /^EL-[0-9]{3}[A-ZÑÁÉÍÓÚ]$/;
  const regExpHogar = /^[A-Z]{3}[-][0-9]{4}$/;
  const regExpAlimentacion = /^AL[0-9]{4}EXP$/;
  const regExpUbicacion = /^[A-Z][-][0-9]{2}$/;
  const fabricante = formularioStock.fabricante.value.trim();
  const nombre = formularioStock.producto.value.trim();
  const fechaEntrada = formularioStock.fecha.value.trim();
  const categoria = formularioStock.categoria.value.trim();
  const referencia = formularioStock.referencia.value.trim();
  const ubicacion = formularioStock.ubicacion.value.trim();
  let errores = [];
  let vacios = [];
  let hayErrores = false;
  let salida = "";

  console.log(categoria)

      if (fabricante.length == 0) {
    vacios.push("Fabricante");
    hayErrores = true;
  } else if (!regExpFabricante.test(fabricante)) {
    errores.push("Fabricante");
    hayErrores = true;
  }


    if (nombre.length == 0) {
    vacios.push("Producto");
    hayErrores = true;
  } else if (!regExpNombre.test(nombre)) {
    errores.push("Producto");
    hayErrores = true;
  }

        if (fechaEntrada.length == 0) {
    vacios.push("Fecha de entrada");
    hayErrores = true;
  } else if (!regFechaEntrada.test(fechaEntrada)) {
    errores.push("Fecha de entrada");
    hayErrores = true;
  }

    if(categoria == 'electronica'){
        if (!regExpElectronica.test(referencia)) {
            errores.push("Referencia Electrónica");
            hayErrores = true;
        }
  } else if(categoria== 'hogar' ){
        if(!regExpHogar.test(referencia)){
            errores.push("Referencia Hogar");
            hayErrores = true;
        }
  } else if(categoria== 'alimentacion') {
    if(!regExpAlimentacion.test(referencia)){
            errores.push("Referencia Alimentación");
            hayErrores = true;
        }
  } else if(referencia.length == 0){
    vacios.push("Referencia");
    hayErrores = true;
  }

    if (ubicacion.length == 0) {
    vacios.push("Ubicación");
    hayErrores = true;
  } else if (!regExpUbicacion.test(ubicacion)) {
    errores.push("Ubicación");
    hayErrores = true;
  }

   if (hayErrores) {
    event.preventDefault(); //Para parar el evento submit por defecto
    if (vacios.length > 0) {
      salida += "<h3>CAMPOS VACÍOS:</h3><ul>";
      for (let elem of vacios) {
        salida += "<li>" + elem + "</li>";
      }
      salida += "</ul>";
    }
    if (errores.length > 0) {
      salida += "<h3>CAMPOS CON ERRORES:</h3><ul>";
      for (let elem of errores) {
        salida += "<li>" + elem + "</li>";
      }
      salida += "</ul>";
    }
    document.getElementById("mensajes").innerHTML = salida;
  }




  



}