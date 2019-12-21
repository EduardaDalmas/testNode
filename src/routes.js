import { Router } from 'express';

import CardController from './app/controllers/CardController';
import checkCard from './app/middlewares/checkCard';

const routes = Router();

routes.get('/', (req, res) => res.json('TEST-API'));

routes.get('/cards', CardController.index);
routes.get('/cards/:id', checkCard, CardController.show);
routes.post('/cards', CardController.store);
routes.put('/cards/:id', checkCard, CardController.update);
routes.delete('/cards/:id', checkCard, CardController.delete);

export default routes;
