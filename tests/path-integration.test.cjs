'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const dist = path.join(__dirname, '..', 'dist');

function setup(saved = {}) {
  const nodes = {}, handlers = {};
  function node(key) {
    return nodes[key] ||= { innerHTML: '', textContent: '', open: false, disabled: false,
      setAttribute() {}, addEventListener() {}, focus() {}, scrollIntoView() {}, after() {},
      querySelector() { return node('query'); }, showModal() {}, close() {} };
  }
  let storage = JSON.stringify(saved);
  const context = { console,
    localStorage: { getItem(key) { return key === 'sprakverkstedet-a0-a1-v2' ? storage : null; },
      setItem(key, value) { storage = value; } },
    document: { querySelector: node, querySelectorAll() { return []; }, addEventListener(type, handler) { handlers[type]=handler; }, title: '' },
    location: { hash: '' }, history: { pushState(_state, _title, hash) { context.location.hash = hash; } },
    matchMedia() { return { matches: false, addEventListener() {} }; },
    requestAnimationFrame(callback) { callback(); }, window: { addEventListener() {}, print() {} },
    setTimeout, URL, Blob, navigator: { clipboard: { writeText() {} } } };
  vm.createContext(context);
  for (const file of ['illustrations.js', 'curriculum.js', 'challenges.js', ...(fs.existsSync(path.join(dist, 'continuation.js')) ? ['continuation.js'] : []), ...(fs.existsSync(path.join(dist, 'next-lessons.js')) ? ['next-lessons.js'] : []), ...['course-a2.js','course-a2plus.js','course-b1.js','course-map.js','math-start.js','math-practice.js','math-reasoning.js','course-math.js'].filter(file=>fs.existsSync(path.join(dist,file))), 'learning-engine.js', 'evidence.js', 'app.js']) {
    vm.runInContext(fs.readFileSync(path.join(dist, file), 'utf8'), context, { filename: file });
  }
  return { run: code => vm.runInContext(code, context), stored: () => JSON.parse(storage), change: target => handlers.change({target}) };
}

test('existing progress stays in the base path and new challenge progress starts empty', () => {
  const app = setup({ done: { u1l2: { kind: 'choice', answer: 'bok' } } });
  assert.equal(app.run('state.selectedPath'), 'base');
  assert.equal(app.run('pathLessons().length'), app.run('BASE_UNITS.reduce((n,u)=>n+u.lessons.length,0)'));
  assert.equal(app.run('totalDone()'), 1);
  app.run("switchPath('challenge')");
  assert.equal(app.run('pathLessons().length'), app.run('MORE_UNITS.reduce((n,u)=>n+u.lessons.length,0)'));
  assert.equal(app.run('totalDone()'), 0);
  assert.equal(app.run('state.done.u1l2.answer'), 'bok');
  assert.equal(app.stored().selectedPath, 'challenge');
});

test('deep links select their own path', () => {
  const app = setup({ selectedPath: 'challenge' });
  app.run("location.hash='#u1l3'; restoreRoute()");
  assert.equal(app.run('state.selectedPath'), 'base');
  assert.equal(app.run('current.id'), 'u1l3');
  app.run("location.hash='#ch_u1l1'; restoreRoute()");
  assert.equal(app.run('state.selectedPath'), 'challenge');
  assert.equal(app.run('current.id'), 'ch_u1l1');
});

test('switching back to the same topic resumes its last exercise and retains drafts', () => {
  const app = setup({ drafts: { u1l3: { text: 'Mitt utkast', checks: [] } } });
  app.run("openLesson('u1l3'); switchPath('challenge'); openLesson('ch_u1l2'); switchPath('base')");
  assert.equal(app.run('current.id'), 'u1l3');
  assert.equal(app.run('state.drafts.u1l3.text'), 'Mitt utkast');
  app.run("switchPath('challenge')");
  assert.equal(app.run('current.id'), 'ch_u1l2');
  assert.equal(app.run('state.drafts.u1l3.text'), 'Mitt utkast');
  assert.match(app.run('workbookText()'), /Mitt utkast/);
});

