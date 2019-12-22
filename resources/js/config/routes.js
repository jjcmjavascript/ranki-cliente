import login 	  from '../routes/login.js';
import usuario  from '../routes/usuario.js';
import sistema  from '../routes/Sistema.js';
import propiedad  from '../routes/propiedad.js';
import reiniciar  from '../routes/recovery.js';




const baseRoutes =  [
    ...login,
    ...usuario,
    ...sistema,
    ...propiedad,
    ...reiniciar,


];

export default baseRoutes;
