import login 	  from '../routes/login.js';
import usuario  from '../routes/usuario.js';
import sistema  from '../routes/Sistema.js';


const baseRoutes =  [
    ...login,
    ...usuario,
    ...sistema,
];

export default baseRoutes;
