import { Router } from "express";
import cache, { BRUKER } from "../cache";
import { brukere } from "../data/brukere";

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
    cache.set(BRUKER, brukerId);
    // cache sykefravaer knyttet til bruker
    //const aktuelleSykefravaer = getFravaerForBruker();
    //cache.set(SYKEFRAVAER, aktuelleSykefravaer);
    res.sendStatus(200);
  }
});

export default brukerRouter;