import mongoose from "mongoose";
import { logModel } from "../database/model/log.model";


export const loggerMiddleware = (request: any, response: any, next: any) => {
    // console.log("Request " + new Date());
    // console.log(request);
    // console.log("Response " + new Date());
    // console.log(response);

    logger.log(request, response, "", "Info");

    next();
}

export const logger = {
    log: (request: any, response: any, message: any, type: string) => {
        const logEntry = {
            _id: mongoose.Types.ObjectId().toHexString(),
            requestMethod: request.method || undefined,
            requestUrl: request.url || undefined,
            requestBody: request.body || undefined,
            requestParams: request.params || undefined,
            message,
            type
        }
        const log = new logModel(logEntry);
        try {
            log.save();
        } catch (error) {
            response.status(500).send('Failed to log error!');
        }
    }
}