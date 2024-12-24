import express from 'express';
import routes from './router/index.js';

const app = express();
app.use(express.json());
routes(app);

export default app;