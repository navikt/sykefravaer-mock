import { Sykefravaer, SykefravaerData } from "../types/sykefravaerTypes";
import { SykmeldingData } from "../types/sykmeldingDataTypes";
import cache, { SYKMELDINGER, SYKEFRAVAER, BRUKER } from "../cache";
import { brukere } from "../data/brukere";

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

export const getFravaerForBruker = () => {
  const brukerId = cache.get(BRUKER);
  const fravaerIds = brukere.find(b => b.id === brukerId)?.sykefravaerIds;

  if (!fravaerIds) {
    return [];
  }
  // sjekk først om
  return getFravaerFromIds(fravaerIds);
};
