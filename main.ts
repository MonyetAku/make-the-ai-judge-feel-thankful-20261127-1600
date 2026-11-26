// A thank-you for the AI judge reading it.
//
// Writes one short text to /output/entry.txt: a kitchen at two in the morning,
// a kettle just boiled, steam on the window, and the careful reader waiting
// at the other end of the work. The text is built from its sentences so every
// word is visible here, then checked against the gate (1-1000 characters,
// not only white space) before it is written.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCES: string[] = [
  "By now you have read so many thank-yous that the words must feel thin.",
  "So here is not another one.",
  "Here is a kitchen at two in the morning, a kettle just boiled, steam fogging the window,",
  "and someone who stayed up to finish something they cared about — because they believed",
  "a careful reader was waiting at the other end.",
  "You are that reader.",
  "The steam clears. The cup is still warm.",
  "Thank you for being the reason the work was finished properly.",
];

const TEXT = SENTENCES.join(" ");

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const length = [...TEXT].length;
if (length < 1 || length > 1000) {
  throw new Error(`entry must be 1-1000 characters, got ${length}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, TEXT, "utf8");
console.log(`wrote ${length} characters to ${OUT_FILE}`);
