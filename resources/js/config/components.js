import Vue from 'vue';

Vue.component('alertas',  () => import(/* webpackChunkName: 'components/Alertas' */ '../components/Alertas'));
Vue.component('daterangepicker', () => import(/* webpackChunkName: 'components/DateRangePicker' */ '../components/DateRangePicker'));
Vue.component('modal',  () => import(/* webpackChunkName: 'components/modal' */ '../components/Modal'));
Vue.component('pagination',  () => import(/* webpackChunkName: 'components/pagination' */ '../components/Pagination'));
Vue.component('panel',  () => import(/* webpackChunkName: 'components/panel' */ '../components/Panel'));
Vue.component('v-select',  () => import(/* webpackChunkName: 'components/vSelect' */ 'vue-select'));
Vue.component('pagination',  () => import(/* webpackChunkName: 'components/vue-pagination' */ 'laravel-vue-pagination'));

//import PrettyCheckbox from 'pretty-checkbox-vue';
//Vue.use(PrettyCheckbox);
