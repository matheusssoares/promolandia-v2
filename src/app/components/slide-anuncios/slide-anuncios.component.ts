import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-anuncios',
  templateUrl: './slide-anuncios.component.html',
  styleUrls: ['./slide-anuncios.component.scss'],
})
export class SlideAnunciosComponent implements OnInit {
  anuncios: any = [
    {
      imagem: 'assets/img/anuncios/anuncios.jpg',
      nome: 'Console Playstation 5 825GB SSD + Controle Sem Fio DualSense + Jogo Horizon Forbidden West - PS5',
      preco: 'R$ 4.999,99',
      liked: false,
      logoAnunciante: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Magalu_-_novo_logo.png'
    },
    {
      imagem: 'assets/img/anuncios/anuncios1.jpg',
      nome: 'Notebook Gamer Acer Nitro 5, Intel Core I5, 8GB, 1TB, SSD 128GB, Nvidia GTX1650, 15.6" - AN515-54-58CL',
      preco: 'R$ 5.799,99',
      liked: false,
      logoAnunciante: 'https://logodownload.org/wp-content/uploads/2014/09/acer-logo-1.png'
    },
    {
      imagem: 'assets/img/anuncios/anuncios2.jpg',
      nome: 'Mouse Gamer Sem Fio Logitech G703 LIGHTSPEED RGB LIGHTSYNC, HERO 25K, Recarregável, Compatível POWERPLAY - 910-005639',
      preco: 'R$ 379,99',
      liked: false,
      logoAnunciante: 'https://i.pinimg.com/originals/ba/b7/8b/bab78b1ab6202c17519384fb90b06412.png'
    },
    {
      imagem: 'assets/img/anuncios/anuncios3.jpg',
      nome: 'Smartphone Samsung Galaxy M23 5G, 6GB RAM, 128GB, Octa Core, Câmera Tripla 50MP, Tela Infinita 6.6, Verde - SM-M236BZGTZTO',
      preco: 'R$ 1.879,99',
      liked: false,
      logoAnunciante: 'https://i.pinimg.com/originals/ba/b7/8b/bab78b1ab6202c17519384fb90b06412.png'
    },
  ];
  constructor() { }

  ngOnInit() {}

}
