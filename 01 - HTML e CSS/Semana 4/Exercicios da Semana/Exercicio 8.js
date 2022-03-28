    //Exercicios 8:
    
    //Listagem de cidades:
    let cidades = [{ nome: 'Patos de Minas', populacao: 153585 },
    { nome: 'Lages', populacao: 157349 },
    { nome: 'Ibiúna', populacao: 79479 },
    { nome: 'Maringá', populacao: 403063 },
    { nome: 'Curitiba', populacao: 1963726 },
    { nome: 'Florianópolis', populacao: 508826 },
    { nome: 'Pato Branco', populacao: 84779 },
    ]
    
    
    //Filtro das cidades com mais de 200000 habitantes
    const result = cidades.filter(cidade => cidade.populacao > 200000);
    //ordenar por ordem decrescente
    result.sort(function (a,b){
    if(a.nome > b.nome){
        return -1;
    }
    if(a.nome < b.nome){
        return 1;
    }
    return 0;
    });
    console.log(result);
    
    