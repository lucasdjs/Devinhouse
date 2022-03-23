
function imprimeMensagem(nome, mensagem = 'seja bem vindo(a)!') {
    console.log(nome, ',', mensagem);
  }
  
  const showMessage = (nome, mensagem = 'seja bem vindo(a)!') => nome + ',' + mensagem
  console.log(showMessage('thais'))

const usuarios = [
    {
        nome: 'douglas',
        sobrenome: 'costa'
    },
    {
        nome: 'rebeca',
        sobrenome: 'silva'
    },
    {
        nome: 'Max',
        sobrenome: 'bairros'
    }
];

    const novosNomes = usuarios.map((usuario) => {
    const ano = new Date().getFullYear()
    const nickname = `${usuario.nome}_${usuario.sobrenome}_${ano}`

    return { ...usuario, nickname }
}
)

console.log(novosNomes)

const usuarios = [
    {
        nome: 'douglas',
        sobrenome: 'costa'
    },
    {
        nome: 'rebeca',
        sobrenome: 'silva'
    },
    {
        nome: 'Max',
        sobrenome: 'bairros'
    }
];
const novosNomes = usuarios.map((usuario) => {
    const ano = new Date().getFullYear()
    const nickname = `${usuario.nome}_${usuario.sobrenome}_${ano}`
    usuario.nickname = nickname
    return usuario
}
)
console.log(novosNomes)
marca_de_verificação_branca
olhos
mãos_para_cima
Reagir
Responder

22h05
Exemplo 2   
const notas = [8,7,3,9]
const notasDividasPor2 = notas.map(
 (nota) => {
  return nota / 2
})
console.log(notas)
console.log(notasDividasPor2) (editado) 
22h06
Exemplo 3:
function imprimeMensagem(nome, mensagem = 'seja bem vindo(a)!') {
  let mensage = nome +  mensagem;
}
const showMessage = (nome, mensagem = 'seja bem vindo(a)!') => nome + ',' + mensagem
const helloWorld = () => console.log('Ola mundo')
const helloWorld2 = (name) => console.log(name)
const helloWorld3 = (name = 'douglas') => {
 const year = new Date().getFullYear()
 return `Bem vindo(a) ${name} a ${year}`
}
console.log(helloWorld3('teste'))