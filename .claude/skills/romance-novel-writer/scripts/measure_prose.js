#!/usr/bin/env node
/*
 * measure_prose.js: objective prose measurements for chapter files.
 *
 * Usage:
 *   node measure_prose.js chapters/*.md
 *   node measure_prose.js ch01.md ch02.md --tics "technically,careful,suddenly"
 *
 * Reports, per file and in total:
 *   - word count
 *   - average sentence length, share of very short (<=5 words) and very long (>=30 words) sentences
 *   - share of paragraphs that open with dialogue
 *   - counts of filler words, filter verbs, softener adverbs and any custom "tics" you list
 *
 * The baselines it compares against come from references/writing-style.md section 1.
 * They are DIALS, not laws: a deliberately staccato or lyrical book can differ on purpose.
 * Dialogue lines and fragments count as sentences, which is how the baselines were measured too.
 * Requires only Node (no packages).
 */
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const files = [];
let customTics = [];
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--tics') { customTics = (args[++i] || '').split(',').map(s => s.trim()).filter(Boolean); }
  else files.push(args[i]);
}
if (!files.length) {
  console.error('Usage: node measure_prose.js <chapter files...> [--tics "word1,word2"]');
  process.exit(1);
}

const BASELINE = { avgSentence: 12, shortShare: 25, longShare: 4, dialogueOpen: 33 };
const FILLER = ['just', 'very', 'quite', 'a little', 'a bit', 'for some reason', 'suddenly', 'somehow'];
const FILTER = ['felt', 'knew', 'realised', 'realized', 'noticed', 'wondered', 'seemed', 'saw that'];
const SOFTENERS = ['softly', 'gently', 'slowly', 'tenderly', 'quietly'];
const B = String.fromCharCode(92) + 'b';

function clean(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/^\s*\* \* \*\s*$/gm, '')
    .replace(/^#+ .*$/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/[*_`]/g, '');
}
function paragraphs(text) {
  return text.split(/\n\s*\n/).map(s => s.trim()).filter(Boolean);
}
function sentences(text) {
  return text.replace(/\n/g, ' ')
    .split(/(?<=[.!?])["”']?\s+(?=[A-Z"“'—])/)
    .map(s => s.trim()).filter(Boolean);
}
function count(text, phrase) {
  const re = new RegExp(B + phrase.replace(/ /g, '\\s+') + B, 'gi');
  return (text.match(re) || []).length;
}
function tally(text, list) {
  const out = {};
  for (const w of list) { const n = count(text, w); if (n) out[w] = n; }
  return out;
}
function pct(n, d) { return d ? (100 * n / d) : 0; }
function flag(value, low, high) {
  if (value < low) return ' (below baseline)';
  if (value > high) return ' (above baseline)';
  return '';
}

let allText = '';
const rows = [];
for (const f of files) {
  const raw = fs.readFileSync(f, 'utf8');
  const text = clean(raw);
  allText += '\n' + text;
  const paras = paragraphs(text);
  const sents = sentences(text);
  const lens = sents.map(s => s.split(/\s+/).length);
  const words = text.split(/\s+/).filter(Boolean).length;
  const avg = lens.reduce((a, b) => a + b, 0) / (lens.length || 1);
  rows.push({
    file: path.basename(f), words, paras: paras.length,
    avg, short: pct(lens.filter(n => n <= 5).length, lens.length),
    long: pct(lens.filter(n => n >= 30).length, lens.length),
    dlg: pct(paras.filter(p => /^["“]/.test(p)).length, paras.length),
  });
}

console.log('\nPER FILE');
console.log('file'.padEnd(44) + 'words'.padStart(7) + 'avgSent'.padStart(9) + '%<=5w'.padStart(8) + '%>=30w'.padStart(8) + '%dlgOpen'.padStart(10));
for (const r of rows) {
  console.log(r.file.padEnd(44) + String(r.words).padStart(7) + r.avg.toFixed(1).padStart(9) +
    r.short.toFixed(0).padStart(8) + r.long.toFixed(0).padStart(8) + r.dlg.toFixed(0).padStart(10));
}

const totalWords = rows.reduce((a, r) => a + r.words, 0);
const wAvg = k => rows.reduce((a, r) => a + r[k] * r.words, 0) / (totalWords || 1);
console.log('\nTOTAL words: ' + totalWords);
console.log('Average sentence length: ' + wAvg('avg').toFixed(1) + ' (baseline about ' + BASELINE.avgSentence + ')' + flag(wAvg('avg'), 10.5, 14));
console.log('Sentences <= 5 words:    ' + wAvg('short').toFixed(0) + '% (baseline about ' + BASELINE.shortShare + '%)' + flag(wAvg('short'), 18, 33));
console.log('Sentences >= 30 words:   ' + wAvg('long').toFixed(0) + '% (baseline about ' + BASELINE.longShare + '%)' + flag(wAvg('long'), 2, 7));
console.log('Paragraphs opening with dialogue: ' + wAvg('dlg').toFixed(0) + '% (baseline about ' + BASELINE.dialogueOpen + '%)' + flag(wAvg('dlg'), 25, 42));

const show = (label, obj) => console.log(label.padEnd(18) + (Object.keys(obj).length ? JSON.stringify(obj) : 'none'));
console.log('\nWORD COUNTS (whole text)');
show('Filler:', tally(allText, FILLER));
show('Filter verbs:', tally(allText, FILTER));
show('Softeners:', tally(allText, SOFTENERS));
if (customTics.length) show('Custom tics:', tally(allText, customTics));

console.log('\nNote: the numbers are signals, not verdicts. A repeated phrase that changes meaning each time is a motif; one that does not is a tic.');
