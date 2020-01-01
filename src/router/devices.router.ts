import { Router } from 'express';
import { devicesHandler } from '../handlers/devices.handler';

export const devicesRouter = Router();

devicesRouter
    .get("/", devicesHandler.getDevices)
    .post("/", devicesHandler.addDevice);