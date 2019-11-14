const routes = [
    {
        path: '/loginvue',
        component: () =>  import(/* webpackChunkName: 'app/login' */ '../app/login'),
    },
];
export default routes;

