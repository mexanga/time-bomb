import {Joueur} from './joueur';
import {Carte} from './carte';

export class Mouvement {

  constructor(
    private joueur: Joueur,
    private carte: Carte
  ) { }

}
