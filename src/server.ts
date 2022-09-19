import "reflect-metadata";
import db from "./utils/dataSource";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const port = process.env.PORT || 8080;

db.initialize()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running! Port: ${port}`);
    });
  })
  .catch((error) => {
    console.log("Connection Failed", error.message);
  });
