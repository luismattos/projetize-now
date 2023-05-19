import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import config from "../config.js";

let mongoServer;

const connect = async () => {
  try {
    if (process.env.NODE_ENV === "development") {
      mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } else {
      await mongoose.connect(config.db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
    console.log("DB Connected!!!");
  } catch (err) {
    console.err("DB Connection fail.");
  }
};

export default { connect };
