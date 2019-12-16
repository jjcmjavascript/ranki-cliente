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

]

export default routes;
