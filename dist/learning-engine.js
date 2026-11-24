/* Closed-response learning records. Intervals are practical defaults, not CEFR scores. */
const LearningEngine = (() => {
  'use strict';

  const DAY = 24 * 60 * 60 * 1000;
  const SKILLS = new Set(['recognition', 'recall', 'construction', 'reading']);
  const STATUSES = new Set(['practicing', 'supported', 'independent', 'remembered']);
  const time = value => typeof value === 'number' && Number.isSafeInteger(value) && value >= 0;
  const sequenceNumber = value => Number.isSafeInteger(value) && value >= 0 ? value : 0;
  const plain = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const cleanString = (value, limit) => typeof value === 'string' && value.trim().length <= limit
    && !/[\u0000-\u001f]/.test(value) ? value.trim() : '';
  const targetOf = key => key.slice(key.indexOf(':') + 1);
  const lastEventAt = record => Math.max(record.lastAttemptAt ?? 0, record.lastHelpAt ?? 0);
  const validKey = (key, skill) => SKILLS.has(skill) && key.startsWith(skill + ':')
    && targetOf(key).trim().length > 0;

  function createState() {
    return { sequence: 0, records: {} };
  }

  // Copy and validate persisted data without retaining arbitrary properties or references.
  function sanitize(memory) {
    const result = createState();
    if (!plain(memory)) return result;
    result.sequence = sequenceNumber(memory.sequence);
    if (!plain(memory.records)) return result;
    for (const [storedKey, value] of Object.entries(memory.records)) {
      if (!plain(value)) continue;
      const key = cleanString(storedKey, 240);
      const skill = cleanString(value.skill, 24);
      if (key !== storedKey || !validKey(key, skill) || !STATUSES.has(value.status)
        || !(time(value.lastAttemptAt) || value.lastAttemptAt === null && time(value.lastHelpAt))
        || !time(value.dueAt)) continue;
      const lastIndependentAt = time(value.lastIndependentAt)
        && value.lastIndependentAt <= value.lastAttemptAt ? value.lastIndependentAt : null;
      const baseline = value.retentionBaselineAt === null ? null
        : time(value.retentionBaselineAt) ? value.retentionBaselineAt : lastIndependentAt;
      const blocked = value.blockedAfterSequence;
      result.records[key] = {
        key,
        lessonId: cleanString(value.lessonId, 120),
        skill,
        status: value.status,
        dueAt: value.dueAt,
        lastAttemptAt: value.lastAttemptAt,
        lastHelpAt: time(value.lastHelpAt) ? value.lastHelpAt : null,
        lastIndependentAt,
        attemptsCount: sequenceNumber(value.attemptsCount),
        lastAttemptSequence: Math.min(sequenceNumber(value.lastAttemptSequence), result.sequence),
        blockedAfterSequence: Number.isSafeInteger(blocked) && blocked >= 0
          ? Math.min(blocked, result.sequence) : null,
        needsFreshIndependent: typeof value.needsFreshIndependent === 'boolean'
          ? value.needsFreshIndependent : ['supported', 'practicing'].includes(value.status),
        retentionBaselineAt: time(baseline) && baseline <= value.lastAttemptAt ? baseline : null,
        retentionCount: Math.min(sequenceNumber(value.retentionCount), 2),
        helpHistory: Array.isArray(value.helpHistory) ? value.helpHistory.filter(time).slice(-20) : [],
        history: Array.isArray(value.history) ? value.history.filter(item => plain(item)
          && time(item.at) && item.at <= value.lastAttemptAt && typeof item.correct === 'boolean'
          && typeof item.assisted === 'boolean').slice(-20).map(item => ({
          at: item.at, correct: item.correct, assisted: item.assisted
        })) : []
      };
    }
    return result;
  }

  function eventDetails(event) {
    if (!plain(event)) return null;
    const key = cleanString(event.key, 240);
    const skill = cleanString(event.skill, 24);
    const lessonId = cleanString(event.lessonId, 120);
    return validKey(key, skill) && lessonId && time(event.now)
      ? { key, skill, lessonId, now: event.now } : null;
  }

  function newRecord(key, lessonId, skill) {
    return {
      key, lessonId, skill, lastAttemptAt: null, lastHelpAt: null,
      lastIndependentAt: null, retentionBaselineAt: null, retentionCount: 0,
      blockedAfterSequence: null, needsFreshIndependent: false,
      attemptsCount: 0, lastAttemptSequence: 0, history: [], helpHistory: []
    };
  }

  function recordHelp(memory, event) {
    const next = sanitize(memory);
    const details = eventDetails(event);
    if (!details || next.sequence === Number.MAX_SAFE_INTEGER) return next;
    const { key, skill, lessonId, now } = details;
    const previous = next.records[key];
    if (previous && now < lastEventAt(previous)) return next;
    const record = previous || newRecord(key, lessonId, skill);
    next.sequence += 1;
    record.lessonId = lessonId;
    record.status = 'supported';
    record.dueAt = now;
    record.lastHelpAt = now;
    record.helpHistory = [...record.helpHistory, now].slice(-20);
    record.blockedAfterSequence = next.sequence;
    record.needsFreshIndependent = true;
    record.retentionBaselineAt = null;
    record.retentionCount = 0;
    next.records[key] = record;
    return next;
  }

  function stillBlocked(memory, previous, key) {
    if (!previous || previous.blockedAfterSequence === null) return false;
    const otherTargets = new Set();
    for (const record of Object.values(memory.records)) {
      if (record.lastAttemptSequence > previous.blockedAfterSequence
        && targetOf(record.key) !== targetOf(key)) otherTargets.add(targetOf(record.key));
    }
    return otherTargets.size < 2;
  }

  function recordAttempt(memory, event) {
    const next = sanitize(memory);
    const details = eventDetails(event);
    // Exposure and open writing have no automatic correctness judgement here.
    if (!details
      || typeof event.correct !== 'boolean' || typeof event.assisted !== 'boolean'
      || next.sequence === Number.MAX_SAFE_INTEGER) return next;
    const { key, skill, lessonId, now } = details;
    const previous = next.records[key];
    // Ignore stale/out-of-order submissions; never move a record's clock backwards.
    if (previous && now < lastEventAt(previous)) return next;
    const blocked = stillBlocked(next, previous, key);
    const assisted = event.assisted || (event.correct && blocked);
    const record = previous || newRecord(key, lessonId, skill);
    next.sequence += 1;
    record.lessonId = lessonId;
    record.lastAttemptAt = now;
    record.lastAttemptSequence = next.sequence;
    record.attemptsCount = Math.min(Number.MAX_SAFE_INTEGER, record.attemptsCount + 1);
    record.history = [...record.history, { at: now, correct: event.correct, assisted }].slice(-20);

    if (!event.correct || assisted) {
      record.status = event.correct ? 'supported' : 'practicing';
      record.dueAt = now;
      record.needsFreshIndependent = true;
      record.retentionCount = 0;
      // Guard-derived support does not restart the barrier; explicit help/feedback does.
      if (!event.correct || event.assisted) record.blockedAfterSequence = next.sequence;
    } else {
      const fresh = record.needsFreshIndependent || record.retentionBaselineAt === null;
      // A delayed result requires a real 24-hour gap since the previous independent answer.
      const delayed = !fresh && record.lastIndependentAt !== null
        && now - record.lastIndependentAt >= DAY;
      record.lastIndependentAt = now;
      record.blockedAfterSequence = null;
      record.needsFreshIndependent = false;
      if (fresh) {
        record.status = 'independent';
        record.retentionBaselineAt = now;
        record.retentionCount = 0;
        record.dueAt = Math.min(Number.MAX_SAFE_INTEGER, now + DAY);
      } else if (delayed) {
        record.status = 'remembered';
        record.retentionBaselineAt = now;
        record.retentionCount = Math.min(record.retentionCount + 1, 2);
        record.dueAt = Math.min(Number.MAX_SAFE_INTEGER, now + (record.retentionCount === 1 ? 3 : 7) * DAY);
      } else {
        // Same-session clicks do not advance the interval or postpone existing repetition.
        record.status = record.retentionCount > 0 ? 'remembered' : 'independent';
      }
    }
    next.records[key] = record;
    return next;
  }

  function summarize(memory) {
    const summary = { withHelp: 0, independent: 0, remembered: 0, total: 0 };
    for (const record of Object.values(sanitize(memory).records)) {
      summary.total += 1;
      if (record.status === 'supported') summary.withHelp += 1;
      if (record.status === 'independent') summary.independent += 1;
      if (record.status === 'remembered') summary.remembered += 1;
    }
    return summary;
  }

  function dueKeys(memory, now) {
    if (!time(now)) return [];
    return Object.values(sanitize(memory).records).filter(record => record.dueAt <= now)
      .sort((a, b) => a.dueAt - b.dueAt || (a.key < b.key ? -1 : a.key > b.key ? 1 : 0))
      .map(record => record.key);
  }

  return Object.freeze({ createState, recordAttempt, recordHelp, summarize, dueKeys });
})();
