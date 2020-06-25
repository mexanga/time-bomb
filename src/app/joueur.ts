import {Jeu} from './jeu';

export class Joueur {

  constructor(
    public estHumain: boolean = false,
    public nom: string = 'Robot'
  ) {
    this.id = '#' + Math.random().toString(36).substr(2, 9);
    this.score = 0;
  }

  id: string;
  private score: number;

  static JoueurHumain(nom: string) {
    return new Joueur(true, nom);
  }

  static JoueurRobot() {
    return new Joueur(false);
  }

  public choisirMouvement(jeu: Jeu) {
    // TODO
  }

}
