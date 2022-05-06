import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { comidas_list } from 'utils/list-comidas-mock';
import { ListaComidas } from 'models/modelo.comida';


@Component({
  selector: 'NGF-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent implements OnInit {
  listPComidas: ListaComidas[]= comidas_list; 

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<ListaComidas[]>("http://localhost:3000/comidas_list").subscribe((resultado)=>{
      this.listPComidas = resultado;
    })
  }

}
