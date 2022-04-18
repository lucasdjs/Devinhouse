async function fetchAPI(url, metodo){
    const response = await fetch(url,{method:metodo});
    return await response.json();
}
async function Buscar(){
    const  cep = document.getElementById('busca').value;
    const response = await fetchAPI(`https://viacep.com.br/ws/${cep}/json/`, "GET");
    console.log(response);
}