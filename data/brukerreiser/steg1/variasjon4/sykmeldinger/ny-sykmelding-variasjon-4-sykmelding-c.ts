import {
    bidiagnoseGenerator,
    diagnoseGenerator,
    getRandomNumber,
    generatePastDate,
    generateFutureDate
  } from "../../../../../utils/mockUtils";
  
  export const nySykmeldingVariasjon4SykmeldingC = {
    status: {
      status: "ny"
    },
    sykmelding: {
      id: "ny-sykmelding-variasjon-4-sykmelding-C",
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
          fom: generatePastDate(27),
          tom: generatePastDate(15),
          reisetilskudd: false
        }
      ],
      prognose: {
        arbeidsforEtterPeriode: true
      },
      utdypendeOpplysninger: {},
      kontaktMedPasient: {
        kontaktDato: generatePastDate(27)
      },
      behandletTidspunkt: generatePastDate(27),
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
      syketilfelleStartDato: generatePastDate(27),
      signaturDato: generatePastDate(27),
      navnFastlege: "Doktor Legesen"
    }
  };
  