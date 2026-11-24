'use strict';

const MATH_COURSE = (() => {
  const topics = [...MATH_START, ...MATH_PRACTICE, ...MATH_REASONING];
  const units = topics.map((topic, index) => {
    const { id, title, level, goal, choice, gap, build, write } = topic;
    const items = topic.words.map(([word, uk, th, meaning]) => ({ word, uk, th, meaning }));
    const lessons = [
      { type: 'learn', title: 'Les og bruk ordene', instruction: 'Les ordet. Se på eksemplet. Si ordet høyt.',
        model: topic.model, items },
      { type: 'choice', title: 'Hva betyr det?', instruction: 'Les og velg ett svar.', skill: 'reading',
        ...choice, options: choice.options.map((label, i) => ({ id: 'o' + i, label })), correct: 'o0' },
      { type: 'input', title: 'Finn ordet', instruction: 'Fyll inn det som mangler.', skill: 'recall', ...gap },
      { type: 'build', title: 'Bygg en setning', instruction: 'Velg ordene i riktig rekkefølge.',
        skill: 'construction', sentence: true, prompt: build.prompt, hint: build.hint,
        tokens: [...build.parts.slice(1), build.parts[0]], answer: build.parts,
        explanation: build.parts.join(' ') + '.' },
      { type: 'write', title: 'Forklar selv', instruction: write.instruction || 'Skriv ditt eget svar på norsk.',
        ...write, starters: write.starters.join('\n'), explanation: 'Les svaret ditt høyt. Sammenlign med eksemplet eller spør en medelev.' }
    ].map((lesson, i) => ({ ...lesson, id: id + '-' + ['ord', 'velg', 'fyll', 'bygg', 'skriv'][i] }));
    return { id, title, level, goal, stage: 'math', number: String(index + 1), path: 'math', lessons, talk: topic.talk };
  });
  return { units, words: units.flatMap(u => u.lessons[0].items) };
})();

function mathNavHTML() {
  return '<button class="quiet course-nav-link" data-math="true">Matematikk på norsk</button>';
}

function openMath(route = true) {
  if (state.selectedPath !== 'math') state.generalPath = state.selectedPath;
  state.selectedPath = 'math';
  repeatMode = false;
  view = 'math';
  current = null;
  resetTask();
  persist();
  if (route) updateRoute('matematikk');
  render();
  if (matchMedia('(max-width:780px)').matches) $('#chapterMenu').open = false;
  $('#main').focus({ preventScroll: true });
  window.scrollTo?.(0, 0);
}

function mathHubHTML() {
  const units = activeUnits();
  const next = suggested();
  const unit = unitFor(next);
  const done = totalDone();
  const total = pathLessons().length;
  return `<header class="course-title math-intro"><span class="eyebrow">Fagspråk</span>
    <h1>Matematikk på norsk</h1>
    <p>Hva ber oppgaven deg om å gjøre? Her øver du på å lese tegn, forstå spørsmål og forklare hvordan du tenker.</p>
    <div class="math-resume"><button class="button-primary" data-lesson="${next.id}">${done === total ? 'Øv igjen' : state.lastByPath.math ? 'Fortsett' : 'Begynn her'}</button>
    <span>${escapeHTML(unit.title)} · ${escapeHTML(next.title)}</span></div>
    <p>${done} av ${total} øvelser gjort</p><progress max="${total}" value="${done}" aria-label="Framgang i matematikk på norsk"></progress>
    </header><div class="module-grid">${units.map(u => {
      const n = completedCount(u);
      return `<section class="module-card"><span class="eyebrow">Modul ${u.number} · ${escapeHTML(u.level)}</span>
        <h2>${escapeHTML(u.title)}</h2><p>${escapeHTML(u.goal)}</p>
        <p>${n} av ${u.lessons.length} øvelser gjort</p><button class="button-primary" data-unit="${u.id}">${n === u.lessons.length ? 'Øv igjen' : unitStatus(u) === 'Påbegynt' ? 'Fortsett i modulen' : 'Åpne modulen'}</button></section>`;
    }).join('')}</div>
    <details class="teacher-activity"><summary>Til læreren · bruk i timen</summary>
    <p>Velg temaet klassen arbeider med. La eleven først peke på et tegn og lese ordet, så bruke det i en kort frase. Avslutt med en forklaring til en medelev. Hver modul har en paroppgave under «Forklar selv».</p>
    <p>Lette regnestykker gir rom til å arbeide med norsken. Elever som kjenner matematikken, kan gå rett til «Forklar selv» via øvelsesknappene. De kan åpne et modellsvar, bearbeide teksten i øvelsen og finne den igjen i arbeidsboka.</p>
    <p>Språknivåene er veiledende. Oppgavene øver på å lese matematikk og forklare sammenhenger, to grunnleggende ferdigheter i <a href="https://www.udir.no/lk20/mat10-01">Udirs læreplan i matematikk for FOV (MAT10-01)</a>.</p></details>`;
}

function mathReferenceHTML(id) {
  if (id === 'mat4') return `<figure class="math-figure"><div class="math-rectangle" role="img" aria-label="Rektangel, fem centimeter langt og tre centimeter bredt"><span>5 cm</span><span>3 cm</span></div><figcaption>Et rektangel</figcaption></figure>`;
  if (id === 'mat5') return `<figure class="math-figure"><div class="math-fraction" aria-hidden="true"><i></i><i></i><i></i><i></i></div><figcaption>Tre av fire like deler er fargelagt.</figcaption></figure>`;
  if (id === 'mat7') return `<figure class="math-figure"><figcaption>Elever som sykler til skolen</figcaption><table class="math-table"><thead><tr><th scope="col">Dag</th><th scope="col">Antall elever</th><th scope="col">Stolpediagram</th></tr></thead><tbody>${[['Mandag',8],['Tirsdag',12],['Onsdag',10]].map(([day,n]) => `<tr><th scope="row">${day}</th><td>${n}</td><td><span aria-hidden="true" style="width:${100*n/12}%"></span></td></tr>`).join('')}</tbody></table></figure>`;
  return '';
}
