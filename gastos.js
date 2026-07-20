var alimentação = 0
var transporte = 0
var lazer = 0
var outros = 0
var total = 0

document.getElementById("adicionar").addEventListener("click", () => {
    let gasto = parseFloat(document.getElementById("gasto").value)
    let categoria = document.getElementById("categoria").value

    switch (categoria){
        case "Alimentação":
            alimentação += gasto
            total += gasto
            document.getElementById(categoria).textContent = categoria + ": R$ " + alimentação
            break
            
        case "Transporte":
            transporte += gasto
            total += gasto
            document.getElementById(categoria).textContent = categoria + ": R$ " + transporte
            break
                
        case "Lazer":
            lazer += gasto
            total += gasto
            document.getElementById(categoria).textContent = categoria + ": R$ " + lazer
            break
                    
        case "Outros":
            outros += gasto
            total += gasto
            document.getElementById(categoria).textContent = categoria + ": R$ " + outros
            break
    }

    document.getElementById("total").textContent = "Total: R$ " + total
})