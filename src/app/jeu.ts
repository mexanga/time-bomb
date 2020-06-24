import {Deck} from './deck';
import {Carte} from './carte';
import {PlateauJoueur} from "./plateau-joueur";
import {Joueur} from "./joueur";
import {Mouvement} from "./mouvement";

export class Jeu {

  public static NombreJoueurs = {
    min: 4,
    max: 8
  };

  private nombreJoueurs: number;
  private deck: Deck;
  private mains: Carte[][];
  private plateaux: PlateauJoueur[];
  private plateauVainqueur: PlateauJoueur;

  private nombreCarteJouee: number;
  private numeroRound: number;
  private numeroMatch: number;
  private carteDesamorcee: number;


  private estFini: boolean;


  constructor(
    nombreJoueurs: number = Jeu.NombreJoueurs.min
  ) {

    if (Jeu.NombreJoueurs.min > nombreJoueurs || Jeu.NombreJoueurs.max < nombreJoueurs) {
      throw new Error('Nombre de joueurs entre ' + Jeu.NombreJoueurs.min + ' et ' + Jeu.NombreJoueurs.max);
    }

    this.nombreJoueurs = nombreJoueurs;
  }


  public commencer() {
    // TODO
  }

  public cacherCartes() {
    // TODO
  }

  public distribuerCartes() {
    // TODO
  }

  public initialiserPlateauxJoueurs() {
    // TODO
  }

  public estVainqueur(joueur: Joueur) {
    // TODO
  }

  public rassemblerCartes() {
    // TODO
  }

  public peutAppliquer (mouvement: Mouvement, joueur: Joueur) {
    // TODO
  }



}
