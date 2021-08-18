import Vue from 'vue'
import VueRouter from 'vue-router' ;
import App from './App.vue'
import vuetify from './plugins/vuetify'
import CardProduto from './components/CardProduto.vue';
import Contato from './components/Contato.vue';



Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      
    },
    {
      path: '/CardProduto',
      component: CardProduto
    },
    {
      path: '/Contato',
      component: Contato
    },
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
