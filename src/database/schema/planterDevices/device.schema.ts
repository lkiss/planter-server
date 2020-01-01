import { Schema } from "mongoose";
import { deviceConfigurationSchema } from "./device-configuration.schema";
import { SensorConfigurationSchema } from "./sensor-configuration.schema";
import { DeviceModel } from "../../../models/device.model";

export const DeviceSchema = new Schema<DeviceModel>({
    _id: Schema.Types.ObjectId,
    deviceId: String,
    configuration: deviceConfigurationSchema,
    sensors: [SensorConfigurationSchema]
}, { shardKey: { _id: 1 } });


