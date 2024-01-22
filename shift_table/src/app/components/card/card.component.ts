import { Component, Input } from '@angular/core';
import {IGameData} from "../../services/data-games.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() dataGame!: IGameData;
}
