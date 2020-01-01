import { Request, Response } from "express";
import { planterDevicesModel } from "../database/model/planterDevices.model";

export const deviceHandler = {
    getDevice: (req: Request<any>, res: Response) => {
        if (!req.params && !req.params["deviceId"]) {
            res.send(400);
        }

        planterDevicesModel.findOne({ deviceId: req.params.deviceId }, (err, result) => err ? res.send(err) : res.send(result));
    },

    removeDevice: (req: Request<any>, res: Response) => {
        if (!req.params && !req.params.deviceId) {
            res.send(400);
        }

        try {
            const removeResult = planterDevicesModel.remove({ deviceId: req.params.deviceId });
            res.send(removeResult);
        } catch (error) {
            res.send(error);
        }
    }
}