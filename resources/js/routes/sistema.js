const routes = [
	{
		path: '/sistema/usuarios',
		component: () => import(/* webpackChunkName: 'app/Sistema/Usuarios/Index' */ '../app/Sistema/Usuarios/Index'),
	},
	{
		path: '/sistema/usuarios/crear',
		component: () => import(/* webpackChunkName: 'app/Sistema/Usuarios/Crear' */ '../app/Sistema/Usuarios/Crear'),
	},
	{
		path: '/sistema/usuarios/:id/editar',
		component: () => import(/* webpackChunkName: 'app/Sistema/Usuarios/Editar' */ '../app/Sistema/Usuarios/Editar'),
	},
	{
		path: '/sistema/perfiles',
		component: () => import(/* webpackChunkName: 'app/Sistema/Perfiles/Index' */ '../app/Sistema/Perfiles/Index'),
	}
];

export default routes;