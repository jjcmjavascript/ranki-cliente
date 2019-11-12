const routes = [
    {
        path: '/login',
        component: () =>  import(/* webpackChunkName: 'login' */ '_app/Login'),
    },
];
export default routes;

