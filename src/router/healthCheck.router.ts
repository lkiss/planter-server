import { Router } from 'express';

export const healthCheckRouter = Router();

healthCheckRouter
    .get("/", (req, res) => res.sendStatus(200))
    .post("/", (req, res) => res.sendStatus(200));