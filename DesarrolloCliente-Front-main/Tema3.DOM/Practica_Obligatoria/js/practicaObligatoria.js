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

// Carga inicial de productos, comerciales y clientes
function cargaDatosIniciales() {
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

  gestor._categorias = categorias;
  gestor._comerciales = comerciales;

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

  gestor._comercialActual = 0;
  gestor._clienteActual = 0;
}

// Carga el select de comerciales
function cargarComercial() {
  const selectComerciales = document.frmComercial.comerciales;
  gestor._comerciales.forEach((nombre, i) => {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = nombre;
    selectComerciales.appendChild(option);
  });
}

// Muestra los clientes según el comercial seleccionado
function cargarClientes(indiceComercial) {
  const contenedorClientes = document.getElementById('clientes');
  contenedorClientes.querySelectorAll('.cliente').forEach(c => c.remove());

  gestor._clientes[indiceComercial].forEach((cliente, i) => {
    const divCliente = document.createElement('div');
    divCliente.textContent = cliente._nombreCliente;
    divCliente.classList.add('cliente', gestor._pedidos[indiceComercial][i].length > 0 ? 'pendiente' : 'pagado');
    divCliente.onclick = () => {
      gestor._clienteActual = i;
      mostrarPedido(cliente);
    };
    contenedorClientes.appendChild(divCliente);
  });
}

// Incrementa unidades y actualiza la vista
function incrementar(codigo) {
  let linea = gestor._pedidos[gestor._comercialActual][gestor._clienteActual].find(l => l.codigo === codigo);
  if (!linea) return;
  linea.unidades++;
  mostrarPedido(gestor._clientes[gestor._comercialActual][gestor._clienteActual]);
}

// Decrementa unidades, elimina línea si es necesario y actualiza la vista
function decrementar(codigo) {
  let pedido = gestor._pedidos[gestor._comercialActual][gestor._clienteActual];
  let linea = pedido.find(l => l.codigo === codigo);
  if (!linea) return;

  if (linea.unidades === 1) {
    if (pedido.length === 1) {
      if (!confirm("¿Seguro que quieres eliminar la última línea del pedido?")) return;
      gestor._pedidos[gestor._comercialActual][gestor._clienteActual] = [];
      const divCliente = clientsGetDiv(gestor._clienteActual);
      if (divCliente) {
        divCliente.classList.remove('pendiente');
        divCliente.classList.add('pagado');
      }
      mostrarPedido(gestor._clientes[gestor._comercialActual][gestor._clienteActual], true);
      return;
    }
    gestor._pedidos[gestor._comercialActual][gestor._clienteActual] = pedido.filter(l => l.codigo !== codigo);
  } else {
    linea.unidades--;
  }
  mostrarPedido(gestor._clientes[gestor._comercialActual][gestor._clienteActual]);
}

// Marca el pedido como enviado y cobrado
function pedidoEnviado() {
  const comercial = gestor._comercialActual;
  const cliente = gestor._clienteActual;
  gestor._pedidos[comercial][cliente] = [];
  const divCliente = clientsGetDiv(cliente);
  if (divCliente) {
    divCliente.classList.remove("pendiente");
    divCliente.classList.add("pagado");
  }
  mostrarPedido(gestor._clientes[comercial][cliente], true);
}

// Devuelve el div del cliente actual
function clientsGetDiv(clienteIdx) {
  const nodes = document.querySelectorAll('#clientes .cliente');
  return nodes[clienteIdx] || null;
}

