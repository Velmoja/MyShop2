<template> 
  <div class="cart">
    <h1 class="title">Корзина</h1>
    <div v-if="cartItems && cartItems.length === 0" class="empty-cart">
      Ваша корзина пуста! Выберите товары в каталоге.
    </div>
    <div v-else class="cart-items">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" alt="Product Image" class="cart-item-image" />
        <div class="cart-item-details">
          <h2>{{ item.name }}</h2>
          <p>\${{ item.price }}</p>
        </div>
        <button @click="removeFromCart(item.id)" class="remove-button">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: {
    cartItems: {
      type: Array,
      required: true,
      default: () => [], // По умолчанию пустой массив
    },
  },
  methods: {
    removeFromCart(id) {
      this.$emit("remove-item", id); // Передаем событие в родительский компонент
    },
  },
};
</script>
  
  <style scoped>
  /* Стили как и в вашем коде */
  </style>
  