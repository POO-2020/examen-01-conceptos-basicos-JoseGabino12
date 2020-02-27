export default class Cantidad{
    /**
     * 
     * @param {number} valor 
     * @param {string} unidad 
     */
    constructor(valor, unidad){
        this.valores = valor
        this.unidades = unidad
    }
    getDescripcion1(){
        return `${this.valores} ${this.unidades}`
    }
}