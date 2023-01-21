import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-parceiros',
  templateUrl: './slide-parceiros.component.html',
  styleUrls: ['./slide-parceiros.component.scss'],
})
export class SlideParceirosComponent implements OnInit {
  parceiros: any = [
    {
      imagem: 'https://i.pinimg.com/originals/ba/b7/8b/bab78b1ab6202c17519384fb90b06412.png'
    },
    {
      imagem: 'https://logodownload.org/wp-content/uploads/2014/09/acer-logo-1.png'
    },
    {
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Magalu_-_novo_logo.png'
    },
    {
      imagem: 'https://iconape.com/wp-content/files/wf/263825/svg/263825.svg'
    }
  ];
  constructor() { }

  ngOnInit() {}

}
