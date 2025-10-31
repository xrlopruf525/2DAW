class Cliente{
    _dniCliente;
    _nombre;
    _apellidos;
    _usuario;

    constructor(dniCliente,nombre,apellidos){
        this._dniCliente = dniCliente
        this._nombre = nombre
        this._apellidos = apellidos
        let apellidosArray = apellidos.split(" ");
        let primerApellido = apellidosArray[0] || "";
        let segundoApellido = apellidosArray[1] || "";
        let dniUltimos3 = dniCliente.slice(-3);

        this._usuario = (
            nombre[0].toLowerCase() +
            primerApellido.slice(0,3).toLowerCase() +
            segundoApellido.slice(0,3).toLowerCase() +
            dniUltimos3
        );
    }

    get dniCliente() {
        return this._dniCliente
    }
    set dniCliente(value) {
        this._dniCliente = value
    }
    
    get nombre() {
        return this._nombre
    }
    set nombre(value) {
        this._nombre = value
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(value) {
        this._apellidos = value;
    }
    get usuario() {
        return this._usuario
    }
    set usuario(value) {
        this._usuario = value
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

class Alojamiento{
    _idAlojamiento;
    _numPersonas;

    constructor(idAlojamiento, numPersonas){
        this._idAlojamiento = idAlojamiento
        this._numPersonas = numPersonas
    }
    get idAlojamiento() {
        return this._idAlojamiento;
    }
    set idAlojamiento(value) {
        this._idAlojamiento = value;
    }
    get numPersonas() {
        return this._numPersonas;
    }
    set numPersonas(value) {
        this._numPersonas = value;
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

class Habitacion extends Alojamiento{
    _desayuno;

    constructor(idAlojamiento, numPersonas,desayuno){
        super(idAlojamiento, numPersonas);
        this._desayuno = desayuno
    }
    get desayuno() {
        return this._desayuno;
    }
    set desayuno(value) {
        this._desayuno = value;
    }
    
}

class Apartamento extends Alojamiento{
    _parking;
    _dormitorios;
    constructor(idAlojamiento, numPersonas,parking, dormitorios){
        super(idAlojamiento, numPersonas);
        this._parking = parking
        this._dormitorios = dormitorios
    }
    get parking() {
        return this._parking;
    }
    set parking(value) {
        this._parking = value;
    }
    get dormitorios() {
        return this._dormitorios;
    }
    set dormitorios(value) {
        this._dormitorios = value;
    }

}


class Reserva{
    _idReserva;
    _cliente;
    _alojamientos;
    _fechaInicio;
    _fechaFin;

    constructor(idReserva, cliente,alojamientos, fechaInicio,fechaFin){
        this._idReserva = idReserva;
        this._cliente = cliente;
        this._alojamientos= alojamientos;
        this._fechaInicio = fechaInicio;
        this._fechaFin = fechaFin;
    }
    get idReserva() {
        return this._idReserva;
    }
    set idReserva(value) {
        this._idReserva = value;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;
    }
    get alojamientos() {
        return this._alojamientos;
    }
    set alojamientos(value) {
        this._alojamientos = value;
    }
    get fechaInicio() {
        return this._fechaInicio;
    }
    set fechaInicio(value) {
        this._fechaInicio = value;
    }
    get fechaFin() {
        return this._fechaFin;
    }
    set fechaFin(value) {
        this._fechaFin = value;
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

class Agencia{
    _clientes;
    _reservas;
    _alojamientos;

    constructor(){
        this._clientes = [];
        this._reservas = [];
        this._alojamientos = [];
    }

    // Altas
    altaCliente(oCliente) {
        if(this._clientes.some(c => c.dniCliente === oCliente.dniCliente)) return false;
        this._clientes.push(oCliente);
        return true;
    }

    altaAlojamiento(oAlojamiento) {
        if(this._alojamientos.some(a => a.idAlojamiento === oAlojamiento.idAlojamiento)) return false;
        this._alojamientos.push(oAlojamiento);
        return true;
    }

altaReserva(oReserva) {
    const hoy = new Date();
    const inicio = new Date(oReserva.fechaInicio);
    const fin = new Date(oReserva.fechaFin);

    // 1️⃣ Fechas válidas
    if(inicio < hoy || fin < hoy || fin < inicio){
        console.log("Error: fechas no válidas para la reserva.");
        return false;
    }

    // 2️⃣ Comprobar disponibilidad de alojamientos
    for(let aloj of oReserva.alojamientos){
        for(let r of this._reservas){
            // Si el alojamiento ya está en otra reserva
            if(r.alojamientos.includes(aloj)){
                let rInicio = new Date(r.fechaInicio);
                let rFin = new Date(r.fechaFin);
                // Comprobar si las fechas se solapan
                if(!(fin < rInicio || inicio > rFin)){
                    console.log(`Error: el alojamiento ${aloj.idAlojamiento} ya está reservado en esas fechas.`);
                    return false;
                }
            }
        }
    }

    // 3️⃣ Comprobar que el idReserva no exista
    if(this._reservas.some(r => r.idReserva === oReserva.idReserva)){
        console.log(`Error: la reserva con id ${oReserva.idReserva} ya existe.`);
        return false;
    }

    // Todo bien → incluir la reserva
    this._reservas.push(oReserva);
    return true;
}

    // Baja de reserva por id
    bajaReserva(idReserva) {
        const index = this._reservas.findIndex(r => r.idReserva === idReserva);
        if(index !== -1){
            this._reservas.splice(index,1);
            return true;
        }
        return false;
    }

    // Listado de clientes
    listadoClientes(){
        let salida = "<table><thead><th>DNI</th><th>Nombre</th><th>Apellidos</th><th>Usuario</th></thead><tbody>";
        for(let cliente of this._clientes){
            salida += cliente.toHTMLRow();
        }
        salida += "</tbody></table>";
        return salida;
    }

    // Listado de alojamientos
    listadoAlojamientos(){
        let salida = "<table><thead><th>ID</th><th>Número de personas</th><th>Extras</th></thead><tbody>";
        for(let a of this._alojamientos){
            let extras = "";
            if(a instanceof Habitacion) extras = "Desayuno: " + (a.desayuno ? "Sí" : "No");
            if(a instanceof Apartamento) extras = `Parking: ${a.parking ? "Sí" : "No"}, Dormitorios: ${a.dormitorios}`;
            salida += `<tr><td>${a.idAlojamiento}</td><td>${a.numPersonas}</td><td>${extras}</td></tr>`;
        }
        salida += "</tbody></table>";
        return salida;
    }

    // Listado de reservas de un cliente
    listadoReservasCliente(dniCliente){
        let salida = "<table><thead><th>ID Reserva</th><th>Cliente</th><th>Fechas</th><th>Alojamientos</th></thead><tbody>";
        for(let r of this._reservas.filter(r => r.cliente.dniCliente === dniCliente)){
            let alojStr = r.alojamientos.map(a => a.idAlojamiento).join(", ");
            salida += `<tr>
                <td>${r.idReserva}</td>
                <td>${r.cliente.nombre} ${r.cliente.apellidos}</td>
                <td>${r.fechaInicio} - ${r.fechaFin}</td>
                <td>${alojStr}</td>
            </tr>`;
        }
        salida += "</tbody></table>";
        return salida;
    }

    // Listado de reservas entre dos fechas
    listadoReservasEntreFechas(fechaInicio, fechaFin){
        let salida = "<table><thead><th>ID Reserva</th><th>ID Cliente</th><th>Nombre</th><th>Fechas</th><th>Alojamientos</th></thead><tbody>";
        let inicio = new Date(fechaInicio);
        let fin = new Date(fechaFin);
        for(let r of this._reservas.filter(r => {
            let fInicio = new Date(r.fechaInicio);
            let fFin = new Date(r.fechaFin);
            return fInicio <= fin && fFin >= inicio;
        })){
            let alojStr = r.alojamientos.map(a => a.idAlojamiento).join(", ");
            salida += `<tr>
                <td>${r.idReserva}</td>
                <td>${r.cliente.dniCliente}</td>
                <td>${r.cliente.nombre}</td>
                <td>${r.fechaInicio} - ${r.fechaFin}</td>
                <td>${alojStr}</td>
            </tr>`;
        }
        salida += "</tbody></table>";
        return salida;
    }

    // Listado de habitaciones con desayuno
    listadoHabitacionesDesayuno(){
        let salida = "<table><thead><th>ID</th><th>Número de personas</th><th>Desayuno</th></thead><tbody>";
        for(let h of this._alojamientos.filter(a => a instanceof Habitacion && a.desayuno)){
            salida += `<tr><td>${h.idAlojamiento}</td><td>${h.numPersonas}</td><td>${h.desayuno ? "Sí" : "No"}</td></tr>`;
        }
        salida += "</tbody></table>";
        return salida;
    }
}


// Crear instancia de la agencia
let agencia = new Agencia();

// Crear clientes
let cliente1 = new Cliente("12345678A", "Juan", "Pérez López");
let cliente2 = new Cliente("87654321B", "Ana", "Gómez Fernandez");
let clienteDuplicado = new Cliente("12345678A", "Carlos", "López Rufino");

// Crear alojamientos
let alojamiento1 = new Alojamiento(1, 14);
let alojamiento2 = new Alojamiento(1, 7);
let hab1 = new Habitacion(3, 4, true); // ID distinto para evitar duplicados

// Dar de alta clientes
console.log("Alta cliente1:", agencia.altaCliente(cliente1)); // true
console.log("Alta cliente2:", agencia.altaCliente(cliente2)); // true
console.log("Alta clienteDuplicado:", agencia.altaCliente(clienteDuplicado)); // false

// Dar de alta alojamientos
console.log("Alta alojamiento1:", agencia.altaAlojamiento(alojamiento1)); // true
console.log("Alta alojamiento2:", agencia.altaAlojamiento(alojamiento2)); // false
console.log("Alta habitación:", agencia.altaAlojamiento(hab1)); // true

// Crear una reserva usando cliente1 y algunos alojamientos
let reserva1 = new Reserva(
    101,                 // idReserva
    cliente1,            // cliente
    [alojamiento1, hab1],// array de alojamientos
    "2025-11-01",        // fechaInicio
    "2025-11-07"         // fechaFin
);

// Dar de alta la reserva
console.log("Alta de reserva1:", agencia.altaReserva(reserva1)); // true

// Ver resultados en consola
console.log("Clientes en la agencia:", agencia.clientes);
console.log("Alojamientos en la agencia:", agencia.alojamientos);
console.log("Reservas en la agencia:", agencia.reservas);

