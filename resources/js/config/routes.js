import login 	  from '../routes/login.js';
import cliente  from '../routes/usuario.js';
import sistema  from '../routes/sistema.js';


const baseRoutes =  [
    ...login,
    ...cliente,
    ...sistema,
];

export default baseRoutes;
