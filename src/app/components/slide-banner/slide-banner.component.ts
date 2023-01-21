import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-banner',
  templateUrl: './slide-banner.component.html',
  styleUrls: ['./slide-banner.component.scss'],
})
export class SlideBannerComponent implements OnInit {
  banners: any[] = [
    'assets/img/banners/banner1.jpg',
    'assets/img/banners/banner2.jpg',
    'assets/img/banners/banner3.jpg',
    'assets/img/banners/banner4.png'
  ];

  constructor() {
  }

  ngOnInit() {}

}
