<script>
import { useCartStore } from '../store/cart';

export default {
  name: "ShoppingCart",
  setup() {
    const cartStore = useCartStore(); // Подключаем Pinia Store
    return { cartStore };
  },
};
</script>

<template>
  <div class="cart">
    <h1 class="title">Корзина покупок</h1>
    <div v-if="cartStore.items.length === 0" class="empty-cart">
      Ваша корзина пуста.
    </div>
    <div v-else class="cart-items">
      <div v-for="item in cartStore.items" :key="item.id" class="cart-item">
        <img :src="item.image" alt="Изображение товара" class="cart-item-image" />
        <div class="cart-item-details">
          <h2>{{ item.name }}</h2>
          <p class="product-price">{{ item.price }} ₽</p>
          <button @click="cartStore.removeItem(item.id)" class="remove-button">Удалить</button>
        </div>
      </div>
      <div class="cart-summary">
        <h2>Итого: {{ cartStore.totalPrice }} ₽</h2>
        <button class="checkout-button">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.cart {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #264653;
}

.empty-cart {
  text-align: center;
  font-size: 1.5em;
  color: #777;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.cart-item {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cart-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.cart-item-image {
  width: 120px;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
}

.cart-item-details {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  color: #e76f51;
  font-size: 1.5em;
}

.remove-button {
  padding: 10px 15px;
  background: #e63946;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.remove-button:hover {
  background: #d62828;
}

.cart-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.cart-summary h2 {
  font-size: 1.8em;
  color: #264653;
}

.checkout-button {
  padding: 15px 30px;
  font-size: 1.2em;
  background: #2a9d8f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.checkout-button:hover {
  background: #264653;
}
</style>
