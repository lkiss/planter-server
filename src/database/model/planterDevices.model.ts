import mongoose from "mongoose";
import { DeviceSchema } from "../schema/planterDevices/device.schema";
import { DeviceModel } from "../../models/device.model";

export const planterDevicesModel = mongoose.model<DeviceModel>("planterDevice", DeviceSchema, "planterDevices");