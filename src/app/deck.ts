import {Carte} from './carte';

export class Deck {

  cartes: Carte[];

  constructor(
    cartes: Carte[] = []
  ) {
    this.cartes = cartes;
  }


  public melanger() {
    let cursor = this.cartes.length - 1;

    while (0 !== cursor) {
      // On prend un élément aléatoirement
      const indexAleatoire = Math.floor(Math.random() * cursor);
      cursor -= 1;

      // Et on le "swap" les positions 'cursor' et 'indexAleatoire'.
      const valeurTampon = this.cartes[cursor];
      this.cartes[cursor] = this.cartes[indexAleatoire];
      this.cartes[indexAleatoire] = valeurTampon;
    }
  }

  public enlever(carte: Carte) {
    const indexOfCarte = this.cartes.indexOf(carte);
    if (-1 < indexOfCarte) {
      this.cartes.splice(indexOfCarte, 1);
    }
  }

  public ajouter(carte: Carte) {
    this.cartes.push(carte);
  }

  public carteAleatoire() {
    return this.cartes[Math.floor(Math.random() * (this.cartes.length - 1))];
  }

}
