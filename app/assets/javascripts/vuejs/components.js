Vue.component('ala',{
  data: function(){
    return {
      status: 'gg'
    }
  },
  template: '<div><p> status: {{ status  }}</p><button @click="changeF">changeF</button></div>',
  methods: {
    changeF: function(){
      this.status = 'wp';
    }
  }
})
