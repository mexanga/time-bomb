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

  public nomValide: boolean|null;


  public nomJoueur: string;

  private modalNomJoueur: Modal;

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
    this.modalNomJoueur =  new Modal({
      id: 'modalNomJoueur'
    });
  }

  verifierNomJoueur(event) {
    const inputNomJoueur = (document.getElementById('inputNomJoueur') as HTMLInputElement);
    const nomJoueur = inputNomJoueur.value;
    const nomInvalide = 3 > nomJoueur.length || 64 < nomJoueur.length;
    this.nomValide = false === nomInvalide;
  }

  definirNomJoueur(event) {
    const inputNomJoueur = (document.getElementById('inputNomJoueur') as HTMLInputElement);
    const nomJoueur = inputNomJoueur.value;
    if (true === this.nomValide) {
      this.nomJoueur = nomJoueur;
      this.jeuLance = true;
      this.modalNomJoueur.bsinstance.hide();
    }
  }

}
