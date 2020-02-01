import { DeviceConfiguration } from "./device-configuration.model";
import { Sensor } from "./sensor.model";
import { Document } from "mongoose";

export interface LogModel extends Document {
    _id: String,
    deviceId: String
    sensorIndex: String
    type: String
    message: any,
    requestMethod: string,
    requestUrl: string,
    requestBody: any,
    requestParams: any
}

export type Log = LogModel | null | undefined;