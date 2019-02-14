class Paciente{
    
    constructor(nome, idade, altura, peso){
        this.nome = nome;
        this.idade= idade;
        this.altura= altura;
        this.peso=peso;
        this.batimentosAno = 365*24*60*80;
    }
    imc(){
        return this.peso / (this.altura*this.altura);
    }
    beats(){
        return this.idade * this.batimentosAno;
    }
}