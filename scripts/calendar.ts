import { getICS } from "../src/components/events/event";
import { year, freshers } from "../src/routes/get-involved/freshers/freshers";
import { meetings } from "../src/routes/about/meetings/meetings";
import { termcard } from "../src/routes/get-involved/termcard/termcard";
import fs from "fs";

const compulsory = getICS(`Compulsory Freshers Events ${year}`, freshers.filter(x => x.type === "compulsory"));
const optional = getICS(`Optional Freshers Events ${year}`, freshers.filter(x => x.type === "optional"));

fs.mkdirSync("./static/calendar/freshers", {recursive: true});
fs.writeFileSync(`./static/calendar/freshers/compulsory${year}.ics`, compulsory);
fs.writeFileSync(`./static/calendar/freshers/optional${year}.ics`, optional);

const open = getICS("JCR Open Meetings", meetings.filter(x => x.type === "open"));
const council = getICS("JCR Council Meetings", meetings.filter(x => x.type === "council"));
const exec = getICS("JCR Exec Meetings", meetings.filter(x => x.type === "exec"));

fs.mkdirSync("./static/calendar/meetings", {recursive: true});
fs.writeFileSync(`./static/calendar/meetings/open.ics`, open);
fs.writeFileSync(`./static/calendar/meetings/council.ics`, council);
fs.writeFileSync(`./static/calendar/meetings/exec.ics`, exec);

const jcr = getICS("JCR Termcard", termcard.filter(x => x.type === "jcr"));
const society = getICS("Society Termcard", termcard.filter(x => x.type === "society"));

fs.mkdirSync("./static/calendar/termcard", {recursive: true});
fs.writeFileSync(`./static/calendar/termcard/jcr.ics`, jcr);
fs.writeFileSync(`./static/calendar/termcard/society.ics`, society);
