import Vue from 'vue'
import App from './App.vue'
import router from './router'
import uswds from 'uswds';
import VueMaterial from 'vue-material'


Vue.config.productionTip = false

Vue.use(uswds);
Vue.use(VueMaterial);


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')