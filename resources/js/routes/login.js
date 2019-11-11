import { menu } from '../config/middlewares';

const routes = [
    {
        path: '/login',
        redirect: '/',
    },
    {
        beforeEnter: menu,
        path: '/seguimiento/gestion-facturas',
        name: 'seguimiento-gestion-facturas',
        component: () =>  import(/* webpackChunkName: 'seguimiento/gestionFacturas' */ '_app/seguimiento/GestionFacturas'),
        meta: {
            menu: 'seguimiento/gestion-facturas', // ruta del menú en base de datos
            action: 'workflow_ws.seguimiento.gestion-facturas', // ruta de la acción "entrar" en la base de datos
            breadcrumb: [
                { name: 'Dashboard', link: '/' },
                { name: 'Seguimiento' },
                { name: 'Gestion de Facturas' }
            ],
        }
    },
];
export default routes;

