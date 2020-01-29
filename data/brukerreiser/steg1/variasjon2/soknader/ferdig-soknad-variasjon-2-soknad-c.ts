import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";

export const ferdigSoknadVariasjon2SoknadC = genererNySoknad(
  "ferdig-soknad-variasjon-2-soknad-c",
  "ferdig-sykmelding-variasjon-2-sykmelding-c",
  RSSoknadstatus.SENDT,
  generatePastDate(351),
  generatePastDate(144)
);
