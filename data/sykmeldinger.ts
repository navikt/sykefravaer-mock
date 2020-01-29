import { avbruttSykmelding } from "./sykmeldinger/avbruttSykmelding";
import { avvistSykmelding } from "./sykmeldinger/avvistSykmelding";
import { bekreftetSykmelding } from "./sykmeldinger/bekreftetSykmelding";
import { nySykmelding } from "./sykmeldinger/nysykmelding";
import { sendtSykmelding } from "./sykmeldinger/sendtSykmelding";
import { nySykmeldingVariasjon1Sykmelding } from './brukerreiser/steg1/variasjon1/sykmeldinger/ny-sykmelding-variasjon-1-sykmelding';
import { ferdigSykmeldingVariasjon1SykmeldingA } from "./brukerreiser/steg1/variasjon1/sykmeldinger/ferdig-sykmelding-variasjon-1-sykmelding-a";
import { ferdigSykmeldingVariasjon1SykmeldingB } from "./brukerreiser/steg1/variasjon1/sykmeldinger/ferdig-sykmelding-variasjon-1-sykmelding-b";
import { ferdigSykmeldingVariasjon1SykmeldingC } from "./brukerreiser/steg1/variasjon1/sykmeldinger/ferdig-sykmelding-variasjon-1-sykmelding-c";

export const sykmeldinger = [
  nySykmelding,
  avvistSykmelding,
  avbruttSykmelding,
  bekreftetSykmelding,
  sendtSykmelding,
  nySykmeldingVariasjon1Sykmelding,
  ferdigSykmeldingVariasjon1SykmeldingA,
  ferdigSykmeldingVariasjon1SykmeldingB,
  ferdigSykmeldingVariasjon1SykmeldingC
];
