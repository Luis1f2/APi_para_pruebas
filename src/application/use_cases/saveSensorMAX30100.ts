import { SensorMAX30100 } from '../../domain/models/SensorMAX30100';
import { SensorMAX30100Model } from '../../infrastructure/database/sensorMAX30100Model';

export const saveSensorMAX30100 = async (data: SensorMAX30100): Promise<SensorMAX30100> => {
  const sensorData = new SensorMAX30100Model(data);
  return await sensorData.save();
};
