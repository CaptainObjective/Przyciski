class Mata {
  dodawanie(wynik) {
    const liczba1 = losuj(2, 12);
    let liczba2 = wynik - liczba1;
    liczba2 = liczba2 > 0 ? liczba2 : `(${liczba2})`;
    return `${liczba1}+${liczba2}`;
  }
  odejmowanie(wynik) {
    const liczba1 = losuj(2, 12);
    let liczba2 = liczba1 - wynik;
    liczba2 = liczba2 > 0 ? liczba2 : `(${liczba2})`;
    return `${liczba1}-${liczba2}`;
  }
  mnozenie(wynik) {
    let podzielne = [];
    wynik % 2 == 0 ? (podzielne[0] = 0.5) : false;
    wynik % 4 == 0 ? (podzielne[2] = 0.25) : false;
    for (let i = 1; i < 13; i++) {
      if (wynik % i == 0) {
        podzielne.push(i);
      }
    }
    let liczba1 = podzielne[losuj(0, podzielne.length - 1)];
    let liczba2 = wynik / liczba1;
    return `${liczba2}&times;${liczba1}`;
  }
  dzielenie(wynik) {
    const liczba1 = losuj(2, 12);
    let liczba2 = wynik * liczba1;
    return `${liczba2}&divide;${liczba1}`;
  }
  pierwiastek(wynik) {
    const liczba = wynik ** 2;
    return `&radic;${liczba}`;
  }
  constructor() {
    this.poprawna = losuj(1, 6);
    // this.poprawna = 3;

    let dzialanie = losuj(0, 4);
    //  dzialanie = 4;
    switch (dzialanie) {
      case 0:
        this.tekst = this.dodawanie(this.poprawna);
        break;
      case 1:
        this.tekst = this.odejmowanie(this.poprawna);
        break;
      case 2:
        this.tekst = this.mnozenie(this.poprawna);
        break;
      case 3:
        this.tekst = this.dzielenie(this.poprawna);
        break;
      case 4:
        this.tekst = this.pierwiastek(this.poprawna);
        break;
    }
  }
}
