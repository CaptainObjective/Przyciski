const generujPytanie = () => {
  const pytanie = losujPytanie();

  const sprawdz = (e = false) => {
    dom.id[0].classList.remove("malej");
    void dom.id[0].offsetWidth;
    for (id of dom.id) {
      id.removeEventListener("click", sprawdz);
    }
    // console.log(e.target.id);
    let czas = performance.now() - t0;
    historia.push({
      pytanie: pytanie.tekst,
      klikniete: e ? e.target.id : "nic",
      poprawna: pytanie.poprawna,
      czas: czas
    });
    if (!e) {
      console.log(historia);
      new Popup("czas");
    } else if (e.target.id == pytanie.poprawna) {
      // console.log('dobrze');
      nrpytania++;
      generujPytanie();
    } else {
      console.log(historia);
      new Popup("pomyłka");
      // alert("Nie do końca dobrze\nTwój wynik: " + nrpytania);
      // poczatek();
    }
    clearTimeout(timer);
  };

  dom.id[0].innerHTML = pytanie.tekst;
  for (id of dom.id) {
    id.addEventListener("click", sprawdz);
  }
  dom.id[0].classList.add("malej");
  void dom.id[0].offsetWidth;
  const timer = setTimeout(sprawdz, level * 1000);
  let t0 = performance.now();
};
