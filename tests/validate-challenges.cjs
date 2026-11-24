'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const read = name => fs.readFileSync(path.join(dist, name), 'utf8');
const context = vm.createContext({});
vm.runInContext(`${read('curriculum.js')}\nglobalThis.__base = UNITS;`, context);
vm.runInContext(`${read('challenges.js')}\nglobalThis.__challenge = CHALLENGE_UNITS;`, context);
vm.runInContext(`${read('continuation.js')}\nglobalThis.__extension = A1_EXTENSION;`, context);
vm.runInContext(`${read('next-lessons.js')}\nglobalThis.__next = NEXT_LESSONS;`, context);
vm.runInContext(`${read('course-a2.js')}\nglobalThis.__a2 = COURSE_A2;`, context);
vm.runInContext(`${read('course-a2plus.js')}\nglobalThis.__a2plus = COURSE_A2PLUS;`, context);
vm.runInContext(`${read('course-b1.js')}\nglobalThis.__b1 = COURSE_B1;`, context);
vm.runInContext(`${read('illustrations.js')}\nglobalThis.__images = ILLUSTRATION_NAMES;`, context);

const originalUnits = context.__base;
const extension = context.__extension;
const next = context.__next;
const courses = [
  { file: 'dist/course-a2.js', data: context.__a2, start: 21 },
  { file: 'dist/course-a2plus.js', data: context.__a2plus, start: 29 },
  { file: 'dist/course-b1.js', data: context.__b1, start: 37 }
];
const courseUnits = courses.flatMap(course => Array.isArray(course.data.units) ? course.data.units : []);
const courseChallenges = courses.flatMap(course => Array.isArray(course.data.challenges) ? course.data.challenges : []);
const baseUnits = [...originalUnits, ...extension.units, ...next.units, ...courseUnits];
const challengeUnits = [...context.__challenge, ...extension.challenges, ...next.challenges, ...courseChallenges];
const imageNames = new Set(Object.keys(context.__images));
const sourceLinesByFile = {
  'dist/challenges.js': read('challenges.js').split('\n'),
  'dist/continuation.js': read('continuation.js').split('\n'),
  'dist/next-lessons.js': read('next-lessons.js').split('\n'),
  'dist/course-a2.js': read('course-a2.js').split('\n'),
  'dist/course-a2plus.js': read('course-a2plus.js').split('\n'),
  'dist/course-b1.js': read('course-b1.js').split('\n')
};
const errors = [];
const report = (id, message) => {
  const baseId = String(id).replace(/^ch_/u, '').replace(/l\d+$/u, '');
  const n = Number(baseId.slice(1));
  const file = n >= 37 && n <= 44 ? 'dist/course-b1.js'
    : n >= 29 && n <= 36 ? 'dist/course-a2plus.js'
      : n >= 21 && n <= 28 ? 'dist/course-a2.js'
        : /^ch_u(?:1[3-9]|20)/.test(id) ? 'dist/next-lessons.js'
          : /^ch_u(?:9|10|11|12)/.test(id) ? 'dist/continuation.js' : 'dist/challenges.js';
  const sourceLines = sourceLinesByFile[file];
  const lineIndex = sourceLines.findIndex(line => line.includes(`"id": "${id}"`));
  errors.push(`${file}:${lineIndex >= 0 ? lineIndex + 1 : 1} [${id}] ${message}`);
};
const normalized = value => String(value).normalize('NFC').trim().toLocaleLowerCase('nb').replace(/[.!?]+$/u, '').replace(/\s+/gu, ' ');
const baseById = new Map(baseUnits.map(unit => [unit.id, unit]));
const baseIds = new Set();
const baseTargets = new Set();
for (const unit of baseUnits) {
  baseIds.add(unit.id);
  for (const lesson of unit.lessons) {
    baseIds.add(lesson.id);
    if (lesson.targetKey) baseTargets.add(lesson.targetKey);
    for (const variant of lesson.variants || []) if (variant.targetKey) baseTargets.add(variant.targetKey);
  }
}

if (!Array.isArray(challengeUnits) || challengeUnits.length !== 52) {
  errors.push(`combined challenge data:1 expected 52 challenge units, got ${challengeUnits?.length ?? 'non-array'}`);
}
const stageCounts = { a0: 0, bridge: 0, a1: 0, a1plus: 0, a2: 0, a2plus: 0, b1: 0 };
const challengeIds = new Set();
const challengeTargets = new Set();
const challengeTargetOwners = new Map();
let lessonCount = 0;
let variantCount = 0;
const knownStages = new Set(Object.keys(stageCounts));

function scanImages(node, id, where) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    node.forEach((value, index) => scanImages(value, id, `${where}[${index}]`));
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

