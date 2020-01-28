import { Router } from "express";
import { arbeidsgivere } from "../data/arbeidsgivere";

const informasjonRouter = Router();

informasjonRouter.get("/arbeidsgivere/:sykmeldingId", (req, res) => {
  res.json(arbeidsgivere);
});

export default informasjonRouter;