// Muestra el pedido en el panel, tabla, total y botones
function mostrarPedido(cliente, keepHeader = false) {
  const panelPedido = document.getElementById('pedido');
  panelPedido.innerHTML = '';

  const h2 = document.createElement('h2');
  h2.textContent = 'Pedido';
  panelPedido.appendChild(h2);

  const nombreCliente = document.createElement('p');
  nombreCliente.textContent = cliente._nombreCliente;
  nombreCliente.style.fontWeight = 'bold';
  panelPedido.appendChild(nombreCliente);

  const pedidoCliente = gestor._pedidos[gestor._comercialActual][gestor._clienteActual];

  if (pedidoCliente.length > 0) {
    const total = pedidoCliente.reduce((acc, linea) => acc + linea.precio * linea.unidades, 0);
    const totalP = document.createElement('p');
    totalP.textContent = `Total: €${total.toFixed(2)}`;
    totalP.style.fontWeight = 'bold';
    panelPedido.appendChild(totalP);

    const botonEnviar = document.createElement('button');
    botonEnviar.textContent = 'Pedido enviado y cobrado';
    botonEnviar.className = 'boton';
    botonEnviar.onclick = pedidoEnviado;
    panelPedido.appendChild(botonEnviar);

    const tabla = document.createElement('table');
    const thead = document.createElement('thead');
    const filaCabecera = document.createElement('tr');
    ['Modificar', 'Uds', 'ID', 'Producto', 'Precio'].forEach(texto => {
      const th = document.createElement('th');
      th.textContent = texto;
      filaCabecera.appendChild(th);
    });
    thead.appendChild(filaCabecera);
    tabla.appendChild(thead);

    const tbody = document.createElement('tbody');
    pedidoCliente.forEach(linea => {
      const tr = document.createElement('tr');

      const tdModificar = document.createElement('td');
      const btnMas = document.createElement('button');
      btnMas.textContent = '+';
      btnMas.className = 'modificador';
      btnMas.onclick = () => incrementar(linea.codigo);

      const btnMenos = document.createElement('button');
      btnMenos.textContent = '-';
      btnMenos.className = 'modificador';
      btnMenos.onclick = () => decrementar(linea.codigo);

      tdModificar.appendChild(btnMas);
      tdModificar.appendChild(btnMenos);
      tr.appendChild(tdModificar);

      const tdUnidades = document.createElement('td');
      tdUnidades.textContent = linea.unidades;
      tr.appendChild(tdUnidades);

      const tdID = document.createElement('td');
      tdID.textContent = linea.codigo;
      tr.appendChild(tdID);

      const tdProducto = document.createElement('td');
      tdProducto.textContent = linea.nombre;
      tr.appendChild(tdProducto);

      const tdPrecio = document.createElement('td');
      tdPrecio.textContent = `€${(linea.precio * linea.unidades).toFixed(2)}`;
      tr.appendChild(tdPrecio);

      tbody.appendChild(tr);
    });

    tabla.appendChild(tbody);
    panelPedido.appendChild(tabla);
  } else if (keepHeader) { // El parámetro keepHeader se usa para indicar que, aunque el pedido esté vacío,
// queremos mostrar la tabla con el encabezado y el total en 0.
// Esto ocurre, por ejemplo, cuando se elimina la última línea de un pedido,
// de modo que el panel no quede completamente vacío.
    const tabla = document.createElement('table');
    const thead = document.createElement('thead');
    const filaCabecera = document.createElement('tr');
    ['Modificar', 'Uds', 'ID', 'Producto', 'Precio'].forEach(texto => {
      const th = document.createElement('th');
      th.textContent = texto;
      filaCabecera.appendChild(th);
    });
    thead.appendChild(filaCabecera);
    tabla.appendChild(thead);
    panelPedido.appendChild(tabla);

    const totalP = document.createElement('p');
    totalP.textContent = `Total: €0.00`;
    totalP.style.fontWeight = 'bold';
    panelPedido.insertBefore(totalP, tabla);
  }
}

// Carga las categorías en el select
function cargarCategorias() {
  const selectCategorias = document.frmControles.categorias;
  gestor._categorias.forEach((categoria, i) => {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = categoria;
    selectCategorias.appendChild(option);
  });
}

// Carga los productos según la categoría seleccionada
function cargarProductosPorCategoria(indiceCategoria) {
  const selectProductos = document.frmControles.productos;
  selectProductos.innerHTML = '';

  catalogo._productos.filter(p => p._idCatalogo === indiceCategoria)
    .forEach(producto => {
      const option = document.createElement('option');
      option.value = producto._idProducto;
      option.textContent = producto._nombreProducto;
      selectProductos.appendChild(option);
    });
}

// Añade una línea de pedido
function añadirLineaPedido(cliente, codigoProducto, unidades) {
  let pedidoCliente = gestor._pedidos[gestor._comercialActual][gestor._clienteActual];
  const lineaExistente = pedidoCliente.find(l => l.codigo === codigoProducto);

  if (lineaExistente) {
    alert("Este producto ya está en el pedido. Usa los botones + / - para modificar unidades.");
    return;
  }

  const producto = catalogo._productos.find(p => p._idProducto === codigoProducto);
  if (!producto) return;

  pedidoCliente.push({
    codigo: producto._idProducto,
    nombre: producto._nombreProducto,
    unidades: unidades,
    precio: producto._precioUnidad
  });

  const divCliente = Array.from(document.querySelectorAll('#clientes .cliente')).find(div => div.textContent === cliente._nombreCliente);
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
    gestor._comercialActual = parseInt(e.target.value);
    cargarClientes(gestor._comercialActual);
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
      if (!codigoProducto && codigoProducto !== 0) {
        alert("Selecciona un producto antes de añadir unidades.");
        return;
      }
      const clienteActual = gestor._clientes[gestor._comercialActual][gestor._clienteActual];
      añadirLineaPedido(clienteActual, codigoProducto, unidades);
    });
  });
});
