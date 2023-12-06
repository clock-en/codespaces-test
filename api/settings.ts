import express, { Express } from 'express';

export const applyServerSettings = (app: Express) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', getAppUrl() || 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
      res.send(200);
    } else {
      next();
    }
  });
};

const getAppUrl = (): string => {
  if (process.env.CODESPACE_NAME) return `https://${process.env.CODESPACE_NAME}-3000.app.github.dev`;
  if (process.env.APP_URL) return process.env.APP_URL;

  return 'http://localhost:3000';
};
