import {Deck} from './deck';
import {Carte} from './carte';
import {PlateauJoueur} from './plateau-joueur';
import {Joueur} from './joueur';
import {Mouvement} from './mouvement';

export class Jeu {

  public static NombreJoueurs = {
    min: 4,
    max: 8
  };

  private nombreJoueurs: number;
  private deck: Deck = new Deck();
  plateaux: PlateauJoueur[] = [];

  private nombreCarteJouee: number;
  private numeroRound: number;
  private numeroMatch: number;
  private carteDesamorcee: number;


  private estFini: boolean;


  constructor(
    nombreJoueurs: number = Jeu.NombreJoueurs.min
  ) {
    if (Jeu.NombreJoueurs.min > nombreJoueurs || Jeu.NombreJoueurs.max < nombreJoueurs) {
      throw new Error(`Nombre de joueurs entre ${Jeu.NombreJoueurs.min} et ${Jeu.NombreJoueurs.max}`);
    }

    this.nombreJoueurs = nombreJoueurs;
    this.nombreCarteJouee = 1;
    this.numeroRound = 1;
    this.numeroMatch = 1;
    this.carteDesamorcee = 0;

    this.commencer();
  }


  public commencer() {

    const nombreCartes = {};
    const nombreJoueursEquipes = {};

    switch (this.nombreJoueurs) {
      case 4:
        // Equipes
        nombreJoueursEquipes[PlateauJoueur.Equipes[0]] = 3;
        nombreJoueursEquipes[PlateauJoueur.Equipes[1]] = 2;

        // Cartes
        nombreCartes[Carte.Types[0]] = 15;
        nombreCartes[Carte.Types[1]] = 4;
        nombreCartes[Carte.Types[2]] = 1;
        break;
      case 5:
        // Equipes
        nombreJoueursEquipes[PlateauJoueur.Equipes[0]] = 3;
        nombreJoueursEquipes[PlateauJoueur.Equipes[1]] = 2;

        // Cartes
        nombreCartes[Carte.Types[0]] = 19;
        nombreCartes[Carte.Types[1]] = 5;
        nombreCartes[Carte.Types[2]] = 1;
        break;
      case 6:
        // Equipes
        nombreJoueursEquipes[PlateauJoueur.Equipes[0]] = 4;
        nombreJoueursEquipes[PlateauJoueur.Equipes[1]] = 2;

        // Cartes
        nombreCartes[Carte.Types[0]] = 23;
        nombreCartes[Carte.Types[1]] = 4;
        nombreCartes[Carte.Types[2]] = 1;
        break;
      case 7:
        // Equipes
        nombreJoueursEquipes[PlateauJoueur.Equipes[0]] = 5;
        nombreJoueursEquipes[PlateauJoueur.Equipes[1]] = 3;

        // Cartes
        nombreCartes[Carte.Types[0]] = 27;
        nombreCartes[Carte.Types[1]] = 7;
        nombreCartes[Carte.Types[2]] = 1;
        break;
      case 8:
        // Equipes
        nombreJoueursEquipes[PlateauJoueur.Equipes[0]] = 5;
        nombreJoueursEquipes[PlateauJoueur.Equipes[1]] = 3;

        // Cartes
        nombreCartes[Carte.Types[0]] = 31;
        nombreCartes[Carte.Types[1]] = 8;
        nombreCartes[Carte.Types[2]] = 1;
        break;
      default:
        nombreCartes[Carte.Types[0]] = 0;
        nombreCartes[Carte.Types[1]] = 0;
        nombreCartes[Carte.Types[2]] = 0;
        break;
    }

    const that = this;

    for (
      let cursor = 0;
      cursor < this.nombreJoueurs;
      cursor++
    ) {
      let equipe = null;
      while (null === equipe) {
        const indexAleatoire = Math.floor(Math.random() * PlateauJoueur.Equipes.length);
        const equipeAleatoire = PlateauJoueur.Equipes[indexAleatoire];
        if (0 < nombreJoueursEquipes[equipeAleatoire]) {
          equipe = equipeAleatoire;
          nombreJoueursEquipes[equipeAleatoire] -= 1;
        }
      }

      if (0 === cursor) {
        const joueurHumain = Joueur.JoueurHumain();
        this.plateaux.push(new PlateauJoueur(joueurHumain, equipe));
        continue;
      }

      const joueurRobot = Joueur.JoueurRobot();
      this.plateaux.push(new PlateauJoueur(joueurRobot, equipe));
    }

    (function ajouterCartesNeutre(nombre: number) {
      for (
        let cursor = 0;
        cursor < nombre;
        cursor++
      ) {
        that.deck.ajouter(Carte.CarteNeutre);
      }
    })(nombreCartes[Carte.Types[0]]);

    (function ajouterCartesBombe(nombre: number) {
      for (
        let cursor = 0;
        cursor < nombre;
        cursor++
      ) {
        that.deck.ajouter(Carte.CarteBombe);
      }
    })(nombreCartes[Carte.Types[1]]);

    (function ajouterCartesDesamorcage(nombre: number) {
      for (
        let cursor = 0;
        cursor < nombre;
        cursor++
      ) {
        that.deck.ajouter(Carte.CarteDesamorcage);
      }
    })(nombreCartes[Carte.Types[2]]);

    this.deck.melanger();

    this.distribuerCartes();

  }

  public cacherCartes() {
    // TODO
  }

  public distribuerCartes() {
    const that = this;

    for (
      let cursor = 0, cursorMax = this.plateaux.length;
      cursor < cursorMax;
      cursor++
    ) {
      const plateau = this.plateaux[cursor];

      (function donnerCarteAJoueur(
        nombre: number
      ) {
        for (; nombre-- ;) {
          let carte = that.deck.carteAleatoire();
          that.deck.enlever(carte);
          plateau.main.ajouter(carte);
        }
      })(5);

    }
  }

  public initialiserPlateauxJoueurs() {
    // TODO
  }

  public estVainqueur(joueur: Joueur): boolean {
    // TODO
    return false;
  }

  public rassemblerCartes() {
    // TODO
  }

  public peutAppliquer(mouvement: Mouvement, joueur: Joueur): boolean {
    // TODO
    return false;
  }

  public appliquerMouvement(mouvement: Mouvement) {
    // TODO
  }



}
