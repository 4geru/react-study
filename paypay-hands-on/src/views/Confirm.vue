<template>
  <div class="confirm">
    <h1>{{status}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: ''
    }
  },
  created () {
    this.confirmAction()
  },
  methods: {
    confirmAction: function () {
      if (!this.$route.query.merchantId){
        throw new Error("merchantId not found.")
      }
      // Retrieve the reservation from database.
      var reservation = JSON.parse(sessionStorage.getItem(this.$route.query.merchantId))
      if (!reservation){
          this.status = 'エラー'
          throw new Error("Reservation not found.")
      }
      var params = new URLSearchParams()
      params.set('type', 'confirm')
      params.set('merchantId', this.$route.query.merchantId)
      axios.post(process.env.VUE_APP_PAYPAY_FUNCTIONS_URL, params)
        .then(response => {
          sessionStorage.clear()
          this.status = '決済完了しました！'
        })
    }
  }
}
</script>