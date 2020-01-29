import {
    bidiagnoseGenerator,
    diagnoseGenerator,
    getRandomNumber,
    generatePastDate,
    generateFutureDate
  } from "../../../../../utils/mockUtils";
  
  export const nySykmeldingVariasjon2SykmeldingA = {
    status: {
      status: "ny"
    },
    sykmelding: {
      id: "ny-sykmelding-variasjon-2-sykmelding-a",
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
        harArbeidsgiver: "FLERE_ARBEIDSGIVERE",
        navn: "Planter og andre buskvekster AS",
        yrkesbetegnelse: "Gartner",
        stillingsprosent: 100
      },
      perioder: [
        {
          fom: generatePastDate(2),
          tom: generateFutureDate(18),
          reisetilskudd: false
        }
      ],
      prognose: {
        arbeidsforEtterPeriode: true
      },
      utdypendeOpplysninger: {},
      kontaktMedPasient: {
        kontaktDato: generatePastDate(2)
      },
      behandletTidspunkt: generatePastDate(2),
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
      syketilfelleStartDato: generatePastDate(2),
      signaturDato: generatePastDate(2),
      navnFastlege: "Doktor Legesen"
    }
  };
  