import { Router } from "express";
import cache, {
  SYKMELDINGER,
  SOKNAD,
  getSykmeldingerFraCache,
  getSoknaderFraCache
} from "../cache";
import { SykmeldingData } from "../types/sykmeldingDataTypes";
import { statusUpdater } from "../utils/mockUtils";
import { StatusTyper } from "../types/sykmeldingTypes";
import { genererNySoknad } from "../utils/soknadUtils";
import { RSSoknadstatus } from "../types/soknadTypes/rs-types/rs-soknadstatus";

const sykmeldingRouter = Router();

sykmeldingRouter.get("/:id", (req, res) => {
  const sykmeldingerDb = getSykmeldingerFraCache();

  const sykmelding = sykmeldingerDb.find(
    melding => melding.sykmelding.id === req.params.id
  );
  res.json(sykmelding);
});

sykmeldingRouter.post("/send/", (req, res) => {
  const sykmeldingerDb = getSykmeldingerFraCache();

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
    const { fom, tom } = oppdatertSykmelding.sykmelding.perioder[0]; //Midlertidig. til vi vet hvordan en søknad skal opprettes
    const nySoknad = genererNySoknad(id, RSSoknadstatus.NY, fom, tom);
    const sokmeldingDb = getSoknaderFraCache();
    cache.set(SOKNAD, [...sokmeldingDb, nySoknad]);

    res.sendStatus(200);
  }
});

sykmeldingRouter.post("/bekreft/", (req, res) => {
  const sykmeldingerDb = getSykmeldingerFraCache();

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
    const { fom, tom } = oppdatertSykmelding.sykmelding.perioder[0]; //Midlertidig. til vi vet hvordan en søknad skal opprettes
    const nySoknad = genererNySoknad(id, RSSoknadstatus.NY, fom, tom);
    const sokmeldingDb = getSoknaderFraCache();
    cache.set(SOKNAD, [...sokmeldingDb, nySoknad]);

    res.sendStatus(200);
  }
});

sykmeldingRouter.post("/avbryt/:id", (req, res) => {
  const sykmeldingerDb = getSykmeldingerFraCache();

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
