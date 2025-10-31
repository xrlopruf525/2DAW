class Arbol{
    _codigo;
    _tallaje;
    _especie;

    constructor(codigo,tallaje,especie){
        this._codigo = codigo;
        this._tallaje = tallaje;
        this._especie = especie;
    }


    get codigo() {
        return this._codigo;
    }
    set codigo(value) {
        this._codigo = value;
    }
    get tallaje() {
        return this._tallaje;
    }
    set tallaje(value) {
        this._tallaje = value;
    }
    get especie() {
        return this._especie;
    }
    set especie(value) {
        this._especie = value;
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

class Perenne extends Arbol{
    _frutal;

    constructor(frutal,codigo,tallaje,especie ){
        super(codigo, tallaje, especie);
        this._frutal = frutal;
    }

    get frutal() {
        return this._frutal;
    }
    set frutal(value) {
        this._frutal = value;
    }
}

class Caduco extends Arbol{
    _mesFloracion;

    constructor(mesFloracion,codigo,tallaje,especie ){
        super(codigo, tallaje, especie);
        this._mesFloracion = mesFloracion;
    }

    get mesFloracion() {
        return this._mesFloracion;
    }
    set mesFloracion(value) {
        this._mesFloracion = value;
    }
}

class Vivero{
    _arboles;
    constructor(){
        this._arboles=[]
    }
    get arboles() {
        return this._arboles;
    }
    set arboles(value) {
        this._arboles = value;
    }




    altaArbol(oArbol) {
        let seRealizaLaInclusion = true;

        if (this.arboles.filter(elem => elem.codigo === oArbol.codigo).length >= 1) {
            seRealizaLaInclusion = false;
        } else {
            this.arboles.push(oArbol);
        }

        return seRealizaLaInclusion;
    }

    tallajeArbol(iCodigo, iTallaje) {
    let salida = "";
    let indice = this.arboles.findIndex(elem => elem.codigo == iCodigo);

    if (indice < 0) {
        salida += "Árbol no registrado";
    } else if(iTallaje < this.arboles[index].tallaje){
        modificado =  "Tallaje inferior al registrado";
    } else {
        this.arboles[index].tallaje = iTallaje;
        salida += "Correcto, tallaje actualizado";
        salida += this.arboles[indice] instanceof Caduco ? "Caduco" : "Perenne";
    }    
    return salida; 
}


    listadoPerennes(minAltura){
        let salida = "<table><thead><th>Tipo</th><th>Nombre</th><th>Precio</th><th>Pulgadas</th><th>Full HD</th><th>Carga</th></thead><tbody>";
        let listadoArboles = 
        this.arboles.filter((elem) => (elem instanceof Perenne) && elem.tallaje >= minAltura);


        listadoArboles.sort((a1,a2) => a2.tallaje - a1.tallaje);

        for(let arbol of listadoArboles){
            salida+=arbol.toHTMLRow();
        }



        salida += "</tbody></table>";

        return salida;

    }

    totalArbolesVenta(){
        let contador=0;

        for(let arbol of this.arboles){
            if(arbol instanceof Caduco && arbol.tallaje > 100){
                contador++;
            } else if(arbol instanceof Perenne && arbol.frutal && arbol.tallaje > 80){
                contador++;
            }else if(arbol instanceof Perenne && !arbol.frutal && arbol.tallaje > 120){
                contador++;
            }
        }

        alert("Hay "+ contador + " arboles en venta");
    }

    siguienteCodigoArbol() {
    if (this.arboles.length == 0) {
      return 1;
    } else {
      return this.arboles[this.arboles.length - 1].codigo + 1;
    }
  }

}
