import {Jeu} from './jeu';

export class Joueur {

  constructor(
    public estHumain: boolean = false
  ) {
    this.id = '#' + Math.random().toString(36).substr(2, 9);
    this.score = 0;
  }

  private id: string;
  private score: number;

  static JoueurHumain() {
    return new Joueur(true);
  }

  static JoueurRobot() {
    return new Joueur(false);
  }

  public choisirMouvement(jeu: Jeu) {
    // TODO
  }

}
