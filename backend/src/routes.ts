import { Router } from 'express';
import AdminController from './controllers/AdminController';

const router = Router();

// rota para criar um novo adm
router.post('/admins', AdminController.create);

export default router;
