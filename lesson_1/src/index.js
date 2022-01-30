import "./scss/style.scss";
import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";

const productList = getProductList(20);

renderGoodsList(productList);