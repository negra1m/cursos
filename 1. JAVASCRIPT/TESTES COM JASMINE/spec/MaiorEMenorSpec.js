describe("MaiorEMenor", ()=>{
    it('números em sequencia crescente', () =>{

        let test = new MaiorEMenor();
        test.encontraValor([1,2,3,4,5,6,7]);

        expect(test.retornaMaior()).toEqual(7);
        expect(test.retornaMenor()).toEqual(1);

    });

    it('números em sequencia decrescente', ()=> {

        let test = new MaiorEMenor();
        test.encontraValor([99,55,23,11,10,8,5]);

        expect(test.retornaMaior()).toEqual(99);
        expect(test.retornaMenor()).toEqual(5);
        
    });

    it('lista com 1 elemento', ()=>{
        let test = new MaiorEMenor();
        test.encontraValor([1]);

        expect(test.retornaMaior()).toEqual(1);
        expect(test.retornaMenor()).toEqual(1);
    });
  
})