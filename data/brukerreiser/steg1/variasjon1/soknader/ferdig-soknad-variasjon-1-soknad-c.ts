import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";

export const ferdigSoknadVariasjon1SoknadC = genererNySoknad(
  "ferdig-soknad-variasjon-1-soknad-c",
  "ferdig-sykmelding-variasjon-1-sykmelding-c",
  RSSoknadstatus.SENDT,
  generatePastDate(350),
  generatePastDate(335)
);
