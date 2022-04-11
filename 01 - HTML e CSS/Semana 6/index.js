const minhaInstancia = new XMLHttpRequest()
minhaInstancia.onreadystatechange = (props)=> console.log(props?.target?.readyState);
minhaInstancia.onload = (props)=> console.log(props);
minhaInstancia.onerror = (props)=> console.log(props);
minhaInstancia.open = ('GET','https://api.github.com/users' );
minhaInstancia.send();

fetch('https://api.github.com/users')
  .then((response) => response.json().then((value) => console.log(value)))
  .catch((err) => console.log(err));

  const fetchApi = async () => {
    const response = await fetch('https://api.github.com/users');
    const formattedResponse = await response.json();
    console.log('response', response);
  
    if (response.ok) {
      return console.log('Sucesso:', formattedResponse);
    }
  
    return console.log('Erro:', formattedResponse?.message);
  };
  
  fetchApi()