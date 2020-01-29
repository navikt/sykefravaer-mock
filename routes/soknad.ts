import { Router } from "express";
import { getSoknaderFraCache } from "../cache";

const soknadRouter = Router();

// TODO
soknadRouter.get("/", (req, res) => {
  const soknader = getSoknaderFraCache();
  res.json(soknader);
});

export default soknadRouter;
