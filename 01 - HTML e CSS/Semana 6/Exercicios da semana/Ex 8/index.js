async function fetchAPI(url, metodo){
return await fetch(url,{method:metodo});
}

async function Consultar(){
    const uf = document.getElementById('uf').value
    const cidade = document.getElementById('cidade').value
    const rua = document.getElementById('rua').value

    if(uf.length!==2){
        alert('UF inválido')
        }
    
    if(uf ==='' || cidade === '' || rua === ''){
        alert("Por favor preencher os campos corretamente")
    }
     else{

        try{
            const response = await fetchAPI(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`, "GET");
           var teste =  await response.json();

           

           if(!teste.length){
            const resultado = document.getElementById('resultado')
            resultado.innerText = "Nenhum registro foi encontrado";
        }
           else{

               let pegarDiv = document.getElementById('conteudo')
               let tabela = document.createElement("table")
               let linha  = document.createElement('tr')
               let colunaCEP = document.createElement('th')
               let colunaLogradouro = document.createElement('th')
               let colunaComplemento = document.createElement('th')
               let colunaBairro = document.createElement('th')
               let colunaLocalidade = document.createElement('th')
               let colunaUF = document.createElement('th')
               let colunaDDD = document.createElement('th')
               let novaLinha = document.createElement('tr')
               let resultadoCEP = document.createElement('td')
               let resultadoLogradouro = document.createElement('td')
               let resultadoComplemento = document.createElement('td')
               let resultadoBairro = document.createElement('td')
               let resultadoLocalidade = document.createElement('td')
               let resultadoUF = document.createElement('td')
               let resultadoDDD = document.createElement('td')
     
  
                pegarDiv.appendChild(tabela)
                tabela.appendChild(linha)

                linha.appendChild(colunaCEP).innerText = 'CEP'
                linha.appendChild(colunaLogradouro).innerText = 'Logradouro'
                linha.appendChild(colunaComplemento).innerText = 'Complemento'
                linha.appendChild(colunaBairro).innerText = 'Bairro'
                linha.appendChild(colunaLocalidade).innerText = 'Localidade'
                linha.appendChild(colunaUF).innerText = 'UF'
                linha.appendChild(colunaDDD).innerText = 'DDD'

                tabela.appendChild(novaLinha)

                 let cep = teste[0].cep
                 let Logradouro = teste[0].logradouro
                 let Complemento = teste[0].complemento
                 let Bairro = teste[0].bairro
                 let Localidade = teste[0].localidade
                 let uf = teste[0].uf
                 let ddd = teste[0].ddd

                novaLinha.appendChild(resultadoCEP).innerText = cep;
               
                novaLinha.appendChild(resultadoLogradouro).innerText = Logradouro;
               
                novaLinha.appendChild(resultadoComplemento).innerText = Complemento;
               
                novaLinha.appendChild(resultadoBairro).innerText = Bairro;
               
                novaLinha.appendChild(resultadoLocalidade).innerText = Localidade;
               
                novaLinha.appendChild(resultadoUF).innerText = uf;
               
                novaLinha.appendChild(resultadoDDD).innerText = ddd;
               
           }

    }
    catch{
        alert("Não foi possivel buscar as informações")
    }
    


}

}

