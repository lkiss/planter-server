import { logModel } from "../database/model/log.model";
import { LogModel } from "../models/log.model";
import { logger } from "../logger/logger.middleware";




export const errorMiddleware = (err: any, request: any, response: any, next: any) => {
    if (err) {
        logger.log(request, response, err, "Error")!
        response.status(500).send('Something broke!');
    }
    next();
}