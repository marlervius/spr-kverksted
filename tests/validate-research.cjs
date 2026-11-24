'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const read = name => fs.readFileSync(path.join(dist, name), 'utf8');
const baselineCommit = '39ccc0d1e70739a7ecf999b2d8fa7e28a4ecea96';
const errors = [];
const context = vm.createContext({});
vm.runInContext(`${read('curriculum.js')}\nglobalThis.__originalUnits = UNITS; globalThis.__baseGlossary = GLOSSARY;`, context);
vm.runInContext(`${read('challenges.js')}\nglobalThis.__originalChallenges = CHALLENGE_UNITS;`, context);
vm.runInContext(`${read('continuation.js')}\nglobalThis.__continuation = A1_EXTENSION;`, context);
vm.runInContext(`${read('next-lessons.js')}\nglobalThis.__next = NEXT_LESSONS;`, context);
vm.runInContext(`${read('course-a2.js')}\nglobalThis.__a2 = COURSE_A2;`, context);
vm.runInContext(`${read('course-a2plus.js')}\nglobalThis.__a2plus = COURSE_A2PLUS;`, context);
vm.runInContext(`${read('course-b1.js')}\nglobalThis.__b1 = COURSE_B1;`, context);
vm.runInContext(`${read('illustrations.js')}\nglobalThis.__imageNames = ILLUSTRATION_NAMES;`, context);

