import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { RSSoknadstatus } from "../../../../../types/soknadTypes/rs-types/rs-soknadstatus";
import { generatePastDate } from "../../../../../utils/mockUtils";

export const ferdigSoknadVariasjon4SoknadB = genererNySoknad(
  "ferdig-soknad-variasjon-4-soknad-b",
  "ferdig-sykmelding-variasjon-4-sykmelding-b",
  RSSoknadstatus.SENDT,
  generatePastDate(351),
  generatePastDate(344)
);
