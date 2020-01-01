import { Request, Response } from "express";
import mongoose from "mongoose";
import { planterDevicesModel } from "../database/model/planterDevices.model";

export const devicesHandler = {
    getDevices: (req: Request<any>, res: Response) => {
        planterDevicesModel.find({}, (err, result) => err ? res.send(err) : res.send(result));
    },

    addDevice: async (req: Request<any>, res: Response) => {
        if (!req.body && !req.body.deviceId) {
            res.send(400);
        }

        const defaultDevice = {
            _id: mongoose.Types.ObjectId().toHexString(),
            deviceId: req.body.deviceId,
            configuration: {
                measuringIntervalInMinutes: 1,
                waterLevelInPercentage: 20,
                temperatureInCelsius: 23,
                humidityInPercentage: 50,
                waterTank: {
                    type: 1,
                    heightInCentimeter: 10,
                    widthInCentimeter: 10,
                    lengthInCentimeter: 5,
                    radiusInCentimeter: 5
                }
            },
            sensors:
                [{
                    sensorIndex: 0,
                    idealSoilMoistureValue: 50,
                    wateringTimeInSeconds: 10
                }
                ]
        };

        const newDeviceDocument = new planterDevicesModel(defaultDevice);

        try {
            const newDocumentResult = await newDeviceDocument.save();
            res.send(newDocumentResult);
        } catch (error) {
            res.sendStatus(error)
        }
    }
}