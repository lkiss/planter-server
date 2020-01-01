import { WaterTank } from "./waterTank.model";
import { Document } from "mongoose";

export interface DeviceConfigurationModel extends Document {
    measuringIntervalInMinutes: Number,
    waterLevelInPercentage: Number,
    temperatureInCelsius: Number,
    humidityInPercentage: Number,
    waterTank: WaterTank
}

export interface DeviceConfigurationShortened {
    miim: Number,
    mwtp: Number,
    t: Number,
    h: Number
}

export type DeviceConfiguration = DeviceConfigurationModel | null | undefined;