import { genererNySoknad } from "../../../../../utils/soknadUtils";
import { generatePastDate } from "../../../../../utils/mockUtils";
import { StatusTyper } from "../../../../../types/sykmeldingTypes";

export const ferdigSoknadVariasjon4SoknadA = genererNySoknad(
  "ferdig-sykmelding-variasjon-4-sykmelding-a",
  generatePastDate(156),
  generatePastDate(147),
  StatusTyper.SENDT
);
