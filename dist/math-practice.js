const MATH_PRACTICE = [
  {
    id: 'mat4',
    title: 'Geometri og måling',
    level: 'A1–A2',
    goal: 'Jeg kan snakke om lengde, omkrets og areal.',
    words: [
      ['lengde', 'довжина', 'ความยาว', 'Den lange siden er 5 cm.'],
      ['bredde', 'ширина', 'ความกว้าง', 'Den korte siden er 3 cm.'],
      ['rektangel', 'прямокутник', 'รูปสี่เหลี่ยมผืนผ้า', 'Et rektangel har fire hjørner.'],
      ['omkrets', 'периметр', 'เส้นรอบรูป', 'Omkretsen er lengden rundt figuren.'],
      ['areal', 'площа', 'พื้นที่', 'Arealet er størrelsen på flaten inni figuren.'],
      ['kvadratcentimeter', 'квадратний сантиметр', 'ตารางเซนติเมตร', 'Én rute på 1 cm ganger 1 cm har arealet 1 cm².']
    ],
    model: 'Rektangelet er 5 cm langt og 3 cm bredt. Omkretsen er 5 + 3 + 5 + 3 = 16 cm. Arealet er 5 · 3 = 15 cm².',
    choice: {
      prompt: 'Hva betyr omkrets?',
      options: ['Lengden rundt en figur', 'Størrelsen på flaten inni en figur', 'Lengden fra ett hjørne til et annet'],
      hint: 'Tenk på kanten rundt figuren.',
      explanation: 'Omkrets er lengden rundt figuren. Areal er størrelsen på flaten inni.'
    },
    gap: {
      prompt: 'Skriv ordet som betyr størrelsen på flaten inni en figur.',
      before: '',
      after: 'måles for eksempel i cm².',
      accepted: ['Areal', 'areal', 'Arealet', 'arealet'],
      hint: 'Ordet begynner på a.',
      explanation: 'Areal er størrelsen på flaten inni en figur.'
    },
    build: {
      prompt: 'Sett sammen setningen.',
      parts: ['Arealet', 'av rektangelet', 'er', '15 cm²'],
      hint: 'Begynn med «Arealet».'
    },
    write: {
      prompt: 'Et rektangel er 3 cm langt og 2 cm bredt. Skriv en setning om arealet.',
      starters: ['Arealet er …', 'Jeg finner arealet ved å …'],
      checks: ['Jeg bruker ordet areal.', 'Jeg skriver riktig tall og enhet.'],
      model: 'Arealet er 3 · 2 = 6 cm².'
    },
    talk: 'Tegn et rektangel som er 3 cm langt og 2 cm bredt. Forklar hverandre hvor omkretsen og arealet er.'
  },
  {
    id: 'mat5',
    title: 'Brøk, desimaltall og prosent',
    level: 'A1–A2',
    goal: 'Jeg kan beskrive en del av en hel med brøk, desimaltall og prosent.',
    words: [
      ['en hel', 'ціле', 'หนึ่งหน่วยเต็ม', 'En hel sjokolade er 1.'],
      ['en halv', 'одна друга', 'หนึ่งส่วนสอง', 'En halv er 1/2 av en hel.'],
      ['brøk', 'дріб', 'เศษส่วน', '1/2 er en brøk.'],
      ['teller', 'чисельник', 'ตัวเศษ', 'I 1/2 er 1 telleren.'],
      ['nevner', 'знаменник', 'ตัวส่วน', 'I 1/2 er 2 nevneren.'],
      ['prosent', 'відсоток', 'เปอร์เซ็นต์', '50 % betyr 50 av 100.']
    ],
    model: 'Brøkstripen er delt i fire like deler. Tre deler er farget. Det er 3/4 av hele stripen, eller 0,75 eller 75 prosent. Alle tre betyr like mye.',
    choice: {
      prompt: 'Hvilket desimaltall er like mye som 3/4?',
      options: ['0,75', '0,34', '0,25'],
      hint: 'Tre firedeler er 75 hundredeler.',
      explanation: '3/4 er det samme som 75/100, altså 0,75.'
    },
    gap: {
      prompt: 'Hva kaller vi tallet under brøkstreken?',
      before: 'Tallet under brøkstreken er',
      after: '.',
      accepted: ['nevneren', 'nevner'],
      hint: 'I 1/2 er 2 dette tallet.',
      explanation: 'Nevneren viser hvor mange like deler en hel er delt i.'
    },
    build: {
      prompt: 'Sett sammen setningen.',
      parts: ['En halv', 'er det samme som', '50 prosent'],
      hint: 'Begynn med «En halv».'
    },
    write: {
      prompt: 'Skriv en setning som viser en halv som brøk og prosent.',
      starters: ['En halv er …', 'Brøken 1/2 er …'],
      checks: ['Jeg skriver 1/2.', 'Jeg skriver 50 prosent eller 50 %.'],
      model: 'En halv er 1/2 eller 50 prosent.'
    },
    talk: 'Tegn en sirkel og del den i to like store deler. Fargelegg en del. Forklar hverandre hva 1/2 betyr.'
  },
  {
    id: 'mat6',
    title: 'Forhold og pris per enhet',
    level: 'A2',
    goal: 'Jeg kan beskrive et forhold og sammenligne pris per enhet.',
    words: [
      ['forhold', 'відношення', 'อัตราส่วน', 'Forholdet mellom røde og blå kuler er 2 til 3.'],
      ['per', 'за', 'ต่อ', '20 kr per kilo betyr 20 kr for 1 kg.'],
      ['pris', 'ціна', 'ราคา', 'Prisen er 30 kr.'],
      ['mengde', 'кількість', 'ปริมาณ', 'Mengden er 2 kg.'],
      ['kilopris', 'ціна за кілограм', 'ราคาต่อกิโลกรัม', 'Kiloprisen er 15 kr per kg.'],
      ['sammenligne', 'порівнювати', 'เปรียบเทียบ', 'Vi sammenligner kiloprisene.']
    ],
    model: 'To kilo epler koster 30 kr. Kiloprisen er 30 kr delt på 2 kg, altså 15 kr per kg. Vi kan sammenligne kiloprisen med prisen per kilo for andre epler.',
    choice: {
      prompt: 'Hva betyr 15 kr per kg?',
      options: ['1 kg koster 15 kr', '15 kg koster 1 kr', 'Alle posene koster 15 kr'],
      hint: 'Per kg betyr for ett kilo.',
      explanation: '15 kr per kg betyr at prisen for 1 kg er 15 kr.'
    },
    gap: {
      prompt: 'Hva kaller vi prisen for ett kilo?',
      before: 'Prisen for ett kilo heter',
      after: '.',
      accepted: ['kilopris', 'kiloprisen'],
      hint: 'Ordet er satt sammen av kilo og pris.',
      explanation: 'Kilopris er prisen per kilo.'
    },
    build: {
      prompt: 'Sett sammen setningen.',
      parts: ['Kiloprisen', 'er', '15 kroner', 'per kilo'],
      hint: 'Begynn med «Kiloprisen».'
    },
    write: {
      prompt: 'Pose A koster 30 kr for 2 kg. Pose B koster 42 kr for 3 kg. Hvilken pose har lavest kilopris? Skriv en sammenligning.',
      starters: ['Pose A koster … per kilo.', 'Pose B er … fordi …'],
      checks: ['Jeg skriver kiloprisen for begge posene.', 'Jeg forklarer hvilken pose som er billigst per kilo.'],
      model: 'Pose A koster 15 kr per kilo. Pose B koster 14 kr per kilo fordi 42 delt på 3 er 14. Pose B har lavest kilopris.'
    },
    talk: 'En pose har 2 røde og 3 blå kuler. Beskriv forholdet mellom røde og blå kuler for hverandre.'
  }
];
