import login 	from '../routes/login.js';
import cliente 	from '../routes/cliente.js';


const baseRoutes =  [
    ...login,
    ...cliente
];

export default baseRoutes;