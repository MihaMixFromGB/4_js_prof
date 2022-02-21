<template>
    <article class="products__item">
        <img :src="require(`../assets/${product.photo}`)" :alt="product.id">
        <div class="addCart">
            <button :data-id="product.id">
                <img src="../assets/cart.svg" alt="add_cart">
                Add to Cart
            </button>
        </div>
        <div class="products__item__info">
            <h3><a href="#">{{ product.name.toUpperCase() }}</a></h3>
            <p class="products__item__info__desc">{{ product.desc }}</p>
            <p class="products__item__info__price price">${{ product.price }}</p>
        </div>
    </article>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style lang="scss">
    @import '~@/assets/style/_mixins';
    
    .products {
        &__item {
            position: relative;
            flex-basis: 360px;
            min-height: 420px;
            background: #F8F8F8;
            transition: 0.5s;
            & .addCart {
                opacity: 0;
                transition: 0.5s;
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                background: rgba(58, 56, 56, 0.86);
                top: 0;
                left: 0;
                width: 100%;
                height: 420px;
                & > button {
                    cursor: pointer;
                    border: 1px solid #FFFFFF;
                    background: none;
                    display: flex;
                    align-items: center;
                    padding: 10px 15px;
                    text-decoration: none;
                    @include text;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                    color: #FFFFFF;
                    &:hover {
                        opacity: 0.7;
                    }
                    & > img {
                        margin-right: 10px;
                    }
                }
            }
            &:hover {
                transform: scale(1.05);
            }
            &:hover .addCart {
                opacity: 1;
            }
            &__info {
                @include text;
                margin: 24px 18px 20px;
                & > h3 {
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 16px;
                    & > a {
                        text-decoration: none;
                        color: #000000;
                    }
                }
                &__desc {
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 17px;
                    color: #5D5D5D;
                    margin-top: 13px;
                    margin-bottom: 18px;
                }
                &__price {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                }
            }
        }
    }
</style>