export class Modulo{
    constructor(
        public modulo:String
    ){}
}
export class AlumnoDAW{
    constructor(
        public nombre:String,
        public apellidos:String,
        public dni:String,
        public fecha_nacimiento:Date,
        public poblacion:String,
        public telefono:Number,
        public curso:String,
        public modulos:Array<Modulo>,
    ){}
}
