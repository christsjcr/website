import { getICS } from "../src/components/events/event";
import { freshers } from "../src/routes/get-involved/freshers/freshers";
import fs from "fs";

const compulsory = getICS("Compulsory Freshers Events", freshers.filter((x) => x.type === "compulsory"));
const optional = getICS("Optional Freshers Events", freshers.filter((x) => x.type === "optional"));

fs.mkdirSync("./static/calendar/freshers", {recursive: true});
fs.writeFileSync("./static/calendar/freshers/compulsory.ics", compulsory);
fs.writeFileSync("./static/calendar/freshers/optional.ics", optional);
