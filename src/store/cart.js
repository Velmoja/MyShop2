import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // Список товаров в корзине
  }),
  getters: {
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price, 0).toFixed(2),
    totalItems: (state) => state.items.length,
  },
  actions: {
    addItem(product) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (!existingItem) {
        this.items.push(product); // Добавляем товар
      } else {
        alert('Этот товар уже в корзине!');
      }
    },
    removeItem(id) {
      this.items = this.items.filter((item) => item.id !== id); // Удаляем товар
    },
  },
});
