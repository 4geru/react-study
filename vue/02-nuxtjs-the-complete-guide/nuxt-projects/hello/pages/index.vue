<template>
  <div class="container">
    <h1>top page</h1>
    <p>{{ message }}</p>
    <hr>
    <router-link to="price">Price page</router-link>
    <router-link to="prices/sample">Price sample page</router-link>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data: function () { 
    return {
      message: 'Hello World' 
    }
  }
}
</script>

<style>
</style>
