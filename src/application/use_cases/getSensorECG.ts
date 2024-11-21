import { SensorECGModel } from '../../infrastructure/database/sensorECGModel';

export const getSensorECG = async () => {
  return await SensorECGModel.find().sort({ timestamp: -1 });
};
