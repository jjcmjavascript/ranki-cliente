const routes = [

  {
    path:'/inicio',
    name:'sistema',
    component: ()=> import(/* webpackChunkName : 'app/sistema/index'*/'../app/Sistema/index' ),
  }

];

export default routes;
