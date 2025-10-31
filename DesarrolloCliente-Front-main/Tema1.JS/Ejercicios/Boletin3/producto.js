class Producto {

    _nombre;
    _precio;
    _unidades;

    constructor(nombre,precio){
        this._nombre=nombre;
        this._precio=precio;
        this._unidades=0
    }

    get unidades() {
        return this._unidades;
    }
    set unidades(value) {
        if(value >=0 ){
            this._unidades = value;
        } else{
            this._unidades =  0;
        }
    }
    get precio() {
        return this._precio;
    }
    set precio(value) {

        this._precio = Math.abs(value);
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }

    valorEnStock(){
        return this._unidades * this._precio;
    }

    incrementarStock(ud){
        return this._unidades += ud;
    }

    disminuirStock(ud){
        return this._unidades -= ud;
    }

}


let p1 = new Producto("Caja galletas", 1.5);
console.log(p1)
p1.incrementarStock(50)
document.getElementById("salida").innerHTML="Valor en stock: "+p1.valorEnStock()

p1.precio=-2.25
console.log(p1)
