import mongoose from "mongoose";
import { LogModel } from "../../models/log.model";
import { LogSchema } from "../schema/logs/log.schema";

export const logModel = mongoose.model<LogModel>("log", LogSchema, "logs");