import { Request, Response } from "express";
import { planterDevicesModel } from "../database/model/planterDevices.model";
import { IotDeviceConfiguration } from "../models/iot-device-configuration.model";
import { DeviceModel } from "../models/device.model";

export const deviceConfigurationHandler = {
    getDeviceConfiguration: async (req: Request<any>, res: Response) => {
        if (!req.params && !req.params.deviceId) {
            res.send(400);
        }

        planterDevicesModel
            .findOne({ deviceId: req.params.deviceId },
                (err, doc) => err ? res.send(err) : res.send(doc))
            .select("configuration");
    },

    getIotDeviceConfiguration: async (req: Request<any>, res: Response) => {
        if (!req.params && !req.params.deviceId && !req.params.sensorIndex) {
            res.send(400);
        }

        const sensorIndex = req.params.sensorIndex;
        const deviceId = req.params.deviceId;

        const deviceDocument = await planterDevicesModel.findOne({ deviceId });

        if (!deviceDocument) {
            res.send(404);
        }

        const device: DeviceModel = deviceDocument?.toObject({ flattenMaps: true });

        if (!device.sensors || !device.sensors[sensorIndex] || !device.configuration) {
            res.sendStatus(404);
        }

        const sensor = device.sensors[sensorIndex];
        const configuration = device.configuration;
        const iotDeviceConfiguration: IotDeviceConfiguration = {
            ismv: sensor!.idealSoilMoistureValue,
            wtis: sensor!.wateringTimeInSeconds,
            miim: configuration!.measuringIntervalInMinutes,
            mwtp: configuration!.waterLevelInPercentage,
            h: configuration!.humidityInPercentage,
            t: configuration!.temperatureInCelsius,
            wtt: configuration!.waterTank!.type,
            wth: configuration!.waterTank!.heightInCentimeter,
            wtl: configuration!.waterTank!.lengthInCentimeter,
            wtr: configuration!.waterTank!.radiusInCentimeter,
            wtw: configuration!.waterTank!.widthInCentimeter
        };

        res.send(iotDeviceConfiguration);
    },

    updateDeviceConfiguration: async (req: Request<any>, res: Response) => {
        if (!req.params && !req.params.deviceId && !req.body && !req.body.configuration) {
            res.send(400);
        }

        let device = await planterDevicesModel.findOne({ deviceId: req.params.deviceId });

        if (device) {
            try {
                planterDevicesModel.updateOne({ _id: device._id }, { configuration: { ...req.body.configuration } }, (err, doc) => err ? res.send(err) : res.send(doc));
            } catch (error) {
                res.send(error);
            }

        }
        else {
            res.sendStatus(400);
        }
    }
}