import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [944, 1011, 984].map((n) => `https://imagens.publico.pt/imagens.aspx/1579867?tp=UH&db=&type=`);

}
