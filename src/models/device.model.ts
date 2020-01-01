import { DeviceConfiguration } from "./device-configuration.model";
import { Sensor } from "./sensor.model";
import { Document } from "mongoose";

export interface DeviceModel extends Document {
    _id: String,
    deviceId: String
    configuration: DeviceConfiguration,
    sensors: [Sensor]
}

export interface DeviceShortened {
    deviceId: String
}

export type Device = DeviceModel | null | undefined;