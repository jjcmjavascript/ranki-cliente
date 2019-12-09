const routes = [

    {
        path: '/propiedad/crear',
        name: '/crear_propiedad',
        component : ()=> import(/* webpackChunkName: 'app/Propiedad/Crear'*/'../app/Propiedad/Crear'),
    },

]

export default routes;
