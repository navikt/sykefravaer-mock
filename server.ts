import express from "express";
import NodeCache from "node-cache";
import { sykefravaer } from "./data/sykefravaer";
import { brukere } from "./data/brukere";
import { arbeidsgivere } from "./data/arbeidsgivere";
import { sykmeldinger } from "./data/sykmeldinger";
import cors from "cors";
import morganBody from "morgan-body";
import morgan from "morgan";

morgan("dev");

const server = express();
morganBody(server);
server.use(cors());

const cache = new NodeCache();

const SYKEFRAVAER = "SYKEFRAVAER";
const BRUKER = "BRUKER";
const SYKMELDING = "SYKMELDING";
const DEFAULT_SYKEFRAVAER = [sykefravaer[0]];
const DEFAULT_BRUKER = brukere[0].id;
const DEFAULT_SYKMELDING = sykmeldinger[0];
cache.set(SYKEFRAVAER, DEFAULT_SYKEFRAVAER);
cache.set(BRUKER, DEFAULT_BRUKER);
cache.set(SYKMELDING, DEFAULT_SYKMELDING);

server.get("/brukere", (req, res) => {
  res.json(brukere);
});

server.get("/bruker/", (req, res) => {
  const brukerId = cache.get(BRUKER);
  res.json(brukerId);
});

server.post("/bruker/:brukerId", (req, res) => {
  const brukerId = req.params.brukerId;
  if (brukerId) {
    const aktuellBruker = brukere.find(bruker => bruker.id === brukerId);
    if (aktuellBruker) {
      const aktuelleFravaer = aktuellBruker.sykefravaerIds.map(id =>
        sykefravaer.find(sf => sf.id === id)
      );
      cache.set(SYKEFRAVAER, aktuelleFravaer);
      cache.set(BRUKER, brukerId);
      res.sendStatus(200);
    }
  } else {
    res.sendStatus(500);
  }
});

server.get("/sykefravaer/", (req, res) => {
  const fravaer = cache.get(SYKEFRAVAER);
  if (fravaer) {
    res.json(fravaer);
  } else {
    res.sendStatus(500);
  }
});

server.get("/sykefravaer/:sykefravaerId", (req, res) => {
  const sykefravaerId = req.params.sykefravaerId;
  if (sykefravaerId) {
    const aktueltFravaer = res.json(
      sykefravaer.find(sf => sf.id === sykefravaerId)
    );
    if (aktueltFravaer) {
      res.json(aktueltFravaer);
    }
  } else {
    res.sendStatus(500);
  }
});

server.get("/sykmelding/:id", (req, res) => {
  const sykmelding = sykmeldinger.find(
    melding => melding.sykmelding.id === req.params.id
  );
  res.json(sykmelding);
});

server.get("/informasjon/arbeidsgivere/:sykmeldingId", (req, res) => {
  res.json(arbeidsgivere);
});

server.post("/sykmeldinger/:id/actions/erUtenforVentetid", (req, res) => {
  res.json({ erUtenforVentetid: false });
});

server.post("/sykmelding/:id", (req, res) => {
  // TODO
  res.sendStatus(500);
});

server.delete("/reset", (req, res) => {
  cache.flushAll();
  cache.set(SYKEFRAVAER, DEFAULT_SYKEFRAVAER);
});

server.listen(5000, () => {
  console.log("server running on port 5000");
});
