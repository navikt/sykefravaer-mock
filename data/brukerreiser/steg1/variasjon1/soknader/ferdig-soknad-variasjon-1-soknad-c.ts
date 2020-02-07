import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";
import { StatusTyper } from "../../../../../types/sykmeldingTypes";

export const ferdigSoknadVariasjon1SoknadC = genererNySoknad(
  "ferdig-sykmelding-variasjon-1-sykmelding-c",
  generatePastDate(350),
  generatePastDate(335),
  StatusTyper.SENDT
);
