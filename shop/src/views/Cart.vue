<template>
    <div>
        <section class="title-path">
            <div class="title-path__box container">
                <h1>SHOPPING CART</h1>
            </div>
        </section>
        <section class="cart container">
            <div class="cart__products">
                <cart-card v-for="item in cartProducts" :key="item.id"
                            :product="item"></cart-card>
                <div class="cart__products__btn">
                    <input type="button" class="btn btn-grey" value="CLEAR SHOPPING CART">
                    <a class="btn btn-grey" href="#">CONTINUE SHOPPING</a>
                </div>
            </div>
            <form class="cart__order">
                <div class="cart__order__shipping">
                    <h3>SHIPPING ADRESS</h3>
                    <input type="text" value="Bangladesh" required placeholder="Country">
                    <input type="text" value="" required placeholder="State">
                    <input type="text" value="" required placeholder="Postcode / Zip">
                    <input type="button" value="GET A QUOTE">
                </div>
                <div class="cart__order__submit">
                    <div class="cart__order__submit__sub">
                        <p>SUB TOTAL <span>$900</span></p>
                    </div>
                    <div class="cart__order__submit__grand">
                        <p>GRAND TOTAL <span class="price text-bold">$900</span></p>
                    </div>
                    <div class="cart__order__submit__divider"></div>
                    <input type="submit" class="btn btn-pink-fill" value="PROCEED TO CHECKOUT">
                </div>
            </form>
        </section>
    </div>
</template>

<script>
import CartCard from '../components/CartCard.vue'
export default {
    components: { CartCard },
    props: ['cartProducts']
}
</script>

<style lang="scss">
    @import '~@/assets/style/_mixins';

    @mixin input-text {
    @include text;
    padding: 15px;
    font-weight: 300;
    font-size: 13px;
    line-height: 16px;
}

.cart {
    display: flex;
    justify-content: space-between;
    margin-top: 96px;
    margin-bottom: 128px;
    &__products {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &__btn {
            display: flex;
            justify-content: space-between;
            margin-top: 72px;
        }
    }
    &__order {
        display: flex;
        flex-direction: column;
        &__shipping {
            width: 360px;
            & h3 {
                @include text;
                font-weight: 300;
                font-size: 16px;
                line-height: 19px;
                color: #222222;
            }
            & input {
                margin-top: 20px;
                box-sizing: border-box;
                border: 1px solid #A4A4A4;
                background-color: white;
            }
            & input[type='text'] {
                @include input-text;
                width: 100%;
                color: #B1B1B1;
                &::placeholder {
                    @include input-text;
                    padding-left: 0;
                    color: #222222;
                }
                &:focus {
                    outline: none;
                }
            }
            & input[type='button'] {
                cursor: pointer;
                @include text;
                font-weight: 300;
                font-size: 11px;
                line-height: 13px;
                color: #4A4A4A;
                padding: 10px 15px;
                &:hover {
                    opacity: 0.7;
                }
            }
        }
        &__submit {
            display: flex;
            flex-direction: column;
            align-items: end;
            background: #F5F3F3;
            margin-top: 57px;
            padding: 40px;
            &__sub {
                @include text;
                font-weight: 400;
                font-size: 11px;
                line-height: 13px;
                color: #4A4A4A;
                margin-bottom: 12px;
                & span {
                    margin-left: 20px;
                }
            }
            &__grand {
                @include text;
                font-weight: 300;
                font-size: 16px;
                line-height: 19px;
                color: #222222;
                & span {
                    margin-left: 20px;
                }
            }
            &__divider {
                margin: 20px 0;
                width: 100%;
                border-top: 1px solid #E2E2E2;
            }
            & > input {
                width: 100%;
                font-weight: 300;
                font-size: 16px;
                line-height: 19px;
                &:hover {
                    background: #F5F3F3;
                }
            }
        }
    }
}

@media (max-width: 1024px) {
    .cart {
        flex-direction: column;
        margin-top: 60px;
        &__products {
            flex-direction: column;
            margin-bottom: 64px;
            &__card {
                width: 100%;
                height: 306px;
            }
            &__btn {
                justify-content: center;
                margin-top: 62px;
                & > input {
                    margin-right: 48px;
                }
            }
        }
        &__order {
            flex-direction: row;
            justify-content: space-between;
            &__submit {
                margin-top: 37px;
                padding: 40px 44px;
            }
        }
    }
}

@media (max-width: 667px) {
    .cart {
        margin-top: 40px;
        margin-bottom: 96px;
        &__products {
            &__card {
                height: 188px;
                &:not(:nth-last-child(-n+2)) {
                    margin-bottom: 32px;
                }
                &__info {
                    margin-top: 13px;
                    margin-left: 17px;
                    max-width: 130px;
                    & h3 {
                        font-size: 16px;
                        line-height: 19px;
                        margin-bottom: 26px;
                    }
                    & p, label {
                        font-size: 14px;
                        line-height: 16px;
                        
                    }
                    & p {
                        margin-bottom: 4px;
                    }
                    & input {
                        height: 15px;
                        width: 24px;
                        font-size: 10px;
                        line-height: 12px;
                    }
                }
                &__close {
                    margin: 12px 12px 0 auto;
                    font-size: 20px;
                }
            }
            &__btn {
                margin-top: 30px;
                gap: 9px;
                & input, a {
                    display: block;
                    text-align: center;
                    font-size: 12px;
                    line-height: 14px;
                    padding: 9px 0;
                    margin-right: 0px;
                    width: 175px;
                }
                // для input 'text-transform: capitalize;' не работает
                & a {
                    text-transform: lowercase;
                    &::first-letter {
                        text-transform: capitalize;
                    }
                }
            }
        }
        &__order {
            flex-direction: column;
            &__order {
                &__submit {
                    margin-top: 48px;
                    // для input 'text-transform: capitalize;' не работает
                }
            }
        }
    }
}
</style>