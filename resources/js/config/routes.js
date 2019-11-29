import login 	  from '../routes/login.js';
import cliente  from '../routes/cliente.js';
import sistema  from '../routes/Sistema.js';


const baseRoutes =  [
    ...login,
    ...cliente,
    ...sistema,
];

export default baseRoutes;
