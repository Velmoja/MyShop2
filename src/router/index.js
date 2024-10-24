import { createRouter, createWebHistory } from 'vue-router';
import Catalog from '../components/ProductCatalog.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import ProductDetails from '../components/ProductDetails.vue';

const routes = [
  { path: '/', component: Catalog },
  { path: '/cart', component: ShoppingCart },
  { path: '/product/:id', component: ProductDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
