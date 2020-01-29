export const generiskSoknad = {
  id: "1e1935ba-ceab-472d-bb25-88d1bc1d8f1c",
  aktorId: "1656138067995",
  sykmeldingId: "ny123",
  soknadstype: "ARBEIDSTAKERE",
  status: "SENDT",
  fom: "2019-09-21",
  tom: "2019-10-10",
  opprettetDato: "2019-10-11",
  innsendtDato: "2019-10-15",
  sendtTilNAVDato: "2019-10-15T15:00:21.996",
  sendtTilArbeidsgiverDato: "2019-10-15T15:00:21.996",
  avbruttDato: null,
  startSykeforlop: "2019-09-01",
  sykmeldingUtskrevet: "2019-09-01",
  arbeidsgiver: { navn: "ÅSEN BOFELLESSKAP", orgnummer: "995816598" },
  korrigerer: null,
  korrigertAv: null,
  arbeidssituasjon: "ARBEIDSTAKER",
  soknadPerioder: [{ fom: "2019-09-21", tom: "2019-10-10", grad: 100 }],
  sporsmal: [
    {
      id: "583673",
      tag: "ANSVARSERKLARING",
      sporsmalstekst:
        "Jeg vet at jeg kan miste retten til sykepenger hvis opplysningene jeg gir ikke er riktige eller fullstendige. Jeg vet også at NAV kan holde igjen eller kreve tilbake penger, og at å gi feil opplysninger kan være straffbart.",
      undertekst: null,
      svartype: "CHECKBOX_PANEL",
      min: null,
      max: null,
      pavirkerAndreSporsmal: false,
      kriterieForVisningAvUndersporsmal: null,
      svar: [{ verdi: "CHECKED", avgittAv: null }],
      undersporsmal: []
    },
    {
      id: "583674",
      tag: "EGENMELDINGER",
      sporsmalstekst:
        "Vi har registrert at du ble sykmeldt søndag 1. september 2019. Var du syk og borte fra jobb i perioden 16. - 31. august 2019?",
      undertekst: null,
      svartype: "JA_NEI",
      min: null,
      max: null,
      pavirkerAndreSporsmal: false,
      kriterieForVisningAvUndersporsmal: "JA",
      svar: [{ verdi: "JA", avgittAv: null }],
      undersporsmal: [
        {
          id: "583675",
          tag: "TIDLIGERE_SYK",
          sporsmalstekst: null,
          undertekst: null,
          svartype: "CHECKBOX_GRUPPE",
          min: null,
          max: null,
          pavirkerAndreSporsmal: false,
          kriterieForVisningAvUndersporsmal: null,
          svar: [],
          undersporsmal: [
            {
              id: "583676",
              tag: "TIDLIGERE_EGENMELDING",
              sporsmalstekst: "Jeg var syk med egenmelding",
              undertekst: null,
              svartype: "CHECKBOX",
              min: null,
              max: null,
              pavirkerAndreSporsmal: false,
              kriterieForVisningAvUndersporsmal: "CHECKED",
              svar: [{ verdi: "CHECKED", avgittAv: null }],
              undersporsmal: [
                {
                  id: "583677",
                  tag: "EGENMELDINGER_NAR",
                  sporsmalstekst:
                    "Hvilke dager var du syk med egenmelding? Du trenger bare oppgi dager før 1. september 2019.",
                  undertekst: null,
                  svartype: "PERIODER",
                  min: "2019-03-01",
                  max: "2019-08-31",
                  pavirkerAndreSporsmal: false,
                  kriterieForVisningAvUndersporsmal: null,
                  svar: [
                    {
                      verdi: '{"fom":"2019-08-15","tom":"2019-08-16"}',
                      avgittAv: null
                    }
                  ],
                  undersporsmal: []
                }
              ]
            },
            {
              id: "583678",
              tag: "TIDLIGERE_PAPIRSYKMELDING",
              sporsmalstekst: "Jeg var syk med papirsykmelding",
              undertekst: null,
              svartype: "CHECKBOX",
              min: null,
              max: null,
              pavirkerAndreSporsmal: false,
              kriterieForVisningAvUndersporsmal: "CHECKED",
              svar: [],
              undersporsmal: [
                {
                  id: "583679",
                  tag: "PAPIRSYKMELDING_NAR",
                  sporsmalstekst:
                    "Hvilke dager var du syk med papirsykmelding? Du trenger bare oppgi dager før 1. september 2019.",
                  undertekst: null,
                  svartype: "PERIODER",
                  min: "2019-03-01",
                  max: "2019-08-31",
                  pavirkerAndreSporsmal: false,
                  kriterieForVisningAvUndersporsmal: null,
                  svar: [],
                  undersporsmal: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "583680",
      tag: "TILBAKE_I_ARBEID",
      sporsmalstekst:
        "Var du tilbake i fullt arbeid hos ÅSEN BOFELLESSKAP i løpet av perioden 21. september - 10. oktober 2019?",
      undertekst: null,
      svartype: "JA_NEI",
      min: null,
      max: null,
      pavirkerAndreSporsmal: true,
      kriterieForVisningAvUndersporsmal: "JA",
      svar: [{ verdi: "JA", avgittAv: null }],
      undersporsmal: [
        {
          id: "583681",
          tag: "TILBAKE_NAR",
          sporsmalstekst: "Når begynte du å jobbe igjen?",
          undertekst: null,
          svartype: "DATO",
          min: "2019-09-21",
          max: "2019-10-10",
          pavirkerAndreSporsmal: true,
          kriterieForVisningAvUndersporsmal: null,
          svar: [{ verdi: "2019-10-09", avgittAv: null }],
          undersporsmal: []
        }
      ]
    },
    {
      id: "583682",
      tag: "FERIE_V2",
      sporsmalstekst:
        "Tok du ut ferie mens du var sykmeldt 21. september - 8. oktober 2019?",
      undertekst: null,
      svartype: "JA_NEI",
      min: null,
      max: null,
      pavirkerAndreSporsmal: false,
      kriterieForVisningAvUndersporsmal: "JA",
      svar: [{ verdi: "NEI", avgittAv: null }],
      undersporsmal: [
        {
          id: "583683",
          tag: "FERIE_NAR_V2",
          sporsmalstekst: "Når tok du ut ferie?",
          undertekst: null,
          svartype: "PERIODER",
          min: "2019-09-21",
          max: "2019-10-08",
          pavirkerAndreSporsmal: false,
          kriterieForVisningAvUndersporsmal: null,
          svar: [],
          undersporsmal: []
        }
      ]
    },
    {
      id: "583684",
      tag: "PERMISJON_V2",
      sporsmalstekst:
        "Tok du permisjon mens du var sykmeldt 21. september - 8. oktober 2019?",
      undertekst: null,
      svartype: "JA_NEI",
      min: null,
      max: null,
      pavirkerAndreSporsmal: false,
      kriterieForVisningAvUndersporsmal: "JA",
      svar: [{ verdi: "NEI", avgittAv: null }],
      undersporsmal: [
        {
          id: "583685",
          tag: "PERMISJON_NAR_V2",
          sporsmalstekst: "Når tok du permisjon?",
          undertekst: null,
          svartype: "PERIODER",
          min: "2019-09-21",
          max: "2019-10-08",
          pavirkerAndreSporsmal: false,
          kriterieForVisningAvUndersporsmal: null,
          svar: [],
          undersporsmal: []
        }
      ]
    },
    {
      id: "583686",
      tag: "UTLAND_V2",
      sporsmalstekst:
        "Var du på reise utenfor Norge mens du var sykmeldt 21. september - 8. oktober 2019?",
      undertekst: null,
      svartype: "JA_NEI",
      min: null,
      max: null,
      pavirkerAndreSporsmal: false,
      kriterieForVisningAvUndersporsmal: "JA",
      svar: [{ verdi: "NEI", avgittAv: null }],
      undersporsmal: [
        {
          id: "583687",
          tag: "UTLAND_NAR_V2",
          sporsmalstekst: "Når var du utenfor Norge?",
          undertekst: null,
          svartype: "PERIODER",
          min: "2019-09-21",
          max: "2019-10-08",
          pavirkerAndreSporsmal: false,
          kriterieForVisningAvUndersporsmal: null,
          svar: [],
          undersporsmal: []
        }
      ]
    },
    {
      id: "583688",
      tag: "JOBBET_DU_100_PROSENT_0",
      sporsmalstekst:
        "I perioden 21. september - 8. oktober 2019 var du 100 % sykmeldt fra ÅSEN BOFELLESSKAP. Jobbet du noe i denne perioden?",
      undertekst: null,
      svartype: "JA_NEI",
      min: null,
      max: null,
      pavirkerAndreSporsmal: false,
      kriterieForVisningAvUndersporsmal: "JA",
      svar: [{ verdi: "NEI", avgittAv: null }],
      undersporsmal: [
        {
          id: "583689",
          tag: "HVOR_MANGE_TIMER_PER_UKE_0",
          sporsmalstekst:
            "Hvor mange timer i uken jobber du vanligvis? Varierer det, kan du oppgi gjennomsnittet.",
          undertekst: "timer per uke",
          svartype: "TALL",
          min: "1",
          max: "150",
          pavirkerAndreSporsmal: false,
          kriterieForVisningAvUndersporsmal: null,
          svar: [],
          undersporsmal: []
        },
        {
          id: "583690",
          tag: "HVOR_MYE_HAR_DU_JOBBET_0",
          sporsmalstekst:
            "Hvor mye jobbet du totalt 21. september - 8. oktober 2019 hos ÅSEN BOFELLESSKAP?",
          undertekst: null,
          svartype: "RADIO_GRUPPE_TIMER_PROSENT",
          min: null,
          max: null,
          pavirkerAndreSporsmal: false,
          kriterieForVisningAvUndersporsmal: null,
          svar: [],
          undersporsmal: [
            {
              id: "583691",
              tag: "HVOR_MYE_PROSENT_0",
              sporsmalstekst: "prosent",
              undertekst: null,
              svartype: "RADIO",
              min: null,
              max: null,
              pavirkerAndreSporsmal: false,
              kriterieForVisningAvUndersporsmal: "CHECKED",
              svar: [{ verdi: "CHECKED", avgittAv: null }],
              undersporsmal: [
                {
                  id: "583692",
                  tag: "HVOR_MYE_PROSENT_VERDI_0",
                  sporsmalstekst: null,
                  undertekst: "prosent",
                  svartype: "TALL",
                  min: "1",
                  max: "99",
                  pavirkerAndreSporsmal: false,
                  kriterieForVisningAvUndersporsmal: null,
                  svar: [],
                  undersporsmal: []
                }
              ]
            },
            {
              id: "583693",
              tag: "HVOR_MYE_TIMER_0",
              sporsmalstekst: "timer",
              undertekst: null,
              svartype: "RADIO",
              min: null,
              max: null,
              pavirkerAndreSporsmal: false,
              kriterieForVisningAvUndersporsmal: "CHECKED",
              svar: [],
              undersporsmal: [
                {
                  id: "583694",
                  tag: "HVOR_MYE_TIMER_VERDI_0",
                  sporsmalstekst: null,
                  undertekst: "timer totalt",
                  svartype: "TALL",
                  min: "1",
                  max: "386",
                  pavirkerAndreSporsmal: false,
                  kriterieForVisningAvUndersporsmal: null,
                  svar: [],
                  undersporsmal: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "583695",
      tag: "ANDRE_INNTEKTSKILDER",
      sporsmalstekst: "Har du andre inntektskilder enn ÅSEN BOFELLESSKAP?",
      undertekst: null,
      svartype: "JA_NEI",
      min: null,
      max: null,
      pavirkerAndreSporsmal: false,
      kriterieForVisningAvUndersporsmal: "JA",
      svar: [{ verdi: "NEI", avgittAv: null }],
      undersporsmal: [
        {
          id: "583696",
          tag: "HVILKE_ANDRE_INNTEKTSKILDER",
          sporsmalstekst: "Hvilke andre inntektskilder har du?",
          undertekst: "Du trenger ikke oppgi penger fra NAV",
          svartype: "CHECKBOX_GRUPPE",
          min: null,
          max: null,
          pavirkerAndreSporsmal: false,
          kriterieForVisningAvUndersporsmal: null,
          svar: [],
          undersporsmal: [
            {
              id: "583697",
              tag: "INNTEKTSKILDE_ANDRE_ARBEIDSFORHOLD",
              sporsmalstekst: "andre arbeidsforhold",
              undertekst: null,
              svartype: "CHECKBOX",
              min: null,
              max: null,
              pavirkerAndreSporsmal: false,
              kriterieForVisningAvUndersporsmal: "CHECKED",
              svar: [],
              undersporsmal: [
                {
                  id: "583698",
                  tag: "INNTEKTSKILDE_ANDRE_ARBEIDSFORHOLD_ER_DU_SYKMELDT",
                  sporsmalstekst: "Er du sykmeldt fra dette?",
                  undertekst: null,
                  svartype: "JA_NEI",
                  min: null,
                  max: null,
                  pavirkerAndreSporsmal: false,
                  kriterieForVisningAvUndersporsmal: null,
                  svar: [],
                  undersporsmal: []
                }
              ]
            },
            {
              id: "583699",
              tag: "INNTEKTSKILDE_SELVSTENDIG",
              sporsmalstekst: "selvstendig næringsdrivende",
              undertekst: null,
              svartype: "CHECKBOX",
              min: null,
              max: null,
              pavirkerAndreSporsmal: false,
              kriterieForVisningAvUndersporsmal: "CHECKED",
              svar: [],
              undersporsmal: [
                {
                  id: "583700",
                  tag: "INNTEKTSKILDE_SELVSTENDIG_ER_DU_SYKMELDT",
                  sporsmalstekst: "Er du sykmeldt fra dette?",
                  undertekst: null,
                  svartype: "JA_NEI",
                  min: null,
                  max: null,
                  pavirkerAndreSporsmal: false,
                  kriterieForVisningAvUndersporsmal: null,
                  svar: [],
                  undersporsmal: []
                }
              ]
            },
            {
              id: "583701",
              tag: "INNTEKTSKILDE_SELVSTENDIG_DAGMAMMA",
              sporsmalstekst: "dagmamma",
              undertekst: null,
              svartype: "CHECKBOX",
              min: null,
              max: null,
              pavirkerAndreSporsmal: false,
              kriterieForVisningAvUndersporsmal: "CHECKED",
              svar: [],
              undersporsmal: [
                {
                  id: "583702",
                  tag: "INNTEKTSKILDE_SELVSTENDIG_DAGMAMMA_ER_DU_SYKMELDT",
                  sporsmalstekst: "Er du sykmeldt fra dette?",
                  undertekst: null,
                  svartype: "JA_NEI",
                  min: null,
                  max: null,
                  pavirkerAndreSporsmal: false,
                  kriterieForVisningAvUndersporsmal: null,
                  svar: [],
                  undersporsmal: []
                }
              ]
            },
            {
              id: "583703",
              tag: "INNTEKTSKILDE_JORDBRUKER",
              sporsmalstekst: "jordbruk / fiske / reindrift",
              undertekst: null,
              svartype: "CHECKBOX",
              min: null,
              max: null,
              pavirkerAndreSporsmal: false,
              kriterieForVisningAvUndersporsmal: "CHECKED",
              svar: [],
              undersporsmal: [
                {
                  id: "583704",
                  tag: "INNTEKTSKILDE_JORDBRUKER_ER_DU_SYKMELDT",
                  sporsmalstekst: "Er du sykmeldt fra dette?",
                  undertekst: null,
                  svartype: "JA_NEI",
                  min: null,
                  max: null,
                  pavirkerAndreSporsmal: false,
                  kriterieForVisningAvUndersporsmal: null,
                  svar: [],
                  undersporsmal: []
                }
              ]
            },
            {
              id: "583705",
              tag: "INNTEKTSKILDE_FRILANSER",
              sporsmalstekst: "frilanser",
              undertekst: null,
              svartype: "CHECKBOX",
              min: null,
              max: null,
              pavirkerAndreSporsmal: false,
              kriterieForVisningAvUndersporsmal: "CHECKED",
              svar: [],
              undersporsmal: [
                {
                  id: "583706",
                  tag: "INNTEKTSKILDE_FRILANSER_ER_DU_SYKMELDT",
                  sporsmalstekst: "Er du sykmeldt fra dette?",
                  undertekst: null,
                  svartype: "JA_NEI",
                  min: null,
                  max: null,
                  pavirkerAndreSporsmal: false,
                  kriterieForVisningAvUndersporsmal: null,
                  svar: [],
                  undersporsmal: []
                }
              ]
            },
            {
              id: "583707",
              tag: "INNTEKTSKILDE_ANNET",
              sporsmalstekst: "annet",
              undertekst: null,
              svartype: "CHECKBOX",
              min: null,
              max: null,
              pavirkerAndreSporsmal: false,
              kriterieForVisningAvUndersporsmal: null,
              svar: [],
              undersporsmal: []
            }
          ]
        }
      ]
    },
    {
      id: "583708",
      tag: "UTDANNING",
      sporsmalstekst:
        "Har du vært under utdanning i løpet av perioden 21. september - 8. oktober 2019?",
      undertekst: null,
      svartype: "JA_NEI",
      min: null,
      max: null,
      pavirkerAndreSporsmal: false,
      kriterieForVisningAvUndersporsmal: "JA",
      svar: [{ verdi: "NEI", avgittAv: null }],
      undersporsmal: [
        {
          id: "583709",
          tag: "UTDANNING_START",
          sporsmalstekst: "Når startet du på utdanningen?",
          undertekst: null,
          svartype: "DATO",
          min: null,
          max: "2019-10-08",
          pavirkerAndreSporsmal: false,
          kriterieForVisningAvUndersporsmal: null,
          svar: [],
          undersporsmal: []
        },
        {
          id: "583710",
          tag: "FULLTIDSSTUDIUM",
          sporsmalstekst: "Er utdanningen et fulltidsstudium?",
          undertekst: null,
          svartype: "JA_NEI",
          min: null,
          max: null,
          pavirkerAndreSporsmal: false,
          kriterieForVisningAvUndersporsmal: null,
          svar: [],
          undersporsmal: []
        }
      ]
    },
    {
      id: "583711",
      tag: "VAER_KLAR_OVER_AT",
      sporsmalstekst: "Viktig å være klar over:",
      undertekst:
        '<ul><li>Du kan bare få sykepenger hvis det er din egen sykdom eller skade som hindrer deg i å jobbe. Sosiale eller økonomiske problemer gir ikke rett til sykepenger.</li><li>Du kan miste retten til sykepenger hvis du nekter å opplyse om din egen arbeidsevne, eller hvis du ikke tar imot behandling eller tilrettelegging.</li><li>Retten til sykepenger gjelder bare inntekt du har mottatt som lønn og betalt skatt av på sykmeldingstidspunktet.</li><li>NAV kan innhente opplysninger som er nødvendige for å behandle søknaden.</li><li>Du må melde fra til NAV hvis du satt i varetekt, sonet straff eller var under forvaring i sykmeldingsperioden.</li><li>Fristen for å søke sykepenger er som hovedregel 3 måneder</li></ul><p>Du kan lese mer om rettigheter og plikter på <a href="https://www.nav.no/sykepenger" target="_blank">nav.no/sykepenger</a>.</p>',
      svartype: "IKKE_RELEVANT",
      min: null,
      max: null,
      pavirkerAndreSporsmal: false,
      kriterieForVisningAvUndersporsmal: null,
      svar: [],
      undersporsmal: []
    },
    {
      id: "583712",
      tag: "BEKREFT_OPPLYSNINGER",
      sporsmalstekst:
        "Jeg har lest all informasjonen jeg har fått i søknaden og bekrefter at opplysningene jeg har gitt er korrekte.",
      undertekst: null,
      svartype: "CHECKBOX_PANEL",
      min: null,
      max: null,
      pavirkerAndreSporsmal: false,
      kriterieForVisningAvUndersporsmal: null,
      svar: [{ verdi: "CHECKED", avgittAv: null }],
      undersporsmal: []
    }
  ]
};
