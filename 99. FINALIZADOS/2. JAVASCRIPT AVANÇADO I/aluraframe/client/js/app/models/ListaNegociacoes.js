class ListaNegociacoes {
    
    constructor(trap){
        this._negociacoes = [];
        this._trap = trap;
    }

    adiciona(negociacao){

        this._negociacoes.push(negociacao);
        this._trap(this);
    }

    get negociacoes(){
        // esse tipo de retorno blinda a lista de negociaçõe para que não seja atualizado a lista
        return [].concat(this._negociacoes);
    }

    limpaLista(){
        
        this._negociacoes = [];
        this._trap(this);
    }

}