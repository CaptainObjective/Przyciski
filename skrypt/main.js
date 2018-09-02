let nrpytania;
let historia;
let level;
const dom = new Dom();
const losuj = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const start = () => {
  console.log("Rozpoczęcie gry");
  dom.id[0].innerHTML = "Start";
  nrpytania = 0;
  historia = [];
  level = 3;
  dom.id[0].removeEventListener("click", start);
  generujPytanie();
};
const poczatek = () => {
  dom.id[0].innerHTML = "Start";
  // new Popup("start");
  dom.id[0].addEventListener("click", start);
  // dom.id[0].addEventListener("click", start);
};
window.onload = poczatek;
