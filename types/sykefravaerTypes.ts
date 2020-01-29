import { SykmeldingData } from "./sykmeldingDataTypes";
import { Soknad } from "./soknadTypes/soknadTypes";

export type sykefravaerId =
  | "ny-sykmelding-variasjon-1"
  | "ferdig-sykmelding-variasjon-1-a"
  | "ferdig-sykmelding-variasjon-1-b"
  | "ferdig-sykmelding-variasjon-1-c"
  | "enNysykmelding"
  | "enNySykmeldingEnAvvistSykmelding";

export class SykefravaerData {
  id: string; //TODO: change back to sykefravaerId
  sykmeldinger: string[];
  constructor(data: any) {
    this.id = data.id;
    this.sykmeldinger = data.sykmeldinger;
  }
}

export class Sykefravaer {
  id: string; //TODO: change back to sykefravaerId
  sykmeldinger: SykmeldingData[];
  soknader: Soknad[];

  constructor(data: any) {
    this.id = data.id;
    this.sykmeldinger = data.sykmeldinger;
    this.soknader = data.soknader;
  }
}
