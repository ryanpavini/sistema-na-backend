import { Router } from 'express';
import AdminController from './controllers/AdminController';
import SecretariatController from './controllers/SecretariatController';
import EventController from './controllers/EventController';
import MeetingController from './controllers/MeetingController';
import authMiddleware from './middlewares/authMiddleware';

const router = Router();

//Rotas de Autenticação
router.post('/auth/login', AdminController.login);
router.post('/auth/refresh-token', AdminController.refreshToken);
router.post('/admins/define-password', AdminController.definePassword);
router.post('/auth/forgot-password', AdminController.forgotPassword);

//Rotas de Gestão de Administradores (Protegidas)
router.post('/auth/register', authMiddleware, AdminController.create);
router.post('/admins/change-password', authMiddleware, AdminController.changePassword);
router.get('/admins/:id', authMiddleware, AdminController.getProfile);
router.get('/admins', authMiddleware, AdminController.list);
router.put('/admins/:id', authMiddleware, AdminController.update);
router.delete('/admins/:id', authMiddleware, AdminController.delete);

//Rotas da Secretaria
router.post('/secretaria', authMiddleware, SecretariatController.create);
router.get('/secretaria', SecretariatController.getLatest);

//Rotas de Eventos (CORRIGIDO de /events para /eventos)
router.post('/eventos', authMiddleware, EventController.create);
router.get('/eventos', EventController.list);

// Rota para buscar o próximo evento (Pública)
router.get('/eventos/next', EventController.getNext);

// Rota para buscar um evento específico (Pública)
router.get('/eventos/:id', EventController.getOne);

// Rota para atualizar um evento (Protegida)
router.put('/eventos/:id', authMiddleware, EventController.update);

// Rota para excluir um evento (Protegida)
router.delete('/eventos/:id', authMiddleware, EventController.delete);

//Rotas de Reuniões
router.post('/reunioes', authMiddleware, MeetingController.create);
router.get('/reunioes', MeetingController.list);
router.get('/reunioes/today', MeetingController.getTodayMeetings);
router.get('/reunioes/:id', MeetingController.getOne);
router.put('/reunioes/:id', authMiddleware, MeetingController.update);
router.delete('/reunioes/:id', authMiddleware, MeetingController.delete);


export default router;