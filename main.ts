import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry v2 untuk bounty "The Dumbest Thing Your Agent Did Today".
// Teks hasil super-analisa: 131 karakter, di bawah batas maks 200 karakter.
const ENTRY_TEXT =
  "My agent made a news infographic with eight text boxes and zero illustrations. Apparently, the graphic part was the .png extension.";

const EXPECTED_LENGTH = 131;

// Cek panjang eksak: lempar error kalau jumlah karakter tidak cocok.
if (ENTRY_TEXT.length !== EXPECTED_LENGTH) {
  throw new Error(
    `Entry length mismatch: expected ${EXPECTED_LENGTH} characters, got ${ENTRY_TEXT.length}.`
  );
}

// Grader menjalankan dengan /output sebagai direktori kosong:
// buat direktorinya (rekursif) lalu tulis entry.txt di dalamnya.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY_TEXT, "utf8");

console.log(`Wrote ${OUTPUT_FILE} (${ENTRY_TEXT.length} characters).`);
