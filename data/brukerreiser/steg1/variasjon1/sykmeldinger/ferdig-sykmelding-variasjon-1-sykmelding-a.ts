import {
  bidiagnoseGenerator,
  diagnoseGenerator,
  getRandomNumber,
  generatePastDate,
  generateFutureDate
} from "../../../../../utils/mockUtils";

export const ferdigSykmeldingVariasjon1SykmeldingA = {
  status: {
    status: "sendt",
    dato: generatePastDate(195)
  },
  sykmelding: {
    id: "ferdig-sykmelding-variasjon-1-sykmelding-a",
    msgId: "123124334",
    pasientAktoerId: "41234123",
    medisinskVurdering: {
      hovedDiagnose: diagnoseGenerator(),
      biDiagnoser: bidiagnoseGenerator(getRandomNumber(2)),
      svangerskap: false,
      yrkesskade: false
    },
    skjermesForPasient: true,
    arbeidsgiver: {
      harArbeidsgiver: "EN_ARBEIDSGIVER",
      navn: "Planter og andre buskvekster AS",
      yrkesbetegnelse: "Gartner",
      stillingsprosent: 100
    },
    perioder: [
      {
        fom: generatePastDate(200),
        tom: generatePastDate(190),
        reisetilskudd: false
      }
    ],
    prognose: {
      arbeidsforEtterPeriode: true
    },
    utdypendeOpplysninger: {},
    kontaktMedPasient: {
      kontaktDato: generatePastDate(200)
    },
    behandletTidspunkt: generatePastDate(200),
    behandler: {
      fornavn: "Fornavn",
      mellomnavn: null,
      etternavn: "Etternavn",
      aktoerId: "1234",
      fnr: "99999999999",
      hpr: "321",
      her: "123",
      adresse: {
        gate: "Gateveien 4",
        postnummer: 1001,
        kommune: "Oslo",
        postboks: "1212 Gateveien",
        land: "NO"
      },
      tlf: "900 00 000"
    },
    avsenderSystem: {
      navn: "NAV Test generator",
      versjon: "1.0"
    },
    syketilfelleStartDato: generatePastDate(200),
    signaturDato: generatePastDate(200),
    navnFastlege: "Doktor Legesen"
  }
};
