<template>
  <div id="app">
    <header class="header">
      <nav class="navbar">
        <router-link to="/" class="nav-link">Каталог</router-link>
        <router-link to="/cart" class="nav-link">Корзина</router-link>
      </nav>
    </header>
    <main>
      <router-view 
        :cartItems="cartItems" 
        @add-to-cart="addToCart" 
        @remove-item="removeItem" 
      />
    </main>
    <footer class="footer">
      <p>&copy; 2024 MyShop. Все права защищены.</p>
    </footer>
  </div>
</template>

<script>
import { useCartStore } from './store/cart';

export default {
  name: "App",
  setup() {
    const cartStore = useCartStore(); // Подключаем хранилище
    return { cartStore };
  },
};
</script>



<style scoped>
/* Основные стили для App.vue */
#app {
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
}

.header {
  background-color: #333;
  padding: 10px 0;
  text-align: center;
}

.navbar {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #f4a261;
}

.main-content {
  padding: 20px;
}

.footer {
  background-color: #333;
  padding: 20px 0;
  text-align: center;
  color: white;
}
</style>
