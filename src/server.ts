import express from 'express';
import path from 'path';
import { PORT, VIRTUAL_PATH } from './constants';
import { devicesRouter } from './router/devices.router';
import { homeRouter } from './router/home.router';
import { deviceRouter } from './router/device.router';
import { deviceConfigurationRouter } from './router/device-configuration.router';
import { sensorRouter } from './router/sensor.router';
import { databaseMiddleware } from './database/database.middleware';
import { readingsRouter } from './router/readings.router';
import { errorMiddleware } from './error/error.middleware';
import { loggerMiddleware } from './logger/logger.middleware';
import { healthCheckRouter } from './router/healthCheck.router';


const app = express();
app.use(express.json());
app.use(loggerMiddleware);
app.use(errorMiddleware);

app.use(databaseMiddleware);

app.get(VIRTUAL_PATH + '/', function (req, res) {
    res.render('server', { virtualDirPath: VIRTUAL_PATH });
});

app.use(express.static(path.join(VIRTUAL_PATH, 'dist')));

app.use("/", homeRouter);
app.use("/home", homeRouter);
app.use("/healthcheck", healthCheckRouter);

app.use("/devices", devicesRouter);
app.use("/devices", deviceRouter);
app.use("/devices", deviceConfigurationRouter);
app.use("/devices", sensorRouter);

app.use("/readings", readingsRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});