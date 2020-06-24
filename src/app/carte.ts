export class Carte {

  public static Types: string[] = [
    'Neutre',
    'Bombe',
    'Désamorcage'
  ];

  public static CarteNeutre = new Carte(Carte.Types[0]);
  public static CarteBombe = new Carte(Carte.Types[1]);
  public static CarteDesamorcage = new Carte(Carte.Types[2]);

  private valeur: string;
  private estCache: boolean;

  constructor(
    valeur: string,
    estCache: boolean = true
  ) {
    if (false === Carte.Types.includes(valeur)) {
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
