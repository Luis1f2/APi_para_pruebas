import { SensorData } from '../../domain/models/SensorData';
import { SensorDataModel } from '../../infrastructure/database/sensorDataModel';

export const saveSensorData = async (data: SensorData): Promise<SensorData> => {
  const sensorData = new SensorDataModel(data);
  return await sensorData.save();
};
