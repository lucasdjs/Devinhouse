import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {

      this.http.get<Cardapio[]>("http://localhost:3000/comida").subscribe((resultado)=>{
        this.listComidas = resultado;
      });
      this.http.get<Cardapio[]>( "http://localhost:3000/bebida").subscribe((resultado)=>{
        this.listBebidas= resultado;
      });
  }


  
}
