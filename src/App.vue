<template>
  <div id="app">
    <nav>
      <router-link to="/">Catalog</router-link>
      <router-link to="/cart">Cart</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
