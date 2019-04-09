import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Haikus';

  posts = [
    {
      title: 'arbre',
      content: 'Arbress a fleurs\nEn Automne\nEn Hiver',
      loveIts: 3,
      createdAt: new Date(1996, 3, 6)
    },

    {
      title: 'ruisseau',
      content: 'Le ruiso\nHey ohh la\nça reums la tchoin',
      loveIts: -6557,
      createdAt: new Date(554, 7, 6)
    },

    {
      title: 'string',
      content: 'string',
      loveIts: 1,
      createdAt: new Date()
    },

  ];
}
