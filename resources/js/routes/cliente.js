const routes= [

    {
        path: '/dashboard',
        name: '/dashboard',
        component : ()=> import(/* webpackChunkName: 'app/cliente/Dashboard'*/'../app/Cliente/Dashboard'),
    },
    {
        path: '/dashboard/perfil',
        name: '/perfil',
        component : ()=> import(/* webpackChunkName: 'app/cliente/Editar'*/'../app/Cliente/Editar'),
    },
]


export default routes;