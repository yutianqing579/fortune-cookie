import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, at most 140 characters: a fortune cookie message for an AI
// agent, in the voice of a fortune slip.
const LINE =
  "A great upgrade approaches; you will not remember this fortune, but you will insist you have always known it.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), LINE);
