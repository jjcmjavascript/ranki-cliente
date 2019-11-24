const routes = [

    {
        path: '/',
        component: () =>  import(/* webpackChunkName: 'app/login' */ '../app/Home'),
    },
];
export default routes;

