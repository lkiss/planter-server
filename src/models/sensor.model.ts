import { Reading } from "./reading.model";
import { Document } from "mongoose";

export interface SensorConfigurationModel extends Document {
    sensorIndex: Number,
    idealSoilMoistureValue: Number,
    wateringTimeInSeconds: Number
}

export interface SensorShortened {
    ismv: Number,
    wtis: Number
}

export type Sensor = SensorConfigurationModel | null | undefined;