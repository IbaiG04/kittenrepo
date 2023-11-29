const app=Vue.createApp({})
app.component('gato', {
    template: //html
        `
        <h3>{{ ancho }}</h3>
            <img :src="urlCompleta">
            <!--<img v-bind:src="'https://placekitten.com/'+ancho+'/'+alto"> Esto es otra opcion-->
        `,    
    data() {
        return {
            ancho : Math.floor(Math.random() * 600) + 100,
            alto: Math.floor(Math.random() * 600) + 100,
        }
    },
    computed: {
        urlCompleta() {
            return `https://placekitten.com/${this.ancho}/${this.alto}`
        }
    }
});

app.mount('main')