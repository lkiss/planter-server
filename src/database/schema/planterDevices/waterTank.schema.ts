import { Schema } from "mongoose";

export type WaterTankType = "CYLINDER" | "PRISM" | "CUBE";

export const WaterTankSchema = new Schema({
    type: { type: Number, default: 1 },
    heightInCentimeter: { type: Number, default: 10 },
    widthInCentimeter: { type: Number, default: 10 },
    lengthInCentimeter: { type: Number, default: 10 },
    radiusInCentimeter: { type: Number, default: 10 }
}, { _id: false });