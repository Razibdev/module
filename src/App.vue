<template>

<div>
<router-link to="/">Home</router-link>
<router-link to="/products">Product</router-link>
<router-link to="/cart">Cart</router-link>
</div>
<div>
 <router-view />

</div>
 
</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
