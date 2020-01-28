import { SykmeldingData } from "./sykmeldingDataTypes";
import { Soknad } from "./soknadTypes";

export type sykefravaerId =
  | "ny-sykmelding-variasjon-1"
  | "ferdig-sykmelding-variasjon-1-a"
  | "ferdig-sykmelding-variasjon-1-b"
  | "ferdig-sykmelding-variasjon-1-c"
  | "enNysykmelding"
  | "enNySykmeldingEnAvvistSykmelding";

export class SykefravaerData {
  id: sykefravaerId;
  sykmeldinger: string[];
  soknader: string[];
  constructor(data: any) {
    this.id = data.id;
    this.sykmeldinger = data.sykmeldinger;
    this.soknader = data.soknader;
  }
}

export class Sykefravaer {
  id: sykefravaerId;
  sykmeldinger: SykmeldingData[];
  soknader: Soknad[];
  constructor(data: any) {
    this.id = data.id;
    this.sykmeldinger = data.sykmeldinger;
    this.soknader = data.soknader;
  }
}
