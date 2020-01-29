import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";

export const ferdigSoknadVariasjon4SoknadA = genererNySoknad(
  "ferdig-soknad-variasjon-4-soknad-a",
  "ferdig-sykmelding-variasjon-4-sykmelding-a",
  RSSoknadstatus.SENDT,
  generatePastDate(156),
  generatePastDate(147)
);
