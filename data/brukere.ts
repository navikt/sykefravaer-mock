import { sykefravaerId } from "../types/sykefravaerTypes";

export type BrukerId = "variasjon1ny" | "1" | "2" | "3" | "4" | "5" | "6" | "7";

interface Bruker {
  id: BrukerId;
  label: string;
  sykefravaerIds: sykefravaerId[];
}

export const brukere: Bruker[] = [
  {
    id: "variasjon1ny",
    label:
      "Variasjon 1: Ny sykmelding. Brukertype: 1 arbeidsforhold. Sykmeldingstype: 16 dager og under.",
    sykefravaerIds: [
      "ny-sykmelding-variasjon-1",
      "ferdig-sykmelding-variasjon-1-a",
      "ferdig-sykmelding-variasjon-1-b",
      "ferdig-sykmelding-variasjon-1-c"
    ]
  },
  {
    id: "1",
    label: "Ingen sykmelding, ingen søknader",
    sykefravaerIds: ["enNysykmelding"]
  },
  {
    id: "2",
    label: "Ny sykmelding, inaktiv søknad",
    sykefravaerIds: ["enNySykmeldingEnAvvistSykmelding"]
  } /* ,
  {
    value: "3",
    label: "To nye sykmeldinger, inaktiv søknad"
  },
  {
    value: "4",
    label: "Ny sykmelding, aktiv søknad for tidligere sykmelding"
  },
  {
    value: "5",
    label: "Tidligere sykmelding, aktiv søknad"
  },
  {
    value: "6",
    label: "Tidligere sykmelding, inaktiv søknad"
  },
  {
    value: "7",
    label: "Tidligere sykmelding, levert søknad"
  } */
];
