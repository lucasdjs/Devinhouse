const minhaPromise = new Promise((resolve, reject) => {
    const deuCerto = true;
    if (deuCerto) {
      setTimeout(() => resolve([{ nome: 'teste' }]), 1000);
    } else {
      setTimeout(() => reject('Deu Errado!'), 1000);
    }
  });
  
  minhaPromise.then(
    (test) => console.log(test),
    (error) => console.error('Error: ', error)
  )

  async function dobraValor(value) {
    console.log(value);
    return value * 2;
  }
  
  dobraValor(2)
    .then((result) => dobraValor(result))
    .then(dobraValor)
    .then(console.log);

    function timeout() {
        return new Promise((resolve) => setTimeout(resolve, 1000));
      }
      
      async function dobraValor(value) {
        await timeout();
        console.log(value);
        return value * 2;
      }
      
      const chamar = async () => {
        let result = await dobraValor(2);
        console.log('teste');
        result = await dobraValor(result);
        console.log('teste2');
        result = await dobraValor(result);
        console.log('resultado final', result);
      };
      
      chamar();