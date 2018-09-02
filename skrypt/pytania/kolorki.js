class Kolorki {
  constructor() {
    this.poprawna = losuj(1, 6);
    // this.poprawna = 3
    switch (this.poprawna) {
      case 1:
        this.tekst = `Biały`;
        break;
      case 2:
        this.tekst = `<span style="color: var(--green)">Zielony</span>`;
        break;
      case 3:
        this.tekst = `<span style="font-size: 0.5em; color: var(--orange)">Pomarańczowy<span>`;
        break;
      case 4:
        this.tekst = `<span style="color: var(--yellow)">Żółty</span>`;
        break;
      case 5:
        this.tekst = `<span style="color: var(--blue)">Niebieski</span>`;
        break;
      case 6:
        this.tekst = `<span style="color: var(--red)">Czerwony</span>`;
        break;
    }
  }
}
