import { Component, OnInit } from '@angular/core';
import { BebidasService } from './bebidas.service';

@Component({
  selector: 'NGF-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: [
'./bebidas.component.scss'
  ]
})
export class BebidasComponent implements OnInit {
  listBebidas= [
    {
    src: 'https://www.bistek.com.br/media/catalog/product/cache/15b2f1f06e1cd470c80b1f3fd7ec8301/9/9/999296_2.jpg',
    produto: "Coca-cola",
    preco: 7.99,
    btnText: "Adicionar ao carrinho",
    descricao: "Coca-cola 2LT"
  },
    {
    src: 'https://d3pt1seq4txask.cloudfront.net/Custom/Content/Products/01/53/0153_refrigerante-coca-cola-zero-lata-350ml-6046_m4_637417307909212038.jpg',
    produto: "Coca-Cola",
    preco: 4.99,
    btnText: "Adicionar ao carrinho",
    descricao: "Coca-cola Lata"
  },
    {
    src: 'https://comeonburger.com.br/wp-content/uploads/2019/12/laranja.jpg',
    produto: "Suco de laranja",
    preco: 8.50,
    btnText: "Adicionar ao carrinho",
    descricao: "Suco de laranja natural"
  },
    {
    src: 'https://images-americanas.b2w.io/produtos/136883834/imagens/cerveja-brahma-chopp-lata-473ml/136883480_1_large.jpg',
    produto: "Cerveja Brahma",
    preco: 5.95,
    btnText: "Adicionar ao carrinho",
    descricao: "Cerveja brahma latão"
  },
    {
    src: 'https://claudia.abril.com.br/wp-content/uploads/2020/01/dicas-para-fazer-a-caipirinha-perfeita-kajakiki-1.jpg?quality=85&strip=info',
    produto: "Caipirinha",
    preco: 8.99,
    btnText: "Adicionar ao carrinho",
    descricao: "Caipirinha de limão"
  },
    {
    src: 'https://www.divinho.com.br/blog/wp-content/uploads/2020/08/Vinho-Tinto.jpg',
    produto: "Vinho",
    preco: 11.99,
    btnText: "Adicionar ao carrinho",
    descricao: "Taça de vinho tinto"
  }]
  ngOnInit(): void {


}}
