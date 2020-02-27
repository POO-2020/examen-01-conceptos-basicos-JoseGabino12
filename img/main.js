import Receta from "./receta.js"
import Ingredientes from "./ingrediente.js"
import Cantidad from "./cantidad.js"

class Main{
    constructor(){
        this.cantidades = new Cantidad(100, "Gramos")
        this.cantidades2 = new Cantidad(2, "Litros")

        this.ingredientes = new Ingredientes(this.cantidades.getDescripcion1(), "Azucar", 142)
        this.ingredientes2 = new Ingredientes(this.cantidades.getDescripcion1(), "Leche", 258)

        this.recetas = new Receta("Pastel", "José Gabino Morales González")

    }
    getCantidad(){
        console.log(`${this.cantidades.getDescripcion1()}`)
    }
    getIngredientes(){
        console.log(`${this.ingredientes.getDescrpcion()}`)
    }
    getReceta(){
        this.recetas.agregarIngrediente(this.ingredientes)
        this.recetas.agregarIngrediente(this.ingredientes2)

        console.log(`${this.recetas.getNumeroIngredientes()}`)
        console.log(`${this.recetas.getCosto()}`)
        this.recetas.imprimirEnConsola()
    }
}

let app = new Main()
app.getIngredientes()
app.getCantidad()
app.getReceta()
