import { SykmeldingData } from "./sykmeldingDataTypes";
import { Soknad } from "./soknadTypes/soknadTypes";

export type sykefravaerId =
  | "enNysykmelding"
  | "enNySykmeldingEnAvvistSykmelding";

export class SykefravaerData {
  id: sykefravaerId;
  sykmeldinger: string[];
  constructor(data: any) {
    this.id = data.id;
    this.sykmeldinger = data.sykmeldinger;
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
