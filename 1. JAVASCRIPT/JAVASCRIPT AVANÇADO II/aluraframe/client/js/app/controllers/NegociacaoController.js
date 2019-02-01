class NegociacaoController {
    
    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputQuantidade =$('#quantidade');
        this._inputData =$('#data');
        this._inputValor =$('#valor');
        this._listaNegociacoes = ProxyFactory.create(
            new ListaNegociacoes(), 
            ['adiciona', 'limpaLista'], 
            (model)=> 
                this._negociacoesView.update(model)
        );
        // this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        // this._negociacoesView.update(this._listaNegociacoes);
        // this._mensagemView = new MensagemView($('#mensagemView'));
        // this._mensagem = ProxyFactory.create(new Mensagem(), 
        //     ['texto'], 
        //     model =>
        //         this._mensagemView.update(model));
        this._listaNegociacoes = new Bind (
                new ListaNegociacoes(),
                new NegociacoesView($('#negociacoesView')),
                'adiciona', 'limpaLista');
        this._mensagem = new Bind (
                new Mensagem(),
                new MensagemView($('#mensagemView')),
                'texto');
    }
        adiciona(event){

            event.preventDefault();
            this._listaNegociacoes.adiciona(this._criaNegociacao());
            this._mensagem.texto = 'Negociação adicionada com sucesso';
                        
            this._limpaFormulario();
        }

        importanegociacao(){
            let service = new NegociacaoService();

            Promise.all([
                service.obterNegociacoesDaSemana(),
                service.obterNegociacoesDaSemanaAnterior(),
                service.obterNegociacoesDaSemanaRetrasada()
            ]).then(negociacoes =>{
                negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações importadas com sucesso';
            })
            .catch(erro => this._mensagem.texto = erro)
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

        limpaLista(){
            let valid = confirm("Você deseja realmente apagar a lista?");
            if(valid){

                this._listaNegociacoes.limpaLista();
                this._mensagem.texto = 'Negociações apagadas';
            }else{
                this._mensagem.texto = 'Suas negociações não foram apagadas';
            }
        }

        // exercicio para reescrever um array dobrando os valores dos números ímpares encontrados.
        // let numeros = [3,2,11,20,8,7];
        // var result = numeros.map((item) => item % 2 ? item * 2 : item); 
        // console.log(result);   
    }