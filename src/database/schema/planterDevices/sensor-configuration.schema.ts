import { Schema } from "mongoose";

export const SensorConfigurationSchema = new Schema({
    sensorIndex: {type: Number},
    idealSoilMoistureValue: { type: Number, default: 600 },
    wateringTimeInSeconds: { type: Number, default: 10 }
}, { _id: false });