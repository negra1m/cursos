var maior;
var menor;

class MaiorEMenor {

    encontraValor(param){

        maior = Number.MIN_VALUE;
        menor = Number.MAX_VALUE;
        
        let list = param; 

        list
        .forEach(element => {
            element > maior ? maior = element : element;
            element < menor ? menor = element : element;
        })    
        console.log([maior, menor])
    }
    retornaMaior(){
        return maior;
    }
    retornaMenor(){
        return menor;
    }
    retornaMedia(param){
        
        var media = param.reduce((total, num) =>{
            return total + num;
        }, 0);
        media = media/param.length;
        return media
    }
}