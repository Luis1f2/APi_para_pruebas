import amqp from 'amqplib';
import axios from 'axios';

interface RabbitMQOptions {
  amqpUrl: string;
  queue: string;
  apiUrl: string;
}

export class RabbitMQ {
  private amqpUrl: string;
  private queue: string;
  private apiUrl: string;
  private connection: amqp.Connection | null = null;
  private channel: amqp.Channel | null = null;

  constructor({ amqpUrl, queue, apiUrl }: RabbitMQOptions) {
    this.amqpUrl = amqpUrl;
    this.queue = queue;
    this.apiUrl = apiUrl;
  }

  async connect(): Promise<void> {
    this.connection = await amqp.connect(this.amqpUrl);
    this.channel = await this.connection.createChannel();
    await this.channel.assertQueue(this.queue, { durable: true });
  }

  async consume(): Promise<void> {
    if (!this.channel) {
      await this.connect();
    }
    console.log(`Esperando mensajes en la cola ${this.queue}...`);

    this.channel?.consume(this.queue, async (message) => {
      if (message) {
        const data = message.content.toString();
        console.log('Mensaje recibido:', data);

        try {
          const parsedData = JSON.parse(data);

          if (parsedData.type === 'MAX30100') {
            const transformedData = {
              heartRate: parsedData.bpm, 
              spo2: parsedData.spo2,    
              timestamp: new Date(),   
            };

            await axios.post(`${this.apiUrl}/sensor-data`, transformedData);
            console.log('Datos del MAX30100 enviados a la API con éxito.');
          } else if (parsedData.type === 'GPS') {
            const transformedData = {
              latitude: parsedData.latitude,
              longitude: parsedData.longitude,
              altitude: parsedData.altitude || null,
              speed: parsedData.speed || null,
              timestamp: new Date(),
            };

            await axios.post(`${this.apiUrl}/sensor-gps`, transformedData);
            console.log('Datos del GPS enviados a la API con éxito.');
          } else {
            console.warn('Tipo de sensor no reconocido:', parsedData.type);
          }
        } catch (error) {
          if (error instanceof Error) {
            console.error('Error al procesar el mensaje:', error.message);
          } else {
            console.error('Error desconocido:', error);
          }
        }

        this.channel?.ack(message);
      }
    });
  }

  async close(): Promise<void> {
    if (this.channel) await this.channel.close();
    if (this.connection) await this.connection.close();
  }
}
