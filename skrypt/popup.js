class Popup {
  tekst() {
    if (this.rodzaj == "start") {
      return "<h1>Witaj w grze w Przyciski</h1><p>Zasady są proste, naciskasz przycisk wskazany przez czarne pole, za każdym razem masz 3 sekudy na odpowiedź, ale uważaj poziom trudności zagadek rośnie. Powodzenia!</p>";
    } else if (this.rodzaj == "pomyłka") {
      this.guzik = "Jeszcze raz!";
      return `<h1>Koniec gry</h1><p>Twój wynik to: ${nrpytania}</br>Spróbuj jeszcze raz</p>`;
    } else if (this.rodzaj == "czas") {
      this.guzik = "Jeszcze raz!";
      return `<h1>Koniec gry</h1><p>Twój wynik to: ${nrpytania}</br>Spróbuj jeszcze raz</p>`;
    }
  }
  klik() {
    document
      .getElementById("narzuta")
      .parentNode.removeChild(document.getElementById("narzuta"));
    document
      .getElementById("popup")
      .parentNode.removeChild(document.getElementById("popup"));
    dom = new Dom();
    dom.id[0].innerHTML = "Start";
    dom.id[0].addEventListener("click", start);
  }
  constructor(rodzaj) {
    this.rodzaj = rodzaj;
    this.guzik = "Zacznij grę!";
    console.log(this.rodzaj);
    document.getElementById(
      "pudelko"
    ).innerHTML += `<div id="narzuta"></div><div id="popup"><div id="tekst">${this.tekst()}</div><div id="zamknij">${
      this.guzik
    }</div></div>`;
    document.getElementById("zamknij").addEventListener("click", this.klik);
  }
}
