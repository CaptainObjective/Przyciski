class Dom {
  constructor() {
    this.id = [];
    this.id[0] = document.getElementById("pytanie");
    for (let i = 1; i < 7; i++) {
      this.id[i] = document.getElementById(i);
    }
    this.listener = document.querySelectorAll(".guzik");
  }
}
