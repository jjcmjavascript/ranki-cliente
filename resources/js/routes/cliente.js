const routes= [


    {
        path: '/perfil',
        name: '/perfil',
        component : ()=> import(/* webpackChunkName: 'app/cliente/Editar'*/'../app/Cliente/Editar'),
    },
]


export default routes;
