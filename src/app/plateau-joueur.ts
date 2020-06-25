import {Carte} from './carte';
import {Joueur} from './joueur';
import {Deck} from './deck';

export class PlateauJoueur {

  constructor(
    joueur: Joueur,
    equipe: string,
    main: Deck = new Deck()
  ) {
    if (false === PlateauJoueur.Equipes.includes(equipe)) {
      throw new Error('La valeur de l\'équipe n\'existe pas');
    }

    this.equipe = equipe;
    this.joueur = joueur;
    this.main = main;
  }

  public static Equipes: string[] = [
    'Terroriste',
    'Sherlock'
  ];


  main: Deck;

  public equipe: string;
  joueur: Joueur;

  public static PlateauJoueurTerroriste(
    joueur: Joueur
  ) {
    return new PlateauJoueur(joueur, PlateauJoueur.Equipes[0]);
  }

  public static PlateauJoueurSherlock(
    joueur: Joueur
  ) {
    return new PlateauJoueur(joueur, PlateauJoueur.Equipes[1]);
  }

}
