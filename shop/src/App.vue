<template>
  <div class="page">
    <header>
      <div class="cart">cart</div>
    </header>
    <main>
      <card v-for="(product, i) in products" :key="i" :data="product"></card>
    </main>
    <footer></footer>
  </div>
</template>

<script>
  import card from './components/card';

  export default {
    components: { card },
    data() {
      return {
        products: [
          {
            name: 't-shirt-1',
            desc: 'desc of t-shirt-1',
            price: 10
          },
          {
            name: 't-shirt-2',
            desc: 'desc of t-shirt-2',
            price: 20
          },
          {
            name: 't-shirt-3',
            desc: 'desc of t-shirt-3',
            price: 30
          },
        ]
      }
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  .page {
    min-height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr min-content;
  }
  header {
    display: flex;
    justify-content: end;
    align-items: center;
    min-height: 75px;
    background-color: grey;
    & > .cart {
      height: 25px;
      width: 100px;
      padding: 10px;
      margin-right: 10px;
      text-align: center;
      background-color: white;
    }
  }
  main {
    display: flex;
    justify-content: center;
    padding: 20px;
  }
  footer {
    min-height: 75px;
    background-color: grey;
  }
</style>
