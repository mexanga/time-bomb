import { Carte } from './carte';

describe('Carte', () => {
  it('should create an instance', () => {
    expect(new Carte(Carte.Types[0])).toBeTruthy();
  });
});
