import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");

app.use(logger);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
