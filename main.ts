import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Robot Vacuum's Funniest Excuse — one line, first person, vacuum's voice.
// Structure: concrete missed spot (setup) + last-line reversal (punchline).
function buildExcuse(spot: string, punchline: string): string {
  return `I didn't miss ${spot} — the dust under the couch unionized, and I joined it. ${punchline}`;
}

const line = buildExcuse("that spot", "I now work for the dust.");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
console.log(line);
