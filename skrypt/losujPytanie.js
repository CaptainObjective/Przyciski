const losujPytanie = () => {
  const liczba_kategorii = 4;

  let trudnosc = Math.floor(nrpytania / 5) + 1;
  trudnosc > liczba_kategorii ? (trudnosc = liczba_kategorii) : false;
  let kategoria = losuj(0, trudnosc); // + trudnosc;

  // kategoria > liczba_kategorii ? (kategoria = liczba_kategorii) : false; //TO jeszcze może trzeba będzię poprawić
  //   console.log (kategoria,trudnosc);
  // kategoria = 4;

  switch (kategoria) {
    case 0:
      return new Cyferki();
      break;
    case 1:
      return new Kolorki();
      break;
    case 2:
      return new Mata();
      break;
    case 3:
      return new Kolorki_blind();
      break;
    case 4:
      return new Zmylka();
      break;
  }
};
