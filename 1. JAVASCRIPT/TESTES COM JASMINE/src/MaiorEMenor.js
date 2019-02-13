var maior;
var menor;

class MaiorEMenor {

    encontraValor(param){

        maior = Number.MIN_VALUE;
        menor = Number.MAX_VALUE;
        
        let list = param; 

        list
        .forEach(element => {
            if(element > maior){
                maior = element
            }
            if(element < menor){
             menor = element;
            }    
        })
        console.log([maior, menor])
    }
    retornaMaior(){
        return maior;
    }
    retornaMenor(){
        return menor;
    }
}