class NegociacaoController {
    
    constructor() {

       
        let $ = document.querySelector.bind(document);
        this._inputQuantidade =$('#quantidade');
        this._inputData =$('#data');
        this._inputValor =$('#valor');
    }
    adiciona(event){

        event.preventDefault();

        //converting the date string to a date Object

        var formatedDate = new Date(...
            this._inputData.value
            .split('-')
            .map((item, index) => item - index % 2)
            );
        console.log(formatedDate);

        let negociacao = new Negociacao(
            formatedDate,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        console.log(negociacao);

        // exercicio para reescrever um array dobrando os valores dos números ímpares encontrados.
        let numeros = [3,2,11,20,8,7];
        var result = numeros.map((item) => item % 2 ? item * 2 : item); 
    }
}