import { Router } from "express";
import { getFravaerForBruker, getSykefravaerFraCache } from "../utils/sykefravaerUtils";

const sykefravaerRouter = Router();

sykefravaerRouter.get("/", (req, res) => {
  // Hent sykefravaer for bruker i cache
  const sykefravaer = getFravaerForBruker();
  if (sykefravaer) {
    res.json(sykefravaer);
  } else {
    res.sendStatus(500);
  }
});

// Henter ett bestemt sykefravaer basert på sykefravaerId
sykefravaerRouter.get("/:sykefravaerId", (req, res) => {
  const sykefravaerId = req.params.sykefravaerId;
  if (sykefravaerId) {
    const aktueltFravaer = getSykefravaerFraCache().find(sf => sf.id === sykefravaerId);
    if (aktueltFravaer) {
      res.json(aktueltFravaer);
    }
  } else {
    res.sendStatus(500);
  }
});

export default sykefravaerRouter;
