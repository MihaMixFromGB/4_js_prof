<template>
  <div class="page">
    <header class="header">
        <nav class="header__box container">
            <div>
                <router-link class="header__logo--margin" to="/">
                  <img src="./assets/logo.png" alt="logo">
                </router-link>
                <img src="./assets/search.svg" alt="search">
            </div>
            <div class="header__toolbar">
                <div class="header__toolbar__item header__menu">
                    <label for="burger">&#9776;</label>
                    <input type="checkbox" id="burger">
                    <div class="header__menu__box"
                            :class="{ 'fullHeight': this.$route.path==='/cart' }">
                        <div class="header__menu__close">
                            <label for="burger">
                                <span></span>
                                <span></span>
                            </label>
                        </div>
                        <nav class="header__menu__content">
                            <h2>MENU</h2>
                            <h3><a href="#">MAN</a></h3>
                            <ul>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Jackets & Coats</a></li>
                                <li><a href="#">Polos</a></li>
                                <li><a href="#">T-Shirts</a></li>
                                <li><a href="#">Shirts</a></li>
                            </ul>
                            <h3><a href="#">WOMAN</a></h3>
                            <ul>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Bags</a></li>
                                <li><a href="#">Denim</a></li>
                                <li><a href="#">T-Shirts</a></li>
                            </ul>
                            <h3><a href="#">KIDS</a></h3>
                            <ul>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">Jackets & Coats</a></li>
                                <li><a href="#">Polos</a></li>
                                <li><a href="#">T-Shirts</a></li>
                                <li><a href="#">Shirts</a></li>
                                <li><a href="#">Bags</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <a class="header__toolbar__item" href="#">
                    <img src="./assets/lk.svg" alt="lk">
                </a>
                <div class="header__toolbar__item header__cart">
                    <router-link to="/cart">
                        <img src="./assets/cart.svg" alt="cart">
                    </router-link>
                    <div class="header__cart__goods" v-show="cartCount!==0">{{ cartCount }}</div>
                </div>
            </div>
        </nav>
    </header>
    <main>
      <router-view :catalog-products="catalog" :cart-products="cart"></router-view>
      <section class="subscribe">
            <div class="subscribe__box container">
                <div class="subscribe__info">
                    <img src="./assets/subscribe_photo.png" alt="photo">
                    <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span
                            class="text-italic">a pulvinar purus condimentum</span>“</p>
                </div>
                <form class="subscribe__form">
                    <h2>SUBSCRIBE</h2>
                    <p>FOR OUR NEWLETTER AND PROMOTION</p>
                    <input class="subscribe__form__email" type="email" placeholder="Enter Your Email"
                            required pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/">
                    <input class="subscribe__form__submit" type="submit" value="Subscribe">
                </form>
            </div>
        </section>
    </main>
    <footer class="footer">
        <div class="footer__box container">
            <p class="footer__copyright">&copy; 2021 Brand All Rights Reserved.</p>
            <div class="footer__social">
                <a href="#" class="footer__social__link">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="footer__social__link">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="footer__social__link">
                    <i class="fab fa-pinterest-p"></i>
                </a>
                <a href="#" class="footer__social__link">
                    <i class="fab fa-twitter"></i>
                </a>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
    data() {
        return {
            catalog: [],
            cart: []
        }
    },
    computed: {
        cartCount() {
            return this.cart.reduce((sum, item) => sum + item.quantity, 0)
        }
    },
    mounted() {
        this.catalog = [
                {
                    id: 1,
                    name: 'Jacket Blue',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 52.22,
                    photo: 'item_1.png'
                },
                {
                    id: 2,
                    name: 'Suit Casual',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 32.12,
                    photo: 'item_7.png'
                }, 
                {
                    id: 3,
                    name: 'Sweater',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 82.87,
                    photo: 'item_3.png'
                },
                {
                    id: 4,
                    name: 'T-Shirt Blue',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 22.35,
                    photo: 'item_4.png'
                },
                {
                    id: 5,
                    name: 'T-Shirt Long',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 42.07,
                    photo: 'item_8.png'
                }, 
                {
                    id: 6,
                    name: 'T-Shirt White',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 13.75,
                    photo: 'item_9.png'
                }
            ]
        this.cart = [
                {
                    id: 3,
                    name: 'Sweater',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 82.87,
                    photo: 'item_3.png',
                    color: 'Red',
                    size: 'XL',
                    quantity: 2
                },
                {
                    id: 4,
                    name: 'T-Shirt Blue',
                    desc: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
                    price: 22.35,
                    photo: 'item_4.png',
                    color: 'Red',
                    size: 'XL',
                    quantity: 1
                }
        ]
    }
}
</script>

<style lang="scss">
  @import './assets/style/_general';
  @import './assets/style/_header';
  @import './assets/style/_subscribe';
  @import './assets/style/_footer';
  /* Модули scss загружаются для всех компонентов сразу.
     Каждая страница использует общий модуль _general.scss, но не видит его объявления в App.vue.
     Дополнительный его импорт в модуль приводит к перезаписи стилей классов предыдущего модуля.
     Например, класс container обнулял margin у других классов, которые использовались с ним совместно
     (catalog container).
     Вынести общие mixin'ы в отдельный модуль!*/
  /* Home */
  @import './assets/style/_features';
  /* Cart */
  @import './assets/style/_titlePath';

  .fullHeight {
      height: auto;
      overflow: hidden;
  }
</style>
