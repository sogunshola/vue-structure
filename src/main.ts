import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSocketIOExt from 'vue-socket.io-extended';
import VueElementLoading from 'vue-element-loading';
import io from 'socket.io-client';
import VeeValidate from 'vee-validate';
import VueSweetalert2 from 'vue-sweetalert2';
import Notifications from 'vue-notification';
import vSelect from 'vue-select';
import * as jQuery from 'jquery';
import { Datetime } from 'vue-datetime';
import error from './components/validation-error.vue';
// import pagination from './components/pagination.vue';
import Multiselect from 'vue-multiselect';
import VueChatScroll from 'vue-chat-scroll';
// import VCalendar from 'v-calendar';
// import StarRating from 'vue-star-rating';
import Vuetify from 'vuetify';
import MoneyFormat from 'vue-money-format';
import { GlobalMixins } from './shared/mixins';
import DataTable from './components/DataTable.vue';
import CustomModal from './components/CustomModal.vue';
// import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import './custom-declarations';
locale.use(lang);

Vue.config.productionTip = false;

import 'sweetalert2/dist/sweetalert2.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import './static/icon/iconfont'
import 'vue-select/dist/vue-select.css';
import 'vue-datetime/dist/vue-datetime.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';
// import 'vuetify/dist/vuetify.min.css';

const $: any = jQuery;

const pluginOptions = {
  globalOptions: { currency: 'NGN' },
};

const swlOptions: any = {
  confirmButtonColor: '#0B105D',
  cancelButtonColor: '#ff7674',
};

// VUE USE
// Vue.use(Notifications);
Vue.use(VueChatScroll);
Vue.use(Notifications);
Vue.use(VeeValidate);
Vue.use(ElementUI);

const socket = io(process.env.VUE_APP_SOCKET_URL, {
  autoConnect: false,
});
Vue.use(VueSocketIOExt, socket);
Vue.component('error', error);
// Vue.component('pagination', pagination);
Vue.component('loading', VueElementLoading);
Vue.component('v-select', vSelect);

Vue.component('datetime', Datetime);
Vue.component('multiselect', Multiselect);
// Vue.component('star-rating', StarRating);
// Vue.component('footer-bar', footerbar);
Vue.component('money-format', MoneyFormat);
Vue.component('custom-table', DataTable);
Vue.component('custom-modal', CustomModal);

Vue.mixin(GlobalMixins);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
