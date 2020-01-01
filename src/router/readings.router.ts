import { Router } from 'express';
import { readingsHandler } from '../handlers/readings.handler';

export const readingsRouter = Router();

readingsRouter
    .get("/:deviceId/:sensorIndex", readingsHandler.getReadings)
    .post("/iot/:deviceId/:sensorIndex", readingsHandler.addIotReading);