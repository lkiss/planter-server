import { Schema } from "mongoose";

import { LogModel } from "../../../models/log.model";

export const LogSchema = new Schema<LogModel>({
    _id: Schema.Types.ObjectId,
    deviceId: String,
    sensorIndex: String,
    type: String,
    message: Object,
    requestMethod: String,
    requestUrl: Object,
    requestBody: Object,
    requestParams: Object,
}, { timestamps: true, shardKey: { _id: 1 } });