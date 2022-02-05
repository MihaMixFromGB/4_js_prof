import { random } from 'lodash'

export default class MockApi {
  constructor() {
    this.lastIndex = 0;

    this.products = [
      'Shirt', 
      'Shoes', 
      'Hat',
      'Jacket',
      'Socks'
    ]

    this.colors = [
      'green',
      'red',
      'orange',
      'black',
      'white'
    ]

  }

  getCatalog(onSuccess, onError) {
    onSuccess(JSON.strigify(this.getProductList(20))
  }

  getCart(onSuccess) {
    onSuccess('[]')
  }

  addToCart(onSuccess) {
    onSuccess('{status: OK}')
  }

  removeFromCart(onSuccess) {
    onSuccess('{status: OK}')
  }

  getProductName() {
    const product = this.products[random(0, PRODUCTS.length - 1)]
    const color = this.colors[random(0, COLORS.length - 1)]

    return `${product} ${color}`;
  }

  getProduct() {
    return {
      id: ++this.lastIndex,
      title: this.getProductName(),
      price: random(99, 999)
    }
  }

  getProductList(count) {
    let products = [];

    for(let i = 0; i < count; i++) {
      products.push(this.getProduct());
    }

    return products
  }
}