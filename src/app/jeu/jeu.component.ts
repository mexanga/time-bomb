import { Component, OnInit } from '@angular/core';
import {Jeu} from '../jeu';
import {Modal} from '../shared/Modal';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss']
})
export class JeuComponent implements OnInit {

  public jeu: Jeu;
  public jeuLance: boolean;

  public nombreJoueurs: number;
  public nombreJoueursMin = Jeu.NombreJoueurs.min;
  public nombreJoueursMax = Jeu.NombreJoueurs.max;


  public nomJoueur: string;

  constructor() {
    this.nombreJoueurs = this.nombreJoueursMin;
  }

  ngOnInit(): void {
  }

  decrementerNombreJoueurs(): void {
    this.nombreJoueurs = Math.max(this.nombreJoueursMin, this.nombreJoueurs - 1);
  }

  incrementerNombreJoueurs(): void {
    this.nombreJoueurs = Math.min(this.nombreJoueursMax, this.nombreJoueurs + 1);
  }

  afficherModalNomJoueur(event): void {
    console.log({event});
    const modal = new Modal({
      id: 'modalNomJoueur',
      trigger: event.toElement
    });
  }

  definirNomJoueur(event) {
    console.log({event});
  }

}
