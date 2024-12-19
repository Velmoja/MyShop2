<template>
  <div class="product-page" v-if="product">
    <div class="product-container">
      <div class="product-image-container">
        <img :src="product.image" alt="Изображение товара" class="product-image" />
      </div>
      <div class="product-details">
        <h1 class="product-name">{{ product.name }}</h1>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">{{ product.price }} ₽</p>
        <button @click="addToCart" class="add-to-cart-button">Добавить в корзину</button>
      </div>
    </div>
  </div>
  <div v-else class="product-not-found">
    <h2>Товар не найден.</h2>
  </div>
</template>

<script>
import { useProductsStore } from '../store/products';
import { useCartStore } from '../store/cart';
import { useRoute } from 'vue-router'; // Для получения параметра маршрута

export default {
  name: 'ProductDetails',
  setup() {
    const route = useRoute();
    const productsStore = useProductsStore(); // Подключаем хранилище товаров
    const cartStore = useCartStore(); // Подключаем хранилище корзины

    // Получаем ID товара из маршрута
    const productId = route.params.id;

    // Находим товар по ID
    const product = productsStore.getProductById(productId);

    // Возвращаем данные и методы
    return {
      product,
      addToCart: () => cartStore.addItem(product),
    };
  },
};
</script>

<style scoped>
.product-page {
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
}

.product-container {
  display: flex;
  max-width: 1000px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.product-image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
}

.product-image {
  width: 300px; /* Устанавливаем ширину */
  height: 300px; /* Устанавливаем высоту */
  border-radius: 12px;
}

.product-details {
  flex: 1.5;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-name {
  font-size: 2.2em;
  font-weight: bold;
  margin-bottom: 20px;
  color: #264653;
}

.product-description {
  font-size: 1.2em;
  color: #777;
  margin-bottom: 15px;
}

.product-price {
  font-size: 1.8em;
  color: #e76f51;
  margin-bottom: 25px;
}

.add-to-cart-button {
  padding: 15px 25px;
  font-size: 1.1em;
  background: #2a9d8f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.add-to-cart-button:hover {
  background: #264653;
}

.product-not-found {
  text-align: center;
  font-size: 1.5em;
  color: #e63946;
}
</style>
