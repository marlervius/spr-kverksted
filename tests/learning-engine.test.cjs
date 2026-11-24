'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const context = vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(__dirname, '../dist/learning-engine.js'), 'utf8'), context);
const engine = vm.runInContext('LearningEngine', context);
const DAY = 86400000;
const START = 1000;
const json = value => JSON.parse(JSON.stringify(value));
const attempt = (memory, target = 'bok', options = {}) => engine.recordAttempt(memory, {
  key: 'recall:' + target, lessonId: 'u1', skill: 'recall', correct: true,
  assisted: false, now: START, ...options
});
const read = (memory, target = 'bok') => memory.records['recall:' + target];
const freeze = object => {
  if (object && typeof object === 'object') {
    Object.freeze(object);
    Object.values(object).forEach(freeze);
  }
  return object;
};

test('first independent success is due tomorrow, never remembered immediately', () => {
  const memory = attempt(engine.createState());
  assert.equal(read(memory).status, 'independent');
  assert.equal(read(memory).dueAt, START + DAY);
  assert.deepEqual(json(engine.summarize(memory)), { withHelp: 0, independent: 1, remembered: 0, total: 1 });
  assert.deepEqual(json(engine.dueKeys(memory, START)), []);
});

test('failure then a correct copy remains supported even if assisted flag is omitted by UI', () => {
  let memory = attempt(engine.createState(), 'bok', { correct: false });
  assert.equal(read(memory).status, 'practicing');
  memory = attempt(memory, 'bok', { now: START + DAY });
  assert.equal(read(memory).status, 'supported');
  assert.equal(read(memory).history.at(-1).assisted, true);
  assert.equal(read(memory).lastIndependentAt, null);
});

test('two other distinct targets, not repeated attempts or skill variants, release the barrier', () => {
  let memory = attempt(engine.createState(), 'bok', { assisted: true });
  memory = attempt(memory, 'penn');
  memory = attempt(memory, 'penn');
  memory = attempt(memory, 'penn', { key: 'recognition:penn', skill: 'recognition' });
  memory = attempt(memory, 'bok');
  assert.equal(read(memory).status, 'supported');
  memory = attempt(memory, 'sekk', { correct: false });
  memory = attempt(memory, 'bok');
  assert.equal(read(memory).status, 'independent');
  assert.equal(read(memory).dueAt, START + DAY);
});

test('retention requires at least 24 hours and advances practical intervals 1 / 3 / 7 days', () => {
  let memory = attempt(engine.createState());
  memory = attempt(memory, 'bok', { now: START + DAY });
  assert.equal(read(memory).status, 'remembered');
  assert.equal(read(memory).dueAt, START + 4 * DAY);
  memory = attempt(memory, 'bok', { now: START + DAY + 1 });
  assert.equal(read(memory).retentionCount, 1);
  assert.equal(read(memory).dueAt, START + 4 * DAY);
  memory = attempt(memory, 'bok', { now: START + 4 * DAY });
  assert.equal(read(memory).dueAt, START + 11 * DAY);
  assert.equal(read(memory).retentionCount, 2);
});

test('23-hour then 24-hour attempts do not fake a 24-hour retention gap', () => {
  const HOUR = DAY / 24;
  let memory = attempt(engine.createState());
  memory = attempt(memory, 'bok', { now: START + 23 * HOUR });
  assert.equal(read(memory).status, 'independent');
  assert.equal(read(memory).dueAt, START + DAY);
  memory = attempt(memory, 'bok', { now: START + 24 * HOUR });
  assert.equal(read(memory).status, 'independent');
  assert.equal(engine.summarize(memory).remembered, 0);
  assert.deepEqual(json(engine.dueKeys(memory, START + 24 * HOUR)), ['recall:bok']);
  assert.equal(read(memory).lastIndependentAt, START + 24 * HOUR);
  memory = attempt(memory, 'bok', { now: START + 48 * HOUR });
  assert.equal(read(memory).status, 'remembered');
  assert.equal(read(memory).dueAt, START + 5 * DAY);
});

