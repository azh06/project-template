/* This file is what sets up some of the necessary packages and 
then directs the backend to the routes file. Routes is where 
information can be accessed from. */

import express from "express";
import cors from "cors";
import helmet from "helmet";
import defaultRouter from "./routes/defaultRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/", defaultRouter);

export default app;
