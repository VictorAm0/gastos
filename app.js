import {categoria} from "./classes.js";


const matriz = [
    new categoria("Alimentação"),
    new categoria("Transporte"),
    new categoria("Lazer"),
    new categoria("Outros"),
]


document.getElementById("adicionar").addEventListener("click", () => {
    let gasto = parseFloat(document.getElementById("gasto").value)
    let categoriaSelect = document.getElementById("categoria").value
    let categoria = matriz.find(item => item.categoria === categoriaSelect)

    if (categoria){
        categoria.adicionarValor(gasto)

        document.getElementById(categoriaSelect).textContent = `${categoria.categoria}: R$ ${categoria.valor.toFixed(2)}`
    }
    let total = matriz.reduce((acumula, item) => {
    return acumula + item.valor
    }, 0)

    document.getElementById("total").textContent = `Total: R$ ${total.toFixed(2)}`
    })


