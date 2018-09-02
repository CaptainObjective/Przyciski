const losujPytanie = () => {
  const liczba_kategorii = 2;
  //   let trudnosc = Math.floor(losuj(0, nrpytania) / 5);
  let kategoria = losuj(0, liczba_kategorii); // + trudnosc;
  kategoria > liczba_kategorii ? (kategoria = liczba_kategorii) : false; //TO jeszcze może trzeba będzię poprawić
  //   console.log (kategoria,trudnosc);
  // kategoria = 1;

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
  }
};
