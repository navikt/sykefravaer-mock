import express from "express";
import cors from "cors";
import morganBody from "morgan-body";
import morgan from "morgan";

import brukerRouter from "./routes/bruker";
import sykefravaerRouter from "./routes/sykefravaer";
import sykmeldingRouter from "./routes/sykmelding";
import sykmeldingerRouter from "./routes/sykmeldinger";
import soknadRouter from "./routes/soknad";
import informasjonRouter from "./routes/informasjon";

import { initializeCache } from "./cache";

import { brukere } from "./data/brukere";

// Server setup
morgan("dev");
const PORT = 5000;
const server = express();
morganBody(server);
server.use(cors());
server.use(express.json());

// Cache setup
initializeCache();

// Basic routes
server.get("/reset", (req, res) => {
  initializeCache();
  res.sendStatus(200);
});

server.get("/brukere", (req, res) => {
  res.json(brukere);
});

// Bruker routes
server.use("/bruker", brukerRouter);
// Sykefravaer routes
server.use("/sykefravaer", sykefravaerRouter);
// Sykmelding routes
server.use("/sykmelding", sykmeldingRouter);
// Sykmeldinger routes
server.use("/sykmeldinger", sykmeldingerRouter);
// Soknad routes
server.use("/soknad", soknadRouter);
// Informasjon routes
server.use("/informasjon,", informasjonRouter);

// Start server
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
