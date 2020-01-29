import { sykefravaerId } from "../types/sykefravaerTypes";

export type BrukerId = "variasjon1ny" | "1" | "2" | "3" | "4" | "5" | "6" | "7";

interface Bruker {
  id: BrukerId;
  label: string;
  sykefravaerIds: string[]; //TODO: change back to sykefravaerId type
}

export const brukere: Bruker[] = [
  {
    id: "variasjon1ny",
    label:
      "Variasjon 1: Ny sykmelding. Brukertype: 1 arbeidsforhold. Sykmeldingstype: 16 dager og under.",
    sykefravaerIds: [
      "steg-1-variasjon-1-a",
      "steg-1-variasjon-1-b",
      "steg-1-variasjon-1-c",
      "steg-1-variasjon-1-d"
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
