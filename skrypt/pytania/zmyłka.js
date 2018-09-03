class Zmylka {
  constructor() {
    this.poprawna = "pytanie";
    let kolor = losuj(1, 6);
    switch (kolor) {
      case 1:
        this.tekst = `Czarny`;
        break;
      case 2:
        this.tekst = `<span style="color: var(--green)">Czarny</span>`;
        break;
      case 3:
        this.tekst = `<span style="color: var(--orange)">Czarny</span>`;
        break;
      case 4:
        this.tekst = `<span style="color: var(--yellow)">Czarny</span>`;
        break;
      case 5:
        this.tekst = `<span style="color: var(--blue)">Czarny</span>`;
        break;
      case 6:
        this.tekst = `<span style="color: var(--red)">Czarny</span>`;
        break;
    }
  }
}
