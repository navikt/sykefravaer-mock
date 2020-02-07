import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";
import { StatusTyper } from "../../../../../types/sykmeldingTypes";

export const ferdigSoknadVariasjon1SoknadB = genererNySoknad(
  "ferdig-sykmelding-variasjon-1-sykmelding-b",
  generatePastDate(55),
  generatePastDate(45),
  StatusTyper.SENDT
);