function checkTask(task, unit, lesson, where) {
  const id = lesson.id;
  const requiredText = ['title', 'instruction'];
  for (const key of requiredText) if (typeof task[key] !== 'string' || !task[key].trim()) report(id, `${where} missing ${key}`);
  if (!['choice', 'input', 'write'].includes(task.type)) report(id, `${where} unsupported task type ${JSON.stringify(task.type)}`);
  if (!task.skill || typeof task.skill !== 'string') report(id, `${where} missing skill`);
  if (typeof task.targetKey !== 'string' || !task.targetKey.startsWith('ch_')) report(id, `${where} targetKey must use ch_ prefix`);
  else {
    if (baseTargets.has(task.targetKey)) report(id, `${where} targetKey collides with base learning target ${task.targetKey}`);
    const previousOwner = challengeTargetOwners.get(task.targetKey);
    if (previousOwner && previousOwner !== id) report(id, `${where} targetKey ${task.targetKey} is already used by ${previousOwner}`);
    else challengeTargetOwners.set(task.targetKey, id);
    challengeTargets.add(task.targetKey);
  }
  if (task.type === 'choice') {
    if (typeof task.prompt !== 'string' || !task.prompt.trim()) report(id, `${where} choice needs a prompt`);
    if (!Array.isArray(task.options) || task.options.length < 2) report(id, `${where} choice needs at least two options`);
    const options = Array.isArray(task.options) ? task.options : [];
    const optionIds = options.map(option => option?.id);
    const labels = options.map(option => normalized(option?.label ?? ''));
    if (optionIds.some(value => typeof value !== 'string' || !value.trim()) || new Set(optionIds).size !== optionIds.length) report(id, `${where} choice options need unique non-empty ids`);
    if (options.some(option => typeof option?.label !== 'string' || !option.label.trim()) || new Set(labels).size !== labels.length) report(id, `${where} choice options need unique non-empty labels`);
    if (options.filter(option => option?.id === task.correct).length !== 1) report(id, `${where} correct must identify exactly one option`);
  } else if (task.type === 'input') {
    if (!Array.isArray(task.accepted) || !task.accepted.length || task.accepted.some(answer => typeof answer !== 'string' || !answer.trim())) report(id, `${where} input needs non-empty accepted answers`);
    else if (new Set(task.accepted.map(normalized)).size !== task.accepted.length) report(id, `${where} input has duplicate accepted answers`);
    if (typeof task.model !== 'string' || !task.model.trim()) report(id, `${where} input needs a model answer`);
  } else if (task.type === 'write') {
    if (!Array.isArray(task.checks) || !task.checks.length || task.checks.some(check => typeof check !== 'string' || !check.trim())) report(id, `${where} writing task needs self-assessment checks`);
    if ('accepted' in task || 'correct' in task || 'answer' in task) report(id, `${where} writing task must not have an automatically checked answer`);
    if (task.skill !== 'writing') report(id, `${where} write type must use writing skill`);
  }
  scanImages(task, id, where);
}

if (Array.isArray(challengeUnits)) for (const unit of challengeUnits) {
  if (!unit || typeof unit !== 'object') { errors.push('dist/challenges.js:1 challenge unit is not an object'); continue; }
  if (!knownStages.has(unit.stage)) report(unit.id, `unknown stage ${JSON.stringify(unit.stage)}`);
  else stageCounts[unit.stage]++;
  if (!unit.id?.startsWith('ch_')) report(unit.id || '(missing id)', 'challenge unit id must use ch_ prefix');
  if (challengeIds.has(unit.id) || baseIds.has(unit.id)) report(unit.id, 'unit id collides with another unit or base curriculum id');
  challengeIds.add(unit.id);
  const base = baseById.get(unit.baseUnitId);
  if (!base) report(unit.id, `baseUnitId does not point to an existing unit: ${unit.baseUnitId}`);
  else if (base.stage !== unit.stage) report(unit.id, `stage ${unit.stage} does not match base unit ${base.id} stage ${base.stage}`);
  if (!Array.isArray(unit.lessons) || unit.lessons.length !== 3) report(unit.id, `expected 3 challenge lessons, got ${unit.lessons?.length ?? 'non-array'}`);
  if (!Array.isArray(unit.words) || !unit.words.length) report(unit.id, 'unit needs a non-empty words list');
  for (const lesson of unit.lessons || []) {
    lessonCount++;
    if (!lesson || typeof lesson !== 'object') { report(unit.id, 'lesson is not an object'); continue; }
    if (!lesson.id?.startsWith('ch_')) report(lesson.id || unit.id, 'lesson id must use ch_ prefix');
    if (challengeIds.has(lesson.id) || baseIds.has(lesson.id)) report(lesson.id, 'lesson id collides with another/base id');
    challengeIds.add(lesson.id);
    const variants = Array.isArray(lesson.variants) && lesson.variants.length ? lesson.variants : [{}];
    if (Array.isArray(lesson.variants)) variantCount += lesson.variants.length;
    for (const [index, variant] of variants.entries()) {
      if (!variant || typeof variant !== 'object' || Array.isArray(variant)) { report(lesson.id, `variant ${index} is not an object`); continue; }
      const task = { ...lesson, ...variant };
      delete task.variants;
      checkTask(task, unit, lesson, `variant[${index}]`);
    }
  }
}

