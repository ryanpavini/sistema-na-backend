import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
const prisma = new PrismaClient();

class AdminController {
  async create(req: Request, res: Response) {
    // TODO: Adicionar um middleware de autenticação para garantir que
    // apenas um administrador logado possa executar esta ação.

    try {
      const { name, email } = req.body;

      const existingAdmin = await prisma.admin.findUnique({ where: { email } });
      if (existingAdmin) {
        return res.status(400).json({ error: 'Este e-mail já está em uso.' });
      }

      const activationToken = crypto.randomBytes(20).toString('hex');

      const now = new Date();
      now.setHours(now.getHours() + 1);
      const tokenExpires = now;

      await prisma.admin.create({
        data: {
          name,
          email,
          passwordResetToken: activationToken,
          passwordResetExpires: tokenExpires,
        },
      });

      // TODO: Implementar o serviço de envio de e-mail real (Nodemailer)
      console.log('----------------------------------------------------');
      console.log(`E-mail de ativação para: ${email}`);
      console.log(`Token: ${activationToken}`);
      console.log('----------------------------------------------------');

      return res.status(201).json({
        message:
          'Administrador pré-cadastrado com sucesso. Um e-mail de ativação foi enviado.',
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: 'Ocorreu um erro ao pré-cadastrar o administrador.' });
    }
  }
}

export default new AdminController();
