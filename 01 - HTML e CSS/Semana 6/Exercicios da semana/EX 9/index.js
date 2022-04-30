function exercicio() {
  let titulo = document.querySelector('h1');
  let descricao = document.querySelector('#descricao');
  let listaItens = document.querySelectorAll('.itens');

  console.log(`${titulo.textContent} , ${descricao.textContent}`);

  for (let li of listaItens) {
    console.log(li.textContent);
  }
}
