import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlateauJoueurComponent} from '../plateau-joueur/plateau-joueur.component';
import {CarteComponent} from '../carte/carte.component';
import {JeuComponent} from './jeu.component';


@NgModule({
  declarations: [
    PlateauJoueurComponent,
    CarteComponent,
    JeuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlateauJoueurComponent,
    CarteComponent,
    JeuComponent
  ]
})
export class JeuModule {
}
