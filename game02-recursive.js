'use strict';

const guessNumberFromRange = () => {
  alert('Игра "Угадай число в диапазоне".');
  let min = +prompt('Введите первую границу диапазона.');
  let max = +prompt('Введите вторую границу диапазона.');
  if (min > max) [max, min] = [min, max];

  const attempts = Math.round((max - min + 1) * 0.3);
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  const arrOfGuesses = [];

  const checkGuess = () => {
    const userGuess = prompt('Введите вашу отгадку.');

    if (userGuess === null) {
      alert('Игра закончена');
      return;
    }

    switch (true) {
      case isNaN(+userGuess):
        alert('Введите число!');
        break;

      case arrOfGuesses.includes(+userGuess):
        alert('Это число вы уже вводили.');
        break;

      case +userGuess < min:
      case +userGuess > max:
        alert('Это число не входит в указанный диапазон.');
        break;

      case userGuess > randomNumber:
        arrOfGuesses.push(+userGuess);
        alert(`Меньше! Осталось ${attempts - arrOfGuesses.length} попыток.`);
        break;

      case userGuess < randomNumber:
        arrOfGuesses.push(+userGuess);
        alert(`Больше! Осталось ${attempts - arrOfGuesses.length} попыток.`);
        break;
    }

    if (+userGuess === randomNumber) {
      alert('Правильно!');
      return;
    } else if (arrOfGuesses.length === attempts) {
      alert('Вы исчерпали все попытки. Игра закончена.');
      return;
    } else {
      return checkGuess();
    }
  };

  checkGuess();
};

guessNumberFromRange();
