import { Request, Response } from "express";
import { planterReadingsModel } from "../database/model/planterReadings.model";
import { ReadingModel } from "../models/reading.model";
import mongoose from "mongoose";
import { planterDevicesModel } from "../database/model/planterDevices.model";

export const readingsHandler = {
    getReadings: async (req: Request<any>, res: Response) => {
        if (!req.params && !req.params.deviceId && !req.params.sensorIndex) {
            res.send(400);
        }

        const numberOfReadings = req.query.numberOfReadings || 10;
        const sensorIndex = req.params.sensorIndex;
        const deviceId = req.params.deviceId;

        const readings = await planterReadingsModel
            .find({ deviceId })
            .where("sensorIndex").equals(sensorIndex)
            .where("deviceId").equals(deviceId)
            .sort({ createdAt: "desc" })
            .limit(numberOfReadings);

        if (readings) {
            res.send(readings);
        }
        else {
            res.sendStatus(400);
        }
    },

    addIotReading: async (req: Request<any>, res: Response) => {
        if (!req.params && !req.params.deviceId && !req.params.sensorIndex) {
            res.send(400);
        }

        const deviceId = req.params.deviceId;
        const sensorIndex = req.params.sensorIndex;

        const sensorExist = await planterDevicesModel.findOne({ deviceId }).where("sensors." + sensorIndex).exists();

        if (!sensorExist) {
            res.sendStatus(404);
        }

        const sensorReadings: ReadingModel = {
            _id: mongoose.Types.ObjectId().toHexString(),
            deviceId,
            sensorIndex,
            humidityInPercentage: req.body.humidity,
            soilMoistureValue: req.body.soilMoisture,
            temperatureInCelsius: req.body.temperature,
            waterLevelInPercentage: req.body.waterLevel
        };

        const newReading = new planterReadingsModel(sensorReadings);
        try {
            const result = await newReading.save();
            res.send(result);
        } catch (error) {
            res.send(error);
        }
    }
}