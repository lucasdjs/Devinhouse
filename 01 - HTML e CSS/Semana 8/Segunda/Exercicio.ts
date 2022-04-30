// const  valores = {
// valor1:35,
// valor2 : 0
// }

// function somar(valores){
//     return valores.valor1 + valores.valor2;
// }

// console.log(somar(valores))

// const teste:{val1:number, val2:number} = {
//     val1:10,
//     val2:20
// }
// function somar(object:any):number{
//     return object.val1 + object.val2;
// }
// console.log(somar(teste))


// const teste:any = {
//     nome: "Lucas",
//     idade: 23,
//     solteiro: false
// }
// console.log(teste)

// class jogo{
//     nome:number = 50;

//     constructor(){

//     }
//     teste(){
//         this.nome = 0;
//     }
    
// }
// const teste = new jogo()

// console.log(teste.nome)

class pessoa{
    nome: string = "Lucas"
    idade:  number = 23
    cidadeOndeMora: string = 'Lages'
    temCNPJ : boolean = true

}

const teste = new pessoa();

console.log(teste.nome + " "+ teste.idade + " "+ teste.cidadeOndeMora + " "+ teste.temCNPJ)