test('help or later failure revokes current remembered status and requires a fresh baseline', () => {
  for (const correct of [true, false]) {
    let memory = attempt(engine.createState());
    memory = attempt(memory, 'bok', { now: START + DAY });
    const historicalIndependentAt = read(memory).lastIndependentAt;
    memory = attempt(memory, 'bok', { now: START + 4 * DAY, assisted: correct, correct });
    assert.equal(read(memory).status, correct ? 'supported' : 'practicing');
    assert.equal(read(memory).lastIndependentAt, historicalIndependentAt);
    assert.equal(engine.summarize(memory).remembered, 0);
    memory = attempt(memory, 'penn', { now: START + 4 * DAY });
    memory = attempt(memory, 'sekk', { now: START + 4 * DAY });
    memory = attempt(memory, 'bok', { now: START + 4 * DAY });
    assert.equal(read(memory).status, 'independent');
    memory = attempt(memory, 'bok', { now: START + 5 * DAY });
    assert.equal(read(memory).status, 'remembered');
  }
});

test('input state and event are never mutated, including histories, and history is bounded', () => {
  let memory = attempt(engine.createState());
  const event = freeze({ key: 'recall:bok', lessonId: 'u1', skill: 'recall', correct: true,
    assisted: false, now: START + 1 });
  freeze(memory);
  const before = JSON.stringify(memory);
  const next = engine.recordAttempt(memory, event);
  assert.equal(JSON.stringify(memory), before);
  assert.notEqual(next, memory);
  assert.notEqual(read(next), read(memory));
  assert.notEqual(read(next).history, read(memory).history);
  memory = next;
  for (let index = 2; index < 40; index++) memory = attempt(memory, 'bok', { now: START + index });
  assert.equal(read(memory).history.length, 20);
  assert.equal(read(memory).attemptsCount, 40);
});

test('exposure and open writing are excluded; malformed events do not record fake success', () => {
  const memory = engine.createState();
  const invalids = [
    { key: 'exposure:bok', skill: 'exposure' }, { key: 'writing:bok', skill: 'writing' },
    { key: 'recall:', skill: 'recall' }, { key: 'recall:bok', skill: 'reading' },
    { correct: 'true' }, { assisted: 'false' }, { now: Infinity }, { now: -1 },
    { now: NaN }, { now: '1000' }, { lessonId: '' }, { key: '__proto__' }
  ];
  for (const options of invalids) {
    const next = attempt(memory, 'bok', options);
    assert.equal(engine.summarize(next).total, 0);
    assert.equal(next.sequence, 0);
  }
});

test('corrupt persisted records are sanitized and stale submissions are ignored', () => {
  assert.deepEqual(json(engine.createState()), { sequence: 0, records: {} });
  assert.deepEqual(json(engine.summarize(null)), { withHelp: 0, independent: 0, remembered: 0, total: 0 });
  let memory = attempt({ sequence: -1, records: { nope: { skill: 'recall', status: 'remembered' } } });
  assert.equal(memory.sequence, 1);
  const before = json(memory);
  memory = attempt(memory, 'bok', { now: START - 1 });
  assert.deepEqual(json(memory), before);
  const corrupt = json(memory);
  corrupt.records['recall:bok'].dueAt = Infinity;
  assert.equal(engine.summarize(corrupt).total, 0);
});

test('due keys contain no future-due records and use deterministic ordering for equal dates', () => {
  let memory = attempt(engine.createState(), 'sekk', { correct: false, now: START + 2 });
  memory = attempt(memory, 'penn', { assisted: true, now: START + 1 });
  memory = attempt(memory, 'bok', { correct: false, now: START + 1 });
  memory = attempt(memory, 'stol', { now: START + 1 });
  assert.deepEqual(json(engine.dueKeys(memory, START + 1)), ['recall:bok', 'recall:penn']);
  assert.deepEqual(json(engine.dueKeys(memory, START + 2)), ['recall:bok', 'recall:penn', 'recall:sekk']);
  assert.deepEqual(json(engine.dueKeys(memory, Infinity)), []);
  assert.deepEqual(json(engine.dueKeys(memory, START + 2)), json(engine.dueKeys(memory, START + 2)));
});

test('JSON persistence preserves the assistance barrier and remembered baseline', () => {
  let memory = attempt(engine.createState(), 'bok', { correct: false });
  memory = attempt(json(memory), 'penn');
  memory = attempt(json(memory), 'sekk');
  memory = attempt(json(memory), 'bok');
  memory = attempt(json(memory), 'bok', { now: START + DAY });
  assert.equal(read(memory).status, 'remembered');
});

