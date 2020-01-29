import { RSSoknadstatus } from "../types/soknadTypes/rs-types/rs-soknadstatus";
import { generiskSoknad } from "../data/soknader/generiskSoknad";
import { Soknad } from "../types/soknadTypes/soknadTypes";

export const genererNySoknad = (
  id: string,
  sykmeldingId: string,
  status: RSSoknadstatus,
  fom: string,
  tom: string,

): Soknad => {
  const soknad: Soknad = new Soknad({
    ...generiskSoknad,
    id: id,
    sykmeldingId: sykmeldingId,
    status: status,
    fom: fom,
    tom: tom
  });
  return soknad;
};
