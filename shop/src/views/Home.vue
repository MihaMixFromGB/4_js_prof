<template>
    <div>
        <section class="title">
            <div class="title__box container">
                <div class="title__caption">
                    <h1>THE BRAND <span>OF LUXERIOUS <span class="text-color">FASHION</span></span></h1>
                </div>
            </div>
        </section>
        <section class="catalog container">
            <div class="catalog__box">
                <a class="catalog__item catalog__item--women" href="#">
                    <div>
                        <p>30% OFF</p>
                        <h3 class="text-color">FOR WOMEN</h3>
                    </div>
                </a>
                <a class="catalog__item catalog__item--men" href="#">
                    <div>
                        <p>HOT DEAL</p>
                        <h3 class="text-color">FOR MEN</h3>
                    </div>
                </a>
                <a class="catalog__item catalog__item--kids" href="#">
                    <div>
                        <p>NEW ARRIVALS</p>
                        <h3 class="text-color">FOR KIDS</h3>
                    </div>
                </a>
                <a class="catalog__item catalog__item--accesories" href="#">
                    <div>
                        <p>LUXERIOUS & TRENDY</p>
                        <h3 class="text-color">ACCESORIES</h3>
                    </div>
                </a>
            </div>
        </section>
        <section class="products container">
            <header>
                <h2>Fetured Items</h2>
                <p>Shop for items based on what we featured in this week</p>
            </header>
            <div class="products__box">
                <catalog-card v-for="item in catalogProducts" :key="item.id"
                                :product="item"></catalog-card>
            </div>
            <div class="products__btn">
                <a class="btn btn-pink" href="#">Browse All Product</a>
            </div>
        </section>
        <section class="features">
            <div class="features__box container">
                <article class="features__item">
                    <div>
                        <img src="../assets/f_delivery.svg" alt="delivery">
                    </div>
                    <h3>Free Delivery</h3>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation
                        innov tion with extensive models.</p>
                </article>
                <article class="features__item">
                    <div>
                        <img src="../assets/f_sales.svg" alt="sales">
                    </div>
                    <h3>Sales & discounts</h3>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation
                        innov tion with extensive models.</p>
                </article>
                <article class="features__item">
                    <div>
                        <img src="../assets/f_assurance.svg" alt="assurance">
                    </div>
                    <h3>Quality assurance</h3>
                    <p>Worldwide delivery on all. Authorit tively morph next-generation
                        innov tion with extensive models.</p>
                </article>
            </div>
        </section>
    </div>
</template>

<script>
import CatalogCard from '../components/CatalogCard.vue'
export default {
    components: { CatalogCard },
    props: ['catalogProducts']
}
</script>

<style lang="scss">
    @import '~@/assets/style/_mixins';
    
    @mixin backroundImg($path) {
    background:
        linear-gradient(
            rgba(33, 22, 22, 0.7), 
            rgba(33, 22, 22, 0.7)
        ),
        url($path);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
};

.title {
    min-height: calc(100vh - 80px);
    height: 1px;
    width: 100%;
    background: #F1E4E6;
    &__box {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        background-image: url('../assets/top_image.png');
        background-repeat: no-repeat;
        background-size: auto 100%;
        background-position: left;
    }
    &__caption {
        border-left: 12px solid #F16D7F;
        padding-left: 16px;
        margin-right: 100px;
        & > h1 {
            @include text;
            font-weight: 900;
            font-size: 48px;
            line-height: 58px;
            & > span {
                display: block;
                font-weight: 700;
                font-size: 32px;
                line-height: 38px;
            }
        }
    }
}

.catalog {
    margin-top: 65px;
    &__box {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    }
    &__item {
        display: block;
        width: 100%;
        min-height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        &:not(:last-child) {
            width: 31.5%;
            min-height: 260px;
        }
        &--women {
            @include backroundImg('../assets/for_women.png');
        }
        &--men {
            @include backroundImg('../assets/for_men.png');
        }
        &--kids {
            @include backroundImg('../assets/for_kids.png');
        }
        &--accesories {
            @include backroundImg('../assets/accesories.png');
        }
        & > div {
            @include text;
            text-align: center;
            & > p {
                font-weight: 400;
                font-size: 16px;
                line-height: 19px;
                color: white;
            }
            & > h3 {
                font-weight: 700;
                font-size: 24px;
                line-height: 29px;
            }
        }
    }
}
.products {
    margin-top: 96px;
    margin-bottom: 96px;
    & > header {
        @include text;
        text-align: center;
        & > h2 {
            font-weight: 400;
            font-size: 30px;
            line-height: 36px;
            margin-bottom: 6px;
        }
        & > p {
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #9F9F9F;
        }
    }
    &__box {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        margin: 64px 0 48px;
    }
    &__btn {
        display: flex;
        justify-content: center;
        & > .btn {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            transition: 0.5s;
            // &:hover {
            //     transform: rotate(360deg);
            // }
        }
    }
}

@media (max-width: 1024px) {
    .title {
        min-height: 368px;
        &__box {
            background-position: 0;
        }
        &__caption {
            margin-right: 32px;
            & > h1 {
                font-size: 43px;
                line-height: 53px;
                & > span {
                    font-size: 24px;
                    line-height: 29px;
                }
            }
        }
        &__menu {
            &__box {
                & > ul{
                    &:last-child {
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }
    .catalog {
        margin: 20px auto 16px;
        &__box {
            gap: 20px;
        }
        &__item {
            height: 116px;
            &:not(:last-child) {
                height: 167px;
            }
        }
    }
    .products {
        margin: 155px auto 65px;
        & > header {
            & > h2 {
                margin-bottom: 3px;
            }
        }
        &__box {
            margin: 74px 0 32px;
            gap: 16px;
        }
    }
}
@media (max-width: 667px) {
    .title {
        min-height: 363px;
        &__box {
            background-image: none;
            justify-content: center;
        }
        &__caption {
            margin: 0;
            & > h1 {
                font-size: 38px;
                line-height: 46px;
                & > span {
                    font-size: 20px;
                    line-height: 24px;
                }
            }
        }
    }
    .catalog {
        margin: 64px 16px 0;
        &__box {
            flex-direction: column;
            gap: 32px;
        }
        &__item {
            min-height: 111px;
            &:not(:last-child) {
                width: 100%;
                min-height: 247px;
            }
        }
    }
    .products {
        margin: 64px 8px 96px;
        &__box {
            margin: 64px 0 41px;
        }

    }
}
</style>