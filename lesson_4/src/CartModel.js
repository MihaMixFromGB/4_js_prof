import ProductList from './ProductList.js'

export default class CartModel extends ProductList {
  constructor(apiHandler, eventEmmiter) {
    // super([])
    super([{
      id: 5,
      title: "new",
      price: 999
    }, {
      id: 6,
      title: "new-6",
      price: 100
    }])
    this.api = apiHandler
    this.eventEmmiter = eventEmmiter
  }

  // fetch(onError) {
  //   this.api.getCart(
  //     (data) => { 
  //       this.list = JSON.parse(data)
  //       this.eventEmmiter.emit('cartFeched', this.list)
  //     },
  //     onError
  //   )
  // }
  fetch() {
    return this.api.getCart()
                    .then(list => {
                      this.list = list
                      this.eventEmmiter.emit('cartFeched', this.list)
                      // результат будет обработан через механизм EventEmmiter
                      // return list
                    })
  }

  // add(product, onError) {
  //   this.api.addToCart(
  //     () => {
  //       this.list.push(product)
  //     },
  //     onError,
  //     product
  //   )
  // }
  add(product) {
    return this.api.addToCart(product)
                    .then(product => {
                      this.list.push(product)
                      // результат может быть обработан через механизм EventEmmiter
                    })
                    .catch(error => {
                      return Promise.reject(error)
                    })
  }

  // remove(id, onError) {
  //   if(this.find(id)) {
  //     this.api.removeFromCart(
  //       () => {
  //         this.remove(id)
  //       },
  //       onError,
  //       this.list[index]
  //     )
  //   }
  // }
  removeFromCart(id) {
    const removedProduct = this.find(id);
    if(!removedProduct) {
      return Promise.reject(new Error(`Product with id=${id} not found`))
    }
    
    return this.api.removeFromCart(removedProduct)
                    .then(product => {
                      this.remove(id)
                      // результат может быть обработан через механизм EventEmmiter
                    })
                    .catch(error => {
                      return Promise.reject(error)
                    })
  }
}