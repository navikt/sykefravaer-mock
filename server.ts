import express from "express";
import NodeCache from "node-cache";
import { sykefravaer } from "./data/sykefravaer";
import { brukere } from "./data/brukere";
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
const DEFAULT_SYKEFRAVAER = [sykefravaer[0]];
const DEFAULT_BRUKER = brukere[0].id;
cache.set(SYKEFRAVAER, DEFAULT_SYKEFRAVAER);
cache.set(BRUKER, DEFAULT_BRUKER);

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
  // TODO
  res.sendStatus(500);
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
