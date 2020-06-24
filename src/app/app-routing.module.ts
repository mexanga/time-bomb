import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JeuComponent} from './jeu/jeu.component';


const routes: Routes = [
  { path: 'jeu', component: JeuComponent },
  { path: '', pathMatch: 'full', redirectTo: 'jeu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
