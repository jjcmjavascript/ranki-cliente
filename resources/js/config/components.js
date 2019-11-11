import Vue from 'vue';

Vue.component('alertas',  () => import(/* webpackChunkName: 'components/Alertas' */ '_components/Alertas'));
//Vue.component('daterangepicker', () => import(/* webpackChunkName: 'components/DateRangePicker' */ '_components/DateRangePicker'));
Vue.component('modal',  () => import(/* webpackChunkName: 'components/modal' */ '_components/Modal'));
Vue.component('pagination',  () => import(/* webpackChunkName: 'components/pagination' */ '_components/Pagination'));
//Vue.component('panel',  () => import(/* webpackChunkName: 'components/panel' */ '_components/Panel'));
Vue.component('v-select',  () => import(/* webpackChunkName: 'components/vSelect' */ 'vue-select'));

//import PrettyCheckbox from 'pretty-checkbox-vue';
//Vue.use(PrettyCheckbox);