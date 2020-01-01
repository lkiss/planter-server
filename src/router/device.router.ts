import { Router } from 'express';
import { deviceHandler } from '../handlers/device.handler';

export const deviceRouter = Router();

deviceRouter
    .get("/:deviceId", deviceHandler.getDevice)
    .delete("/:deviceId", deviceHandler.removeDevice);