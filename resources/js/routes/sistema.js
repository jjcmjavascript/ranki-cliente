const routes = [
	{
		path: '/sistema/usuarios',
		component: () => import(/* webpackChunkName: 'app/Sistema/Usuarios' */ '../app/Sistema/Usuarios/Index'),
	},
	{
		path: '/sistema/usuarios/crear',
		component: () => import(/* webpackChunkName: 'app/Sistema/Usuarios/Crear' */ '../app/Sistema/Usuarios/Crear'),
	},
	{
		path: '/sistema/usuarios/:id/editar',
		component: () => import(/* webpackChunkName: 'app/Sistema/Usuarios/Editar' */ '../app/Sistema/Usuarios/Editar'),
	}
];

export default routes;