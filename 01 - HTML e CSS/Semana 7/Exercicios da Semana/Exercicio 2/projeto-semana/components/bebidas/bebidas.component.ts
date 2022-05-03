import { Component, OnInit } from '@angular/core';
import { list_bebidas } from 'utils/list-bebidas-mock';
import {ListaBebidas} from 'models/modelo.bebida'

@Component({
  selector: 'NGF-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: [
'./bebidas.component.scss'
  ]
})
export class BebidasComponent implements OnInit {
  listaBebidas: ListaBebidas[]= list_bebidas;
   
  ngOnInit(): void {


}}
