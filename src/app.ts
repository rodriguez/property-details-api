import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
import logger from 'morgan';

app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

import { propertyRouter, usersRouter } from './routes';

app.use('/property', propertyRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: any) {
  next(createError(404));
});



module.exports = app;

