import './index.css';
import { createScore, fetchScore, addScore } from './modules/api.js';

const refreshButton = document.querySelector('.reset-btn');
const addButton = document.querySelector('.add-btn');

refreshButton.addEventListener('click', async () => {
  const scoreList = document.querySelector('.score-list');
  const scores = await fetchScore();
  scoreList.innerHTML = '';
  const scoreElements = scores.map((n) => createScore(n.user, n.score));

  scoreElements.forEach((scoreElement) => {
    scoreList.appendChild(scoreElement);
  });
});

addButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const form = document.querySelector('form');
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  await addScore(name, score);
  form.reset();
});
