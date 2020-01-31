import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";

export const ferdigSoknadVariasjon1SoknadB = genererNySoknad(
  "ferdig-soknad-variasjon-1-soknad-b",
  "ferdig-sykmelding-variasjon-1-sykmelding-b",
  RSSoknadstatus.SENDT,
  generatePastDate(55),
  generatePastDate(45)
);
