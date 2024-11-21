import { RabbitMQ } from './infrastructure/rabbitmq/rabbitmq';
import { startServer } from './infrastructure/web/server';
import { connectToDatabase } from './infrastructure/database/mongoConnection';

const startApp = async () => {
  try {
    await connectToDatabase();

    startServer();

    const rabbitMQ = new RabbitMQ({
      amqpUrl: 'amqp://guest:guest@174.129.202.240:5672',
      queue: 'mqtt',
      apiUrl: 'http://localhost:3000/api',
    });
    await rabbitMQ.consume();
  } catch (error) {
    console.error('Error al iniciar la aplicación:', error);
  }
};

startApp();
