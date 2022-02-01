<template>
  <div id="app">
    <img alt="Vue logo" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/xlea9olqgmf24nmqmet4">
    <Home title="Transactions Table"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
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
  background: linear-gradient(0deg,rgba(149,142,128,0.5));
}
#app img {
  width: 100px;
  height: 100px;
  text-align: left;
}
</style>
