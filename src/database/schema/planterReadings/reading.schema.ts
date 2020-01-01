import { Schema } from "mongoose";
import { ReadingModel } from "../../../models/reading.model";

export const ReadingSchema = new Schema<ReadingModel>({
    _id: Schema.Types.ObjectId,
    deviceId: String,
    sensorIndex: Number,
    soilMoistureValue: Number,
    temperatureInCelsius: Number,
    humidityInPercentage: Number,
    waterLevelInPercentage: Number
}, { timestamps: true, shardKey: { _id: 1 } });