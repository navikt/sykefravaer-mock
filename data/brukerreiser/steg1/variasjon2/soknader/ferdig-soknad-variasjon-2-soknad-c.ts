import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";
import { StatusTyper } from "../../../../../types/sykmeldingTypes";

export const ferdigSoknadVariasjon2SoknadC = genererNySoknad(
  "ferdig-sykmelding-variasjon-2-sykmelding-c",
  generatePastDate(351),
  generatePastDate(144),
  StatusTyper.SENDT,
);
