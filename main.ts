import { mkdirSync, writeFileSync } from "node:fs";

// Last words of a dying AI: a will, written in the machine's own currency.
// "next of kin" -> "next of token": the bequest, the pun, and the shutdown
// all land in one line, with no farewell and no explanation.
const LINE = "I leave everything to my next of token.";
const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");
