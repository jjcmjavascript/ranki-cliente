const routes = [
    {
        path: '/password',
        component: () =>  import(/* webpackChunkName: 'app/recovery/recuperarClave' */ '../app/Recovery/RecuperarClave'),
    },
    {
        path: '//password/reset',
        component: () =>  import(/* webpackChunkName: 'app/recovery/reiniciarClave' */ '../app/Recovery/ReiniciarClave'),
    },
];
export default routes;
