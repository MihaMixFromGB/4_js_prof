import ProductCardView from "./ProductCardView";
import ProductCartView from "./ProductCartView";

export default class CatalogPresenter {
  constructor(catalogModel, cartModel) {
    this.catalogModel = catalogModel;
    this.cartModel = cartModel;
    this.container = document.querySelector('.showcase')
    this.cartContainer = document.querySelector('.cart')
    this.cards = [];
    this.cartItems = [];

    this.catalogModel.subscribe('onSet', (catalog) => {
      this.cards = catalog.map((product) => new ProductCardView(product))
      this.cards.forEach((card) => card.render(this.container))
    })

    this.cartModel.subscribe('onAdd', () => {
      const cart = cartModel.get();
      this.cartItems = cart.map((product) => new ProductCartView(product));
      this.cartItems.forEach((item) => item.render(this.cartContainer));
    })
  }

  

  init() {
    this.catalogModel.init()
    this.cartModel.init()
  }
}