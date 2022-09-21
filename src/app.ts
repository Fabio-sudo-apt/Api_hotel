import express from "express";
import router from "./router";
import swaggerUi from 'swagger-ui-express'
import swaggerDocument  from '../swagger.json';
const app = express();

app.use(express.json());

app.use("/api", router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
