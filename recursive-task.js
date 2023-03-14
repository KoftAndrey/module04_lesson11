'use strict';

const recursiveFunction = arr => {
  arr.push(Math.round(Math.random() * 10));
  if (arr.reduce((sum, item) => sum + item, 0) <= 50) recursiveFunction(arr);
  return arr;
};

const exampleArr = [];

console.log(recursiveFunction(exampleArr));

