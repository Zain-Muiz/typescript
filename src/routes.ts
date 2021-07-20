import { Application, Router } from 'express';
import AuthController from './controllers/AuthController';

const _routes: [string, Router][] = [
  ['/auth', AuthController]
];

export const routes = (app: Application): void => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
