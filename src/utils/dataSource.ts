import { DataSource} from "typeorm";
import mongodb from "../config/mongodb";

const dataSource = new DataSource(mongodb);

export default dataSource;
