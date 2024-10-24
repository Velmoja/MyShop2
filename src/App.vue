<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Каталог</router-link>
      <router-link to="/cart" class="nav-link">Корзина</router-link>
    </nav>
    <router-view :cartItems="cartItems" @remove-item="removeItem" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cartItems: [], 
    };
  },
  methods: {
    removeItem(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id);
    },
  },
};
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  color: #31874e;
  background-color: #12b5b5;
  margin: 0;
  padding: 0;
}

.header {
  background-color: #275a5d;
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

.main {
  padding: 20px;
}

.footer {
  background-color: #333;
  padding: 20px 0;
  text-align: center;
  color: white;
}
</style>