test('next and previous stay within the selected path', () => {
  const app = setup();
  app.run("openLesson('ch_u1l1'); nextLesson()");
  assert.equal(app.run('current.id'), 'ch_u1l2');
  app.run("delegatedClick({target:{closest(){return {id:'previousLesson',dataset:{},disabled:false}}}})");
  assert.equal(app.run('current.id'), 'ch_u1l1');
  app.run("openLesson('u1l1'); nextLesson()");
  assert.equal(app.run('current.id'), 'u1l2');
  app.run("delegatedClick({target:{closest(){return {id:'previousLesson',dataset:{},disabled:false}}}})");
  assert.equal(app.run('current.id'), 'u1l1');
});

test('repeat candidates belong to active path and exclude open writing', () => {
  const app = setup();
  assert.equal(app.run("allRecallVariants().every(x=>x.base.path==='base' && x.task.type==='input' && x.task.skill==='recall')"), true);
  app.run("switchPath('challenge')");
  assert.equal(app.run("allRecallVariants().every(x=>x.base.path==='challenge' && x.task.type==='input' && ['recall','construction'].includes(x.task.skill))"), true);
  assert.equal(app.run("allRecallVariants().some(x=>x.task.skill==='construction')"), true);
  assert.equal(app.run("allRecallVariants().every(x=>x.task.targetKey.startsWith('ch_'))"), true);
});

test('home resumes incomplete bridge and A1 tasks in either path, then finds next and wraps', () => {
  const app = setup();
  app.run("openLesson('u3l1')");
  assert.equal(app.run('suggested().id'), 'u3l1');
  app.run("state.done.u3l1={kind:current.type}; openHome()");
  assert.equal(app.run('suggested().id'), 'u3l2');
  app.run("openLesson('ch_u5l1'); openHome()");
  assert.equal(app.run('suggested().id'), 'ch_u5l1');
  app.run("const lessons=pathLessons(); for (const l of lessons) state.done[l.id]={kind:l.type}; delete state.done[lessons[0].id]");
  assert.equal(app.run('suggested().id'), app.run('pathLessons()[0].id'));
  app.run("state.done[pathLessons()[0].id]={kind:pathLessons()[0].type}");
  assert.equal(app.run('suggested().id'), 'ch_u5l1');
});

test('repeat readiness counts attempted targets only in the active path', () => {
  const app = setup();
  app.run(`const items=allRecallVariants(); const first=[...new Map(items.map(x=>[taskKey(x.task),x])).values()].slice(0,3);
    for(const x of first) state.learning=LearningEngine.recordAttempt(state.learning,{key:taskKey(x.task),lessonId:x.base.id,skill:x.task.skill,correct:true,assisted:false,now:0});`);
  assert.equal(app.run('repeatCandidates(86400000).unique.length'), 3);
  assert.equal(app.run('repeatCandidates(86400000).dueItems.length'), 3);
  app.run("switchPath('challenge')");
  assert.equal(app.run('repeatCandidates(86400000).unique.length'), 0);
  assert.equal(app.run('repeatCandidates(86400000).dueItems.length'), 0);
});

test('extension topics can switch paths and old deep links remain available', t => {
  const app = setup();
  if (!app.run('(EXTENSION.units||[]).length')) { t.skip('continuation.js not yet supplied'); return; }
  app.run('openLesson(EXTENSION.units[0].lessons[0].id); switchPath("challenge")');
  assert.equal(app.run('unitFor().baseUnitId'), app.run('EXTENSION.units[0].id'));
  app.run('switchPath("base")');
  assert.equal(app.run('unitFor().id'), app.run('EXTENSION.units[0].id'));
  app.run("location.hash='#u1l3'; restoreRoute()");
  assert.equal(app.run('current.id'), 'u1l3');
});

test('home explains when more attempts are needed and labels optional extra practice', () => {
  const app = setup();
  assert.match(app.run('repeatPanel()'), /Prøv flere ulike svar først/);
  app.run(`const candidates=[...new Map(allRecallVariants().map(x=>[taskKey(x.task),x])).values()].slice(0,3);
    for(const x of candidates) state.learning=LearningEngine.recordAttempt(state.learning,{key:taskKey(x.task),lessonId:x.base.id,skill:x.task.skill,correct:true,assisted:false,now:Date.now()});`);
  assert.match(app.run('repeatPanel()'), /ekstraøving/i);
  assert.equal(app.run('repeatCandidates().dueItems.length'), 0);
});

