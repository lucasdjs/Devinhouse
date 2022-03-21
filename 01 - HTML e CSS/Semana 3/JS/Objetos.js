var carro = {
    cor: "Vermelho",
    temDono: true,
    qtdPortas: 4,
};


function leiaPropiedade(argumento){
    console.log("A propiedade tem o valor de: " + carro[argumento]);
}
leiaPropiedade("temDono" , true);


adicionarPropiedade("buzinar",
function(){
console.log("bi-bi")
}
)
var carro = { 
    cor: "vermelho", 
    temDono: false,
    qtdPortas: 4,
  };
  
  // var outroCarro = { 
  //   cor: "azul", 
  //   temDono: true,
  //   qtdPortas: 2,
  // };
  
  // function leiaPropriedade(arg) {
  //   console.log("A propriedade tem o valor de: " + carro[arg] )
  // }
  
  // function removePropriedade(chave) {
  //   delete carro[chave];
  // }
  
  // function removePropriedadeDoObjeto(propriedade, objeto) {
  //   delete objeto[propriedade];
  // }
  
  
  function adicionaPropriedade(chave, valor) {
      carro[chave] = valor;
  }
  
  adicionaPropriedade(
  
    "cor",
  
    function(){
      console.log("Bi-bi.")
    }
  )
  
  console.log(carro.buzinar);
  var carro = { 
    cor: "vermelho", 
    temDono: false,
    qtdPortas: 4,
    qtdCombustivel: 5,
  
    mostrarThis: function () { console.log(this)},
  
    adicionarCombustivel: function (qtde) {
      carro.qtdCombustivel += qtde;
    }  
  };
//   SEMPRE que vcs precisarem acessar uma propriedade do objeto dentro de um método do próprio objeto, usem o this. Vai ficar muito mais fácil de entender o conceito do this quando a gente for falar sobre classes e orientação à objetos!
 var carro = { 
  cor: "vermelho", 
  temDono: false,
  qtdPortas: 4,
  qtdCombustivel: 5,

  mostrarThis: function () { console.log(this)},

  adicionarCombustivel: function (qtde) {
    this.qtdCombustivel += qtde;
  }  
};

