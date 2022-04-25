import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'NGF-content',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class ContentComponent implements OnInit {

  listComidas = [{
    title: "Comida",
    cardText: "Lanches, hambuguers, pastéis, pizzas...",
    btnText: "Visualizar",
    src:'https://mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg',
   
  },]

  listBebidas =[{
  
    title: "Bebidas",
    cardText: "Refrigerantes, cooquetéis, whiskey etc...",
    btnText: "Visualizar",
    src:'https://a-static.mlcdn.com.br/618x463/refrigerante-600ml-lancheria-kavalhada/lancheriakavalhada/c1b28dd4caf311eba29f4201ac18500e/38f72c68c5eddf7fbb6b4bc63437c7cb.jpg',
  }
  

  ];
  

  constructor() {
   
   }

  ngOnInit(): void {

  }


  
}
