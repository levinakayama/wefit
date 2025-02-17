import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 4568;

app.get("/ping", (req: Request, res: Response) => {
  res.send("🏓 Pong!");
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando na porta ${port}`);
});
