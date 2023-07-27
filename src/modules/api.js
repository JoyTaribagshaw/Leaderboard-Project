const apiServer = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const scoreList = document.querySelector('.score-list');

export const createScore = (scoreName, score) => {
  if (scoreName !== '' && score !== '') {
    const newScoreItem = document.createElement('li');
    newScoreItem.textContent = `${scoreName} : ${score}`;
    scoreList.appendChild(newScoreItem);
    nameInput.value = '';
    scoreInput.value = '';
  }
};

export const fetchScore = async () => {
  const response = await fetch(`${apiServer}games/Og71XsKvpd1iAzfOkJWW/scores/`);
  const data = await response.json();
  return data.result;
};

export const addScore = async (name, score) => {
  const response = await fetch(`${apiServer}games/Og71XsKvpd1iAzfOkJWW/scores/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ user: name, score }),
  });

  const data = await response.json();
  return data.result;
};