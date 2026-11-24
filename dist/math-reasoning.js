const MATH_REASONING = [
  {
    id: 'mat7',
    title: 'Beskriv en tabell og et diagram',
    level: 'A2',
    goal: 'Jeg kan beskrive en endring og bruke tall fra en tabell eller et diagram.',
    words: [
      ['en tabell', 'таблиця', 'ตาราง', 'Tabellen viser 8 elever på mandag.'],
      ['et stolpediagram', 'стовпчикова діаграма', 'แผนภูมิแท่ง', 'En stolpe viser 12 elever på tirsdag.'],
      ['øker', 'зростає', 'เพิ่มขึ้น', 'Fra 8 til 12 øker antallet med 4.'],
      ['synker', 'зменшується', 'ลดลง', 'Fra 12 til 10 synker antallet med 2.'],
      ['forskjellen', 'різниця', 'ผลต่าง', 'Forskjellen mellom 8 og 12 er 4.']
    ],
    model: 'På mandag sykler 8 elever. På tirsdag sykler 12 elever. Antallet øker med 4 fra mandag til tirsdag, fordi 12 − 8 = 4. På onsdag sykler 10 elever. Da synker antallet med 2.',
    choice: {
      prompt: 'Hvordan endrer antallet elever som sykler, seg fra tirsdag til onsdag?',
      options: ['Det synker med 2 elever.', 'Det øker med 2 elever.', 'Det synker med 10 elever.'],
      hint: 'Sammenlign 12 på tirsdag med 10 på onsdag.',
      explanation: 'Antallet går fra 12 til 10. Det synker med 2 fordi 12 − 10 = 2.'
    },
    gap: {
      prompt: 'Fyll inn ordet som beskriver endringen.',
      before: 'Fra mandag til tirsdag',
      after: 'antallet fra 8 til 12 elever.',
      accepted: ['øker', 'stiger', 'vokser'],
      hint: 'Antallet blir større.',
      explanation: 'Øker passer fordi 12 er større enn 8.'
    },
    build: {
      prompt: 'Bygg en setning som beskriver endringen fra mandag til tirsdag.',
      parts: ['Fra mandag til tirsdag', 'øker antallet', 'med 4 elever'],
      hint: 'Start med tidsuttrykket.'
    },
    write: {
      prompt: 'Beskriv endringen fra tirsdag til onsdag. Bruk tall og forklar hvordan du finner forskjellen.',
      starters: ['På tirsdag …', 'På onsdag …', 'Antallet … fordi …'],
      checks: ['Jeg har brukt tallene 12 og 10.', 'Jeg forteller hvilken vei antallet endrer seg, og hvor mye.', 'Jeg har forklart med en utregning.'],
      model: 'På tirsdag sykler 12 elever, og på onsdag sykler 10 elever. Antallet synker med 2 elever, fordi 12 − 10 = 2.'
    },
    talk: 'Jobb i par. En beskriver endringen fra mandag til tirsdag. Den andre beskriver endringen fra tirsdag til onsdag. Bruk tallene.'
  },
  {
    id: 'mat8',
    title: 'Fra ord til uttrykk og likning',
    level: 'A2–B1',
    goal: 'Jeg kan oversette ord til symboler og forklare samme operasjon på begge sider av en likning.',
    words: [
      ['et uttrykk', 'вираз', 'นิพจน์', 'x + 3 er et uttrykk.'],
      ['en likning', 'рівняння', 'สมการ', 'x + 3 = 7 er en likning.'],
      ['summen', 'сума', 'ผลรวม', 'Summen av x og 3 er x + 3.'],
      ['begge sider', 'обидві частини', 'ทั้งสองข้าง', 'I x + 3 = 7 står x + 3 til venstre og 7 til høyre.'],
      ['trekke fra', 'віднімати', 'ลบ', 'Vi trekker fra 3: 7 − 3 = 4.']
    ],
    model: '«Summen av et tall og 3 er 7» skriver vi x + 3 = 7. Vi trekker fra 3 på begge sider: x + 3 − 3 = 7 − 3. Da får vi x = 4. Vi gjør det samme på begge sider for at likheten skal gjelde fortsatt.',
    choice: {
      prompt: 'Hvilken likning betyr «summen av et tall og 3 er 7»?',
      options: ['x + 3 = 7', 'x − 3 = 7', '3x = 7'],
      hint: 'Summen forteller at du skal legge sammen.',
      explanation: 'Et ukjent tall kan hete x. Summen av x og 3 er x + 3, og «er 7» gir = 7.'
    },
    gap: {
      prompt: 'Fyll inn ordene som mangler.',
      before: 'For å løse x + 3 = 7 trekker vi fra 3 på',
      after: 'av likhetstegnet.',
      accepted: ['begge sider', 'hver side'],
      hint: 'Vi gjør det samme til venstre og til høyre.',
      explanation: 'Vi trekker fra 3 på begge sider for å bevare likheten.'
    },
    build: {
      prompt: 'Bygg en setning som forklarer første steg når du løser x + 3 = 7.',
      parts: ['Vi trekker fra 3', 'på begge sider', 'av likhetstegnet'],
      hint: 'Start med «Vi trekker fra 3».'
    },
    write: {
      prompt: 'Løs x − 5 = 8. Forklar hva du gjør på begge sider og hvorfor. Sett inn svaret for å kontrollere det.',
      starters: ['Jeg … på begge sider fordi …', 'Da får jeg …', 'Jeg kontrollerer ved å …'],
      checks: ['Jeg forklarer hvordan jeg får x alene.', 'Jeg gjør det samme på begge sider.', 'Jeg setter inn svaret og sjekker likheten.'],
      model: 'Jeg legger til 5 på begge sider fordi jeg vil ha x alene. Da får jeg x = 8 + 5 = 13. Jeg setter inn 13 og sjekker at 13 − 5 = 8.'
    },
    talk: 'Jobb i par. En leser x + 3 = 7 med ord. Den andre forklarer hvordan likningen løses og kontrolleres. Bytt roller.'
  },
  {
    id: 'mat9',
    title: 'Begrunn og kontroller et svar',
    level: 'A2–B1',
    goal: 'Jeg kan løse en tekstoppgave og skrive en begrunnelse, en kontroll og en svarsetning med enhet.',
    words: [
      ['en pris', 'ціна', 'ราคา', 'Prisen er 15 kroner per billett.'],
      ['til sammen', 'разом', 'รวมทั้งหมด', '3 billetter koster 45 kroner til sammen.'],
      ['per', 'за', 'ต่อ', '15 kroner per billett betyr 15 kroner for én billett.'],
      ['en enhet', 'одиниця вимірювання', 'หน่วย', 'Kroner er enheten i svaret 45 kroner.'],
      ['kontrollere', 'перевіряти', 'ตรวจสอบ', '45 ÷ 3 = 15 kontrollerer at hver billett koster 15 kroner.']
    ],
    model: 'Tre bussbilletter koster 15 kroner per billett. Hva koster billettene til sammen? Jeg regner 3 · 15 = 45 fordi jeg kjøper tre billetter til 15 kroner hver. Jeg kontrollerer: 45 ÷ 3 = 15. Billettene koster 45 kroner til sammen.',
    choice: {
      prompt: 'Tre bussbilletter koster 15 kroner per billett. Hvilken utregning finner prisen til sammen?',
      options: ['3 · 15 = 45', '15 − 3 = 12', '15 + 3 = 18'],
      hint: 'Det er tre billetter med samme pris.',
      explanation: 'Vi legger sammen 15 kroner tre ganger: 15 + 15 + 15 = 3 · 15 = 45 kroner.'
    },
    gap: {
      prompt: 'Fullfør svarsetningen med riktig enhet.',
      before: 'Tre billetter koster 45',
      after: 'til sammen.',
      accepted: ['kroner', 'kr', 'NOK'],
      hint: 'Prisen for én billett er oppgitt i denne enheten.',
      explanation: 'Prisen må oppgis med enheten kroner.'
    },
    build: {
      prompt: 'Bygg en svarsetning til oppgaven om de tre bussbillettene.',
      parts: ['De tre bussbillettene', 'koster 45 kroner', 'til sammen'],
      hint: 'Start med det oppgaven spør om: bussbillettene.'
    },
    write: {
      prompt: 'Klassen tar bussen klokka 9. Fire elever kjøper én billett hver. Hver billett koster 18 kr. De betaler med 100 kr. Hvor mye får de tilbake? Vis de to regnetrinnene, og forklar hvordan du sjekker svaret.',
      starters: ['Først … fordi …', 'Så …', 'Elevene får …', 'Jeg sjekker ved å …'],
      checks: ['Jeg forklarer hvordan jeg finner billettprisen til sammen.', 'Jeg sjekker at prisen og vekslepengene til sammen gir beløpet de betalte.', 'Jeg svarer på spørsmålet med enhet.'],
      model: 'Først ganger jeg 4 med 18 fordi hver elev trenger en billett. Billettene koster 72 kr. Så trekker jeg 72 fra 100. Elevene får 28 kr tilbake. Jeg sjekker ved å legge sammen 72 kr og 28 kr. Det blir 100 kr.'
    },
    talk: 'Jobb i par. Forklar hvorfor dere ganger 3 med 15. Vis deretter hverandre hvordan dere kan kontrollere svaret.'
  }
];
