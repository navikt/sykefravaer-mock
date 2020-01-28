import { Router } from "express";
import { sykefravaer } from "../data/sykefravaer";
import { getFravaerForBruker } from '../utils/sykefravaerUtils';

const sykefravaerRouter = Router();

sykefravaerRouter.get("/", (req, res) => {
  // Sjekk om det ligger et sykefravaer i cache

  // Returner cachet sykefravaer

  // Hvis ikke, sett sykefravaer i cache

  // returner sykefravaer
  const fravaer = getFravaerForBruker();
  if (fravaer) {
    res.json(fravaer);
  } else {
    res.sendStatus(500);
  }
});

sykefravaerRouter.get("/:sykefravaerId", (req, res) => {
  // sjekk først i cache om sykefraværet ligger der (det kan ha blitt endret)

  // Hvis ikke, returner umodifisert sykefravaer basert på id
  const sykefravaerId = req.params.sykefravaerId;
  if (sykefravaerId) {
    const aktueltFravaer = sykefravaer.find(sf => sf.id === sykefravaerId);
    if (aktueltFravaer) {
      res.json(aktueltFravaer);
    }
  } else {
    res.sendStatus(500);
  }
});

export default sykefravaerRouter;
