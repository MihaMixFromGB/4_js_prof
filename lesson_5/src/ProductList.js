import EventEmitter from "./EventEmitter.mjs";

export default class ProductList extends EventEmitter {
  constructor() {
    super()
    this.list = [];
  }

  set(list) {
    this.list = [...this.list, ...list] 
    this.emit('onSet', this.get())
  }

  get() {
    return [...this.list];
  }

  getById(id) {
    return Object.assign({}, this.list.find((item) => item.id === id))
  }

  add(item) {
    this.list.push(item);
    this.emit('onAdd', item)
  }

  remove(id) {
    const idx = this.list.findIndex((item) => item.id === id);
    this.list.splice(idx, 1)
    this.emit('onRemove', id)
  }
}