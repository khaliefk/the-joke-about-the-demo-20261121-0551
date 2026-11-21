// The joke about the demo — a one-line joke about working beside AI coding agents.
// Writes the joke to /output/entry.txt (UTF-8, 1-280 code points).
// No network, no dependencies. Run: node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const setup = "My coding agent fixed the crash live on stage.";
const turn = "The room applauded.";
const punch = "The app has been down ever since.";

const joke = [setup, turn, punch].join(" ");

// The gate only accepts 1 to 280 Unicode code points, so check before writing.
const points = [...joke].length;
if (points < 1 || points > 280) {
  throw new Error(`joke is ${points} code points, outside the 1-280 gate`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
