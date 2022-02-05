import ProductList from "./ProductList";
import Product from "./Product"

export default class Cart extends ProductList {
  constructor(api_url) {
    super() 
    this.api_url = api_url
  }

  init() {
    fetch(`${this.api_url}/cart`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.set(data.map(({id, title, price}) => new Product(id, title, price)))
      })
  }

  add(product) {
    fetch(`${this.api_url}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then(() => {
        super.add(product)
      })
  }

  remove(id) {
    fetch(`${this.api_url}/cart/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        super.remove(id);
      })
  }

  addTestProduct() {
    const product = new Product(999, 'Test Product', 0.01);
    this.add(product);
  }
}