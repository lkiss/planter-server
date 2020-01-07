import { Router } from 'express';
import { deviceConfigurationHandler } from '../handlers/device-configuration.handler';

export const deviceConfigurationRouter = Router();

deviceConfigurationRouter
    .get("/:deviceId/:sensorIndex/iot/configuration", deviceConfigurationHandler.getIotDeviceConfiguration)
    .get("/:deviceId/configuration", deviceConfigurationHandler.getDeviceConfiguration)
    .put("/:deviceId/configuration", deviceConfigurationHandler.updateDeviceConfiguration)