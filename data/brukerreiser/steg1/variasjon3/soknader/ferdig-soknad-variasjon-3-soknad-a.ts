import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";

export const ferdigSoknadVariasjon3SoknadA = genererNySoknad(
  "ferdig-soknad-variasjon-3-soknad-a",
  "ferdig-sykmelding-variasjon-3-sykmelding-a",
  RSSoknadstatus.SENDT,
  generatePastDate(27),
  generatePastDate(15)
);
