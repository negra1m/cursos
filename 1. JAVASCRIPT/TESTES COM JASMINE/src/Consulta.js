class Consulta{
    constructor(paciente, procedimentos, retorno, particular){
        this.paciente = paciente;
        this.procedimentos = procedimentos;
        this.retorno = retorno;
        this.particular = particular;
    }

    precoTotal(){
        let precoTotal = 0;
        if(this.retorno) 
            return precoTotal;
        else{
            this.procedimentos.forEach(proc => {
                
                proc == 'raio-x' ? precoTotal += 55 :
                proc == 'gesso' ? precoTotal += 32 :
                precoTotal += 25;               
            });
        }
        this.particular ? precoTotal = precoTotal*2 : precoTotal;
        return precoTotal;
    }
}