import { Router } from 'express';
import { readingsHandler } from '../handlers/readings.handler';

export const readingsRouter = Router();

readingsRouter
    .get("/:deviceId/:sensorIndex", readingsHandler.getReadings)
    .post("/:deviceId/:sensorIndex/iot", readingsHandler.addIotReading);