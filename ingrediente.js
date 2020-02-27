export default class Ingredientes{
    /**
     * 
     * @param {number} cantidad 
     * @param {string} nombre 
     * @param {number} costo 
     */
    constructor(cantidad, nombre, costo){
        this.cantidades = cantidad
        this.nombres = nombre
        this.costos = costo
    }
    getDescrpcion(){
        return `${this.cantidades} de ${this.nombres} $${this.costos}`
    }
}