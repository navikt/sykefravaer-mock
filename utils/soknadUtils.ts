import { RSSoknadstatus } from "../types/soknadTypes/rs-types/rs-soknadstatus";
import { generiskSoknad } from "../data/soknader/generiskSoknad";
import { Soknad } from "../types/soknadTypes/soknadTypes";

export const genererNySoknad = (
  sykmeldingId: string,
  soknadStatus: RSSoknadstatus,
  fom: string,
  tom: string
): Soknad => {
  const soknad: Soknad = new Soknad({
    ...generiskSoknad,
    sykmeldingId: sykmeldingId,
    status: soknadStatus,
    fom: fom,
    tom: tom
  });
  return soknad;
};
