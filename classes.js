export class categoria{
    constructor(categoria){
        this.categoria = categoria;
        this.valor = 0
    }
    adicionarValor(valor){
        this.valor += parseFloat(valor)
    }
}

