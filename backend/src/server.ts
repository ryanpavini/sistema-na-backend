import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import router from './routes';
import apiKeyMiddleware from './middlewares/apiKeyMiddleware';

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization, x-api-key"
};
const app = express();

app.use(cors(corsOptions)); // 1. CORS
app.use(express.json());   // 2. Body Parser
app.use(apiKeyMiddleware); // 3. API Key Check

app.use(router);

module.exports = app;