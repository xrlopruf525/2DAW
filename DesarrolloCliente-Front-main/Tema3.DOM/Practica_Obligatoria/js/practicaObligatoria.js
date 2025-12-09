const comerciales = [
  "Carmen Gómez",
  "Lucía Gil",
  "Andrés Martínez",
  "Antonio Salinas",
];

const clientes = [
  [
    "Alimentación Daniel",
    "Cash El Puerto",
    "Ultramarinos Claudia",
    "Supermercado Nazareno",
    "Alimentación Guzmán",
    "Supermercado Superprecio",
    "Kiosko La Espera",
    "M&B Alimentación",
    "Ultramarinos Vistabella",
  ],
  [
    "Ultramarinos La Delicia",
    "Supermercado La Esquinita",
    "Alimentación Gómez",
    "Supermercado El Veloz",
    "Kiosko 24h Desavío",
    "Tienda La Manchega",
    "Ultramarinos Tajo",
    "Alimentación Víctor",
  ],
  [
    "Alimentación Millán",
    "Supermercado La Guinda",
    "Kiosko Callejón",
    "Tienda Cantero",
    "Ultramarinos Mérida",
    "Alimentación Moreno",
    "Cash El Hostelero",
  ],
  [
    "Kiosko La Lumbre",
    "Tienda Abad",
    "Ultramarinos Hernández",
    "Alimentación Cervantes",
    "Cash El Panal",
    "CyR Alimentación",
    "Supermercado Los Mosqueteros",
    "Alimentación Carpanta",
    "Supermercado El Percebe",
  ],
];

const categorias = ["Aceite", "Encurtidos", "Salsas"];

const catalogo = new Catalogo();
const gestor = new Gestor();

function cargaDatosIniciales() {
  // 1. Cargar productos en el catálogo
  catalogo.addProducto(1, "Aceite Oliva Virgen Extra 1l (Caja 20)", 178.15, 0);
  catalogo.addProducto(2, "Aceite Oliva Virgen Extra 700ml (Caja 30)", 208.5, 0);
  catalogo.addProducto(3, "Aceite Oliva Virgen Extra 5l (Caja 6)", 247.5, 0);
  catalogo.addProducto(4, "Aceite Oliva 1l (Caja 20)", 109.25, 0);
  catalogo.addProducto(5, "Aceituna Gordal 340gr (Caja de 50)", 180.75, 1);
  catalogo.addProducto(6, "Aceituna Gordal deshuesada 350gr (Caja de 50)", 205.45, 1);
  catalogo.addProducto(7, "Aceituna Manzanilla 250 gr (Caja de 50)", 124.85, 1);
  catalogo.addProducto(8, "Aceituna Manzanilla deshuesada 250 gr (Caja de 50)", 141.35, 1);
  catalogo.addProducto(9, "Aceituna Negra 350gr (Caja de 50)", 87.5, 1);
  catalogo.addProducto(10, "Aceituna Negra deshuesada 350gr (Caja de 50)", 99.35, 1);
  catalogo.addProducto(11, "Mayonesa 350gr (Caja de 50)", 124.45, 2);
  catalogo.addProducto(12, "Mayonesa 1Kg (Caja de 30)", 178.65, 2);
  catalogo.addProducto(13, "Salsa Cocktail 350gr (Caja de 50)", 99.65, 2);
  catalogo.addProducto(14, "Salsa Gaucha 350gr (Caja de 50)", 124.85, 2);
  catalogo.addProducto(15, "Salsa Alioli 350 gr (Caja de 50)", 113.75, 2);
  catalogo.addProducto(16, "Salsa Barbacoa 500gr (Caja de 30)", 67.5, 2);

  // 2. Cargar comerciales y categorías en el gestor
  gestor._categorias = categorias;
  gestor._comerciales = comerciales;

  // 3. Convertir clientes en objetos Cliente y crear array de pedidos
  gestor._clientes = [];
  gestor._pedidos = [];
  for (let i = 0; i < clientes.length; i++) {
    gestor._clientes[i] = [];
    gestor._pedidos[i] = [];
    for (let j = 0; j < clientes[i].length; j++) {
      gestor._clientes[i][j] = new Cliente(clientes[i][j]);
      gestor._pedidos[i][j] = [];
    }
  }

  // 4. Inicializar índices
  gestor._comercialActual = 0;
  gestor._clienteActual = 0;

  // 5. Comprobación en consola
  console.log(`Datos cargados correctamente: ${gestor._clientes[0][0]._nombreCliente} es cliente de ${gestor._comerciales[0]}`);
}

function cargarComercial() {
  const selectComerciales = document.frmComercial.comerciales;
  gestor._comerciales.forEach((nombre, i) => {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = nombre;
    selectComerciales.appendChild(option);
  });
}
function cargarClientes(indiceComercial) {
  const contenedorClientes = document.getElementById('clientes');


  const clientesExistentes = contenedorClientes.querySelectorAll('.cliente');
  clientesExistentes.forEach(cliente => cliente.remove());

  gestor._clientes[indiceComercial].forEach((cliente, i) => {
    const divCliente = document.createElement('div');
    divCliente.textContent = cliente._nombreCliente;

    if (gestor._pedidos[indiceComercial][i].length > 0) {
      divCliente.classList.add('cliente', 'pendiente'); 
    } else {
      divCliente.classList.add('cliente', 'pagado'); 
    }

    contenedorClientes.appendChild(divCliente);
  });

}


function cargarCategorias() {
  const selectCategorias = document.frmControles.categorias;
  gestor._categorias.forEach((categoria, i) => {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = categoria;
    selectCategorias.appendChild(option);
  });
}



function cargarProductosPorCategoria(indiceCategoria) {
  const selectProductos = document.frmControles.productos;
  selectProductos.innerHTML = ''; 

  const productosFiltrados = catalogo._productos.filter(producto => producto._idCatalogo === indiceCategoria);
  productosFiltrados.forEach((producto) => {
    const option = document.createElement('option');
    option.value = producto._codigo;
    option.textContent = producto._nombreProducto;
    selectProductos.appendChild(option);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  cargaDatosIniciales(); 

  cargarComercial();

  cargarClientes(0);

  document.frmComercial.comerciales.addEventListener('change', (e) => {
    cargarClientes(parseInt(e.target.value));
  });

  cargarCategorias();

  cargarProductosPorCategoria(0);

  document.frmControles.categorias.addEventListener('change', (e) => {
    cargarProductosPorCategoria(parseInt(e.target.value));
  });
});

