'use strict';

const recursiveFunction = arr => {
  const finalArr = [...arr];
  if (finalArr.reduce((sum, item) => sum + item, 0) > 50) return finalArr;
  finalArr.push(Math.round(Math.random() * 10));
  return recursiveFunction(finalArr);
};

const exampleArrOne = [];
const exampleArrTwo = [8, 4, 0];
const exampleArrThree = [5, 6, 4, 9, 1, 5, 6, 4, 2, 3, 7];

console.log(recursiveFunction(exampleArrOne));
console.log(recursiveFunction(exampleArrTwo));
console.log(recursiveFunction(exampleArrThree));

