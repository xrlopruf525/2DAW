const mostrarPerfil = ({ nombre, email, rol = "invitado" }) => {
  console.log(`Nombre: ${nombre}`);
  console.log(`Email: ${email}`);
  console.log(`Rol: ${rol}`);
};


const user = { nombre: "Pedro", email: "pedro@email.com" };

mostrarPerfil(user);

