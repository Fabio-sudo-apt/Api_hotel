import dotenv from "dotenv";
import { DataSourceOptions } from "typeorm";
import Guest from "../entity/Guest";
import Reservation from "../entity/Reservation";
dotenv.config();

const environments = {
  dev: <DataSourceOptions>{
    type: "mongodb",
    url: "mongodb://localhost:27017",
    useNewUrlParser: true,
    logging: true,
    useUnifiedTopology: true,
    entities: [Guest, Reservation],
    database: 'hotel'
  },
  production: <DataSourceOptions>{
    type: "mongodb",
    url: "mongodb+srv://root:1190@cluster0.s6w25d4.mongodb.net/?retryWrites=true&w=majority",
    useNewUrlParser: true,
    logging: true,
    useUnifiedTopology: true,
    entities: [Guest, Reservation],
  },
};

export default process.env.NODE_ENV
  ? environments.dev
  : environments.production;
