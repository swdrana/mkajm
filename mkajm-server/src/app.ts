import cors from "cors";
import express, { Request, Response } from "express";
import ifterListRoutes from './app/modules/iftarList/ifterList.routes'

const app = express();

// parsers
app.use(express.json());  
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.use('/api/ifter-list', ifterListRoutes);


export default app;