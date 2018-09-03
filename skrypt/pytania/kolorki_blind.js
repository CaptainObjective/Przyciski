class Kolorki_blind {
  constructor() {
    this.poprawna = losuj(1, 6);
    // this.poprawna = 3
    switch (this.poprawna) {
      case 1:
        this.tekst = `<span style="color: var(--yellow)">Biały</span>`;
        break;
      case 2:
        this.tekst = `<span style="color: var(--blue)">Zielony</span>`;
        break;
      case 3:
        this.tekst = `<span style="color: var(--red); font-size: 0.8em">Pomarańczowy<span>`;
        break;
      case 4:
        this.tekst = `Żółty`;
        break;
      case 5:
        this.tekst = `<span style="color: var(--green)">Niebieski</span>`;
        break;
      case 6:
        this.tekst = `<span style="color: var(--orange)">Czerwony</span>`;
        break;
    }
  }
}
