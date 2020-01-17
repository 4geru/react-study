var app = new Vue({
  el: '#app',
  data: {
    // for static object
    isActive: true,
    hasError: false,
    // for computed object
    error: null,
    // for array
    activeClass: 'active',
    errorClass: 'text-danger',
    // example message
    message: 'message'
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})
