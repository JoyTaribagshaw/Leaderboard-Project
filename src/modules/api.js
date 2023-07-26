const apiServer = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

export const fetchScore = async () => {
  const response = await fetch(`${apiServer}games/Og71XsKvpd1iAzfOkJWW/scores/`);
  const data = await response.json();
  return data.result;
};

export const createScore = (name, score) => {
  const newList = document.createElement('li');
  newList.textContent = `${name} : ${score}`;
  return newList;
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