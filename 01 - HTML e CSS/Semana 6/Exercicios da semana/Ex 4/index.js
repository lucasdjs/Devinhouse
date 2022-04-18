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
    console.log(response);
    }
}