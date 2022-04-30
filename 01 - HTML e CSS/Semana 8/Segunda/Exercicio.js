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
var pessoa = /** @class */ (function () {
    function pessoa() {
        this.nome = "Lucas";
        this.idade = 23;
        this.cidadeOndeMora = 'Lages';
        this.temCNPJ = true;
    }
    return pessoa;
}());
var teste = new pessoa();
console.log(teste.nome + " " + teste.idade + " " + teste.cidadeOndeMora + " " + teste.temCNPJ);
