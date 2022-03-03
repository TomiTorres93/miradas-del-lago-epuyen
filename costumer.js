class Costumer { 
    constructor(nombre, fechaentrada, fechasalida, huespedes) {
    this.nombre = nombre;
    this.fechaentrada = fechaentrada;
    this.fechasalida = fechasalida;
    this.huespedes = huespedes;
   

}

huespedCreado() {
    console.log("¡Hola! Mi nombre es " + this.nombre.toUpperCase() + " Quería saber si tenían habitación disponible para la fecha " + this.fechaentrada + "Hasta la fecha " + this.fechasalida+ "Somos" + this.huespedes + 
    "personas. ¡Muchas gracias!");
}



}



