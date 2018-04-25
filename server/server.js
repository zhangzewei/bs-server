'use strict';

import Hapi from 'hapi';

const app = Hapi.server({
    port: 3000,
    host: 'localhost',
});

export default app;