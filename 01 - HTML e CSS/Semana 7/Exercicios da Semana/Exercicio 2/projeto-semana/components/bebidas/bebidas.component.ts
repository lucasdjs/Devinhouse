import { Component, OnInit } from '@angular/core';
import { list_bebidas } from 'utils/list-bebidas-mock';
import {ListaBebidas} from 'models/modelo.bebida'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'NGF-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: [
'./bebidas.component.scss'
  ]
})
export class BebidasComponent implements OnInit {
  listaBebidas: ListaBebidas[]= list_bebidas;

  constructor(private http: HttpClient){}
   
  ngOnInit(): void {


 this.http.get<ListaBebidas[]>( "http://localhost:3000/list_bebidas" ).subscribe((resultado) => {
   this.listaBebidas = resultado;
 })

}}
