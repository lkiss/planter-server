export interface ReadingModel {
    _id: String,
    deviceId: Number,
    sensorIndex: Number,
    soilMoistureValue: Number,
    waterLevelInPercentage: Number,
    humidityInPercentage: Number,
    temperatureInCelsius: Number
}

export type Reading = ReadingModel | null | undefined;