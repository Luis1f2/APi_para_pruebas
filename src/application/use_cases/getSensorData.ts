import { SensorDataModel } from '../../infrastructure/database/sensorDataModel';

export const getSensorData = async () => {
  return await SensorDataModel.find().sort({ timestamp: -1 });
};
