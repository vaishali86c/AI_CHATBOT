import express from "express";
import { config } from "dotenv";
import morgan from "morgan"; // clearly handle the incoming request
import appRouter from "./routes/index.js";
config();
const app = express();
//middleware
app.use(express.json());
//remove it in production
app.use(morgan("dev"));
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map