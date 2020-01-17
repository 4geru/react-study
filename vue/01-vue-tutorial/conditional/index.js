var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    awesome: false,
    ok: true,
    loginType: 'email'
  },
  methods: {
    toggleButton: function () {
      if (this.loginType == 'username') {
        this.loginType = 'email'
      } else {
        this.loginType = 'username'
      }
    }
  }
})
