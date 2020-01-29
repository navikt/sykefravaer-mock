import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";

export const ferdigSoknadVariasjon1SoknadA = genererNySoknad(
  "ferdig-soknad-variasjon-1-soknad-a",
  "ferdig-sykmelding-variasjon-1-sykmelding-a",
  RSSoknadstatus.SENDT,
  generatePastDate(200),
  generatePastDate(190)
);
