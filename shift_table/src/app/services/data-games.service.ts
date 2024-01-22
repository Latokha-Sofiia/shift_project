import {Injectable, Input} from "@angular/core";
export interface IGameData {
  name: string,
  genre: string[],
  budget: string,
  developer: string,
  announceDate: string,
}
@Injectable({
  providedIn: 'root'
})
export class dataGamesService {
  titles: IGameData[] =
    [
      {
        name: 'Название',
        genre: ['Жанр'],
        budget: 'Бюджет игры',
        developer: 'Разработчик',
        announceDate: 'Дата анонса'
      },
    ]
  dataGames: IGameData[] = [
    {
      name: 'Baldur’s Gate III',
      genre: ['RPG'],
      budget: '$100 милл',
      developer: 'Larian Studios',
      announceDate: '6 июня 2019'
    },
    {
      name: 'Divinity',
      genre: ['	RPG'],
      budget: '€4 милл',
      developer: 'Larian Studios',
      announceDate: '30 июня 2014'
    },
    {
      name: 'Ведьмак 3',
      genre: ['action', 'RPG'],
      budget: '2.637 млн.руб',
      developer: 'CD Projekt RED',
      announceDate: '5 февраля 2013'
    },
    {
      name: 'Hogwarts Legacy',
      genre: ['action', 'RPG'],
      budget: '$150 млн',
      developer: 'Avalanche Software',
      announceDate: '16 сентября 2020'
    },
  ];
  changeOnMobile() {
    this.titles = []
    this.dataGames = [
      {
      name: 'Название: Baldur’s Gate III',
      genre: ['Жанр: RPG'],
      budget: 'Бюджет игры: $100 милл',
      developer: 'Разраб: Larian Studios',
      announceDate: 'Дата анонса: 6 июня 2019'
    },
      {
        name: 'Название: Divinity',
        genre: ['Жанр:	RPG'],
        budget: 'Бюджет игры: €4 милл',
        developer: 'Разраб: Larian Studios',
        announceDate: 'Дата анонса: 30 июня 2014'
      },
      {
        name: 'Название: Ведьмак 3',
        genre: ['Жанр: action', 'RPG'],
        budget: 'Бюджет игры: 2.637 млн.руб',
        developer: 'Разраб: CD Projekt RED',
        announceDate: 'Дата анонса: 5 февраля 2013'
      },
      {
        name: 'Название: Hogwarts Legacy',
        genre: ['Жанр: action', 'RPG'],
        budget: 'Бюджет игры: $150 млн',
        developer: 'Разраб: Avalanche Software',
        announceDate: 'Дата анонса: 16 сентября 2020'
      },
    ];
  }
  changeOnDesktop() {
    this.titles =
      [
        {
          name: 'Название',
          genre: ['Жанр'],
          budget: 'Бюджет игры',
          developer: 'Разработчик',
          announceDate: 'Дата анонса'
        },
      ]
    this.dataGames = [
      {
        name: 'Baldur’s Gate III',
        genre: ['RPG'],
        budget: '$100 милл',
        developer: 'Larian Studios',
        announceDate: '6 июня 2019'
      },
      {
        name: 'Divinity',
        genre: ['	RPG'],
        budget: '€4 милл',
        developer: 'Larian Studios',
        announceDate: '30 июня 2014'
      },
      {
        name: 'Ведьмак 3',
        genre: ['action', 'RPG'],
        budget: '2.637 млн.руб',
        developer: 'CD Projekt RED',
        announceDate: '5 февраля 2013'
      },
      {
        name: 'Hogwarts Legacy',
        genre: ['action', 'RPG'],
        budget: '$150 млн',
        developer: 'Avalanche Software',
        announceDate: '16 сентября 2020'
      },
    ];
  }
}
