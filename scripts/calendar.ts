import { getICS } from "../src/components/events/event";
import { year, freshers } from "../src/routes/get-involved/freshers/freshers";
import fs from "fs";

const compulsory = getICS(`Compulsory Freshers Events ${year}`, freshers.filter((x) => x.type === "compulsory"));
const optional = getICS(`Optional Freshers Events ${year}`, freshers.filter((x) => x.type === "optional"));

fs.mkdirSync("./static/calendar/freshers", {recursive: true});
fs.writeFileSync(`./static/calendar/freshers/compulsory${year}.ics`, compulsory);
fs.writeFileSync(`./static/calendar/freshers/optional${year}.ics`, optional);
