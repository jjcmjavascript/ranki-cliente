import Vue from 'vue';

Vue.component('alertas',  () => import(/* webpackChunkName: 'components/Alertas' */ '../components/Alertas'));
Vue.component('daterangepicker', () => import(/* webpackChunkName: 'components/DateRangePicker' */ '../components/DateRangePicker'));
Vue.component('modal',  () => import(/* webpackChunkName: 'components/modal' */ '../components/Modal'));
Vue.component('pagination',  () => import(/* webpackChunkName: 'components/pagination' */ '../components/Pagination'));
//Vue.component('panel',  () => import(/* webpackChunkName: 'components/panel' */ '_components/Panel'));
Vue.component('v-select',  () => import(/* webpackChunkName: 'components/vSelect' */ 'vue-select'));

//import PrettyCheckbox from 'pretty-checkbox-vue';
//Vue.use(PrettyCheckbox);