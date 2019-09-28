import express from 'express';

import middlewaresConfig from './config/middlewares';
import './config/db';
import { UserRoutes } from './modules';

const app = express();

middlewaresConfig(app);

app.get('/', (req, res) => {
    res.send('Welcome')
});

app.use('/api/v1/users', UserRoutes);

app.listen(3000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server listen on port 3000`);
    }
})