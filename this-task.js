'use strict';

const rectangle = {
  width: '5см',
  height: '5см',
  set rectangleWidth(num) {
    if (typeof num === 'number' && !isNaN(num)) this.width = num + 'см';
  },
  set rectangleHeight(num) {
    if (typeof num === 'number' && !isNaN(num)) this.height = num + 'см';
  },
  get rectangleArea() {
    const area = this.width.slice(0, -2) * this.height.slice(0, -2);
    return area;
  },
  get rectanglePerimeter() {
    const perim = 2 * (+this.width.slice(0, -2) + +this.height.slice(0, -2));
    return perim;
  },
};

rectangle.rectangleHeight = 'fhtagn';
rectangle.rectangleWidth = 15;
console.log(`Площадь: ${rectangle.rectangleArea}`);
console.log(`Периметр: ${rectangle.rectanglePerimeter}`);
