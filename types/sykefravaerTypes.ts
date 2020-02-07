import { SykmeldingData } from "./sykmeldingDataTypes";
import { Soknad } from "./soknadTypes/soknadTypes";
import dayjs = require("dayjs");

export type sykefravaerId =
  | "steg-1-variasjon-1-a"
  | "steg-1-variasjon-1-b"
  | "steg-1-variasjon-1-c"
  | "steg-1-variasjon-1-d"
  | "steg-1-variasjon-2-a"
  | "steg-1-variasjon-2-b"
  | "steg-1-variasjon-2-c"
  | "steg-1-variasjon-2-d"
  | "steg-1-variasjon-3-a"
  | "steg-1-variasjon-3-b"
  | "steg-1-variasjon-3-c"
  | "steg-1-variasjon-3-d"
  | "steg-1-variasjon-4-a"
  | "steg-1-variasjon-4-b"
  | "steg-1-variasjon-4-c"
  | "steg-1-variasjon-4-d";

export class SykefravaerData {
  id: sykefravaerId;
  fom: string;
  tom: string;
  sykmeldinger: string[];
  constructor(data: any) {
    this.id = data.id;
    this.fom = data.fom;
    this.tom = data.tom;
    this.sykmeldinger = data.sykmeldinger;
  }
}

export class Sykefravaer {
  id: sykefravaerId;
  fom: string;
  tom: string;
  sykmeldinger: SykmeldingData[];
  soknader: Soknad[];

  constructor(data: any) {
    this.id = data.id;
    this.fom = data.fom;
    this.tom = data.tom;
    this.sykmeldinger = data.sykmeldinger;
    this.soknader = data.soknader;
  }
}
