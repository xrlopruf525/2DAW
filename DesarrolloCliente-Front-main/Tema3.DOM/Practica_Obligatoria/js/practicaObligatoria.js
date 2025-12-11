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

    // Al hacer click, actualizar cliente actual y mostrar pedido
    divCliente.onclick = () => {
      gestor._clienteActual = i;
      mostrarPedido(cliente);
    };

    contenedorClientes.appendChild(divCliente);
  });
}function mostrarPedido(cliente) {
  const panelPedido = document.getElementById('pedido');
  panelPedido.innerHTML = ''; // Limpiar panel

  // Título
  const h2 = document.createElement('h2');
  h2.textContent = 'Pedido';
  panelPedido.appendChild(h2);

  // Nombre del cliente
  const nombreCliente = document.createElement('p');
  nombreCliente.textContent = cliente._nombreCliente;
  nombreCliente.style.fontWeight = 'bold';
  panelPedido.appendChild(nombreCliente);

  // Pedido del cliente actual
  const pedidoCliente = gestor._pedidos[gestor._comercialActual][gestor._clienteActual];

  // Solo mostrar tabla, total y botón si tiene alguna línea de pedido
  if (pedidoCliente.length > 0) {
    // Total del pedido
    const total = pedidoCliente.reduce((acc, linea) => acc + linea.precio * linea.unidades, 0);
    const totalP = document.createElement('p');
    totalP.textContent = `Total: €${total.toFixed(2)}`;
    totalP.style.fontWeight = 'bold';
    panelPedido.appendChild(totalP);

    // Botón "Pedido enviado y cobrado"
    const botonEnviar = document.createElement('button');
    botonEnviar.textContent = 'Pedido enviado y cobrado';
    botonEnviar.className = 'boton';
    panelPedido.appendChild(botonEnviar);

    // Tabla del pedido
    const tabla = document.createElement('table');

    // Cabecera
    const thead = document.createElement('thead');
    const filaCabecera = document.createElement('tr');
    ['Modificar', 'Uds', 'ID', 'Producto', 'Precio'].forEach(texto => {
      const th = document.createElement('th');
      th.textContent = texto;
      filaCabecera.appendChild(th);
    });
    thead.appendChild(filaCabecera);
    tabla.appendChild(thead);

    // Cuerpo de la tabla
    const tbody = document.createElement('tbody');
    pedidoCliente.forEach(linea => {
      const tr = document.createElement('tr');

      // Modificar: botones + y -
      const tdModificar = document.createElement('td');
      const btnMas = document.createElement('button');
      btnMas.textContent = '+';
      btnMas.className = 'modificador';
      const btnMenos = document.createElement('button');
      btnMenos.textContent = '-';
      btnMenos.className = 'modificador';
      tdModificar.appendChild(btnMas);
      tdModificar.appendChild(btnMenos);
      tr.appendChild(tdModificar);

      // Unidades
      const tdUnidades = document.createElement('td');
      tdUnidades.textContent = linea.unidades;
      tr.appendChild(tdUnidades);

      // ID
      const tdID = document.createElement('td');
      tdID.textContent = linea.codigo;
      tr.appendChild(tdID);

      // Producto
      const tdProducto = document.createElement('td');
      tdProducto.textContent = linea.nombre;
      tr.appendChild(tdProducto);

      // Precio
      const tdPrecio = document.createElement('td');
      tdPrecio.textContent = `€${linea.precio.toFixed(2)}`;
      tr.appendChild(tdPrecio);

      tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);
    panelPedido.appendChild(tabla);
  }
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
    option.value = producto._idProducto;
    option.textContent = producto._nombreProducto;
    selectProductos.appendChild(option);
  });
}
function añadirLineaPedido(cliente, codigoProducto, unidades) {
  let pedidoCliente = gestor._pedidos[gestor._comercialActual][gestor._clienteActual];
  const lineaExistente = pedidoCliente.find(linea => linea.codigo === codigoProducto);

  if (lineaExistente) {
    alert("Este producto ya está en el pedido. Usa los botones + / - para modificar unidades.");
    return;
  }

  const producto = catalogo._productos.find(p => p._idProducto === codigoProducto);
  if (!producto) return;

  const linea = {
    codigo: producto._idProducto,
    nombre: producto._nombreProducto,
    unidades: unidades,
    precio: producto._precioUnidad
  };
  pedidoCliente.push(linea);

  const contenedorClientes = document.getElementById('clientes');
  const divCliente = Array.from(contenedorClientes.children).find(div => div.textContent === cliente._nombreCliente);
  if (divCliente) {
    divCliente.classList.remove('pagado');
    divCliente.classList.add('pendiente');
  }

  mostrarPedido(cliente);
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

  const botones = document.querySelectorAll('#teclado .tecla');
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const unidades = parseInt(boton.value);
      const selectProducto = document.querySelector('select[name="productos"]');
      const codigoProducto = parseInt(selectProducto.value);

      console.log(selectProducto.value);
      if (!codigoProducto) {
        alert("Selecciona un producto antes de añadir unidades.");
        return;
      }

      const clienteActual = gestor._clientes[gestor._comercialActual][gestor._clienteActual];
      añadirLineaPedido(clienteActual, codigoProducto, unidades);
    });
  });
});
