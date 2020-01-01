export type WaterTankType = 1 | 2 | 3;

export interface WaterTankModel {
    type: WaterTankType,
    heightInCentimeter: Number,
    widthInCentimeter: Number,
    lengthInCentimeter: Number,
    radiusInCentimeter: Number
}

export interface WaterTankShortened {
    wtt: Number,
    wth: Number,
    wtw: Number,
    wtl: Number,
    wtr: Number
}

export type WaterTank = WaterTankModel | null | undefined;