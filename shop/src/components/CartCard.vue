<template>
    <div class="cart__products__card">
        <img :src="require(`../assets/${product.photo}`)" :alt="product.id">
        <div class="cart__products__card__info">
            <h3>{{ product.name.toUpperCase() }}</h3>
            <p>Price: <span class="price">${{ product.price }}</span></p>
            <p>Color: {{ product.color }}</p>
            <p>Size: {{ product.size }}</p>
            <label for="quantity_1">Quantity:</label>
            <input type="number" id="quantity_1" :value="product.quantity">
        </div>
        <div class="cart__products__card__close"><i class="fas fa-times"></i></div>
    </div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style lang="scss">
    @import '~@/assets/style/_mixins';

    .cart {
        &__products {
            &__card {
                display: flex;
                justify-content: flex-start;
                width: 652px;
                height: 306px;
                box-shadow: 17px 19px 24px rgba(39, 2, 2, 0.13);
                &:not(:nth-last-child(-n+2)) {
                    margin-bottom: 40px;
                }
                & img {
                    height: 100%;
                    width: auto;
                }
                &__info {
                    margin-top: 22px;
                    margin-left: 31px;
                    max-width: 210px;
                    & h3 {
                        @include text;
                        font-weight: 400;
                        font-size: 24px;
                        line-height: 29px;
                        color: #222222;
                        margin-bottom: 42px;
                    }
                    & p, label {
                        @include text;
                        font-weight: 400;
                        font-size: 22px;
                        line-height: 26px;
                        color: #575757;
                    }
                    & p {
                        margin-bottom: 6px;
                    }
                    & input {
                        height: 25px;
                        width: 44px;
                        text-align: center;
                        font-weight: normal;
                        font-size: 18px;
                        line-height: 22px;
                        color: #656565;
                        border: 1px solid #EAEAEA;
                        margin-left: 24px;
                        &:focus {
                            outline: none;
                        }
                    }
                }
                &__close {
                    margin: 28px 22px 0 auto;
                    font-size: 24px;
                }
            }
        }
    }
</style>