test('help, leaving, and reopening cannot turn an immediate copy into independent knowledge', () => {
  const initial = freeze(engine.createState());
  const event = freeze({ key: 'recall:bok', lessonId: 'u1', skill: 'recall', now: START });
  let memory = engine.recordHelp(initial, event);
  assert.equal(read(memory).status, 'supported');
  assert.equal(read(memory).attemptsCount, 0);
  assert.equal(read(memory).lastAttemptAt, null);
  assert.equal(read(memory).lastHelpAt, START);
  assert.deepEqual(json(read(memory).history), []);
  assert.deepEqual(json(read(memory).helpHistory), [START]);
  assert.equal(engine.summarize(initial).total, 0);
  memory = attempt(json(memory), 'bok', { now: START + 1 });
  assert.equal(read(memory).status, 'supported');
  assert.equal(read(memory).attemptsCount, 1);
  assert.equal(read(memory).history.at(-1).correct, true);
  assert.equal(read(memory).history.at(-1).assisted, true);
  memory = attempt(memory, 'penn', { now: START + 2 });
  memory = attempt(memory, 'sekk', { now: START + 3 });
  memory = attempt(memory, 'bok', { now: START + 4 });
  assert.equal(read(memory).status, 'independent');
  assert.equal(read(memory).attemptsCount, 2);
});

test('help revokes retention without an invented failed attempt; other help is not another target attempted', () => {
  let memory = attempt(engine.createState());
  memory = attempt(memory, 'bok', { now: START + DAY });
  const before = json(read(memory));
  memory = engine.recordHelp(freeze(memory), {
    key: 'recall:bok', lessonId: 'u1', skill: 'recall', now: START + 4 * DAY
  });
  assert.equal(read(memory).attemptsCount, before.attemptsCount);
  assert.deepEqual(json(read(memory).history), before.history);
  assert.equal(read(memory).lastIndependentAt, before.lastIndependentAt);
  assert.equal(read(memory).retentionBaselineAt, null);
  assert.equal(read(memory).status, 'supported');
  for (const target of ['penn', 'sekk']) memory = engine.recordHelp(memory, {
    key: 'recall:' + target, lessonId: 'u1', skill: 'recall', now: START + 4 * DAY
  });
  memory = attempt(memory, 'bok', { now: START + 4 * DAY });
  assert.equal(read(memory).status, 'supported');
});

test('recognition, recall and construction maintain distinct records and never inherit each others mastery', () => {
  let memory = attempt(engine.createState(), 'bok', { key: 'recognition:bok', skill: 'recognition' });
  memory = attempt(memory, 'bok', { key: 'recognition:bok', skill: 'recognition', now: START + DAY });
  memory = engine.recordHelp(memory, { key: 'construction:bok', lessonId: 'u1',
    skill: 'construction', now: START + DAY });
  assert.equal(memory.records['recognition:bok'].status, 'remembered');
  assert.equal(memory.records['construction:bok'].status, 'supported');
  assert.equal(memory.records['recall:bok'], undefined);
  assert.deepEqual(json(engine.summarize(memory)), { withHelp: 1, independent: 0, remembered: 1, total: 2 });
});

test('help events are sanitized, time ordered, bounded and excluded for open writing/exposure', () => {
  let memory = engine.createState();
  for (const skill of ['exposure', 'writing']) memory = engine.recordHelp(memory, {
    key: skill + ':bok', lessonId: 'u1', skill, now: START
  });
  assert.equal(memory.sequence, 0);
  memory = engine.recordHelp(memory, { key: 'recall:bok', lessonId: 'u1', skill: 'recall', now: START });
  const before = json(memory);
  memory = engine.recordHelp(memory, { key: 'recall:bok', lessonId: 'u1', skill: 'recall', now: START - 1 });
  assert.deepEqual(json(memory), before);
  for (let index = 1; index < 25; index++) memory = engine.recordHelp(memory, {
    key: 'recall:bok', lessonId: 'u1', skill: 'recall', now: START + index
  });
  assert.equal(read(memory).helpHistory.length, 20);
  assert.equal(read(memory).attemptsCount, 0);
  assert.deepEqual(json(read(memory).history), []);
  assert.deepEqual(json(engine.dueKeys(memory, START + 24)), ['recall:bok']);
});