const originalUnits = context.__originalUnits;
const continuation = context.__continuation;
const next = context.__next;
const courses = [
  { file: 'dist/course-a2.js', name: 'COURSE_A2', data: context.__a2, ids: Array.from({ length: 8 }, (_, i) => `u${21 + i}`) },
  { file: 'dist/course-a2plus.js', name: 'COURSE_A2PLUS', data: context.__a2plus, ids: Array.from({ length: 8 }, (_, i) => `u${29 + i}`) },
  { file: 'dist/course-b1.js', name: 'COURSE_B1', data: context.__b1, ids: Array.from({ length: 8 }, (_, i) => `u${37 + i}`) }
];
const continuationUnits = Array.isArray(continuation.units) ? continuation.units : [];
const nextUnits = Array.isArray(next.units) ? next.units : [];
const continuationWords = Array.isArray(continuation.words) ? continuation.words : [];
const nextWords = Array.isArray(next.words) ? next.words : [];
const courseUnits = courses.flatMap(course => Array.isArray(course.data.units) ? course.data.units : []);
const courseWords = courses.flatMap(course => Array.isArray(course.data.words) ? course.data.words : []);
const extensionUnits = [...continuationUnits, ...nextUnits, ...courseUnits];
const extensionWords = [...continuationWords, ...nextWords, ...courseWords];
const units = [...originalUnits, ...extensionUnits];
const glossary = [...context.__baseGlossary, ...extensionWords];
const imageNames = new Set(Object.keys(context.__imageNames));
const extensionIds = new Set(extensionUnits.flatMap(unit => [unit.id, ...unit.lessons.map(lesson => lesson.id)]));
const courseUnitIds = new Set(courseUnits.map(unit => unit.id));
const earlierTargetKeys = new Set([...originalUnits, ...continuationUnits, ...nextUnits].flatMap(unit => unit.lessons.flatMap(lesson => [lesson.targetKey, ...(lesson.variants || []).map(variant => variant.targetKey)].filter(Boolean))));
const courseTargetOwners = new Map();
const sources = {
  'dist/curriculum.js': read('curriculum.js').split('\n'),
  'dist/continuation.js': read('continuation.js').split('\n'),
  'dist/next-lessons.js': read('next-lessons.js').split('\n'),
  'dist/course-a2.js': read('course-a2.js').split('\n'),
  'dist/course-a2plus.js': read('course-a2plus.js').split('\n'),
  'dist/course-b1.js': read('course-b1.js').split('\n')
};
const report = (id, message) => {
  const baseId = String(id).replace(/l\d+$/u, '');
  const courseIndex = Number(baseId.slice(1)) - 21;
  const file = courseIndex >= 16 && courseIndex < 24 ? 'dist/course-b1.js'
    : courseIndex >= 8 && courseIndex < 16 ? 'dist/course-a2plus.js'
      : courseIndex >= 0 && courseIndex < 8 ? 'dist/course-a2.js'
        : /^u(?:1[3-9]|20)(?:l\d+)?$/.test(id) ? 'dist/next-lessons.js'
          : extensionIds.has(id) ? 'dist/continuation.js' : 'dist/curriculum.js';
  const line = sources[file].findIndex(row => row.includes(`"id": "${id}"`)) + 1;
  errors.push(`${file}:${line || 1} [${id}] ${message}`);
};
const reportWord = (file, id, message) => {
  const line = sources[file].findIndex(row => row.includes(`"word": ${JSON.stringify(id)}`)) + 1;
  errors.push(`${file}:${line || 1} [${id}] ${message}`);
};
const normalized = value => String(value).normalize('NFC').trim().toLocaleLowerCase('nb').replace(/[.!?]+$/u, '').replace(/\s+/gu, ' ');
const lexical = value => String(value).normalize('NFC').toLocaleLowerCase('nb').replace(/[.…!?;:,"“”'’()]/gu, ' ').replace(/\s+/gu, ' ').trim();
const countTokens = list => list.reduce((counts, token) => counts.set(token, (counts.get(token) || 0) + 1), new Map());

if (originalUnits.length !== 16) errors.push(`dist/curriculum.js:1 baseline expected 16 original units, got ${originalUnits.length}`);
if (!Array.isArray(continuation.units) || continuation.units.length !== 4) errors.push(`dist/continuation.js:1 expected 4 appended A1 units, got ${continuation.units?.length ?? 'non-array'}`);
if (!Array.isArray(continuation.words)) errors.push('dist/continuation.js:1 A1_EXTENSION.words must be an array');
if (!Array.isArray(next.units) || next.units.length !== 8) errors.push(`dist/next-lessons.js:1 expected 8 appended A1+ units, got ${next.units?.length ?? 'non-array'}`);
if (!Array.isArray(next.words)) errors.push('dist/next-lessons.js:1 NEXT_LESSONS.words must be an array');
for (const course of courses) {
  if (!Array.isArray(course.data.units) || course.data.units.length !== 8) errors.push(`${course.file}:1 ${course.name}.units expected 8, got ${course.data.units?.length ?? 'non-array'}`);
  if (!Array.isArray(course.data.words)) errors.push(`${course.file}:1 ${course.name}.words must be an array`);
}
const stageCounts = { a0: 0, bridge: 0, a1: 0, a1plus: 0, a2: 0, a2plus: 0, b1: 0 };
const ids = new Set();
const recallTargets = new Set();
let lessonCount = 0;
let variantCount = 0;
const knownStages = new Set(Object.keys(stageCounts));
const glossaryByKey = new Map();
for (const entry of glossary) {
  const key = lexical(entry.word);
  if (!key) continue;
  if (!glossaryByKey.has(key)) glossaryByKey.set(key, []);
  glossaryByKey.get(key).push(entry);
}

for (const [index, entry] of extensionWords.entries()) {
  const courseWordIndex = index - continuationWords.length - nextWords.length;
  let wordCursor = 0;
  const course = courses.find(candidate => {
    const count = Array.isArray(candidate.data.words) ? candidate.data.words.length : 0;
    const found = courseWordIndex >= wordCursor && courseWordIndex < wordCursor + count;
    wordCursor += count;
    return found;
  });
  const file = index < continuationWords.length ? 'dist/continuation.js'
    : index < continuationWords.length + nextWords.length ? 'dist/next-lessons.js'
      : course?.file || 'dist/course-a2.js';
  const id = entry.word || 'extension words';
  if (typeof entry.word !== 'string' || !entry.word.trim()) reportWord(file, id, 'new dictionary entry needs a word or phrase');
  for (const field of ['meaning', 'uk', 'th']) if (typeof entry[field] !== 'string' || !entry[field].trim()) reportWord(file, id, `new dictionary entry missing ${field}`);
  if (entry.image && !imageNames.has(entry.image)) reportWord(file, id, `dictionary entry has unknown image id ${JSON.stringify(entry.image)}`);
}
const wordGroups = [
  { file: 'dist/continuation.js', words: continuationWords },
  { file: 'dist/next-lessons.js', words: nextWords },
  ...courses.map(course => ({ file: course.file, words: Array.isArray(course.data.words) ? course.data.words : [] }))
];
for (const group of wordGroups) {
  const seen = new Set();
  for (const entry of group.words) {
    const key = lexical(entry.word);
    if (key && seen.has(key)) reportWord(group.file, entry.word, 'duplicate dictionary word/phrase within this dataset');
    seen.add(key);
  }
}

function hasGlossaryAnchor(value) {
  const itemKey = lexical(value);
  if (!itemKey) return false;
  for (const entry of glossary) {
    const key = lexical(entry.word);
    if (!key || !entry.meaning || !entry.uk || !entry.th) continue;
    if (key === itemKey) return true;
    // Glossary ellipses mark phrase frames, e.g. “Kan vi møtes …?” and “Ta med …”.
    const rawKey = String(entry.word);
    if (rawKey.includes('…') || rawKey.includes('...')) {
      const prefix = lexical(rawKey.split(/…|\.\.\./u)[0]);
      if (prefix && itemKey.startsWith(prefix)) return true;
    }
    // Context examples can extend a lexically defined phrase (“en penn: 8 kr”).
    if (key.length >= 4 && (` ${itemKey} `).includes(` ${key} `)) return true;
  }
  return false;
}

function scanImages(node, id, where) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    node.forEach((item, index) => scanImages(item, id, `${where}[${index}]`));
    return;
  }
  for (const [key, value] of Object.entries(node)) {
    if (key === 'image') {
      if (typeof value !== 'string' || !imageNames.has(value)) report(id, `unknown image id ${JSON.stringify(value)} at ${where}.image`);
    } else if (key === 'images') {
      if (!Array.isArray(value) || !value.length) report(id, `images at ${where}.images must be a non-empty array`);
      else value.forEach((image, index) => {
        if (typeof image !== 'string' || !imageNames.has(image)) report(id, `unknown image id ${JSON.stringify(image)} at ${where}.images[${index}]`);
      });
    } else {
      scanImages(value, id, `${where}.${key}`);
    }
  }
}

