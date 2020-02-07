import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { generatePastDate } from "../../../../../utils/mockUtils";
import { StatusTyper } from "../../../../../types/sykmeldingTypes";

export const ferdigSoknadVariasjon1SoknadA = genererNySoknad(
  "ferdig-sykmelding-variasjon-1-sykmelding-a",
  generatePastDate(200),
  generatePastDate(190),
  StatusTyper.SENDT
);
