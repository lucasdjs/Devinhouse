import { Component, OnInit } from '@angular/core';

import { Produto } from './Ex09';

@Component({
  selector: 'NGF-root',
  templateUrl: './app.components.html',
  styleUrls: ['app.components.scss']
})

export class AppComponent implements OnInit, Produto{

  valorTotal: number = 0;
  nome: string = 'teste';
   valor: number = 0;
   codigo: number = 0;
  quantidade: number = 0;
  emEstoque: boolean = true;
 sofa:Produto = {
   nome:"sofa",
   valor:120,
   codigo: 1,
   quantidade: 30,
   emEstoque: true
 };

  constructor(){}

  ngOnInit(){
    this.comprar(this.sofa, 30);
    this.comprar(this.sofa, 10);
    
  }

  comprar(produto: Produto, quantidade:number): void{

      if(produto.emEstoque){
        this.valorTotal = produto.valor * quantidade;
        debugger
        produto.quantidade = produto.quantidade - quantidade;
      }
  } 

}
