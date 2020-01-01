import { Router } from 'express';
import { sensorHandler } from '../handlers/sensor.handler';

export const sensorRouter = Router();

sensorRouter
    .get("/:deviceId/:sensorIndex", sensorHandler.getSensor)
    .put("/:deviceId/:sensorIndex", sensorHandler.updateSensor)
    .post("/:deviceId/:sensorIndex", sensorHandler.addSensor);