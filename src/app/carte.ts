export class Carte {

  public static Valeurs: string[] = [
    'Neutre',
    'Bombe',
    'Désamorcage'
  ];

  private valeur: string;
  private estCache: boolean;

  constructor(
    valeur: string | number,
    estCache: boolean = false
  ) {

    if ('number' === typeof valeur) {
      if (0 < valeur) {
        throw new Error(`Un nombre positif ou une valeur inclue dans : ${Carte.Valeurs.toString()} est attendue.`);
      }
      if (Carte.Valeurs.length - 1 < valeur) {
        throw new Error(`Un nombre entre 0 et ${Carte.Valeurs.length - 1} ou une valeur inclue dans : ${Carte.Valeurs.toString()} est attendue.`);
      }
      valeur = Carte.Valeurs[valeur];
    }

    if (false === Carte.Valeurs.includes(valeur)) {
      throw new Error('La valeur de la carte n\'existe pas');
    }

    this.valeur = valeur;
    this.estCache = estCache;

  }

  public cacher() {
    if (true === this.estCache) {
      throw new Error('La carte est déjà cachée');
    }
    this.estCache = true;
  }

  public divulguer() {
    if (false === this.estCache) {
      throw new Error('La carte est déjà divulguée');
    }
    this.estCache = false;
  }

}
