import { avbruttSykmelding } from "./sykmeldinger/avbruttSykmelding";
import { avvistSykmelding } from "./sykmeldinger/avvistSykmelding";
import { bekreftetSykmelding } from "./sykmeldinger/bekreftetSykmelding";
import { nySykmelding } from "./sykmeldinger/nysykmelding";
import { sendtSykmelding } from "./sykmeldinger/sendtSykmelding";

export const sykmeldingerMock = [
  nySykmelding,
  avvistSykmelding,
  avbruttSykmelding,
  bekreftetSykmelding,
  sendtSykmelding
];
