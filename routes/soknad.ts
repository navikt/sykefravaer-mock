import { Router } from "express";

const soknadRouter = Router();

// TODO
soknadRouter.get("/", (req, res) => {
  res.sendStatus(404);
});

export default soknadRouter;
