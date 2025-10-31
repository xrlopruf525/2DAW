class Electrodomestico{
    _nombre;
    _precio;

    constructor(nombre,precio){
        this._nombre = nombre;
        this._precio = precio;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get precio() {
        return this._precio;
    }
    set precio(value) {
        this._precio = value;
    }

    toString(){
        salida = (this._nombre ,"-",this._precio)
        return salida
    }
}

class Televisor extends Electrodomestico{
    _pulgadas;
    _fullHD;

    constructor(nombre,precio,pulgadas,fullHD){
        super(nombre,precio);
        this._pulgadas = pulgadas;
        this._fullHD = fullHD
    }
    get pulgadas() {
        return this._pulgadas;
    }
    set pulgadas(value) {
        this._pulgadas = value;
    }
    get fullHD() {
        return this._fullHD;
    }
    set fullHD(value) {
        this._fullHD = value;
    }

    toHTMLRow(){
        let fila = "";

        fila+="<tr>"

        for(let atr of Object.values(this)){
            fila+= "<td>"+atr+"</td>"
        }

        fila+="</tr>"
        
        return fila;
    }
    
}

class Lavadora extends Electrodomestico{
    _carga;
   

    constructor(nombre,precio, carga){
        super(nombre,precio);
        this.carga = carga;
    }
    get carga() {
        return this._carga;
    }
    set carga(value) {
        this._carga = value;
    }

    toHTMLRow(){
        let fila = "";

        fila+="<tr>"

        for(let atr of Object.values(this)){
            fila+= "<td>"+atr+"</td>"
        }

        fila+="</tr>"
        
        return fila;
    }
    
}

class StockProducto{
    _producto;
    _stock;

    constructor(producto,stock){
        this._producto = producto;
        this._stock=stock;
    }
    get producto() {
        return this._producto;
    }
    set producto(value) {
        this._producto = value;
    }
    get stock() {
        return this._stock;
    }
    set stock(value) {
        this._stock = value;
    }

    toHTMLRow(){
        let fila = "";

        fila+="<tr>"

        for(let atr of Object.values(this)){
            fila+= "<td>"+atr+"</td>"
        }

        fila+="</tr>"
        
        return fila;
    }
}

class Almacen{
    _catalogo;
    _stock;

    constructor(){
        this._catalogo = [];
        this._stock = [];
    }
    get catalogo() {
        return this._catalogo;
    }
    set catalogo(value) {
        this._catalogo = value;
    }
    get stock() {
        return this._stock;
    }
    set stock(value) {
        this._stock = value;
    }


    altaCatalogo(oElectro){
        let seRealizaLaInclusion = true;

        if (this.catalogo.filter(elem => elem.nombre == oElectro.nombre).length >= 1) {
            seRealizaLaInclusion = false;
        } else {
            this.catalogo.push(oElectro);
            let prod = new StockProducto(oElectro, 0)
            this.stock.push(prod)
        }

        return seRealizaLaInclusion;
    }


    entradaStock(nombre, unidades){
        let salida="";
        let indice=this.stock.findIndex((elem) => elem.producto.nombre == nombre);

        if (indice < 0) {
            salida += "Electrodomestico no registrado";
        } else {
            this.stock[indice].stock += unidades;
            salida += "Correcto, unidades actualizadas ";
            salida += this.stock[indice].stock;
        }    
        return salida; 
    }

    salidaStock(nombre, unidades){
        let salida="";
        let indice=this.stock.findIndex((elem) => elem.producto.nombre == nombre);

        if (indice < 0) {
            salida += "Electrodomestico no registrado";
        } else {
            this.stock[indice].stock -= unidades;
            salida += "Correcto, unidades actualizadas ";
            salida += this.stock[indice].stock;
        }    
        return salida; 
    }

    listadoCatalogos(){
        let salida ="<h1>LISTADO</h1>"
        salida += "<table><thead><th>Tipo</th><th>Nombre</th><th>Precio</th><th>Pulgadas</th><th>Full HD</th><th>Carga</th></thead><tbody>";
        
        for(let e of this.catalogo){
            salida+=e.toHTMLRow();
        }
        salida += "</tbody></table>";

        return salida;

    }

    listadoStock(){
        let salidaTV ="<h1>LISTADO TELEVISORES</h1>"
        let salidaLav = "<h1>Listado Lavadoras</h1>"
        salidaTV += "<table><thead><th>Nombre</th><th>Precio</th><th>Pulgadas</th><th>Full HD</th></thead><tbody>";
        salidaLav += "<table><thead><th>Nombre</th><th>Precio</th><th>Carga</th></thead><tbody>";
        let listadoTelevisores = 
        this.stock.filter((elem) => (elem instanceof Televisor) && elem.stock > 0);

        let listadoLavadoras = 
        this.stock.filter((elem) => (elem instanceof Lavadora) && elem.stock > 0);
        
        for(let e of listadoTelevisores){
            salidaTV+=e.toHTMLRow();
        }
        for(let e of listadoLavadoras){
            salidaLav+=e.toHTMLRow();
        }
        salidaTV += "</tbody></table>";
        salidaLav += "</tbody></table>";

        let salidaFinal = salidaTV
        salidaFinal += salidaLav

        return salidaFinal;

    }

    numTelevisoresStock(){
        return this.stock.filter(e => e instanceof Televisor).length;
    }

    numLavadorasStock(){
        return this.stock.filter(e => e instanceof Lavadora).length;
    }
    
    importeTotal(){
        let total=0;

        for(let e of this.stock){
            total+=e.stock;
        } 

        return total
    }

}