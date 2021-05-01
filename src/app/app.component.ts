import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'folknews-angular';
  images = [944, 1011, 984].map((n) => `https://imagens.publico.pt/imagens.aspx/1579867?tp=UH&db=&type=`);
}
