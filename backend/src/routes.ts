import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesConrtoller from './controllers/OrphanagesController.ts';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesConrtoller.index); // index/list -> listagem
routes.get('/orphanages/:id', OrphanagesConrtoller.show); // recebe um route param 'id'
routes.post('/orphanages', upload.array('images'), OrphanagesConrtoller.create);

export default routes;
