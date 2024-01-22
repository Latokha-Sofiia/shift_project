import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./components/header/header.component";
import {FormsModule} from "@angular/forms";
import {TableComponent} from "./components/table/table.component";
import {CardComponent} from "./components/card/card.component";
import {TitlesComponent} from "./components/titles/titles.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    CardComponent,
    TitlesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