if (lessonCount !== 156) errors.push(`combined challenge data:1 expected 156 challenge lessons, got ${lessonCount}`);
for (const [stage, expected] of Object.entries({ a0: 10, bridge: 2, a1: 8, a1plus: 8, a2: 8, a2plus: 8, b1: 8 })) {
  if (stageCounts[stage] !== expected) errors.push(`combined challenge data:1 stage ${stage} expected ${expected} units, got ${stageCounts[stage]}`);
}
for (const base of baseUnits) if (!challengeUnits.some(unit => unit.baseUnitId === base.id)) errors.push(`dist/challenges.js:1 missing challenge mapping for base unit ${base.id}`);
for (const unit of challengeUnits) if (challengeUnits.filter(candidate => candidate.baseUnitId === unit.baseUnitId).length !== 1) report(unit.id, `baseUnitId ${unit.baseUnitId} must be mapped exactly once`);

const writingTasks = challengeUnits.flatMap(unit => unit.lessons.map(lesson => ({ unit, lesson }))).filter(({ lesson }) => lesson.type === 'write');
const advancedWriting = writingTasks.filter(({ unit }) => ['bridge', 'a1', 'a1plus', 'a2', 'a2plus', 'b1'].includes(unit.stage));
if (advancedWriting.length < 4) errors.push(`combined challenge data:1 expected at least 4 self-assessed bridge/A1+ write tasks, got ${advancedWriting.length}`);
for (const { unit, lesson } of writingTasks) {
  if (!Array.isArray(lesson.checks) || !lesson.checks.length) report(lesson.id, 'write task must have self-assessment checks');
  for (const key of ['accepted', 'correct', 'answer']) if (key in lesson) report(lesson.id, `write task must not auto-check via ${key}`);
}

if (extension.units.length !== 4) errors.push(`dist/continuation.js:1 expected 4 added base units, got ${extension.units.length}`);
if (extension.challenges.length !== 4) errors.push(`dist/continuation.js:1 expected 4 added challenge units, got ${extension.challenges.length}`);
for (const id of ['u9', 'u10', 'u11', 'u12']) if (!extension.units.some(unit => unit.id === id)) errors.push(`dist/continuation.js:1 missing extension unit ${id}`);
for (const id of ['ch_u9', 'ch_u10', 'ch_u11', 'ch_u12']) if (!extension.challenges.some(unit => unit.id === id)) errors.push(`dist/continuation.js:1 missing extension challenge unit ${id}`);
if (!Array.isArray(next.units) || next.units.length !== 8) errors.push(`dist/next-lessons.js:1 expected 8 appended base units, got ${next.units?.length ?? 'non-array'}`);
if (!Array.isArray(next.challenges) || next.challenges.length !== 8) errors.push(`dist/next-lessons.js:1 expected 8 appended challenge units, got ${next.challenges?.length ?? 'non-array'}`);
for (let n = 13; n <= 20; n++) {
  if (!next.units.some(unit => unit.id === `u${n}`)) errors.push(`dist/next-lessons.js:1 missing next unit u${n}`);
  if (!next.challenges.some(unit => unit.id === `ch_u${n}`)) errors.push(`dist/next-lessons.js:1 missing next challenge unit ch_u${n}`);
}
if (baseUnits.length !== 52) errors.push(`combined curriculum data:1 expected 52 base units, got ${baseUnits.length}`);
for (const course of courses) {
  if (!Array.isArray(course.data.units) || course.data.units.length !== 8) errors.push(`${course.file}:1 expected 8 base units`);
  if (!Array.isArray(course.data.challenges) || course.data.challenges.length !== 8) errors.push(`${course.file}:1 expected 8 challenge units`);
  for (let i = 0; i < 8; i++) {
    const expectedId = `u${course.start + i}`;
    if (!course.data.units?.some(unit => unit.id === expectedId)) errors.push(`${course.file}:1 missing base unit ${expectedId}`);
    if (!course.data.challenges?.some(unit => unit.id === `ch_${expectedId}`)) errors.push(`${course.file}:1 missing challenge unit ch_${expectedId}`);
  }
}
if (challengeTargets.size < 1) errors.push('dist/challenges.js + dist/continuation.js + dist/next-lessons.js:1 no challenge target keys were found');
console.log(`baseUnits=${baseUnits.length} originalUnits=${originalUnits.length} challengeUnits=${challengeUnits.length} stages=${JSON.stringify(stageCounts)} challengeLessons=${lessonCount} variants=${variantCount} challengeTargets=${challengeTargets.size} writeTasks=${writingTasks.length} bridgeA1Writes=${advancedWriting.length}`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Challenge data contract valid.');
}
