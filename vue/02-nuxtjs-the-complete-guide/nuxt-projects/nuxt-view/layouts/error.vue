<template>
  <div>
    <h1>error</h1>
    <p>{{ error.statusCode }}</p>
    <p :v-if="error.statusCode == 404">404 not found</p>
  </div>
</template>

<script>
export default {  
  props: ['error']
}
</script>