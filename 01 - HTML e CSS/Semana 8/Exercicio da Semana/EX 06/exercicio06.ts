class Conta{
protected numero: number;
protected saldo: number;
protected estaAtiva:  boolean;
protected dono: string;

constructor(numero:number, saldo:number, ativa:boolean, dono:string){
    this.numero = numero;
    this.saldo = saldo;
    this.estaAtiva = ativa;
    this.dono = dono
}
}


class ContaEmpresa extends Conta{
private limiteDeDeposito: number = 1000;

constructor(numero:number, saldo:number, ativa:boolean, dono:string){
super(numero,saldo,ativa,dono);

}
deposito(valor:number){
if(valor<=this.limiteDeDeposito){  
 this.saldo = this.saldo + valor;
 return this.imprimeValorConta(this.saldo);
}
else{
    return this.imprimeValorConta(this.saldo);
}

}
imprimeValorConta(valor){
    console.log(valor)
}

}
let banco = new ContaEmpresa(1,0,true,"Lucas")

banco.deposito(3500)