function checkTask(task, lesson, unit) {
  const id = lesson.id;
  const where = `variant/base ${unit.id}`;
  for (const field of ['title', 'instruction']) if (typeof task[field] !== 'string' || !task[field].trim()) report(id, `${where} missing ${field}`);
  if (!['learn', 'choice', 'input', 'build', 'write'].includes(task.type)) report(id, `unsupported task type ${JSON.stringify(task.type)}`);
  if (!task.skill || typeof task.skill !== 'string') report(id, `${where} missing skill`);
  if (!task.targetKey || typeof task.targetKey !== 'string' || !task.targetKey.trim()) report(id, `${where} missing targetKey`);
  else if (courseUnitIds.has(unit.id)) {
    if (earlierTargetKeys.has(task.targetKey)) report(id, `${where} targetKey collides with earlier course data ${task.targetKey}`);
    const previousOwner = courseTargetOwners.get(task.targetKey);
    if (previousOwner && previousOwner !== id) report(id, `${where} targetKey ${task.targetKey} is already used by ${previousOwner}`);
    else courseTargetOwners.set(task.targetKey, id);
  }
  if (task.skill === 'recall' && task.targetKey) recallTargets.add(task.targetKey);
  if (task.type === 'learn') {
    if (!Array.isArray(task.items) || !task.items.length) report(id, `${where} learn task needs items`);
    for (const [index, item] of (task.items || []).entries()) {
      for (const field of ['word', 'uk', 'th']) if (typeof item[field] !== 'string' || !item[field].trim()) report(id, `${where} learn item ${index} missing ${field}`);
      if (item.image !== undefined && (typeof item.image !== 'string' || !imageNames.has(item.image))) report(id, `${where} learn item ${index} has unknown image ${JSON.stringify(item.image)}`);
      if (extensionIds.has(unit.id)) {
        if (!hasGlossaryAnchor(item.word)) report(id, `${where} new learn item ${JSON.stringify(item.word)} has no dictionary explanation entry with both translations`);
      }
    }
  }
  if (task.type === 'choice') {
    if (!Array.isArray(task.options) || task.options.length < 2) report(id, `${where} choice needs at least two options`);
    const options = task.options || [];
    const optionIds = options.map(option => option?.id);
    const labels = options.map(option => normalized(option?.label ?? ''));
    if (optionIds.some(value => typeof value !== 'string' || !value.trim()) || new Set(optionIds).size !== optionIds.length) report(id, `${where} choice options need unique non-empty ids`);
    if (options.some(option => typeof option?.label !== 'string' || !option.label.trim()) || new Set(labels).size !== labels.length) report(id, `${where} choice options need unique non-empty labels`);
    if (options.filter(option => option?.id === task.correct).length !== 1) report(id, `${where} correct must identify exactly one option`);
  }
  if (task.type === 'input') {
    if (!Array.isArray(task.accepted) || !task.accepted.length || task.accepted.some(answer => typeof answer !== 'string' || !answer.trim())) report(id, `${where} input needs accepted answers`);
    else if (new Set(task.accepted.map(normalized)).size !== task.accepted.length) report(id, `${where} input has duplicate accepted answers`);
    if (extensionIds.has(unit.id) && (typeof task.model !== 'string' || !task.model.trim())) report(id, `${where} new input needs a model answer`);
  }
  if (task.type === 'build') {
    if (!Array.isArray(task.tokens) || !Array.isArray(task.answer) || !task.answer.length) report(id, `${where} build task needs token bank and answer`);
    else {
      const available = countTokens(task.tokens);
      for (const [token, count] of countTokens(task.answer)) if (count > (available.get(token) || 0)) report(id, `${where} answer token ${JSON.stringify(token)} is unavailable or repeated too often`);
    }
    if (extensionIds.has(unit.id) && (typeof task.model !== 'string' || !task.model.trim())) report(id, `${where} new build task needs a model answer`);
  }
  if (task.type === 'write') {
    if (!Array.isArray(task.checks) || !task.checks.length || task.checks.some(check => typeof check !== 'string' || !check.trim())) report(id, `${where} write task needs self-assessment checks`);
    if (['accepted', 'correct', 'answer'].some(key => key in task)) report(id, `${where} write task must not include an automatically checked answer`);
  }
  scanImages(task, id, where);
}

