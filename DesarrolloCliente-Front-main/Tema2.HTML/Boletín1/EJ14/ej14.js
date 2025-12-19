formulario.addEventListener("submit", validarFormulario);

function validarFormulario(event) {
  const regExpApellidosNombre = /^[A-ZÑÁÉÍÓÚ][a-zñáéíóú]*(s[A-ZÑÁÉÍÓÚ][a-zñáéíóú]*)*/;
  const regExpFechaNac = /\d\d\/\d\d\/\d\d\d\d/;
  const regExpDni = /^[0-9]{7,8}[A-Z]$/;
  const regExpEmail = /^[a-z\.\-_]+@[a-z\-_]+\.[a-z]{2,4}/;
  const regExpUsuarioIdea = /^[a-z]{7}[0-9]{3}$/;
  const regExpTelefono = /^[6789][0-9]{8}$/;
  const regExpTwitter = /^@[a-zA-Z0-9_]{4,15}$/;
  const apellidos = formulario.apellidos.value.trim();
  const nombre = formulario.nombre.value.trim();
  const fechaNac = formulario.fechaNacimiento.value.trim();
  const dni = formulario.dni.value.trim();
  const email = formulario.email.value.trim();
  const usuarioIdea = formulario.usuario.value.trim();
  const telefono = formulario.telefono.value.trim();
  const twitter = formulario.twitter.value.trim();
  let errores = [];
  let vacios = [];
  let hayErrores = false;
  let salida = "";


// const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
// 🧠 Explicación MUY CLARA (para entenderla y adaptarla)
// ^ → inicio del texto

// (?=.*[a-z]) → obliga a que exista una minúscula

// (?=.*[A-Z]) → obliga a que exista una mayúscula

// (?=.*\d) → obliga a que exista un número

// (?=.*[^A-Za-z0-9]) → obliga a que exista un carácter especial

// .{8,} → mínimo 8 caracteres

// $ → fin del texto

// 👉 Los (?=...) se llaman lookahead y sirven para “exigir condiciones”.

  if (apellidos.length == 0) {
    vacios.push("Apellidos");
    hayErrores = true;
  } else if (!regExpApellidosNombre.test(apellidos)) {
    errores.push("Apellidos");
    hayErrores = true;
  }

  if (nombre.length == 0) {
    vacios.push("Nombre");
    hayErrores = true;
  } else if (!regExpApellidosNombre.test(nombre)) {
    errores.push("Nombre");
    hayErrores = true;
  }

  if (fechaNac.length == 0) {
    vacios.push("Fecha de nacimiento");
    hayErrores = true;
  } else if (!regExpFechaNac.test(fechaNac)) {
    errores.push("Fecha de nacimiento");
    hayErrores = true;
  }

  if (dni.length == 0) {
    vacios.push("DNI");
    hayErrores = true;
  } else if (!regExpDni.test(dni)) {
    errores.push("DNI");
    hayErrores = true;
  }

  if (email.length == 0) {
    vacios.push("Email");
    hayErrores = true;
  } else if (!regExpEmail.test(email)) {
    errores.push("Email");
    hayErrores = true;
  }

  if (usuarioIdea.length == 0) {
    vacios.push("Usuario IDEA");
    hayErrores = true;
  } else if (!regExpUsuarioIdea.test(usuarioIdea)) {
    errores.push("Usuario IDEA");
    hayErrores = true;
  }

  if (telefono.length == 0) {
    vacios.push("Teléfono");
    hayErrores = true;
  } else if (!regExpTelefono.test(telefono)) {
    errores.push("Teléfono");
    hayErrores = true;
  }

  if (twitter.length == 0) {
    vacios.push("Twitter");
    hayErrores = true;
  } else if (!regExpTwitter.test(twitter)) {
    errores.push("Twitter");
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
    document.getElementById("salida").innerHTML = salida;
  }
}