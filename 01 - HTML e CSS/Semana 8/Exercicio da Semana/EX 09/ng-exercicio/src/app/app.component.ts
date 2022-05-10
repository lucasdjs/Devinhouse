import { Component, inject, OnInit } from '@angular/core';
import { Produto } from 'src/assets/exercicio09';



@Component({
  selector: 'EXE-root',
  templateUrl:'./app.component.html',
  styles: []
})
export class AppComponent implements Produto{
  title = 'ng-exercicio';
  valorTotal:number = 0;

  nome: string = "Lucas";
  valor: number = 0;
  codigo: number = 0; 
  quantidade: number = 0;
  emEstoque: boolean = false;

  sofa: Produto = {
    nome: "Sofá 4 lugares",
    valor: 120,
    codigo: 1,
    quantidade: 30,
    emEstoque: true
  }

  ngOnInit(){
    this.comprar(this.sofa, 30);
    this.comprar(this.sofa, 10);
    
  }
  comprar(produto: Produto, quantidade:number): void{

    if(produto.emEstoque){
      this.valorTotal = produto.valor * quantidade;
      produto.quantidade = produto.quantidade - quantidade;
    }
} 
}


