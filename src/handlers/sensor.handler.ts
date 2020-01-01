import { Request, Response } from "express";
import { planterDevicesModel } from "../database/model/planterDevices.model";
import { Model } from "mongoose";

export const sensorHandler = {
    getSensor: async (req: Request<any>, res: Response) => {
        if (!req.params && !req.params.deviceId && !req.params.sensorIndex) {
            res.send(400);
        }

        const sensors = await planterDevicesModel.findOne({ deviceId: req.params.deviceId }).select("sensors");

        if (sensors) {
            const sensor = sensors.toObject({ flattenMaps: true }).sensors[req.params.sensorIndex];
            sensor ? res.send(sensor) : res.sendStatus(404);
        }
        else {
            res.sendStatus(400);
        }
    },

    addSensor: async (req: Request<any>, res: Response) => {
        if (!req.params && !req.params.deviceId && !req.params.sensorIndex) {
            res.send(400);
        }

        const deviceId = req.params.deviceId;
        const sensorIndex = +req.params.sensorIndex;

        const device = await planterDevicesModel.findOne({ deviceId });

        if (!device) {
            res.sendStatus(404);
        }

        const currentDevice = device?.toObject({ flattenMaps: true });

        if (currentDevice.sensors.findIndex((sensor: any) => sensor.sensorIndex === sensorIndex) > -1) {
            res.sendStatus(304);
        }
        else {
            currentDevice.sensors.push({
                sensorIndex,
                idealSoilMoistureValue: 500,
                wateringTimeInSeconds: 10
            });

            planterDevicesModel.updateOne({ _id: device!._id }, { sensors: currentDevice.sensors }, (err, doc) => err ? res.send(err) : res.send(doc));
        }
    },

    updateSensor: async (req: Request<any>, res: Response) => {
        if (!req.params && !req.params.deviceId && !req.params.sensorIndex && !req.body && !req.body.sensorConfiguration) {
            res.send(400);
        }

        const deviceId = req.params.deviceId;
        const sensorIndex = +req.params.sensorIndex;
        const sensorConfiguration = req.body.sensorConfiguration;

        const device = await planterDevicesModel.findOne({ deviceId }).select("sensors");
        if (!device) {
            res.sendStatus(404);
        }
        else {
            const currentSensor = device?.sensors.find((sensor) => sensor?.sensorIndex === sensorIndex);
            if (!currentSensor) {
                res.sendStatus(404);
            }
            else {
                currentSensor!.idealSoilMoistureValue = sensorConfiguration.idealSoilMoistureValue;
                currentSensor!.wateringTimeInSeconds = sensorConfiguration.wateringTimeInSeconds;

                try {
                    const saveResult = await device?.save();
                    res.send(saveResult);
                } catch (error) {
                    res.send(error);
                }
            }
        }
    }
}