import { Router } from "express";

const sykmeldingerRouter = Router();

sykmeldingerRouter.post("/:id/actions/erUtenforVentetid", (req, res) => {
  res.json({ erUtenforVentetid: false });
});

export default sykmeldingerRouter;
