import { Component, OnInit } from '@angular/core';
import { Cardapio } from 'models/modelo.cardapio';
import { bebida_mock } from 'utils/bebida-mock';
import { comida_nock } from 'utils/comidas-mock';



@Component({
  selector: 'NGF-content',
  templateUrl: './content.component.html',
  styles: [
  ]
})
export class ContentComponent implements OnInit {

  listComidas: Cardapio[] = comida_nock;
  listBebidas: Cardapio[]  = bebida_mock;
  

  constructor() {
   
   }

  ngOnInit(): void {

  }


  
}
