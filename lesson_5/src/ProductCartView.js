export default class ProductCardView {
  constructor(data) {
    this.data = data
    this.element = null
  }

  render(container) {
    container.append(this.getElement())
  }

  getId() {
    return this.data.id
  }

  getHtml() {
    return `<p>${this.data.title} - $${this.data.price}</p>`
  }

  getElement() {
    if(this.element) return this.element

    this.element = document.createElement('DIV');
    this.element.classList.add('cart__item');
    this.element.insertAdjacentHTML('afterbegin', this.getHtml());

    return this.element;
  }

  update(data) {
    this.data = data;
    this.element.textContent = ''
    this.element.insertAjacentHtml('afterbegin', this.getHtml())
  }
}