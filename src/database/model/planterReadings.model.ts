import mongoose from "mongoose";
import { ReadingSchema } from "../schema/planterReadings/reading.schema";

export const planterReadingsModel = mongoose.model("planterReading", ReadingSchema, "planterReadings");