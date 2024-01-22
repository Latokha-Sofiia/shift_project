import {Component, OnInit, HostListener, Input} from '@angular/core';
import {IGameData, TableComponent} from "./components/table/table.component";
import {dataGamesService} from "../app/services/data-games.service";

// import {width} from '../../src/app/services/resize.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private dataGamesService: dataGamesService,
    // TableComponent: TableComponent,
  ) {}
  @Input() dataGame!: IGameData;
  // @Input() TableComponent: TableComponent;
  // width_now: any;
  // width_last: any;
  //
  // ngOnInit() {
  //   this.width_now = window.innerWidth;
  // }
  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.width_last = this.width_now
  //   this.width_now = event.target.innerWidth;
  //   // console.log('now: ', this.width_now)
  //   // console.log('last: ',  this.width_last)
  //
  //   if ((this.width_now < 500) && (this.width_last >= 500)) { //421
  //     //Меняем на мобилку
  //     this.dataGamesService.changeOnMobile()
  //     // this.TableComponent.apdateTable()
  //
  //   }
  //   if ((this.width_now >= 500) && (this.width_last < 500)) {
  //     //Меняем на десктоп
  //     this.dataGamesService.changeOnDesktop()
  //     // this.TableComponent.apdateTable()
  //   }
  //
  // }
}
