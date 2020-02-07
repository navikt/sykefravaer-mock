import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";
import { StatusTyper } from "../../../../../types/sykmeldingTypes";

export const ferdigSoknadVariasjon2SoknadB = genererNySoknad(
  "ferdig-sykmelding-variasjon-2-sykmelding-b",
  generatePastDate(156),
  generatePastDate(147),
  StatusTyper.SENDT
);
