import { SykefravaerData } from "../types/sykefravaerTypes";

const sykefravaerSteg1: SykefravaerData[] = [
  {
    id: "steg-1-variasjon-1-a",
    sykmeldinger: ["ny-sykmelding-variasjon-1-sykmelding"]
  },
  {
    id: "steg-1-variasjon-1-b",
    sykmeldinger: ["ferdig-sykmelding-variasjon-1-sykmelding-a"]
  },
  {
    id: "steg-1-variasjon-1-c",
    sykmeldinger: ["ferdig-sykmelding-variasjon-1-sykmelding-b"]
  },
  {
    id: "steg-1-variasjon-1-d",
    sykmeldinger: ["ferdig-sykmelding-variasjon-1-sykmelding-c"]
  },
  {
    id: "steg-1-variasjon-2-a",
    sykmeldinger: [
      "ny-sykmelding-variasjon-2-sykmelding-a",
      "ny-sykmelding-variasjon-2-sykmelding-b"
    ]
  },
  {
    id: "steg-1-variasjon-2-b",
    sykmeldinger: ["ferdig-sykmelding-variasjon-2-sykmelding-a"]
  },
  {
    id: "steg-1-variasjon-2-c",
    sykmeldinger: ["ferdig-sykmelding-variasjon-2-sykmelding-b"]
  },
  {
    id: "steg-1-variasjon-2-d",
    sykmeldinger: ["ferdig-sykmelding-variasjon-2-sykmelding-c"]
  },
  {
    id: "steg-1-variasjon-3-a",
    sykmeldinger: ["ny-sykmelding-variasjon-3-sykmelding-a"]
  },
  {
    id: "steg-1-variasjon-3-b",
    sykmeldinger: ["ny-sykmelding-variasjon-3-sykmelding-b"]
  },
  {
    id: "steg-1-variasjon-3-c",
    sykmeldinger: ["ferdig-sykmelding-variasjon-3-sykmelding-a"]
  },
  {
    id: "steg-1-variasjon-3-d",
    sykmeldinger: ["ferdig-sykmelding-variasjon-3-sykmelding-b"]
  },
  {
    id: "steg-1-variasjon-4-a",
    sykmeldinger: [
      "ny-sykmelding-variasjon-4-sykmelding-a",
      "ny-sykmelding-variasjon-4-sykmelding-b"
    ]
  },
  {
    id: "steg-1-variasjon-4-b",
    sykmeldinger: [
      "ny-sykmelding-variasjon-4-sykmelding-c",
      "ny-sykmelding-variasjon-4-sykmelding-d"
    ]
  },
  {
    id: "steg-1-variasjon-4-c",
    sykmeldinger: ["ferdig-sykmelding-variasjon-4-sykmelding-a"]
  },
  {
    id: "steg-1-variasjon-4-d",
    sykmeldinger: ["ferdig-sykmelding-variasjon-2-sykmelding-b"]
  }
];

const sykefravaerSteg2: SykefravaerData[] = [];

const sykefravaerSteg3: SykefravaerData[] = [];

export const sykefravaer: SykefravaerData[] = [
  ...sykefravaerSteg1,
  ...sykefravaerSteg2,
  ...sykefravaerSteg3
];
