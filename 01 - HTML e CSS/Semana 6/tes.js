
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