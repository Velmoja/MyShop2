import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      { id: 1, name: 'Крутые кросы', price: 29.99, image: require('@/assets/image/1.jpg'), description: 'Это кросовки' },
      { id: 2, name: 'Другие кросы', price: 39.99, image: require('@/assets/image/2.jpg'), description: 'Это тоже кросовки!' },
      { id: 3, name: 'Кросовочки', price: 49.99, image: require('@/assets/image/3.jpg'), description: 'И да! Это тоже кросовки!' },
    ],
  }),
  getters: {
    getProductById: (state) => (id) => state.products.find((product) => product.id === parseInt(id)),
  },
});
