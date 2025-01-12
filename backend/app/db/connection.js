/* This file is what allows our backend to connect to the database. 
It takes in the specifications we set in the .env file (which is secret 
and not pushed to github) and tries to create a connection the database. */

import { config as dotenvConfig } from "dotenv";
import mongoose from "mongoose";

export default class Connection {
  static async open() {
    dotenvConfig();

    // get where to connect to the database
    const { MONGODB_CONNECTION_STRING } = process.env;

    // try connecting
    mongoose.connect(MONGODB_CONNECTION_STRING, {
      maxPoolSize: 50,
      socketTimeoutMS: 2500,
    });

    // return the successful connection so it can be used elsewhere
    return mongoose.connection;
  }
}
