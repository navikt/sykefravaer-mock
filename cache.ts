import NodeCache from "node-cache";
import { sykefravaer } from "./data/sykefravaer";
import { brukere } from "./data/brukere";
import { sykmeldinger } from "./data/sykmeldinger";
import { soknader } from "./data/soknader";
import { SykmeldingData } from "./types/sykmeldingDataTypes";
import { Soknad } from "./types/soknadTypes/soknadTypes";
import { SykefravaerData } from "./types/sykefravaerTypes";

const cache = new NodeCache();

// Constants
export const SYKEFRAVAER = "SYKEFRAVAER";
export const BRUKER = "BRUKER";
export const SYKMELDING = "SYKMELDING";
export const SYKMELDINGER = "SYKMELDINGER";
export const SOKNAD = "SOKNAD";
const DEFAULT_BRUKER = brukere[0].id;
const DEFAULT_SYKMELDING = sykmeldinger[0];
const DEFAULT_SYKMELDINGER = sykmeldinger;
const DEFAULT_SYKEFRAVAER = sykefravaer;
const DEFAULT_SOKNAD = soknader;

export const initializeCache = (): void => {
  cache.flushAll();
  cache.set(BRUKER, DEFAULT_BRUKER);
  cache.set(SYKMELDING, DEFAULT_SYKMELDING);
  cache.set(SYKMELDINGER, DEFAULT_SYKMELDINGER);
  cache.set(SYKEFRAVAER, DEFAULT_SYKEFRAVAER);
  cache.set(SOKNAD, DEFAULT_SOKNAD);
};

export const getSykmeldingerFraCache = () => {
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

export const getSoknaderFraCache = () => {
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

export default cache;
