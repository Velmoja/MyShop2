import Vue from 'vue';
import VueRouter from 'vue-router';
import Catalog from '../components/Catalog.vue';
import Cart from '../components/Cart.vue';
import Product from '../components/Product.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Catalog },
  { path: '/cart', component: Cart },
  { path: '/product/:id', component: Product },
];

const router = new VueRouter({
  routes,
});

export default router;
