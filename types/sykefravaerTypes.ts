import { SykmeldingData } from "./sykmeldingDataTypes";
import { Soknad } from "./soknadTypes";
import { BrukerId } from "../data/brukere";

export type sykefravaerId = "toNyeSykmeldinger" | "enNysykmelding";

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
