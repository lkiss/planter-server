import mongoose from "mongoose";
import { MONGODB_CONNECTION_STRING } from "../constants";

export const databaseMiddleware = async (req: any, res: any, next: any) => {
    const mongooseDb = await mongoose.connect(MONGODB_CONNECTION_STRING, { dbName: "planterDB", useNewUrlParser: true });

    mongooseDb.connection.on("error", (err) => console.log("Connection error!", err));
    mongooseDb.connection.once("open", () => undefined);

    next();
}