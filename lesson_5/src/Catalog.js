import ProductList from "./ProductList";
import Product from "./Product"

export default class Catalog extends ProductList{
  constructor(api_url, cartModel) {
    super()
    this.api_url = api_url
    this.cartModel = cartModel
  }

  init() {
    fetch(`${this.api_url}/catalog`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.set(data.map(({id, title, price}) => new Product(id, title, price)))
      })
  }

  addToCart(id) {
    const product = this.getById(id);
    this.cartModel.add(product);
  }
}