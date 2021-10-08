const app = Vue.createApp({  
    data () {
        return {
        Name: 'Roy Luzuriaga',
        Age: 20,
        url:"http://vuejs.org/images/logo.png"
        };

    },
      methods:{
          Five() {
              return this.Age+5;
          },
          Fnumber() {
              const randomNumber = Math.random();
              if(randomNumber < 0.5) {
                  return '0';
              }else {
                  return '1';
              }
          }

      }

});
app.mount('#assignment');