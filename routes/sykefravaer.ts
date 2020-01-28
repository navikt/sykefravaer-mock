import { Router } from "express";
import { sykefravaer } from "../data/sykefravaer";
import { SykefravaerData, Sykefravaer } from "../types/sykefravaerTypes";
import cache, { SYKEFRAVAER, SYKMELDINGER, BRUKER } from "../cache";
import { SykmeldingData } from "../types/sykmeldingDataTypes";
import { brukere } from "../data/brukere";

const sykefravaerRouter = Router();


const getSykmeldinger = () => {
  const sykmeldingerDb: SykmeldingData[] | undefined = cache.get(SYKMELDINGER);
  if (!sykmeldingerDb) {
    return [];
  }
  return sykmeldingerDb;
};

const getSykefravaer = () => {
  const fravaer: SykefravaerData[] | undefined = cache.get(SYKEFRAVAER);
  if (!fravaer) {
    return [];
  }
  return fravaer;
};

const getFravaerFromIds = (ids: string[]): Sykefravaer[] => {
  return ids.reduce((hentedeFravaer: Sykefravaer[], id) => {
    const hentetFravaer = getFravaerFromId(id);
    if (hentetFravaer) {
      return [...hentedeFravaer, hentetFravaer];
    }
    return hentedeFravaer;
  }, []);
};

const getFravaerFromId = (id: string): Sykefravaer | undefined => {
  const fravaerDb = getSykefravaer();
  const fravaer = fravaerDb.find(f => f.id === id);

  if (!fravaer) {
    return undefined;
  }

  const sykmeldingerDb = getSykmeldinger();
  // const soknadDb = getSoknader();

  const sykmeldinger = fravaer.sykmeldinger.reduce(
    (meldinger: SykmeldingData[], meldingId) => {
      const melding = sykmeldingerDb.find(m => m.sykmelding.id === meldingId);
      if (melding) {
        return [...meldinger, melding];
      }
      return meldinger;
    },
    []
  );

  return {
    ...fravaer,
    sykmeldinger,
    // TODO: Søknader.
    soknader: []
  };
};

const getFravaerForBruker = () => {
  const brukerId = cache.get(BRUKER);
  const fravaerIds = brukere.find(b => b.id === brukerId)?.sykefravaerIds;

  if (!fravaerIds) {
    return [];
  }
  // sjekk først om
  return getFravaerFromIds(fravaerIds);
};

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
