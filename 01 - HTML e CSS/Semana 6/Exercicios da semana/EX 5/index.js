async function fetchAPI(url, metodo){
    const response = await fetch(url,{method:metodo});
    return await response.json();
}

async function Buscar(){
    
    const  cep = document.getElementById('busca').value;

    if(cep === ''){
        alert('Campo precisa ser preenchido')
    }
    else if(cep.length !==8){
        alert('O cep digitado está invalido')
    }
    else{
        const response = await fetchAPI(`https://viacep.com.br/ws/${cep}/json/`, "GET");
        
        if(response.erro){
            alert('Não foi possível consultar o CEP')
         }
         else{
        console.log(response);
    const paragrafo =  document.createElement("p");
     const mostra =    document.getElementById('return')  

     mostra.appendChild(paragrafo);

     mostra.innerHTML = `Logradouro: ${response.logradouro}  ${response.complemento} -  ${response.bairro} - ${response.localidade}/${response.uf}`

        // mostrar.id = 'paragrafo';
        // mostrar = document.getElementById('paragrafo');
        // mostrar.innerHTML(`Logradouro: ${response.logradouro} complemento: ${response.complemento} - bairro: ${response.bairro} - ${response.localidade}/${response.uf}`)


         }
         
 
    }
}