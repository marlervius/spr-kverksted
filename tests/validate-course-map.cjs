'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const read = name => fs.readFileSync(path.join(dist, name), 'utf8');
const context = vm.createContext({});
const loads = [
  ['curriculum.js', 'globalThis.__base = UNITS;'],
  ['continuation.js', 'globalThis.__continuation = A1_EXTENSION;'],
  ['next-lessons.js', 'globalThis.__next = NEXT_LESSONS;'],
  ['course-a2.js', 'globalThis.__a2 = COURSE_A2;'],
  ['course-a2plus.js', 'globalThis.__a2plus = COURSE_A2PLUS;'],
  ['course-b1.js', 'globalThis.__b1 = COURSE_B1;'],
  ['course-map.js', 'globalThis.__map = COURSE_MAP;']
];
for (const [file, exportExpression] of loads) vm.runInContext(`${read(file)}\n${exportExpression}`, context);

const map = context.__map;
const units = [
  ...context.__base,
  ...context.__continuation.units,
  ...context.__next.units,
  ...context.__a2.units,
  ...context.__a2plus.units,
  ...context.__b1.units
];
const errors = [];
const lines = read('course-map.js').split('\n');
const report = (moduleId, message) => {
  const index = lines.findIndex(line => line.includes(`'${moduleId}'`) || line.includes(`"${moduleId}"`));
  errors.push(`dist/course-map.js:${index >= 0 ? index + 1 : 1} [${moduleId}] ${message}`);
};
const nonempty = value => typeof value === 'string' && value.trim().length > 0;

if (!map || typeof map !== 'object') errors.push('dist/course-map.js:1 COURSE_MAP must be an object');
else {
  for (const key of ['title', 'scope']) if (!nonempty(map[key])) errors.push(`dist/course-map.js:1 COURSE_MAP.${key} must be non-empty`);
  if (!Array.isArray(map.limitations) || map.limitations.length === 0 || map.limitations.some(item => !nonempty(item))) errors.push('dist/course-map.js:1 limitations must be a non-empty array of descriptions');
  if (!Array.isArray(map.modules) || map.modules.length !== 13) errors.push(`dist/course-map.js:1 expected 13 modules after the m03 split, got ${map.modules?.length ?? 'non-array'}`);
  if (!Array.isArray(map.sources) || map.sources.length === 0) errors.push('dist/course-map.js:1 sources must be a non-empty array');
}

const validSourceIds = new Set();
const sourceUrls = new Set();
for (const [index, source] of (map?.sources || []).entries()) {
  if (!nonempty(source.id) || !nonempty(source.title)) errors.push(`dist/course-map.js:1 source[${index}] needs id and title`);
  if (validSourceIds.has(source.id)) errors.push(`dist/course-map.js:1 duplicate source id ${source.id}`);
  validSourceIds.add(source.id);
  let url;
  try { url = new URL(source.url); }
  catch { errors.push(`dist/course-map.js:1 source ${source.id} has invalid URL ${JSON.stringify(source.url)}`); }
  if (url && !['http:', 'https:'].includes(url.protocol)) errors.push(`dist/course-map.js:1 source ${source.id} URL must use http(s)`);
  if (url && /(^|\.)(localhost|example\.com|invalid)$/iu.test(url.hostname)) errors.push(`dist/course-map.js:1 source ${source.id} uses a placeholder host ${url.hostname}`);
  if (url) {
    if (sourceUrls.has(url.href)) errors.push(`dist/course-map.js:1 duplicate source URL ${url.href}`);
    sourceUrls.add(url.href);
  }
}

const expectedStages = { a0: 2, bridge: 1, a1: 2, a1plus: 2, a2: 2, a2plus: 2, b1: 2 };
const stageCounts = Object.fromEntries(Object.keys(expectedStages).map(stage => [stage, 0]));
const unitById = new Map(units.map(unit => [unit.id, unit]));
const mapped = new Map();
const moduleIds = new Set();
for (const module of map?.modules || []) {
  const id = module.id || '(missing id)';
  if (!nonempty(module.id) || moduleIds.has(module.id)) report(id, 'module id must be non-empty and unique');
  moduleIds.add(module.id);
  if (!nonempty(module.title)) report(id, 'module title must be non-empty');
  if (!(module.stage in expectedStages)) report(id, `unknown stage ${JSON.stringify(module.stage)}`);
  else stageCounts[module.stage]++;
  if (!Array.isArray(module.unitIds) || module.unitIds.length === 0) report(id, 'unitIds must be a non-empty array');
  for (const unitId of module.unitIds || []) {
    const unit = unitById.get(unitId);
    if (!unit) report(id, `references missing unit ${unitId}`);
    else if (unit.stage !== module.stage) report(id, `stage ${module.stage} does not match unit ${unitId} stage ${unit.stage}`);
    const previous = mapped.get(unitId);
    if (previous) report(id, `unit ${unitId} is also mapped by ${previous}`);
    else mapped.set(unitId, id);
  }
  if (!Array.isArray(module.goals) || module.goals.length === 0 || module.goals.some(goal => !nonempty(goal))) report(id, 'goals must be a non-empty array of descriptions');
  if (!Array.isArray(module.prerequisites) || module.prerequisites.some(item => !nonempty(item))) report(id, 'prerequisites must be an array of non-empty descriptions');
  const activity = module.teacherActivity;
  if (!activity || !nonempty(activity.instruction) || !nonempty(activity.teacherScript) || !Array.isArray(activity.checklist) || activity.checklist.length === 0 || activity.checklist.some(item => !nonempty(item))) report(id, 'teacherActivity needs instruction, teacherScript, and a non-empty checklist');
  if (!Array.isArray(module.curriculumLinks) || module.curriculumLinks.length === 0) report(id, 'curriculumLinks must be a non-empty array');
  for (const link of module.curriculumLinks || []) {
    if (!validSourceIds.has(link.sourceId)) report(id, `curriculum link references unknown source ${link.sourceId}`);
    if (!nonempty(link.targetSummary)) report(id, 'curriculum link needs targetSummary');
    if (!['partial', 'teacher-led', 'full'].includes(link.coverage)) report(id, `invalid curriculum coverage ${JSON.stringify(link.coverage)}`);
  }
  if (module.status === 'published' && module.unitIds?.some(unitId => !unitById.has(unitId))) report(id, 'published module points to missing course content');
}
for (const [stage, expected] of Object.entries(expectedStages)) if (stageCounts[stage] !== expected) errors.push(`dist/course-map.js:1 stage ${stage} expected ${expected} modules, got ${stageCounts[stage]}`);
for (const unit of units) if (!mapped.has(unit.id)) errors.push(`dist/course-map.js:1 unit ${unit.id} is not mapped to a course module`);
if (mapped.size !== 52) errors.push(`dist/course-map.js:1 expected all 52 units mapped exactly once, got ${mapped.size}`);

console.log(`modules=${map?.modules?.length ?? 0} sources=${map?.sources?.length ?? 0} mappedUnits=${mapped.size} stages=${JSON.stringify(stageCounts)}`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log('Course map contract valid.');
}
