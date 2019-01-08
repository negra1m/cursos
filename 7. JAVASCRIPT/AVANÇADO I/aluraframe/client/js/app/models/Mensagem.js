class Mensagem {
    constructor(texto=''){ //podemos adotar um valor padrão no construtor, nesse caso em branco

        this._texto = texto;
    }

    get texto() {

        return this._texto;
    }

    set texto(texto) {
        this._texto = texto
    }
}