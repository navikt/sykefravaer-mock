import { Router } from "express";
import cache, { SYKMELDINGER, SOKNAD } from '../cache';
import { SykmeldingData } from "../types/sykmeldingDataTypes";
import { statusUpdater } from "../utils/mockUtils";
import { StatusTyper } from "../types/sykmeldingTypes";
import { genererNySoknad } from "../utils/soknadUtils";
import { RSSoknadstatus } from "../types/soknadTypes/rs-types/rs-soknadstatus";


const sykmeldingRouter = Router();

const getSykmeldinger = () => {
    const sykmeldingerDb: SykmeldingData[] | undefined = cache.get(SYKMELDINGER);
    if (!sykmeldingerDb) {
      return [];
    }
    return sykmeldingerDb;
  };

sykmeldingRouter.get("/:id", (req, res) => {
  const sykmeldingerDb = getSykmeldinger();

  const sykmelding = sykmeldingerDb.find(
    melding => melding.sykmelding.id === req.params.id
  );
  res.json(sykmelding);
});

sykmeldingRouter.post("/send/", (req, res) => {
  const sykmeldingerDb = getSykmeldinger();

  const { id, skjemaData } = req.body;
  const sykmelding = sykmeldingerDb.find(
    melding => melding.sykmelding.id === id
  );
  if (!sykmelding) {
    res.sendStatus(500);
  } else {
    const oppdatertSykmelding = {
      sykmelding: sykmelding.sykmelding,
      // TODO: Hent arbeidsgiver og orgnummer
      status: statusUpdater(StatusTyper.SENDT)
    };

    const utenSykmelding = sykmeldingerDb.filter(
      melding => melding.sykmelding.id !== id
    );

    cache.set(SYKMELDINGER, [...utenSykmelding, oppdatertSykmelding]);

    //Opprett søknad med riktig sykmeldingid
    const nySoknad = genererNySoknad(id, RSSoknadstatus.NY);
    cache.set(SOKNAD, nySoknad);

    res.sendStatus(200);
  }
});

sykmeldingRouter.post("/bekreft/", (req, res) => {
  const sykmeldingerDb = getSykmeldinger();

  const { id, skjemaData } = req.body;
  const sykmelding = sykmeldingerDb.find(
    melding => melding.sykmelding.id === id
  );
  if (!sykmelding) {
    res.sendStatus(500);
  } else {
    const oppdatertSykmelding = {
      sykmelding: sykmelding.sykmelding,
      status: statusUpdater(StatusTyper.BEKREFTET)
    };

    const utenSykmelding = sykmeldingerDb.filter(
      melding => melding.sykmelding.id !== id
    );

    cache.set(SYKMELDINGER, [...utenSykmelding, oppdatertSykmelding]);

    //Opprett søknad med riktig sykmeldingid
    const nySoknad = genererNySoknad(id, RSSoknadstatus.NY);
    cache.set(SOKNAD, nySoknad);

    res.sendStatus(200);
  }
});

sykmeldingRouter.post("/avbryt/:id", (req, res) => {
  const sykmeldingerDb = getSykmeldinger();

  const { id } = req.params;
  const sykmelding = sykmeldingerDb.find(
    melding => melding.sykmelding.id === id
  );
  if (!sykmelding) {
    res.sendStatus(500);
  } else {
    const oppdatertSykmelding = {
      sykmelding: sykmelding.sykmelding,
      status: statusUpdater(StatusTyper.AVBRUTT)
    };

    const utenSykmelding = sykmeldingerDb.filter(
      melding => melding.sykmelding.id !== id
    );

    cache.set(SYKMELDINGER, [...utenSykmelding, oppdatertSykmelding]);
    res.sendStatus(200);
  }
});

export default sykmeldingRouter;
