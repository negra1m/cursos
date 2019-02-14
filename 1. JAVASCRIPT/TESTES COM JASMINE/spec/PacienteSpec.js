describe('Paciente: ', ()=>{

    it('retorna o IMC', ()=>{
        let pacienteTest = new Paciente('John Doe', 20, 1.78, 80);
        expect(pacienteTest.imc()).toEqual(80 / (1.78 * 1.78))
    })

    it('retorna a quantidade de batimentos cardiacos total do paciente', ()=>{
        let pacienteTest = new Paciente('John Doe Dum', 35, 1.90, 110);
        let batimentosAno = 365*24*60*80;
        expect(pacienteTest.beats()).toEqual(35*batimentosAno);
    })

})