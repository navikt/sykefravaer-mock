import { Router } from "express";
import cache, { BRUKER, SYKEFRAVAER } from "../cache";
import { brukere } from "../data/brukere";
import { getFravaerForBruker } from "../utils/sykefravaerUtils";

const brukerRouter = Router();

brukerRouter.get("/", (req, res) => {
  const brukerId = cache.get(BRUKER);
  res.json(brukerId);
});

brukerRouter.post("/:brukerId", (req, res) => {
  // cache bruker
  const brukerId = req.params.brukerId;
  const aktuellBruker = brukere.find(bruker => bruker.id === brukerId);

  if (!brukerId || !aktuellBruker) {
    res.sendStatus(500);
  } else {
    // Sett bruker i cache
    cache.set(BRUKER, brukerId);
    res.sendStatus(200);
  }
});

export default brukerRouter;
