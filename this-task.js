'use strict';

const rectangle = {
  _width: 5,
  _height: 5,
  set width(num) {
    if (typeof num === 'number' && !isNaN(num)) this._width = num;
  },
  set height(num) {
    if (typeof num === 'number' && !isNaN(num)) this._height = num;
  },
  get area() {
    const area = this._width * this._height + 'см';
    return area;
  },
  get perimeter() {
    const perim = 2 * (this._width + this._height) + 'см';
    return perim;
  },
};

rectangle.heighteight = 'fhtagn';
rectangle.width = 15;
console.log(`Площадь: ${rectangle.area}.`);
console.log(`Периметр: ${rectangle.perimeter}.`);
