'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set setDiscount(promocode) {
    if (promocode === 'METHED') this.discount = 15;
    if (promocode === 'NEWYEAR') this.discount = 21;
  },
  add(productName, productPrice, productQuantity = 1) {
    this.items.push({
      name: productName,
      price: productPrice,
      quantity: productQuantity,
    });
    this.increaseCount(productQuantity);
  },
  increaseCount(number) {
    this.count += number;
  },
  calculateItemPrice() {
    return this.items.reduce((sum, item) => {
      sum += item.price * item.quantity * (1 - this.discount * 0.01);
      return sum;
    }, 0);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
};

cart.add('Яблоко', 10, 5);
cart.add('Апельсин', 15, 4);
cart.add('Арбуз', 100, 2);
cart.setDiscount = 'METHED';
cart.print();

