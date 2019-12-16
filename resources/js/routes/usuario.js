const routes= [
    {
        path: '/perfil',
        name: 'perfil',
        component : ()=> import(/* webpackChunkName: 'app/Usuario/Editar'*/'../app/Usuario/Editar'),
    },
    {
        path: '/favoritos',
        name: 'favoritos',
        component : ()=> import(/* webpackChunkName: 'app/Usuario/Favoritos'*/'../app/Usuario/Favoritos'),
    },
    {
        path: '/publicaciones',
        name: 'publicaciones',
        component : ()=> import(/* webpackChunkName: 'app/Usuario/Publicaciones'*/'../app/Usuario/Publicaciones'),
    },

]

export default routes;
