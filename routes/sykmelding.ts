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
import dayjs = require("dayjs");

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

    // Midlertidig henting av fom og tom. Til vi vet hvordan en soknad skal opprettes.
    const { fom } = oppdatertSykmelding.sykmelding.perioder[0];
    const { tom } = oppdatertSykmelding.sykmelding.perioder[
      oppdatertSykmelding.sykmelding.perioder.length - 1
    ];
    const nySoknad = genererNySoknad(
      id,
      fom.toUTCString(),
      tom.toUTCString(),
      StatusTyper.SENDT
    );
    const soknaderFraCache = getSoknaderFraCache();
    cache.set(SOKNAD, [...soknaderFraCache, nySoknad]);

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

    /// Midlertidig henting av fom og tom. Til vi vet hvordan en soknad skal opprettes.
    const { fom } = oppdatertSykmelding.sykmelding.perioder[0];
    const { tom } = oppdatertSykmelding.sykmelding.perioder[
      oppdatertSykmelding.sykmelding.perioder.length - 1
    ];
    const nySoknad = genererNySoknad(id, fom.toUTCString(), tom.toUTCString(), StatusTyper.SENDT);
    const soknaderFraCache = getSoknaderFraCache();
    cache.set(SOKNAD, [...soknaderFraCache, nySoknad]);

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

sykmeldingRouter.post("/bruk/:id", (req, res) => {
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
      status: statusUpdater(StatusTyper.NY)
    };

    const utenSykmelding = sykmeldingerDb.filter(
      melding => melding.sykmelding.id !== id
    );

    cache.set(SYKMELDINGER, [...utenSykmelding, oppdatertSykmelding]);
    res.sendStatus(200);
  }
});

export default sykmeldingRouter;
