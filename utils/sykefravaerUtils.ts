import { Sykefravaer, SykefravaerData } from "../types/sykefravaerTypes";
import { SykmeldingData } from "../types/sykmeldingDataTypes";
import cache, { SYKMELDINGER, SYKEFRAVAER, BRUKER, SOKNAD } from "../cache";
import { brukere } from "../data/brukere";
import { sykefravaer } from "../data/sykefravaer";
import { Soknad } from "../types/soknadTypes/soknadTypes";

const getSykmeldingerFraCache = () => {
  const sykmeldingerFraCache: SykmeldingData[] | undefined = cache.get(
    SYKMELDINGER
  );
  if (!sykmeldingerFraCache) {
    return [];
  }
  const sykmeldinger = sykmeldingerFraCache.map(
    sykmelding => new SykmeldingData(sykmelding)
  );
  return sykmeldinger;
};

const getSoknaderFraCache = () => {
  const soknaderFraCache: Soknad[] | undefined = cache.get(SOKNAD);
  if (!soknaderFraCache) {
    return [];
  }
  const soknader = soknaderFraCache.map(soknad => new Soknad(soknad));
  return soknader;
};

export const getSykefravaerFraCache = () => {
  const sykefravaerFraCache: SykefravaerData[] | undefined = cache.get(
    SYKEFRAVAER
  );
  if (!sykefravaerFraCache) {
    return [];
  }
  return sykefravaerFraCache;
};

export const getFravaerForBruker = (): Sykefravaer[] => {
  const brukerId = cache.get(BRUKER);
  const fravaerIds = brukere.find(b => b.id === brukerId)?.sykefravaerIds;

  if (!fravaerIds) {
    return [];
  }
  return getFravaerFromIds(fravaerIds);
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
  const fravaerDb = sykefravaer;
  const fravaer = fravaerDb.find(f => f.id === id);

  if (!fravaer) {
    return undefined;
  }

  const sykmeldingerFraCache = getSykmeldingerFraCache();
  const sykmeldinger = fravaer.sykmeldinger.reduce(
    (sykmeldinger: SykmeldingData[], sykmeldingId) => {
      const sykmelding = sykmeldingerFraCache.find(
        sm => sm.sykmelding.id === sykmeldingId
      );
      if (sykmelding) {
        return [...sykmeldinger, sykmelding];
      }
      return sykmeldinger;
    },
    []
  );

  // Hent soknader knyttet til hver sykmelding funnet over
  const soknaderFraCache = getSoknaderFraCache();
  const soknader = soknaderFraCache.reduce((soknader: Soknad[], soknad) => {
    const tilhorerSykmelding = sykmeldinger.find(
      sykmelding => sykmelding.sykmelding.id === soknad.sykmeldingId
    );
    if (tilhorerSykmelding) {
      return [...soknader, soknad];
    }
    return soknader;
  }, []);

  return {
    ...fravaer,
    sykmeldinger,
    soknader
  };
};
