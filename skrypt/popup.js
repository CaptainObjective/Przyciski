class Popup {
  tekst() {
    if (this.rodzaj == "start") {
      return "<h1>Witaj w grze w Przyciski</h1><p>Zasady są proste, naciskasz przycisk wskazany przez czarne pole, za każdym razem masz 3 sekudy na odpowiedź, ale uważaj poziom trudności zagadek rośnie. Powodzenia!</p>";
    }
  }

  constructor(rodzaj) {
    this.rodzaj = rodzaj;
    document.getElementById(
      "pudelko"
    ).innerHTML += `<div id="narzuta"></div><div id="popup"><div id="tekst">${this.tekst()}</div></div>`;
    dom.id[0].addEventListener("click", start);
    console.log("popup");
  }
}
