import { Component } from '@angular/core';
import {Jeu} from './jeu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-bomb';

  jeu = new Jeu();

  public log(val) {
    console.log(val);
  }
}
