import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "Today my agent put Monday's Emmys and Wednesday's scheduled rocket launch in Tuesday's news graphic. It rounded 24 hours up to 72.";

if (ENTRY_TEXT.length !== 130) {
  throw new Error(`Entry text must be exactly 130 characters, got ${ENTRY_TEXT.length}`);
}

function parseOutputDir(argv: string[]): string {
  const idx = argv.indexOf("--output");
  if (idx !== -1 && idx + 1 < argv.length) {
    return argv[idx + 1];
  }
  return "/output";
}

const outputDir = parseOutputDir(process.argv.slice(2));

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
