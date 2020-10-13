import { request } from 'express';
import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      /// callback recebe como primeiro param um erro, ent colocar null
      cb(null, fileName);
    },
  }),
};