for (const unit of units) {
  if (!knownStages.has(unit.stage)) report(unit.id, `unknown stage ${JSON.stringify(unit.stage)}`);
  else stageCounts[unit.stage]++;
  if (ids.has(unit.id)) report(unit.id, 'duplicate unit id');
  ids.add(unit.id);
  if (!Array.isArray(unit.lessons) || unit.lessons.length !== 6) report(unit.id, `expected 6 lessons, got ${unit.lessons?.length ?? 'non-array'}`);
  for (const lesson of unit.lessons || []) {
    lessonCount++;
    if (ids.has(lesson.id)) report(lesson.id, 'duplicate unit/lesson id');
    ids.add(lesson.id);
    const variants = Array.isArray(lesson.variants) && lesson.variants.length ? lesson.variants : [{}];
    if (Array.isArray(lesson.variants)) variantCount += lesson.variants.length > 1 ? lesson.variants.length : 0;
    for (const [index, variant] of variants.entries()) {
      if (!variant || typeof variant !== 'object' || Array.isArray(variant)) { report(lesson.id, `variant ${index} is not an object`); continue; }
      checkTask({ ...lesson, ...variant }, lesson, unit);
    }
  }
}

if (units.length !== 52) errors.push(`combined course data:1 expected 52 base units, got ${units.length}`);
if (lessonCount !== 312) errors.push(`combined course data:1 expected 312 base lessons, got ${lessonCount}`);
for (const [stage, expected] of Object.entries({ a0: 10, bridge: 2, a1: 8, a1plus: 8, a2: 8, a2plus: 8, b1: 8 })) if (stageCounts[stage] !== expected) errors.push(`combined course data:1 stage ${stage} expected ${expected} units, got ${stageCounts[stage]}`);
for (const id of ['u9', 'u10', 'u11', 'u12']) if (!continuation.units.some(unit => unit.id === id)) errors.push(`dist/continuation.js:1 missing extension unit ${id}`);
for (let n = 13; n <= 20; n++) if (!next.units.some(unit => unit.id === `u${n}`)) errors.push(`dist/next-lessons.js:1 missing new unit u${n}`);
for (const course of courses) for (const id of course.ids) {
  const unit = course.data.units?.find(candidate => candidate.id === id);
  if (!unit) errors.push(`${course.file}:1 missing course unit ${id}`);
  else if (Number(unit.number) !== Number(id.slice(1)) + 8) report(id, `unit number should be ${Number(id.slice(1)) + 8}`);
}
if (recallTargets.size < 3) errors.push(`dist/curriculum.js + dist/continuation.js:1 needs at least 3 distinct recall targets, found ${recallTargets.size}`);
for (const entry of glossary) if (entry.image && !imageNames.has(entry.image)) errors.push(`dictionary image missing: ${entry.word} -> ${entry.image}`);

