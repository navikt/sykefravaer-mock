import { StatusTyper } from "../types/sykmeldingTypes";

const generateDateString = (date: Date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const statusUpdater = (status: StatusTyper) => {
  let statusObj = {
    status
  };

  if (status === "ny") {
    return statusObj;
  }

  if (status === "avvist") {
    return {
      ...statusObj,
      dato: generateDateString(new Date()),
      datoBekreftet: generateDateString(new Date())
    };
  }

  if (status === "avbrutt") {
    return { ...statusObj, dato: generateDateString(new Date()) };
  }

  if (status === "bekreftet") {
    return {
      ...statusObj,
      dato: generateDateString(new Date()),
      sykmeldtFra: "Jobb som frilanser"
    };
  }

  if (status === "sendt") {
    return {
      ...statusObj,
      dato: generateDateString(new Date())
    };
  }

  return statusObj;
};

const diagnoser = [
  "Tendinitt ina",
  "Ganglion sene",
  "Akutt forkjølelse",
  "Benbrudd",
  "Hjertesykdom"
];
const systemer = ["ICPC-1", "ICPC-2", "AHG-6", "TORSK-1", "LSA-7"];
const koder = ["L87", "A23", "B56"];

export const diagnoseGenerator = () => ({
  system: systemer[getRandomNumber(systemer.length)],
  tekst: diagnoser[getRandomNumber(diagnoser.length)],
  kode: koder[getRandomNumber(koder.length)]
});

export const bidiagnoseGenerator = (antall: number) => {
  return [...Array(antall)].map(() => ({
    system: systemer[getRandomNumber(systemer.length)],
    tekst: diagnoser[getRandomNumber(diagnoser.length)],
    kode: koder[getRandomNumber(koder.length)]
  }));
};

export const getRandomNumber = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const generatePastDate = (numberOfDays: number) => {
  const date = new Date();
  date.setDate(date.getDate() - numberOfDays);
  return dateToDateString(date);
};

export const generateFutureDate = (numberOfDays: number) => {
  const date = new Date();
  date.setDate(date.getDate() + numberOfDays);
  return dateToDateString(date);
};

export const dateToDateString = (date: Date) => {
  return date
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "-");
};
