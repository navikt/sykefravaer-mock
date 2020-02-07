import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";
import { StatusTyper } from "../../../../../types/sykmeldingTypes";

export const ferdigSoknadVariasjon3SoknadB = genererNySoknad(
  "ferdig-sykmelding-variasjon-3-sykmelding-b",
  generatePastDate(351),
  generatePastDate(344),
  StatusTyper.SENDT
);
