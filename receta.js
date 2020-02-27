
export default class Receta{
    /**
     * 
     * @param {string} nombre 
     * @param {string} autor 
     * @param {number} ingrediente 
     */
    constructor(nombre, autor){
        this.nombres = nombre
        this.autores = autor
        this.ingredientes = Array()
    }
    getNumeroIngredientes(){
        let numero = Array()
        this.ingredientes.forEach((elemento, i) =>{
            numero[i] = elemento[i]
        })
        return ` ${numero.length}`
    }
    getCosto(){
        let totalCostos = 0
        this.ingredientes.forEach((elemento) => {
            totalCostos = totalCostos + elemento.costos
        })
        return `${totalCostos}`
        
    }
    imprimirEnConsola(){
        console.log (`${this.nombres} Autor: ${this.autores} Ingredientes: \n `)
        this.ingredientes.forEach((elemento, i) =>{
            console.log (` \n ${i + 1} ${elemento.getDescrpcion()}`)
        })
        console.log(`Costo total: $${this.getCosto()} pesos`)
    }
    agregarIngrediente(ingrediente){
        this.ingredientes.push(ingrediente)
    }
}