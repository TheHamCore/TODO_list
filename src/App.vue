<template>
  <div id="app">
    <div class="container">
      <v-navbar></v-navbar>

      <!-- Увидим страницу с маршрутом «/», где отображается компонент v-todo -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import vNavbar from './components/v-navbar'

export default {
  name: 'App',
  components: {
    vNavbar
  }
}
</script>

<style>

</style>