test('fresh installation begins while an existing saved last exercise resumes', () => {
  const fresh = setup();
  assert.equal(fresh.run('state.lastByPath.base'), undefined);
  assert.equal(fresh.run('suggested().id'), fresh.run('pathLessons()[0].id'));
  assert.match(fresh.run("document.querySelector('#view').innerHTML"), /Begynn her/);
  const existing = setup({ last: 'u5l1' });
  assert.equal(existing.run('state.lastByPath.base'), 'u5l1');
  assert.equal(existing.run('suggested().id'), 'u5l1');
  assert.match(existing.run("document.querySelector('#view').innerHTML"), /Fortsett/);
});

test('continuation is included in both paths and the dictionary without replacing earlier units', () => {
  const app = setup();
  assert.equal(app.run('EXTENSION.units.length'), 4);
  assert.equal(app.run('EXTENSION.challenges.length'), 4);
  assert.equal(app.run('pathLessons().length'), app.run('BASE_UNITS.reduce((n,u)=>n+u.lessons.length,0)'));
  assert.equal(app.run("pathLessons().filter(l=>unitFor(l).stage==='a0').length"), 60);
  assert.equal(app.run('ALL_WORDS.length'), app.run('GLOSSARY.length+EXTENSION.words.length+NEXT.words.length+(A2.words||[]).length+(A2PLUS.words||[]).length+(B1.words||[]).length+mathCourse.words.length'));
  app.run("switchPath('challenge')");
  assert.equal(app.run('pathLessons().length'), app.run('MORE_UNITS.reduce((n,u)=>n+u.lessons.length,0)'));
  assert.equal(app.run("pathLessons().filter(l=>unitFor(l).stage==='a0').length"), 30);
});

test('phase and topic progress count work without inventing mastery', () => {
  const app=setup();
  assert.equal(app.run("phaseStats('a0').done"), 0);
  assert.equal(app.run("unitStatus(ALL_UNITS.find(u=>u.id==='u1'))"), 'Ikke startet');
  app.run("openLesson('u1l1')");
  assert.equal(app.run("unitStatus(ALL_UNITS.find(u=>u.id==='u1'))"), 'Påbegynt');
  assert.equal(app.run('totalDone()'), 0);
  assert.equal(app.run('Object.keys(state.learning.records).length'), 0);
  app.run("for(const l of ALL_UNITS.find(u=>u.id==='u1').lessons)state.done[l.id]={kind:l.type}");
  assert.equal(app.run("unitStatus(ALL_UNITS.find(u=>u.id==='u1'))"), 'Gjort');
  assert.equal(app.run("phaseStats('a0').complete"), 1);
  assert.equal(app.run('Object.keys(state.learning.records).length'), 0);
  app.run("switchPath('challenge')");
  assert.equal(app.run('totalDone()'), 0);
  assert.equal(app.run("phaseStats('a0').complete"), 0);
});

test('new topics integrate, remain open and support path changes', t => {
  const app=setup();
  if (!app.run('(NEXT.units||[]).length')) {t.skip('next-lessons.js not yet supplied');return;}
  assert.equal(app.run('NEXT.units.length'), 8);
  assert.equal(app.run('activeUnits().length'), app.run('BASE_UNITS.length'));
  assert.equal(app.run('pathLessons().length'), app.run('BASE_UNITS.reduce((n,u)=>n+u.lessons.length,0)'));
  app.run('openLesson(NEXT.units[0].lessons[0].id);openHome()');
  assert.equal(app.run('suggested().id'), app.run('NEXT.units[0].lessons[0].id'));
  app.run('openLesson(NEXT.units[0].lessons[0].id);switchPath("challenge")');
  assert.equal(app.run('unitFor().baseUnitId'), app.run('NEXT.units[0].id'));
  assert.equal(app.run('activeUnits().length'), app.run('BASE_UNITS.length'));
  assert.equal(app.run('pathLessons().length'), app.run('MORE_UNITS.reduce((n,u)=>n+u.lessons.length,0)'));
  assert.equal(app.run("phaseStats('a1plus').units"), 8);
});

