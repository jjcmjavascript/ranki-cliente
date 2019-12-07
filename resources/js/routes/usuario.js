const routes= [
    {
        path: '/perfil',
        name: '/perfil',
        component : ()=> import(/* webpackChunkName: 'app/Usuario/Editar'*/'../app/Usuario/Editar'),
    },
]


export default routes;
