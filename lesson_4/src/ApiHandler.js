import { send } from './utils.js';
import { sendPromise } from './utils.js';

export default class ApiHandler {
  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }

  // getCatalog(onSuccess, onError) {
  //   send(onError, onSuccess, `${this.apiUrl}/catalog`)
  // }
  /* С ПОМОШЬЮ PROMISE */
  getCatalog() {
    return sendPromise(`${this.apiUrl}/catalog`)
            .then(data => JSON.parse(data))
  }
  /* С ПОМОЩЬЮ FETCH */
  // getCatalog() {
  //   return fetch(`${this.apiUrl}/catalog`)
  //           .then(res => res.json())
  // }

  // getCart(onSuccess, onError) {
  //   send(onError, onSuccess, `${this.apiUrl}/cart`)
  // }
  getCart() {
    return fetch(`${this.apiUrl}/cart`)
            .then(res => res.json())
  }

  // addToCart(onSuccess, onError, data) {
  //   send(onError, onSuccess, `${this.apiUrl}/cart`, 'POST', JSON.stringify(data), {"Content-Type": "application/json"})
  // }
  addToCart(data) {
    return fetch(
      `${this.apiUrl}/cart`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(res => {
        if (res.status < 400) {
          return data
        } else {
          return Promise.reject(new Error('Ошибка выполнения запроса на сервере: ' + res.text()))
        }
      })
  }

  // removeFromCart(onSuccess, onError, data) {
  //   send(onError, onSuccess, `${this.apiUrl}/cart`, 'DELETE', JSON.stringify(data), {"Content-Type": "application/json"})
  // }
  removeFromCart(data) {
    return fetch(`${this.apiUrl}/cart`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if (res.status < 400) {
        return data
      } else {
        return Promise.reject(new Error('Ошибка выполнения запроса на сервере: ' + res.text()))
      }
    })
    .catch(error => {
      return Promise.reject(error)
    })
  }
}