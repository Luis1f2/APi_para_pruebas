import mongoose, { Schema, Document } from 'mongoose';
import { SensorMAX30100 } from '../../domain/models/SensorMAX30100';

interface SensorMAX30100Document extends SensorMAX30100, Document {}

const SensorMAX30100Schema = new Schema<SensorMAX30100Document>({
  heartRate: { type: Number, required: true },
  spo2: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const SensorMAX30100Model = mongoose.model<SensorMAX30100Document>(
  'SensorMAX30100',
  SensorMAX30100Schema
);
