// src/application/use_cases/getSensorGPS.ts
import { SensorGPSModel } from '../../infrastructure/database/sensorGPSModel';

export const getSensorGPS = async () => {
  return await SensorGPSModel.find().sort({ timestamp: -1 });
};
