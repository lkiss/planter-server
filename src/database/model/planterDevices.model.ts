import mongoose from "mongoose";
import { DeviceSchema } from "../schema/planterDevices/device.schema";
import { DeviceModel } from "../../models/device.model";
import { SensorConfigurationModel } from "../../models/sensor.model";
import { SensorConfigurationSchema } from "../schema/planterDevices/sensor-configuration.schema";

export const planterDevicesModel = mongoose.model<DeviceModel>("planterDevice", DeviceSchema, "planterDevices");