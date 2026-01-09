const crearTarjeta = (usuario) => {
  const { nombre, imagen } = usuario;
  console.log(`
<div class="card">
    <img src="${imagen}" alt="${nombre}" />
    <h2>${nombre}</h2>
</div>
  `);
};


const usuario = { nombre: "Pepe Gómez", imagen: "pepeGomez.jpg" };
crearTarjeta(usuario);