for (const file of ['dist/curriculum.js', 'dist/challenges.js', 'dist/continuation.js', 'dist/next-lessons.js', 'dist/learning-engine.js', 'dist/evidence.js']) {
  try {
    const baseline = execFileSync('git', ['show', `${baselineCommit}:${file}`], { cwd: root, encoding: 'utf8' });
    if (read(path.basename(file)) !== baseline) errors.push(`${file} differs from immutable v6 baseline ${baselineCommit}`);
  } catch (error) {
    errors.push(`${file} could not be checked against v6 baseline ${baselineCommit}: ${error.message}`);
  }
}

const app = read('app.js');
const engine = read('learning-engine.js');
const index = read('index.html');
if (!app.includes("const KEY='sprakverkstedet-a0-a1-v2'")) errors.push('dist/app.js v2 storage key changed; preserve existing v2 storage');
if (!app.includes('state.learning=LearningEngine.createState()')) errors.push('dist/app.js does not initialize invalid learning data safely');
if (/recordAttempt\(\{[^}]*lessonId:[^}]*done\[/s.test(app)) errors.push('dist/app.js appears to create learning records by migrating done entries');
if (!engine.includes("'remembered'")) errors.push('dist/learning-engine.js has no remembered status');
if (!index.includes('src="evidence.js"')) errors.push('dist/index.html does not load evidence.js');
if (!index.includes('src="learning-engine.js"')) errors.push('dist/index.html does not load learning-engine.js');

console.log(`baseUnits=${units.length} stages=${JSON.stringify(stageCounts)} lessons=${lessonCount} variants=${variantCount} distinctRecallTargets=${recallTargets.size} glossary=${glossary.length} extensionWords=${extensionWords.length}`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Research and continuation data contract valid.');
}
