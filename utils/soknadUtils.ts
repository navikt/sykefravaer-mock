import { RSSoknadstatus } from "../types/soknadTypes/rs-types/rs-soknadstatus";
import { generiskSoknad } from "../data/soknader/generiskSoknad";
import { Soknad } from "../types/soknadTypes/soknadTypes";

export const genererNySoknad = (
  sykmeldingId: string,
  soknadStatus: RSSoknadstatus
): Soknad => {
  const soknad: Soknad = new Soknad({
    ...generiskSoknad,
    sykmeldingId: sykmeldingId,
    status: soknadStatus
  });
  return soknad;
};
