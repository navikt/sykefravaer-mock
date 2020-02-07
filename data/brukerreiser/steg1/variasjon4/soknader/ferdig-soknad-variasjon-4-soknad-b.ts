import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";
import { StatusTyper } from "../../../../../types/sykmeldingTypes";

export const ferdigSoknadVariasjon4SoknadB = genererNySoknad(
  "ferdig-sykmelding-variasjon-4-sykmelding-b",
  generatePastDate(351),
  generatePastDate(344),
  StatusTyper.SENDT
);
