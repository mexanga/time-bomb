import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {JeuComponent} from './jeu/jeu.component';
import {PlateauJoueurComponent} from './plateau-joueur/plateau-joueur.component';
import {CarteComponent} from './carte/carte.component';

@NgModule({
  declarations: [
    AppComponent,
    JeuComponent,
    PlateauJoueurComponent,
    CarteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    JeuComponent,
    PlateauJoueurComponent,
    CarteComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
