import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";

export const ferdigSoknadVariasjon2SoknadB = genererNySoknad(
  "ferdig-soknad-variasjon-2-soknad-b",
  "ferdig-sykmelding-variasjon-2-sykmelding-b",
  RSSoknadstatus.SENDT,
  generatePastDate(156),
  generatePastDate(147)
);
