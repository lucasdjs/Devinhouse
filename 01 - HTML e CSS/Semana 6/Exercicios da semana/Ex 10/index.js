function inverte(){
    let lista = document.querySelectorAll('li')

     for(let li of lista ){

    li.classList.toggle("vermelho")
    li.classList.toggle("azul")
     }

}