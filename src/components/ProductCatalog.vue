<template>
  <div class="catalog">
    <h1 class="title">Каталог товаров</h1>
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" alt="Product Image" class="product-image" />
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-price">{{ product.price }} ₽</p>
        <router-link :to="'/product/' + product.id" class="details-button">Подробнее</router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ProductCatalog",
  data() {
    return {
      products: [
        { id: 1, name: "Product 1", price: 29.99, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Product 2", price: 39.99, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Product 3", price: 49.99, image: "https://via.placeholder.com/150" },
      ],
    };
  },
};
</script>

<style scoped>
.catalog {
  padding: 20px;
}

.title {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #264653;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.product-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 250px;
  text-align: center;
  padding: 15px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.product-name {
  font-size: 1.5em;
  margin: 10px 0;
  color: #333;
}

.product-price {
  color: #e76f51;
  font-size: 1.2em;
}

.details-button {
  display: inline-block;
  padding: 10px 15px;
  margin-top: 15px;
  background: #2a9d8f;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.2s;
}

.details-button:hover {
  background: #264653;
}
</style>
