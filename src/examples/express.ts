import express from 'express';
import traceability from '../index';

const { ContextAsyncHooks, Logger } = traceability;

const app = express();
const port = 3000;
app.use(ContextAsyncHooks.getExpressMiddlewareTracking());
app.get('/', (req, res) => {
  Logger.info('Hello World with trackId on server side!');
  res.send('Hello World!');
});

app.listen(port, () => {
  Logger.info(`Example app listening at http://localhost:${port}`);
});