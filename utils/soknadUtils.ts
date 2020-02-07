import dayjs from "dayjs";
import uuid from "uuid";

import { RSSoknadstatus } from "../types/soknadTypes/rs-types/rs-soknadstatus";
import { generiskSoknad } from "../data/soknader/generiskSoknad";
import { Soknad } from "../types/soknadTypes/soknadTypes";
import { StatusTyper } from "../types/sykmeldingTypes";

export const genererNySoknad = (
  sykmeldingId: string,
  sykmeldingFom: string,
  sykmeldingTom: string,
  sykmeldingSendtEllerBekreftet?: StatusTyper
): Soknad => {
  const erIFremTiden = dayjs(sykmeldingTom).isAfter(dayjs(new Date()));
  let soknadstatus: RSSoknadstatus = RSSoknadstatus.NY;

  if (erIFremTiden) {
    soknadstatus = RSSoknadstatus.FREMTIDIG;
  } else if (sykmeldingSendtEllerBekreftet) {
    soknadstatus = RSSoknadstatus.SENDT;
  }

  const soknad: Soknad = new Soknad({
    ...generiskSoknad,
    id: uuid(),
    sykmeldingId: sykmeldingId,
    status: soknadstatus,
    fom: dayjs(sykmeldingFom).format("YYYY-MM-DD"),
    tom: dayjs(sykmeldingTom).format("YYYY-MM-DD")
  });
  return soknad;
};
