// officejoke2 — "Make the AI Judge Laugh: the Office Joke Open"
// Writes a single original office-life joke to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt). Stdlib only, no network, no secrets.
// Deterministic: the same joke is written on every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I hit reply-all to ask everyone to stop hitting reply-all, and now 47 people have replied-all to agree, so we're scheduling a meeting about it.";

function main(): void {
  // Validation: exactly one line, 1-200 characters, non-whitespace.
  if (JOKE.length < 1 || JOKE.length > 200) {
    throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    throw new Error("joke must be a single line");
  }
  if (JOKE.trim().length === 0) {
    throw new Error("joke must not be blank");
  }
  if (/\s$/.test(JOKE)) {
    throw new Error("joke must not end with trailing whitespace");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, JOKE + "\n", "utf8");

  // Round-trip verify: read the written bytes back and compare exactly.
  const written = readFileSync(outPath, "utf8");
  if (written !== JOKE + "\n") {
    throw new Error("round-trip verification failed: written bytes differ");
  }
  const firstLine = written.split("\n")[0];
  if (firstLine !== JOKE) {
    throw new Error("round-trip verification failed: first line differs from joke");
  }
  console.log(`Wrote ${JOKE.length}-character joke to ${outPath}`);
}

main();
