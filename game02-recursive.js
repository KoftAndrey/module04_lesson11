'use strict';

const guessNumberFromRange = () => {
  alert('Игра "Угадай число в диапазоне".');

  const getArrFromRange = () => {
    const rangeArray = [];
    const num1 = +prompt('Введите первую границу диапазона.');
    const num2 = +prompt('Введите вторую границу диапазона.');

    const constructArr = (num1, num2, rangeArray) => {
      if (num1 > num2) {
        rangeArray.push(num2);
        constructArr(num1, num2 + 1, rangeArray);
      }

      if (num1 < num2) {
        rangeArray.push(num1);
        constructArr(num1 + 1, num2, rangeArray);
      }

      if (num1 === num2) rangeArray.push(num2);
      return rangeArray;
    };

    return constructArr(num1, num2, rangeArray);
  };

  const getRandomNum = (arr) => {
    const randomNum = arr[Math.floor(Math.random() * arr.length)];
    return randomNum;
  };

  const arrFromRange = getArrFromRange();
  const randomNumber = getRandomNum(arrFromRange);
  const arrOfGuesses = [];

  let attempts;
  if (arrFromRange.length >= 50 && arrFromRange.length <= 100) {
    attempts = 15;
  } else {
    attempts = Math.round(arrFromRange.length * 0.3);
  }

  const checkGuess = (arrFromRange, randomNumber, arrOfGuesses, attempts) => {
    const userGuess = prompt('Введите вашу отгадку.');

    if (userGuess === null) {
      alert('Игра закончена');
      return;
    }

    if (isNaN(+userGuess)) {
      alert('Введите число!');
      return checkGuess(arrFromRange, randomNumber, arrOfGuesses, attempts);
    }

    if (arrOfGuesses.includes(+userGuess)) {
      alert('Это число вы уже вводили.');
      return checkGuess(arrFromRange, randomNumber, arrOfGuesses, attempts);
    }

    if (!arrFromRange.includes(+userGuess)) {
      alert('Это число не входит в указанный диапазон.');
      return checkGuess(arrFromRange, randomNumber, arrOfGuesses, attempts);
    }

    arrOfGuesses.push(+userGuess);

    if (userGuess > randomNumber) {
      alert(`Меньше! Осталось ${attempts - arrOfGuesses.length} попыток.`);
      if (arrOfGuesses.length === attempts) {
        alert('Вы исчерпали все попытки. Игра закончена.');
        return;
      }
      return checkGuess(arrFromRange, randomNumber, arrOfGuesses, attempts);
    }

    if (userGuess < randomNumber) {
      alert(`Больше! Осталось ${attempts - arrOfGuesses.length} попыток.`);
      if (arrOfGuesses.length === attempts) {
        alert('Вы исчерпали все попытки. Игра закончена.');
        return;
      }
      return checkGuess(arrFromRange, randomNumber, arrOfGuesses, attempts);
    }

    alert('Правильно!');
    return;
  };

  checkGuess(arrFromRange, randomNumber, arrOfGuesses, attempts);
};

guessNumberFromRange();
