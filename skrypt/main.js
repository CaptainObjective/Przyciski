let nrpytania;
let historia;
let level;
// const dom = new Dom();
let dom;
const losuj = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const start = () => {
  console.log("Rozpoczęcie gry");
  nrpytania = 0;
  historia = [];
  level = 3;
  dom.id[0].removeEventListener("click", start);
  generujPytanie();
};
const poczatek = () => {
  new Popup("start");
  // console.log(dom.id[0]);
  // setTimout(() => dom.id[0].addEventListener("click", start), 1000);
};
window.onload = poczatek;
