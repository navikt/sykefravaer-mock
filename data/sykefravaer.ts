import { SykefravaerData } from "../types/sykefravaerTypes";

export const sykefravaer: SykefravaerData[] = [
  {
    id: "enNysykmelding",
    sykmeldinger: ["ny123"],
    soknader: []
  },
  {
    id: "enNySykmeldingEnAvvistSykmelding",
    sykmeldinger: ["ny123", "ny123"],
    soknader: []
  },
  {
    id: "ny-sykmelding-variasjon-1",
    sykmeldinger: ["ny-sykmelding-variasjon-1-sykmelding"],
    soknader: []
  },
  {
    id: "ferdig-sykmelding-variasjon-1-a",
    sykmeldinger: ["ferdig-sykmelding-variasjon-1-sykmelding-a"],
    soknader: [
      /* TODO: Legg til utbetalt søknad*/
    ]
  },
  {
    id: "ferdig-sykmelding-variasjon-1-b",
    sykmeldinger: ["ferdig-sykmelding-variasjon-1-sykmelding-b"],
    soknader: [
      /* TODO: Legg til utbetalt søknad*/
    ]
  },
  {
    id: "ferdig-sykmelding-variasjon-1-c",
    sykmeldinger: ["ferdig-sykmelding-variasjon-1-sykmelding-c"],
    soknader: [
      /* TODO: Legg til utbetalt søknad*/
    ]
  }
];
