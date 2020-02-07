import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";
import { StatusTyper } from "../../../../../types/sykmeldingTypes";

export const ferdigSoknadVariasjon3SoknadA = genererNySoknad(
  "ferdig-sykmelding-variasjon-3-sykmelding-a",
  generatePastDate(27),
  generatePastDate(15),
  StatusTyper.SENDT
);
