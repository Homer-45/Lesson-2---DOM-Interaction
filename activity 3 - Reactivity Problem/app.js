const app = Vue.createApp({    
    data() {
        return { 
            counter: 0,
            value: 0,
           
        };        
    },
    methods: {
        add() {
            this.counter = this.counter +5;
        },
        Add() {
            this.counter = this.counter +1;
        },
        result() {
            if (this.counter == 0) {
                return this.counter;
            }else if(this.counter > 0 && this.counter < 37){
                return'not there yet';
            }else if(this.counter > 37){
                return'too much';
            }return this.counter;
        },
    },
    watch: {
        counter(value) {
            if(value >=37) {
                const that =this;
                setTimeout(function() {
                    that.counter = 0;
                }, 5000)
            }
        }
    },
    
});
app.mount('#assignment');