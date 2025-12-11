class Producto{
    _idProducto;
    _nombreProducto;
    _precioUnidad;
    _idCatalogo;

    constructor(idProducto, nombreProducto, precioUnidad, idCatalogo){
        this._idProducto = idProducto;
        this._nombreProducto = nombreProducto;
        this._precioUnidad = precioUnidad;
        this._idCatalogo = idCatalogo;
    }

    get _idProducto(){
        return this.__idProducto;
    }
}

class Catalogo{
    _productos;

    constructor(){
        this._productos = [];
    }  
    addProducto(idProducto, nombreProducto, precioUnidad, idCatalogo){
        const producto = new Producto(idProducto, nombreProducto, precioUnidad, idCatalogo);
        this._productos.push(producto);
    }

}

class LineaPedido{
    _unidades;
    _idProducto;
    
    constructor(unidades, idProducto){
        this._unidades = unidades;
        this._idProducto = idProducto;
    }
}

class Cliente{
    _nombreCliente;
    cuentaAbierta;

    constructor(nombreCliente){
        this._nombreCliente = nombreCliente;
        this.cuentaAbierta = false;
    }
}

class Gestor{
    _categorias;
    _comerciales;
    _clientes;
    _pedidos;
    _comercialActual;
    _clienteActual;

    constructor(){
        this._categorias = [];
        this._comerciales = [];
        this._clientes = [];
        this._pedidos = [];
        this._comercialActual = 0;
        this._clienteActual = 0;
    }
}