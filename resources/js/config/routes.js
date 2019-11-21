const baseRoutes = [];

import login 	from '../routes/login.js';
import sistema 	from '../routes/sistema.js';

baseRoutes.push.apply(baseRoutes, login);
baseRoutes.push.apply(baseRoutes, sistema);

export default baseRoutes;