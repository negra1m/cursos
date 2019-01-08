class NegociacaoController {
    
    constructor() {

       
        let $ = document.querySelector.bind(document);
        this._inputQuantidade =$('#quantidade');
        this._inputData =$('#data');
        this._inputValor =$('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }
        adiciona(event){

            event.preventDefault();
            this._listaNegociacoes.adiciona(this._criaNegociacao());
            this._limpaFormulario();
        }

        _criaNegociacao(){

            return new Negociacao(
                DateHelper.textoParaData(this._inputData.value),
                this._inputQuantidade.value,
                this._inputValor.value
            );
        }

        _limpaFormulario(){

            this._inputData.value = '';
            this._inputQuantidade.value = 1;
            this._inputValor.value = 0;
            this._inputData.focus();
        }

        // exercicio para reescrever um array dobrando os valores dos números ímpares encontrados.
        // let numeros = [3,2,11,20,8,7];
        // var result = numeros.map((item) => item % 2 ? item * 2 : item); 
        // console.log(result);   
    }