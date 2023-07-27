import "./index.css";
import { createScore, fetchScore, addScore } from "./modules/api.js";

const refreshButton = document.querySelector(".reset-btn");
const scoreList = document.querySelector(".score-list");
const formSubmit = document.getElementById("form");
const nameInput = document.querySelector("#name");
const scoreInput = document.querySelector("#score");

refreshButton.addEventListener("click", async () => {
  const scores = await fetchScore();
  scoreList.innerHTML = "";
  scores.forEach((n) => createScore(n.user, n.score));
  if (scores.length === 0) {
    scoreList.classList.add('no-border')
  } else {
    scoreList.classList.remove('no-border') 
  }
});

formSubmit.addEventListener("submit", async (e) => {
  e.preventDefault();
  const scoreName = nameInput.value.trim();
  const score = scoreInput.value.trim();
  const result = await addScore(scoreName, score);
  createScore(scoreName, score);
  document.getElementById("msg").textContent = result;
});
