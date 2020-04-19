<template>
  <div class="container">
    <h1>price page</h1>
    <p>{{ message }}</p>
    <hr>
    <router-link to="/">Top page</router-link>
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
