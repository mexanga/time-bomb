import { v5 as uuid } from 'uuid';
import {Jeu} from './jeu';

export class Joueur {

  private id: string;
  private score: number;

  constructor() {
    this.id = uuid();
    this.score = 0;
  }

  public choisirMouvement (jeu: Jeu) {
    // TODO
  }

}
