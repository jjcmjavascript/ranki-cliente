const routes= [


    {
        path: '/perfil',
        name: '/perfil',
        component : ()=> import(/* webpackChunkName: 'app/cliente/Editar'*/'../app/Usuario/Editar'),
    },
]


export default routes;
