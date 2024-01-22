import {Component, HostListener, Injectable, Input, OnInit} from '@angular/core';
import {dataGamesService} from "../../services/data-games.service";

export interface IGameData {
  name: string,
  genre: string[],
  budget: string,
  developer: string,
  announceDate: string,
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})

export class TableComponent {
  @Input() dataGame!: IGameData;
  titles = this.dataGamesService.titles
  dataGames = this.dataGamesService.dataGames
  width_now: any;
  width_last: any;
  constructor(
    private dataGamesService: dataGamesService,
  ) {}

  ngOnInit() {
    this.width_now = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const body: any = document.querySelector('.table-body');
    this.width_last = this.width_now
    this.width_now = event.target.innerWidth;

    //Меняем на мобилку
    if ((this.width_now < 500) && (this.width_last >= 500)) {
      this.dataGamesService.changeOnMobile()
      this.apdateTable()
    }

    //Меняем на десктоп
    if ((this.width_now >= 500) && (this.width_last < 500)) {
      this.dataGamesService.changeOnDesktop()
      this.apdateTable()
    }
  }

  public apdateTable() {
    this.titles = this.dataGamesService.titles
    this.dataGames = this.dataGamesService.dataGames
  }
}
