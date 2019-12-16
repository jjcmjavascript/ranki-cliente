const routes = [

    {
        path: '/propiedad/crear',
        name: '/crear_propiedad',
        component : ()=> import(/* webpackChunkName: 'app/Propiedad/Crear'*/'../app/Propiedad/Crear'),
    },
    {
        path: '/propiedad/:id_propiedad/detalle',
        name: 'propiedad',
        component : ()=> import(/* webpackChunkName: 'app/Propiedad/Detalle'*/'../app/Propiedad/Detalle'),
    },

    {
        path: '/propiedad/:id/editar',
        name: '/editar_propiedad',
        component : ()=> import(/* webpackChunkName: 'app/Propiedad/Editar'*/'../app/Propiedad/Editar'),
    },

]

export default routes;
