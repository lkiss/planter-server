import { Schema } from "mongoose";
import { WaterTankSchema } from "./waterTank.schema";

export const deviceConfigurationSchema = new Schema({
    measuringIntervalInMinutes: { type: Number, default: 30 },
    waterLevelInPercentage: { type: Number, default: 10 },
    temperatureInCelsius: { type: Number, default: 20 },
    humidityInPercentage: { type: Number, default: 50 },
    waterTank: WaterTankSchema
}, { _id: false });