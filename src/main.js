import Vue from 'vue'
import App from './App.vue'
import router from './router'
import uswds from 'uswds';


Vue.config.productionTip = false

Vue.use(uswds);


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')