import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';
import * as PostContoller from '../controllers/PostController';
import * as EmailController from '../controllers/emailController';

const router = Router();

router.get('/', HomeController.home);
router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);
router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.get('/post', PostContoller.post);

router.get('/email', EmailController.email);

router.post('/idade-resultado', UserController.idadeAction)


export default router;