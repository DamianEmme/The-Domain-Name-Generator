/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".uy", ".net"];

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  document.querySelector(".texto").innerHTML = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          document.querySelector(
            ".texto"
          ).innerHTML += `<li>${pronoun[i]}${adj[j]}${noun[k]}${domain[l]}</li>`;
        }
      }
    }
  }
});
