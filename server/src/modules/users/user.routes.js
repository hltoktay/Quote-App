import { Router } from 'express';

import { create, getUserInfo } from './user.controller';
import { userAuth } from './user'

const routes = Router();

routes.post('/', create);
routes.get('/me', userAuth, getUserInfo)

export default routes;