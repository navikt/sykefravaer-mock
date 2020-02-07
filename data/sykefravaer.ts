import { SykefravaerData } from "../types/sykefravaerTypes";
import { generateFutureDate, generatePastDate } from "../utils/mockUtils";

const sykefravaerSteg1: SykefravaerData[] = [
  {
    id: "steg-1-variasjon-1-a",
    fom: generateFutureDate(2),
    tom: generateFutureDate(18),
    sykmeldinger: ["ny-sykmelding-variasjon-1-sykmelding"]
  },
  {
    id: "steg-1-variasjon-1-b",
    fom: generatePastDate(200),
    tom: generatePastDate(190),
    sykmeldinger: ["ferdig-sykmelding-variasjon-1-sykmelding-a"]
  },
  {
    id: "steg-1-variasjon-1-c",
    fom: generatePastDate(55),
    tom: generatePastDate(45),
    sykmeldinger: ["ferdig-sykmelding-variasjon-1-sykmelding-b"]
  },
  {
    id: "steg-1-variasjon-1-d",
    fom: generatePastDate(350),
    tom: generatePastDate(335),
    sykmeldinger: ["ferdig-sykmelding-variasjon-1-sykmelding-c"]
  },
  {
    id: "steg-1-variasjon-2-a",
    fom: generateFutureDate(2),
    tom: generateFutureDate(18),
    sykmeldinger: [
      "ny-sykmelding-variasjon-2-sykmelding-a",
      "ny-sykmelding-variasjon-2-sykmelding-b"
    ]
  },
  {
    id: "steg-1-variasjon-2-b",
    fom: generatePastDate(27),
    tom: generatePastDate(15),
    sykmeldinger: ["ferdig-sykmelding-variasjon-2-sykmelding-a"]
  },
  {
    id: "steg-1-variasjon-2-c",
    fom: generatePastDate(156),
    tom: generatePastDate(147),
    sykmeldinger: ["ferdig-sykmelding-variasjon-2-sykmelding-b"]
  },
  {
    id: "steg-1-variasjon-2-d",
    fom: generatePastDate(351),
    tom: generatePastDate(144),
    sykmeldinger: ["ferdig-sykmelding-variasjon-2-sykmelding-c"]
  },
  {
    id: "steg-1-variasjon-3-a",
    fom: generateFutureDate(2),
    tom: generateFutureDate(18),
    sykmeldinger: ["ny-sykmelding-variasjon-3-sykmelding-a"]
  },
  {
    id: "steg-1-variasjon-3-b",
    fom: generatePastDate(27),
    tom: generatePastDate(15),
    sykmeldinger: ["ny-sykmelding-variasjon-3-sykmelding-b"]
  },
  {
    id: "steg-1-variasjon-3-c",
    fom: generatePastDate(156),
    tom: generatePastDate(147),
    sykmeldinger: ["ferdig-sykmelding-variasjon-3-sykmelding-a"]
  },
  {
    id: "steg-1-variasjon-3-d",
    fom: generatePastDate(351),
    tom: generatePastDate(344),
    sykmeldinger: ["ferdig-sykmelding-variasjon-3-sykmelding-b"]
  },
  {
    id: "steg-1-variasjon-4-a",
    fom: generateFutureDate(2),
    tom: generateFutureDate(18),
    sykmeldinger: [
      "ny-sykmelding-variasjon-4-sykmelding-a",
      "ny-sykmelding-variasjon-4-sykmelding-b"
    ]
  },
  {
    id: "steg-1-variasjon-4-b",
    fom: generatePastDate(27),
    tom: generatePastDate(15),
    sykmeldinger: [
      "ny-sykmelding-variasjon-4-sykmelding-c",
      "ny-sykmelding-variasjon-4-sykmelding-d"
    ]
  },
  {
    id: "steg-1-variasjon-4-c",
    fom: generatePastDate(156),
    tom: generatePastDate(147),
    sykmeldinger: ["ferdig-sykmelding-variasjon-4-sykmelding-a"]
  },
  {
    id: "steg-1-variasjon-4-d",
    fom: generatePastDate(351),
    tom: generatePastDate(344),
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
