<template>
  <section>
    <h1>{{ message }}</h1>
    <h3>id: {{ this.$route.params.id }}</h3>
    <p>{{ paramsId }}</p>
    <p>{{ p.id }}</p>
  </section>
</template>

<script>
export default { 
  data: function () {
    return {
      message: "/users/_id.vueを表示中",
      paramsId: this.$route.params.id
    }
  }, 
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  asyncData ({ params }) {
    return { p: params } // reference: https://qiita.com/usk81/items/9d98a337b6ef86b90404
  }
}
</script>