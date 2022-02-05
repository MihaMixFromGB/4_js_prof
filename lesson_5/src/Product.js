export default class Product {
  constructor(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
  }

  makeDiscount(callback) {
    this.price = callback(id)
  }
}