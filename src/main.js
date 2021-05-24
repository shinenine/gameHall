import Vue from 'vue'
import MintUI from 'mint-ui'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.config.productionTip = false
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
