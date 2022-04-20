async function fetchAPI(url, metodo){
    const response = await fetch(url,{method:metodo});
    return await response.json();
}
async function Consultar(){
    const uf = document.getElementById('uf').value
    const cidade = document.getElementById('cidade').value
    const rua = document.getElementById('rua').value

    const response = await fetchAPI(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`, "GET");

    console.log(response);

}

