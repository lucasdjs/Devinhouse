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
        console.log("deu ruim")
    }
     else{

        try{
            const response = await fetchAPI(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`, "GET");
            console.log(await response.json());
    }
    catch{
        alert("Não foi possivel acessar o endereço")
    }
    


}

}

