import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";
import { StatusTyper } from "../../../../../types/sykmeldingTypes";

export const ferdigSoknadVariasjon2SoknadA = genererNySoknad(
  "ferdig-sykmelding-variasjon-2-sykmelding-a",
  generatePastDate(27),
  generatePastDate(15),
  StatusTyper.SENDT
);