test('progress presentation reports work at zero, partial and complete without declaring language level', () => {
  const app=setup();
  assert.match(app.run('courseProgress(unitFor(suggested()))'), /0 av \d+ øvelser gjort/);
  assert.match(app.run('courseProgress(unitFor(suggested()))'), /ikke en nivåprøve/);
  app.run("openLesson('u1l2'); markAssisted()");
  assert.equal(app.run('totalDone()'), 0);
  app.run("state.done.u1l2={kind:current.type,answer:'en bok'}");
  assert.equal(app.run('totalDone()'), 1);
  assert.match(app.run('courseProgress(unitFor(current))'), /1 av \d+ øvelser gjort/);
  app.run("for(const l of pathLessons())state.done[l.id]={kind:l.type}");
  assert.equal(app.run('totalDone()'), app.run('pathLessons().length'));
  assert.match(app.run('lessonSummary(unitFor(current))'), /Du er her/);
});

test('complete course retains old work and offers all 13 modules in both paths', t => {
 const app=setup(); if(!app.run('(B1.units||[]).length && modules().length')){t.skip('course data not yet supplied');return;}
 assert.equal(app.run('modules().length'),13); assert.equal(app.run('activeUnits().length'),52); assert.equal(app.run('pathLessons().length'),312);
 assert.equal(app.run('modules().reduce((n,m)=>n+moduleUnits(m).length,0)'),52);
 app.run("const old=pathLessons().slice(0,168);for(const l of old)state.done[l.id]={kind:l.type};state.lastByPath.base='u20l6'"); assert.equal(app.run('suggested().id'),'u21l1');
 for(const stage of ['a2','a2plus','b1']){app.run(`openLesson(activeUnits().find(u=>u.stage==='${stage}').lessons[0].id);switchPath('challenge')`);assert.equal(app.run('unitFor().stage'),stage);app.run("switchPath('base')");assert.equal(app.run('unitFor().stage'),stage);}
 app.run("switchPath('challenge')");assert.equal(app.run('activeUnits().length'),52);assert.equal(app.run('pathLessons().length'),156);
});
test('optional activity is independent of progress and learning records', t => {
 const app=setup();if(!app.run('modules().length')){t.skip('course map not yet supplied');return;}const id=app.run('modules()[0].id'),before=app.run('totalDone()');
 app.change({dataset:{activity:id},checked:true});assert.equal(app.stored().activities[id],true);assert.equal(app.run('totalDone()'),before);assert.equal(app.run('Object.keys(state.learning.records).length'),0);app.change({dataset:{activity:id},checked:false});assert.equal(app.stored().activities[id],false);
});
test('changing path in course overview keeps the course route',()=>{const app=setup();app.run('openCourse();switchPath("challenge")');assert.equal(app.run('view'),'course');assert.equal(app.run('state.selectedPath'),'challenge');assert.equal(app.run('location.hash'),'#kurs');});


test('math deep links resume independently and math answers reach the workbook', () => {
  const app = setup({ selectedPath: 'challenge', done: { u1l2: { kind: 'choice', answer: 'bok' } } });
  app.run("location.hash='#matematikk'; restoreRoute()");
  assert.equal(app.run('state.selectedPath'), 'math');
  assert.equal(app.run('pathLessons().length'), 45);
  assert.equal(app.run('totalDone()'), 0);
  app.run("openLesson('mat7-skriv'); recordDone('Antallet synker med to elever.', true)");
  assert.match(app.run('workbookText()'), /Matematikk på norsk[\s\S]*Antallet synker med to elever/);
  assert.equal(app.run('totalDone()'), 1);
  app.run('openHome()');
  assert.equal(app.run('state.selectedPath'), 'challenge');
  assert.equal(app.run('totalDone()'), 0);
  assert.equal(app.run('state.done.u1l2.answer'), 'bok');
  app.run("location.hash='#mat8-fyll'; restoreRoute(); openMath()");
  assert.equal(app.run('suggested().id'), 'mat8-fyll');
});

test('all math tasks render with complete content and unique deep links', () => {
  const app = setup();
  app.run('openMath()');
  assert.equal(app.run('new Set(ALL_LESSONS.map(l => l.id)).size'), app.run('ALL_LESSONS.length'));
  const rendered = app.run(`pathLessons().map(l => {
    openLesson(l.id);
    return document.querySelector('#view').innerHTML;
  })`);
  for (const html of rendered) assert.doesNotMatch(html, /undefined|NaN/);
  assert.ok(app.run("ALL_WORDS.some(w => w.word === 'nevner' && w.uk && w.th)"));
});
