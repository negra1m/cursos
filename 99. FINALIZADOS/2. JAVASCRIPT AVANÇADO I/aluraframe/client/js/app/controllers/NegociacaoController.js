class NegociacaoController {
    
    constructor() {

       
        let $ = document.querySelector.bind(document);
        this._inputQuantidade =$('#quantidade');
        this._inputData =$('#data');
        this._inputValor =$('#valor');
        this._listaNegociacoes = new ListaNegociacoes(model =>
            this._negociacoesView.update(model));
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem);
    }
        adiciona(event){

            event.preventDefault();
            this._listaNegociacoes.adiciona(this._criaNegociacao());
            this._mensagem.texto = 'Negociação adicionada com sucesso';
            
            this._mensagemView.update(this._mensagem);
            
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

        esvazia(){
            let valid = confirm("Você deseja realmente apagar a lista?");
            if(valid){

                this._listaNegociacoes.limpaLista();
                this._mensagem.texto = 'Negociações apagadas';
                this._mensagemView.update(this._mensagem);
            }else{
                this._mensagem.texto = 'Suas negociações não foram apagadas';
                this._mensagemView.update(this._mensagem);
            }
        }

        // exercicio para reescrever um array dobrando os valores dos números ímpares encontrados.
        // let numeros = [3,2,11,20,8,7];
        // var result = numeros.map((item) => item % 2 ? item * 2 : item); 
        // console.log(result);   
    }