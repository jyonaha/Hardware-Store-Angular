import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent {



  title: string = 'Hardware Store';
  copyright: string = 'Desenvolvido em 2023';
  developer: string = 'Start Tech TOTVS';

  redesSociais: Array<any> = [
    {
      rede: 'Facebook',
      link: 'http://www.facebook.com',
      icone: 'https://i.ibb.co/LZYBg8Q/logotipo-circular-do-facebook.png'
    },
    {
      rede: 'Instagram',
      link: 'http://www.instagram.com/j_yonaha',
      icone: 'https://i.ibb.co/0nNbcgS/instagram-1.png'
    },
    {
      rede: 'LinkedIn',
      link: 'https://www.linkedin.com/in/joão-ionafa-72b680211/',
      icone: 'https://i.ibb.co/12YfRcr/linkedin.png'
    }
  ]
}