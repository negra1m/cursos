describe('Consulta: ', ()=>{
    /* VALORES:
        RAIOX - 55
        GESSO - 32
        CONSULTA - 25
        RETORNO - 0
    */
   var paciente;

    beforeEach(()=>{
        paciente = new Paciente('John Doe', 25, 1.78, 80);
    });
    describe('Consultas de convênio', ()=>{
        it('retorna o valor da consulta como ZERO se RETORNO', ()=>{
            let consulta = new Consulta(paciente, '', true, false)
            expect(consulta.precoTotal()).toEqual(0);
        });       
    });
    
    it('retorna o valor da consulta como ZERO se RETORNO', ()=>{
        let consulta = new Consulta(paciente, '', true, false)
        expect(consulta.precoTotal()).toEqual(0);
    })

    it('retorna o valor da consulta se raio-x COM convenio', ()=>{
        let radio = ['raio-x']; 
        let consulta = new Consulta(paciente, radio, false, false)
        expect(consulta.precoTotal()).toEqual(55);
    })

    it('retorna o valor da consulta se raio-x SEM convenio', ()=>{
        let radio = ['raio-x']; 
        let consulta = new Consulta(paciente, radio, false, true)
        expect(consulta.precoTotal()).toEqual(55*2);
    })

    it('retorna o valor da consulta mais de um procedimento COM convenio ', ()=>{
        let procs = ['raio-x', 'gesso'];
        let consulta = new Consulta(paciente, procs, false, false)
        expect(consulta.precoTotal()).toEqual(87);
    })

    it('retorna o valor da consulta mais de um procedimento SEM convenio ', ()=>{
        let procs = ['raio-x', 'gesso'];
        let consulta = new Consulta(paciente, procs, false, true)
        expect(consulta.precoTotal()).toEqual(87*2);
    })
    
    it('retorna valor de consulta se procedimento nao cadastrado', ()=>{
        let invalProc = ['invalid'];
        let consulta = new Consulta(paciente, invalProc, false, false)
        expect(consulta.precoTotal()).toEqual(25);
    })

})