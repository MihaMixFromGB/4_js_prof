import "./assets/scss/main.scss";

import ApiHandler from './ApiHandler.js';
import CartModel from './CartModel.js';
import ShowcaseModel from './ShowcaseModel.js';
import EventEmitter from './EventEmitter.js';

const API_URL = 'http://localhost:3000/api/v1'

const api = new ApiHandler(API_URL)
const eventEmmiter = new EventEmitter()

const cart = new CartModel(api, eventEmmiter)
const showcase = new ShowcaseModel(api, eventEmmiter, cart)

eventEmmiter.subscribe('showcaseFeched', (data) => {
  console.log(data)
})

eventEmmiter.subscribe('cartFeched', (data) => {
  console.log(data)
})

showcase.fetch()
  .catch(error => console.log(error))

cart.fetch()
  .catch(error => console.log(error))

cart.removeFromCart(5)
  .then(() => {
    console.log('Корзина после удаления: ')
    cart.fetch()
  })
  .catch(error => console.log(error))