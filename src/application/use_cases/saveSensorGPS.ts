// src/application/use_cases/saveSensorGPS.ts
import { SensorGPS } from '../../domain/models/SensorGPS';
import { SensorGPSModel } from '../../infrastructure/database/sensorGPSModel';

export const saveSensorGPS = async (data: SensorGPS): Promise<SensorGPS> => {
  const sensorGPS = new SensorGPSModel(data);
  return await sensorGPS.save();
};
