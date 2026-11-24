const MATH_START = [
  {
    id: 'mat1',
    title: 'Tall og tegn',
    level: 'A0–A1',
    goal: 'Jeg kan lese tall og enkle regnestykker høyt.',
    words: [
      ['tall', 'число', 'จำนวน', '3 er et tall.'],
      ['pluss', 'плюс', 'บวก', '2 + 1: Vi sier «to pluss én».'],
      ['minus', 'мінус', 'ลบ', '3 − 1: Vi sier «tre minus én».'],
      ['er lik', 'дорівнює', 'เท่ากับ', '2 + 1 = 3: Vi sier «er lik tre».'],
      ['ganger', 'помножити на', 'คูณ', '2 × 3: Vi sier «to ganger tre».'],
      ['delt på', 'поділити на', 'หารด้วย', '6 ÷ 2: Vi sier «seks delt på to».']
    ],
    model: '2 + 3 = 5. Jeg leser: «To pluss tre er lik fem.»',
    choice: {
      prompt: 'Hvordan leser du 4 − 2 = 2?',
      options: ['Fire minus to er lik to.', 'Fire pluss to er lik to.', 'Fire ganger to er lik to.'],
      hint: 'Se på tegnet −.',
      explanation: 'Tegnet − leser vi «minus». Tegnet = leser vi «er lik».'
    },
    gap: {
      prompt: 'Skriv ordet for tegnet +.',
      before: '2 + 1 leser vi «to',
      after: 'én».',
      accepted: ['pluss'],
      hint: 'Vi legger sammen.',
      explanation: 'Tegnet + leser vi «pluss».'
    },
    build: {
      prompt: 'Sett ordene i rekkefølge. Les 3 + 2 = 5.',
      parts: ['Tre', 'pluss to', 'er lik', 'fem'],
      hint: 'Start med «Tre».'
    },
    write: {
      prompt: 'Skriv med ord: 5 − 2 = 3.',
      starters: ['Fem …'],
      checks: ['Jeg har skrevet «minus».', 'Jeg har skrevet «er lik».', 'Jeg har skrevet tallene med ord.'],
      model: 'Fem minus to er lik tre.'
    },
    talk: 'Les 6 ÷ 2 = 3 høyt for en medelev. Bytt roller.'
  },
  {
    id: 'mat2',
    title: 'Hva gjør vi når vi regner?',
    level: 'A1',
    goal: 'Jeg kan fortelle hva jeg gjør med tallene.',
    words: [
      ['legge til', 'додати', 'บวกเพิ่ม', '3 + 2: Legg til 2.'],
      ['trekke fra', 'відняти', 'ลบออก', '5 − 2: Trekk fra 2.'],
      ['gange', 'множити', 'คูณ', '3 × 2: Gang 3 med 2.'],
      ['dele', 'ділити', 'หาร', '6 ÷ 2: Del 6 på 2.'],
      ['til sammen', 'разом', 'รวมกัน', '2 epler og 3 epler er 5 epler til sammen.']
    ],
    model: 'Jeg har 3 epler. Jeg legger til 2 epler. Da har jeg 5 epler til sammen: 3 + 2 = 5.',
    choice: {
      prompt: 'Du har 5 blyanter og gir bort 2. Hva gjør du for å finne hvor mange du har igjen?',
      options: ['Jeg trekker 2 fra 5.', 'Jeg legger 2 til 5.', 'Jeg ganger 5 med 2.'],
      hint: 'Du har færre blyanter etterpå.',
      explanation: 'Du gir bort 2, så du trekker fra: 5 − 2 = 3.'
    },
    gap: {
      prompt: 'Skriv verbet som mangler.',
      before: 'Jeg skal fordele 6 epler likt på 2 personer. Jeg skal',
      after: '6 på 2.',
      accepted: ['dele'],
      hint: 'Bruk ordet som passer til ÷.',
      explanation: 'Vi deler 6 på 2. Hver person får 3 epler.'
    },
    build: {
      prompt: 'Sett ordene i rekkefølge. Beskriv 4 + 3.',
      parts: ['Jeg', 'legger sammen', '4 og 3'],
      hint: 'Start med «Jeg».'
    },
    write: {
      prompt: 'Du har 8 kroner og bruker 3 kroner. Skriv hva du gjør, og hvor mye du har igjen.',
      starters: ['Jeg trekker …', 'Jeg har …'],
      checks: ['Jeg forteller hva jeg trekker fra.', 'Jeg skriver hvor mye jeg har igjen.'],
      model: 'Jeg trekker 3 fra 8. Jeg har 5 kroner igjen.'
    },
    talk: 'Vis 2 × 3 med seks blyanter i to grupper. Fortell en medelev hva du gjør.'
  },
  {
    id: 'mat3',
    title: 'Forstå oppgaven',
    level: 'A1',
    goal: 'Jeg kan forstå oppgaveverb og sammenligne tall.',
    words: [
      ['regn ut', 'обчисли', 'คำนวณ', 'Regn ut 3 + 2. Svaret er 5.'],
      ['sammenlign', 'порівняй', 'เปรียบเทียบ', 'Sammenlign 5 og 3: 5 > 3.'],
      ['forklar', 'поясни', 'อธิบาย', 'Forklar hvordan du fant svaret.'],
      ['større enn', 'більше ніж', 'มากกว่า', '5 er større enn 3: 5 > 3.'],
      ['færre enn', 'менше ніж', 'น้อยกว่า', '3 epler er færre enn 5 epler.'],
      ['forskjell', 'різниця', 'ผลต่าง', 'Forskjellen mellom 5 og 3 er 2.']
    ],
    model: 'Ali har 7 bøker. Mia har 4 bøker. 7 er større enn 4. Mia har færre bøker enn Ali. Forskjellen er 7 − 4 = 3 bøker.',
    choice: {
      prompt: 'På arket står det «Sammenlign 6 og 2». Hva skal du gjøre?',
      options: ['Si hvilket tall som er størst.', 'Legg sammen tallene.', 'Gang tallene med hverandre.'],
      hint: 'Se etter hva som er likt eller ulikt.',
      explanation: 'Du kan skrive «6 er større enn 2». Da har du sammenlignet tallene.'
    },
    gap: {
      prompt: 'Skriv sammenligningsordet som passer.',
      before: '8 er',
      after: 'enn 5.',
      accepted: ['større', 'høyere'],
      hint: '8 > 5.',
      explanation: '8 er større enn 5.'
    },
    build: {
      prompt: 'Sett ordene i rekkefølge. Sammenlign 3 og 6.',
      parts: ['3', 'er mindre enn', '6'],
      hint: 'Start med 3.'
    },
    write: {
      prompt: 'Nora har 9 blyanter. Amir har 5. Sammenlign antallene og forklar hvordan du finner forskjellen.',
      starters: ['Nora har …', 'Forskjellen er …'],
      checks: ['Jeg sammenligner antallene.', 'Jeg viser et regnestykke.', 'Jeg skriver forskjellen.'],
      model: 'Nora har flere blyanter enn Amir. Jeg regner 9 − 5 = 4. Forskjellen er 4 blyanter.'
    },
    talk: 'En har 8 kort, og en har 3 kort. Fortell hverandre hvem som har færre, og finn forskjellen.'
  }
];
