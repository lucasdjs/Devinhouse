const OPERACAO_SACAR = 'SACAR';
const OPERACAO_DEPOSITAR = 'DEPOSITAR';

let contaDeCliente = [{
    id: 1,
    saldo: 500,
    },
    {
    id: 2,
    saldo: 30000,
    },
    {
    id: 3,
    saldo: 50,
    },
    ];
  

    const atualizaSaldo = (id, saldo) => {
        contaDeCliente = contaDeCliente.map((conta) => (conta.id === id ? { ...conta, saldo } : conta));
        console.log(`Seu saldo atual é: ${saldo}`);
        console.log(contaDeCliente);
      };

const operacao = (id, valor, tipoOperacao)=>{
    let obterConta = contaDeCliente.find(contaId => contaId.id === id);
    let saldoGeral = obterConta.saldo;
    let operacao = tipoOperacao;

    switch(operacao){
        case OPERACAO_SACAR:
            if(valor<=0){
                console.log("valor inválido");
                return false;
            }
            else if(valor > saldoGeral)
            {
                console.log("Saldo insuficiente para transação");
            }
            else{
                let sacar = saldoGeral - valor;
                console.log("Saque realizado com sucesso!")
                atualizaSaldo(id, sacar);
               
            }
            break;
    }
    switch(operacao){
        case OPERACAO_DEPOSITAR:
            if(valor<=0){
                console.log("valor inválido");
                return false;
            }
            
            else if(valor>0){
                let deposito = saldoGeral+valor ;
                console.log(`Déposito ocorrido com sucesso!`)
                atualizaSaldo(id, deposito);
               
        
            }
            break;
    }

}

operacao(3, 100, OPERACAO_DEPOSITAR);