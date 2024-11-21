import { SensorECG } from '../../domain/models/SensorECG';
import { SensorECGModel } from '../../infrastructure/database/sensorECGModel';

export const saveSensorECG = async (data: SensorECG): Promise<SensorECG> => {
  const sensorECG = new SensorECGModel(data);
  return await sensorECG.save();
};
