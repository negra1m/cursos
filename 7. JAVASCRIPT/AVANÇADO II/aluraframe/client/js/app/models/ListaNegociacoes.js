class ListaNegociacoes {
    
    constructor(trap){
        this._negociacoes = [];
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
    }

    get negociacoes(){
        // esse tipo de retorno blinda a lista de negociaçõe para que não seja atualizado a lista
        return [].concat(this._negociacoes);
    }

    limpaLista(){
        
        this._negociacoes = [];
    }

}