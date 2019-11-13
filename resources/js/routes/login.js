const routes = [
    {
        path: '/loginvue',
        component: () =>  import(/* webpackChunkName: 'login' */ '../app/Login'),
    },
];
export default routes;

