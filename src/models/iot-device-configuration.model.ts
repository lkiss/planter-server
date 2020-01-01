import { DeviceConfigurationShortened } from "./device-configuration.model";
import { SensorShortened } from "./sensor.model";
import { WaterTankShortened } from "./waterTank.model";

export interface IotDeviceConfiguration extends DeviceConfigurationShortened, SensorShortened, WaterTankShortened {

}