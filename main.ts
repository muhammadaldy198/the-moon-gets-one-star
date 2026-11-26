import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// One-star review of the Moon, witness lane: the Moon has watched every
// late night and remembers them all. Rating + grievance + sting, one joke.
const ENTRY = "One star. The Moon has watched me sneak home at 3 AM for thirty years and remembers it all. It never blinks.";
// 108 characters: every word earns its place, punchline lands on the last beat.

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
