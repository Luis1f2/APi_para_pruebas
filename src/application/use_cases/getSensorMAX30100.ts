import { SensorMAX30100Model } from '../../infrastructure/database/sensorMAX30100Model';

export const getSensorMAX30100 = async () => {
  return await SensorMAX30100Model.find().sort({ timestamp: -1 });
};
