import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { comidas_list } from 'utils/list-comidas-mock';

 interface Comidas{
  src: string;
  produto: string;
  preco: number;
  btnText: string;
  descricao: string;
 }

@Component({
  selector: 'NGF-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.scss']
})
export class ComidaComponent implements OnInit {
  listPComidas: Comidas[]= comidas_list; 
  constructor() { }

  ngOnInit(): void {
  }

}
