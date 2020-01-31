import { sykefravaerId } from "../types/sykefravaerTypes";

export type BrukerId =
  | "steg-1-variasjon-1"
  | "steg-1-variasjon-2"
  | "steg-1-variasjon-3"
  | "steg-1-variasjon-4";

interface Bruker {
  id: BrukerId;
  label: string;
  sykefravaerIds: string[]; //TODO: change back to sykefravaerId type
}

export const brukere: Bruker[] = [
  {
    id: "steg-1-variasjon-1",
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
    id: "steg-1-variasjon-2",
    label:
      "Variasjon 2: Ny sykmelding. Brukertype: 2 arbeidsforhold. Sykmeldingstype: 16 dager og under.",
    sykefravaerIds: [
      "steg-1-variasjon-2-a",
      "steg-1-variasjon-2-b",
      "steg-1-variasjon-2-c",
      "steg-1-variasjon-2-d"
    ]
  },
  {
    id: "steg-1-variasjon-3",
    label:
      "Variasjon 3: Ny sykmelding. Brukertype: 1 arbeidsforhold. Sykmeldingstype: 17 dager til 18 uker (2 perioder usammenhengende).",
    sykefravaerIds: [
      "steg-1-variasjon-3-a",
      "steg-1-variasjon-3-b",
      "steg-1-variasjon-3-c",
      "steg-1-variasjon-3-d"
    ]
  },
  {
    id: "steg-1-variasjon-4",
    label:
      "Variasjon 1: Ny sykmelding. Brukertype: 2 arbeidsforhold. Sykmeldingstype: 17 dager til 18 uker (2 perioder usammenhengende).",
    sykefravaerIds: [
      "steg-1-variasjon-4-a",
      "steg-1-variasjon-4-b",
      "steg-1-variasjon-4-c",
      "steg-1-variasjon-4-d"
    ]
  }
];
