let contas = [
    {
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
  const OPERACAO_SACAR = 'SACAR';
  const OPERACAO_DEPOSITAR = 'DEPOSITAR';

  
  const obterConta = (id) => contas.find((conta) => conta.id === id);
  const validaOperacao = (valor, contaOperacao, operacao) => {
    if (!contaOperacao) {
      console.log('Conta inválida');
      return;
    }
    if (valor <= 0) {
      console.log('Valor inválido');
      return false;
    }
    if (operacao === OPERACAO_SACAR && valor > contaOperacao.saldo) {
      console.log('Saldo insuficiente');
      return false;
    }
    return true;
  };


  
  const atualizaSaldo = (id, saldo) => {
    contas = contas.map((conta) => (conta.id === id ? { ...conta, saldo } : conta));
    console.log(`Seu saldo atual é: ${saldo}`);
  };
  const sacar = (id, valor) => {
    const contaOperacao = obterConta(id);
    if (validaOperacao(valor, contaOperacao, OPERACAO_SACAR)) {
      const saldo = contaOperacao.saldo - valor;
      atualizaSaldo(id, saldo);
    }
  };
  const depositar = (id, valor) => {
    const contaOperacao = obterConta(id);
    if (validaOperacao(valor, contaOperacao, OPERACAO_DEPOSITAR)) {
      const saldo = contaOperacao.saldo + valor;
      atualizaSaldo(id, saldo);
    }
  };
  sacar(10, 200);
  depositar(1, 200);
  sacar(1, 500);
  sacar(1, 10); 