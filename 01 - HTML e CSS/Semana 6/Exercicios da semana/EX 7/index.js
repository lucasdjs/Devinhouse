async function fetchAPI(url, metodo){
    const response = await fetch(url,{method:metodo});
    return await response.json();
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
    const response = await fetchAPI(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`, "GET");

    console.log(response);
    }

}

