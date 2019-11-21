const routes = [
    {
        path: '/loginvue',
        component: () =>  import(/* webpackChunkName: 'app/login' */ '../app/login'),
    },
    {
        path: '/home',
        component: () =>  import(/* webpackChunkName: 'app/login' */ '../app/Home'),
    },
];
export default routes;

