import { Sykefravaer } from "../types/sykefravaerTypes";
import { nySykmelding } from "./sykmeldinger/nysykmelding";
import { SykmeldingData } from "../types/sykmeldingDataTypes";

export const sykefravaer: Sykefravaer[] = [
  {
    id: "enNysykmelding",
    sykmeldinger: [new SykmeldingData(nySykmelding)],
    soknader: []
  },
  {
    id: "toNyeSykmeldinger",
    sykmeldinger: [
      new SykmeldingData(nySykmelding),
      new SykmeldingData(nySykmelding)
    ],
    soknader: []
  }
];
