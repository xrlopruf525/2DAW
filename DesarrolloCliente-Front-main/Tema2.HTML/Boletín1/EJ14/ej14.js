formulario.addEventListener("submit", validarFormulario);

function validarFormulario(event) {

  // 📌 NOMBRE Y APELLIDOS
  // ^                     → inicio del texto
  // [A-ZÑÁÉÍÓÚ]            → primera letra en mayúscula (incluye Ñ y tildes)
  // [a-zñáéíóú]*           → resto de letras en minúscula
  // (\s[A-ZÑÁÉÍÓÚ][a-zñáéíóú]*)*
  //                       → permite más palabras separadas por espacio,
  //                         cada una empezando en mayúscula
  // $                     → fin del texto
  const regExpApellidosNombre =
    /^[A-ZÑÁÉÍÓÚ][a-zñáéíóú]*(\s[A-ZÑÁÉÍÓÚ][a-zñáéíóú]*)*$/;

  // 📌 FECHA DE NACIMIENTO
  // \d\d        → dos dígitos (día)
  // \/          → barra /
  // \d\d        → dos dígitos (mes)
  // \/          → barra /
  // \d\d\d\d    → cuatro dígitos (año)
  const regExpFechaNac = /\d\d\/\d\d\/\d\d\d\d/;

  // 📌 DNI
  // ^            → inicio
  // [0-9]{7,8}   → 7 u 8 números
  // [A-Z]        → una letra mayúscula
  // $            → fin
  const regExpDni = /^[0-9]{7,8}[A-Z]$/;

  // 📌 EMAIL
  // ^                    → inicio
  // [a-z.\-_]+            → letras minúsculas, puntos, guiones y _
  // @                    → arroba obligatoria
  // [a-z\-_]+             → dominio (letras, guiones y _)
  // \.                   → punto
  // [a-z]{2,4}            → extensión de 2 a 4 letras
  // $                    → fin
  const regExpEmail = /^[a-z.\-_]+@[a-z\-_]+\.[a-z]{2,4}$/;

  // 📌 USUARIO IDEA
  // ^            → inicio
  // [a-z]{7}     → 7 letras minúsculas
  // [0-9]{3}     → 3 números
  // $            → fin
  const regExpUsuarioIdea = /^[a-z]{7}[0-9]{3}$/;

  // 📌 TELÉFONO
  // ^            → inicio
  // [6789]       → empieza por 6, 7, 8 o 9
  // [0-9]{8}     → ocho números más
  // $            → fin
  const regExpTelefono = /^[6789][0-9]{8}$/;

  // 📌 TWITTER
  // ^            → inicio
  // @            → debe empezar por @
  // [a-zA-Z0-9_] → letras, números o _
  // {4,15}       → entre 4 y 15 caracteres
  // $            → fin
  const regExpTwitter = /^@[a-zA-Z0-9_]{4,15}$/;


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