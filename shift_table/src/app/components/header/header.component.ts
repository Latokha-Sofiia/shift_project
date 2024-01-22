import {Component, Input, ViewChild} from '@angular/core';
import {IGameData} from "../../services/data-games.service";
import {dataGamesService} from "../../services/data-games.service";
import {style} from "@angular/animations";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('inputElement') inputElement!: any;
  @Input('dataGames') dataGames!: IGameData[];
  foundElements = ''

  focusToInput() {
    this.inputElement.nativeElement.focus()
  }

  constructor(
    private dataGamesService: dataGamesService,
  ) {}
  onClick() {
    let textFromSearch = this.inputElement.nativeElement.value;
    let dataGames = this.dataGamesService.dataGames;
    let counter = 0;
    const body: any = document.querySelector('.table-body');

    if (textFromSearch === '') {
      this.foundElements = 'Введите текст в поле ввода'
    } else {
      for (let line = 0; line < dataGames.length; line++) {

        if (dataGames[line].name.toLowerCase().includes(textFromSearch.toLowerCase())) {
          counter++
          body.childNodes[line].childNodes[0].childNodes[0].childNodes[0].style.cssText += 'color: red'
        } else {
          body.childNodes[line].childNodes[0].childNodes[0].childNodes[0].style.cssText += 'color: #fff'
        }

        if (dataGames[line].developer.toLowerCase().includes(textFromSearch.toLowerCase())) {
          counter++
          body.childNodes[line].childNodes[0].childNodes[1].childNodes[0].style.cssText += 'color: red'
        } else {
          body.childNodes[line].childNodes[0].childNodes[1].childNodes[0].style.cssText += 'color: #fff'
        }

        if (dataGames[line].announceDate.toLowerCase().includes(textFromSearch.toLowerCase())) {
          counter++
          body.childNodes[line].childNodes[0].childNodes[2].childNodes[0].style.cssText += 'color: red'
        } else {
          body.childNodes[line].childNodes[0].childNodes[2].childNodes[0].style.cssText += 'color: #fff'
        }

        if (dataGames[line].budget.toLowerCase().includes(textFromSearch.toLowerCase())) {
          counter++
          body.childNodes[line].childNodes[0].childNodes[4].childNodes[0].style.cssText += 'color: red'
        } else {
          body.childNodes[line].childNodes[0].childNodes[4].childNodes[0].style.cssText += 'color: #fff'
        }

        let stub: number = 0
        for (let i in dataGames[line].genre) {
          if (dataGames[line].genre[i].toLowerCase().includes(textFromSearch.toLowerCase())) {
            counter++
            stub = 1
          }

          if (stub == 1) {
            body.childNodes[line].childNodes[0].childNodes[3].childNodes[0].style.cssText += 'color: red'
          } else {
            body.childNodes[line].childNodes[0].childNodes[3].childNodes[0].style.cssText += 'color: #fff'
          }
        }
      }

      if (counter === 0) {
        this.foundElements = 'Ничего не найдено'
      } else {
        this.foundElements = 'Найдено элементов: ' + counter
      }
    }
  }
}
