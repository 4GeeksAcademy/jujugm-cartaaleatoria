/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function generatecard() {
  let Cardicon = ["♥️", "♦️", "♠️", "♣️"];
  let Value = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomCardicon = Math.floor(Math.random() * 4);
  let randomValue = Math.floor(Math.random() * 13);

  document.querySelector(".card-icon-left").innerHTML =
    Cardicon[randomCardicon];
  document.querySelector(".card-icon-right").innerHTML =
    Cardicon[randomCardicon];
  document.querySelector(".cardText h1").innerHTML = Value[randomValue];

  let color = randomCardicon === 0 || randomCardicon === 1 ? "red" : "black";
  document.querySelector(".card").style.color = color;

  let refresh = document.getElementById("reload");
  reload.addEventListener("click", _ => {
    location.reload();
  });

  console.log("Palo:", Cardicon[randomCardicon]);
  console.log("Valor:", Value[randomValue]);
};
