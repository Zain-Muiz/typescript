import express, { Application } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { routes } from './routes';

dotenv.config();

// Boot express
export const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const environment = process.env.NODE_ENV || 'development';

const productionLogFormat =
  ':method :url :status - :remote-addr [:date[clf]] - :response-time ms';
app.use(morgan(environment === 'development' ? 'dev' : productionLogFormat));

// Application routing
routes(app);

const port = process.env.PORT || 5000;

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
