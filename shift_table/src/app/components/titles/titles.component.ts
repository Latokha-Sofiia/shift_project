import {Component, Input} from '@angular/core';
import {IGameData} from "../table/table.component";

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrl: './titles.component.scss'
})
export class TitlesComponent {
  @Input() dataTitle!: IGameData;
}
