import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  categorias: any = [
    {
      nome: 'RESTAURANTE',
      imagem: 'assets/img/categorias/restaurante.svg'
    },
    {
      nome: 'MERCADO',
      imagem: 'assets/img/categorias/mercado.svg'
    },
    {
      nome: 'CONSTRUÇÃO',
      imagem: 'assets/img/categorias/construcao.svg'
    },
    {
      nome: 'BELEZA',
      imagem: 'assets/img/categorias/beleza.svg'
    },
    {
      nome: 'ESPORTES',
      imagem: 'assets/img/categorias/esportes.svg'
    },
    {
      nome: 'BEBIDAS',
      imagem: 'assets/img/categorias/bebidas.svg'
    },
    {
      nome: 'ELETRÔNICOS',
      imagem: 'assets/img/categorias/eletronicos.svg'
    },
    {
      nome: 'MODAS',
      imagem: 'assets/img/categorias/modas.svg'
    },
    {
      nome: 'SAÚDE',
      imagem: 'assets/img/categorias/saude.svg'
    },
    {
      nome: 'DIVERSOS',
      imagem: 'assets/img/categorias/diversos.svg'
    }
  ];

  constructor() { }
  ngOnInit() {
  }

}
