import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-components';
  arrayFotos: any = [
    {
      url: '../assets/monalisa.jpg',
      description:"monalisa"
    },
    {
      url: "https://www.hypeness.com.br/1/2017/03/Phillip-Kremer-Trump-720c.jpg",
      description:"Trump malvadão"
    },
    {
      url: "https://www.ahnegao.com.br/wp-content/uploads/2019/08/imagem-1.jpg",
      description:"dogão"
    },
    {
      url: "https://i.pinimg.com/originals/a0/64/94/a0649459c762d23743fe5328de080ccf.jpg",
      description:"A saga do homem aranha morto pela estatua"
    },
    {
      url: "https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/gato-imagem.jpg?resize=416%2C738&ssl=1",
      description:"risonho"
    }
  ]
}
