import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";

export const ferdigSoknadVariasjon2SoknadA = genererNySoknad(
  "ferdig-soknad-variasjon-2-soknad-a",
  "ferdig-sykmelding-variasjon-2-sykmelding-a",
  RSSoknadstatus.SENDT,
  generatePastDate(27),
  generatePastDate(15)
);
