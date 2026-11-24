const NEXT_LESSONS = {
  "units": [
    {
      "id": "u13",
      "number": "21",
      "title": "Skoleuka mi",
      "stage": "a1plus",
      "level": "På vei mot A2",
      "intro": "Les en enkel plan og fortell om en skoledag.",
      "goal": "Jeg kan lese og beskrive en dagsplan.",
      "words": [
        "norsk",
        "en time",
        "en pause",
        "starter",
        "slutter",
        "klokka ni"
      ],
      "lessons": [
        {
          "id": "u13l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u13_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Se på uttrykkene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Mandag: Norsk starter klokka åtte og slutter klokka tolv. Pause klokka ni. Tirsdag: Norsk starter klokka ni og slutter klokka tolv. Jeg har norsk på skolen.",
          "items": [
            {
              "word": "norsk",
              "uk": "норвезька мова",
              "th": "ภาษานอร์เวย์"
            },
            {
              "word": "en time",
              "uk": "урок",
              "th": "คาบเรียน"
            },
            {
              "word": "en pause",
              "uk": "перерва",
              "th": "พัก"
            },
            {
              "word": "starter",
              "uk": "починається",
              "th": "เริ่ม"
            },
            {
              "word": "slutter",
              "uk": "закінчується",
              "th": "เลิก"
            },
            {
              "word": "klokka ni",
              "uk": "о дев’ятій",
              "th": "เก้าโมง"
            }
          ]
        },
        {
          "id": "u13l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u13_recognize",
          "title": "Finn informasjon",
          "instruction": "Når starter norsk på tirsdag?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "klokka ni",
          "prompt": "Mandag: norsk 08.00–12.00, pause 09.00. Tirsdag: norsk 09.00–12.00.",
          "options": [
            {
              "id": "a",
              "label": "klokka ni"
            },
            {
              "id": "b",
              "label": "klokka åtte"
            },
            {
              "id": "c",
              "label": "klokka tolv"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u13l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u13_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør setningen.",
          "hint": "Tenk på når timen begynner.",
          "explanation": "Timen starter klokka åtte.",
          "prompt": "Norsk 08.00–12.00.",
          "before": "Timen",
          "after": "klokka åtte.",
          "accepted": [
            "starter"
          ],
          "model": "Timen starter klokka åtte."
        },
        {
          "id": "u13l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u13_build",
          "title": "Sett sammen",
          "instruction": "Bygg setningen.",
          "hint": "Finn den første delen av setningen.",
          "explanation": "Norsk starter klokka ni.",
          "tokens": [
            "klokka ni",
            "Norsk starter"
          ],
          "answer": [
            "Norsk starter",
            "klokka ni"
          ],
          "model": "Norsk starter klokka ni.",
          "sentence": true
        },
        {
          "id": "u13l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u13_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett klokkeslettet.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "Norsk starter klokka ni.",
          "prompt": "Plan: tirsdag norsk 09.00–12.00. Setning som skal rettes: Norsk starter klokka åtte.",
          "before": "Norsk starter klokka",
          "after": ".",
          "accepted": [
            "ni",
            "9",
            "09.00",
            "09:00"
          ],
          "model": "Norsk starter klokka ni.",
          "responseLength": "sentence"
        },
        {
          "id": "u13l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u13_write",
          "title": "Skriv selv",
          "instruction": "Skriv to eller tre setninger om tirsdag.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Tirsdag: norsk 09.00–12.00. Pause 10.00.",
          "placeholder": "Skriv her …",
          "model": "Jeg har norsk på tirsdag. Norsk starter klokka ni og slutter klokka tolv.",
          "example": "Jeg har norsk på tirsdag. Norsk starter klokka ni og slutter klokka tolv.",
          "checks": [
            "Jeg skrev om dagen og timen.",
            "Jeg skrev når timen starter og slutter."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u14",
      "number": "22",
      "title": "Finn fram på skolen",
      "stage": "a1plus",
      "level": "På vei mot A2",
      "intro": "Les og skriv korte veibeskrivelser på skolen.",
      "goal": "Jeg kan følge og skrive en kort rute.",
      "words": [
        "en inngang",
        "et rom",
        "ved",
        "gå rett fram",
        "ta til høyre",
        "ta til venstre"
      ],
      "lessons": [
        {
          "id": "u14l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u14_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Se på uttrykkene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Start ved inngangen. Se rett fram. Gå rett fram til krysset. Fra krysset: Rom 1 er til høyre. Rom 2 er til venstre. Rom 3 er rett fram.",
          "items": [
            {
              "word": "en inngang",
              "uk": "вхід",
              "th": "ทางเข้า"
            },
            {
              "word": "et rom",
              "uk": "кімната",
              "th": "ห้อง"
            },
            {
              "word": "ved",
              "uk": "біля",
              "th": "ข้าง"
            },
            {
              "word": "gå rett fram",
              "uk": "іди прямо",
              "th": "เดินตรงไป"
            },
            {
              "word": "ta til høyre",
              "uk": "поверни праворуч",
              "th": "เลี้ยวขวา"
            },
            {
              "word": "ta til venstre",
              "uk": "поверни ліворуч",
              "th": "เลี้ยวซ้าย"
            },
            {
              "word": "et kryss",
              "uk": "перехрестя",
              "th": "ทางแยก"
            },
            {
              "word": "første kryss",
              "uk": "перше перехрестя",
              "th": "ทางแยกแรก"
            },
            {
              "word": "neste kryss",
              "uk": "наступне перехрестя",
              "th": "ทางแยกถัดไป"
            }
          ]
        },
        {
          "id": "u14l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u14_recognize",
          "title": "Finn informasjon",
          "instruction": "Hvor er rom 2 fra krysset?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "til venstre",
          "prompt": "Start ved inngangen. Se rett fram. Gå rett fram til krysset. Rom 1 er til høyre. Rom 2 er til venstre. Rom 3 er rett fram.",
          "options": [
            {
              "id": "a",
              "label": "til venstre"
            },
            {
              "id": "b",
              "label": "til høyre"
            },
            {
              "id": "c",
              "label": "rett fram"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u14l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u14_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør retningen.",
          "hint": "Se hvilken side rom 1 ligger på.",
          "explanation": "Ta til høyre til rom 1.",
          "prompt": "Ved krysset: ← rom 2 | ↑ rom 3 | rom 1 →. Du ser rett fram.",
          "before": "Ta til",
          "after": "til rom 1.",
          "accepted": [
            "høyre"
          ],
          "model": "Ta til høyre til rom 1."
        },
        {
          "id": "u14l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u14_build",
          "title": "Sett sammen",
          "instruction": "Bygg setningen.",
          "hint": "Finn den første delen av setningen.",
          "explanation": "Ta til venstre til rom 2.",
          "tokens": [
            "rom 2",
            "til venstre til",
            "Ta"
          ],
          "answer": [
            "Ta",
            "til venstre til",
            "rom 2"
          ],
          "model": "Ta til venstre til rom 2.",
          "sentence": true
        },
        {
          "id": "u14l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u14_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett retningen.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "Ta til venstre til rom 2.",
          "prompt": "Fra inngangen: gå rett fram til krysset. Der er rom 2 til venstre. Setning som skal rettes: Ta til høyre til rom 2.",
          "before": "Ta til",
          "after": "til rom 2.",
          "accepted": [
            "venstre"
          ],
          "model": "Ta til venstre til rom 2.",
          "responseLength": "sentence"
        },
        {
          "id": "u14l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u14_write",
          "title": "Skriv selv",
          "instruction": "Skriv to korte instruksjoner til en medelev. Forklar veien til rom 1.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Start ved inngangen. Gå rett fram til krysset. Rom 1 er til høyre.",
          "placeholder": "Skriv her …",
          "model": "Gå rett fram til krysset. Ta til høyre til rom 1.",
          "example": "Gå rett fram til krysset. Ta til høyre til rom 1.",
          "checks": [
            "Jeg startet ved inngangen.",
            "Jeg skrev begge trinnene til rom 1."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u15",
      "number": "23",
      "title": "Først, så og til slutt",
      "stage": "a1plus",
      "level": "På vei mot A2",
      "intro": "Ordne og beskriv handlinger på skolen.",
      "goal": "Jeg kan forklare rekkefølgen på handlinger.",
      "words": [
        "først",
        "så",
        "etterpå",
        "til slutt",
        "Jeg leser. → Først leser jeg."
      ],
      "lessons": [
        {
          "id": "u15l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u15_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Se på uttrykkene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Jeg leser. Først leser jeg. Så skriver jeg. Etterpå leser jeg. Til slutt skriver jeg.",
          "items": [
            {
              "word": "først",
              "uk": "спочатку",
              "th": "ก่อนอื่น"
            },
            {
              "word": "så",
              "uk": "потім",
              "th": "จากนั้น"
            },
            {
              "word": "etterpå",
              "uk": "потім",
              "th": "หลังจากนั้น"
            },
            {
              "word": "til slutt",
              "uk": "наприкінці",
              "th": "สุดท้าย"
            },
            {
              "word": "Jeg leser. → Først leser jeg.",
              "uk": "Я читаю. → Спочатку я читаю.",
              "th": "ฉันอ่าน → ก่อนอื่นฉันอ่าน"
            }
          ]
        },
        {
          "id": "u15l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u15_recognize",
          "title": "Finn informasjon",
          "instruction": "Hva gjør jeg først og så?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "leser, så skriver",
          "prompt": "Først leser jeg. Så skriver jeg. Til slutt leser jeg.",
          "options": [
            {
              "id": "a",
              "label": "leser, så skriver"
            },
            {
              "id": "b",
              "label": "skriver, så leser"
            },
            {
              "id": "c",
              "label": "leser, så leser"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u15l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u15_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Skriv ordet for siste trinn.",
          "hint": "Bruk uttrykket som avslutter en rekkefølge.",
          "explanation": "Til slutt leser jeg.",
          "prompt": "1. Jeg leser. 2. Jeg skriver. 3. Jeg leser.",
          "before": "",
          "after": "leser jeg.",
          "accepted": [
            "til slutt"
          ],
          "model": "Til slutt leser jeg."
        },
        {
          "id": "u15l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u15_build",
          "title": "Sett sammen",
          "instruction": "Begynn med «Først». Sett sammen setningen.",
          "hint": "Finn den første delen av setningen.",
          "explanation": "Først leser jeg.",
          "tokens": [
            "jeg",
            "Først",
            "leser"
          ],
          "answer": [
            "Først",
            "leser",
            "jeg"
          ],
          "model": "Først leser jeg.",
          "sentence": true
        },
        {
          "id": "u15l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u15_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett handlingen.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "Så skriver jeg.",
          "prompt": "Plan: Først leser jeg. Så skriver jeg. Til slutt leser jeg. Setning som skal rettes: Så leser jeg.",
          "before": "Så",
          "after": "jeg.",
          "accepted": [
            "skriver"
          ],
          "model": "Så skriver jeg.",
          "responseLength": "sentence"
        },
        {
          "id": "u15l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u15_write",
          "title": "Skriv selv",
          "instruction": "Skriv tre setninger om planen.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "1. Lese. 2. Skrive. 3. Lese.",
          "placeholder": "Skriv her …",
          "model": "Først leser jeg. Så skriver jeg. Til slutt leser jeg.",
          "example": "Først leser jeg. Så skriver jeg. Til slutt leser jeg.",
          "checks": [
            "Jeg skrev tre setninger i riktig rekkefølge.",
            "Jeg brukte ord som viser rekkefølge."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u16",
      "number": "24",
      "title": "Sammenlign og velg",
      "stage": "a1plus",
      "level": "På vei mot A2",
      "intro": "Sammenlign størrelse og pris før du velger.",
      "goal": "Jeg kan sammenligne to ting og fortelle hva jeg velger.",
      "words": [
        "stor → større enn",
        "liten → mindre enn",
        "billigere enn",
        "dyrere enn"
      ],
      "lessons": [
        {
          "id": "u16l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u16_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Se på uttrykkene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Bok A er stor og koster 12 kr. Bok B er liten og koster 8 kr. Bok A er større enn bok B. Bok B er mindre enn bok A. Bok B er billigere enn bok A. Bok A er dyrere enn bok B.",
          "items": [
            {
              "word": "stor → større enn",
              "uk": "великий → більший за",
              "th": "ใหญ่ → ใหญ่กว่า"
            },
            {
              "word": "liten → mindre enn",
              "uk": "маленький → менший за",
              "th": "เล็ก → เล็กกว่า"
            },
            {
              "word": "billigere enn",
              "uk": "дешевший за",
              "th": "ถูกกว่า"
            },
            {
              "word": "dyrere enn",
              "uk": "дорожчий за",
              "th": "แพงกว่า"
            }
          ]
        },
        {
          "id": "u16l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u16_recognize",
          "title": "Finn informasjon",
          "instruction": "Hvilken sammenligning passer?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Bok A er større enn bok B.",
          "prompt": "Bok A: stor, 12 kr. Bok B: liten, 8 kr.",
          "options": [
            {
              "id": "a",
              "label": "Bok A er større enn bok B."
            },
            {
              "id": "b",
              "label": "Bok B er større enn bok A."
            },
            {
              "id": "c",
              "label": "Bok A er mindre enn bok B."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u16l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u16_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør sammenligningen.",
          "hint": "Bruk ordet for lavere pris.",
          "explanation": "Bok B er billigere enn bok A.",
          "prompt": "Bok A: 12 kr. Bok B: 8 kr.",
          "before": "Bok B er",
          "after": "enn bok A.",
          "accepted": [
            "billigere"
          ],
          "model": "Bok B er billigere enn bok A."
        },
        {
          "id": "u16l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u16_build",
          "title": "Sett sammen",
          "instruction": "Bygg en setning som passer til kortene.",
          "hint": "Finn den første delen av setningen.",
          "explanation": "Bok A er større enn bok B.",
          "tokens": [
            "bok B",
            "er større enn",
            "Bok A"
          ],
          "answer": [
            "Bok A",
            "er større enn",
            "bok B"
          ],
          "model": "Bok A er større enn bok B.",
          "sentence": true,
          "prompt": "Bok A: stor. Bok B: liten."
        },
        {
          "id": "u16l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u16_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett sammenligningen.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "Bok B er billigere enn bok A.",
          "prompt": "Bok A: stor, 12 kr. Bok B: liten, 8 kr. Setning som skal rettes: Bok B er dyrere enn bok A.",
          "before": "Bok B er",
          "after": "enn bok A.",
          "accepted": [
            "billigere"
          ],
          "model": "Bok B er billigere enn bok A.",
          "responseLength": "sentence"
        },
        {
          "id": "u16l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u16_write",
          "title": "Skriv selv",
          "instruction": "Skriv to eller tre setninger. Sammenlign bøkene og velg én.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Bok A: stor, 12 kr. Bok B: liten, 8 kr.",
          "placeholder": "Skriv her …",
          "model": "Bok A er større enn bok B. Bok B er billigere enn bok A. Jeg vil ha bok B.",
          "example": "Bok A er større enn bok B. Bok B er billigere enn bok A. Jeg vil ha bok B.",
          "checks": [
            "Jeg sammenlignet bøkene.",
            "Jeg skrev hvilken bok jeg vil ha."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u17",
      "number": "25",
      "title": "Velg og forklar",
      "stage": "a1plus",
      "level": "På vei mot A2",
      "intro": "Velg en ting og gi en enkel grunn.",
      "goal": "Jeg kan begrunne et valg med «fordi».",
      "words": [
        "velger",
        "liker",
        "trenger",
        "fordi",
        "hvorfor"
      ],
      "lessons": [
        {
          "id": "u17l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u17_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Se på uttrykkene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Jeg velger bok A. Bok A er billigere. Jeg velger bok A fordi bok A er billigere. Hvorfor velger jeg bok A? Fordi bok A er billigere. Bok A er billig. Bok A er billigere enn bok B.",
          "items": [
            {
              "word": "velger",
              "uk": "обираю",
              "th": "เลือก"
            },
            {
              "word": "liker",
              "uk": "подобається",
              "th": "ชอบ"
            },
            {
              "word": "trenger",
              "uk": "потребую",
              "th": "ต้องการ"
            },
            {
              "word": "fordi",
              "uk": "тому що",
              "th": "เพราะว่า"
            },
            {
              "word": "hvorfor",
              "uk": "чому",
              "th": "ทำไม"
            },
            {
              "word": "billig → billigere",
              "uk": "дешевий → дешевший",
              "th": "ราคาถูก → ถูกกว่า"
            }
          ]
        },
        {
          "id": "u17l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u17_recognize",
          "title": "Finn informasjon",
          "instruction": "Hvorfor velger Mali bok A?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Bok A er billigere.",
          "prompt": "Bok A: 8 kr. Bok B: 12 kr. Mali trenger en billig bok. Mali velger bok A.",
          "options": [
            {
              "id": "a",
              "label": "Bok A er billigere."
            },
            {
              "id": "b",
              "label": "Bok A er dyrere."
            },
            {
              "id": "c",
              "label": "Bok B er billigere."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u17l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u17_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Skriv bindeordet som gir en grunn.",
          "hint": "Ordet svarer på «hvorfor».",
          "explanation": "Jeg velger bok A fordi bok A er billigere.",
          "prompt": "Bok A: 8 kr. Bok B: 12 kr.",
          "before": "Jeg velger bok A",
          "after": "bok A er billigere.",
          "accepted": [
            "fordi"
          ],
          "model": "Jeg velger bok A fordi bok A er billigere."
        },
        {
          "id": "u17l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u17_build",
          "title": "Sett sammen",
          "instruction": "Bygg setningen.",
          "hint": "Finn den første delen av setningen.",
          "explanation": "Jeg velger bok A fordi bok A er billigere.",
          "tokens": [
            "fordi bok A er billigere",
            "Jeg velger bok A"
          ],
          "answer": [
            "Jeg velger bok A",
            "fordi bok A er billigere"
          ],
          "model": "Jeg velger bok A fordi bok A er billigere.",
          "sentence": true
        },
        {
          "id": "u17l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u17_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett grunnen.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "Mali velger bok A fordi bok A er billigere.",
          "prompt": "Bok A: 8 kr. Bok B: 12 kr. Mali velger bok A. Setning som skal rettes: Mali velger bok A fordi bok A er dyrere.",
          "before": "Mali velger bok A fordi bok A er",
          "after": ".",
          "accepted": [
            "billigere"
          ],
          "model": "Mali velger bok A fordi bok A er billigere.",
          "responseLength": "sentence"
        },
        {
          "id": "u17l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u17_write",
          "title": "Skriv selv",
          "instruction": "Skriv tre eller fire setninger. Velg en bok og gi minst én grunn.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Bok A: stor, 12 kr. Bok B: liten, 8 kr.",
          "placeholder": "Skriv her …",
          "model": "Jeg velger bok B. Bok B er mindre. Jeg velger bok B fordi bok B er billigere.",
          "example": "Jeg velger bok B. Bok B er mindre. Jeg velger bok B fordi bok B er billigere.",
          "checks": [
            "Jeg skrev hvilken bok jeg velger.",
            "Jeg ga en grunn med «fordi»."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u18",
      "number": "26",
      "title": "Gi beskjed om et problem",
      "stage": "a1plus",
      "level": "På vei mot A2",
      "intro": "Skriv en praktisk beskjed om en endring.",
      "goal": "Jeg kan forklare et problem og hva som skjer.",
      "words": [
        "syk",
        "forsinket",
        "kommer",
        "en buss",
        "Beklager."
      ],
      "lessons": [
        {
          "id": "u18l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u18_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Se på uttrykkene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Jeg kommer. Jeg kommer ikke. Jeg er syk. Jeg kommer ikke på skolen. Beklager. Anna kommer klokka tolv fordi bussen er forsinket.",
          "items": [
            {
              "word": "syk",
              "uk": "хворий / хвора",
              "th": "ป่วย"
            },
            {
              "word": "forsinket",
              "uk": "запізнюється",
              "th": "ล่าช้า"
            },
            {
              "word": "kommer",
              "uk": "приходить",
              "th": "มา"
            },
            {
              "word": "en buss",
              "uk": "автобус",
              "th": "รถบัส"
            },
            {
              "word": "Beklager.",
              "uk": "Вибачте.",
              "th": "ขอโทษ"
            }
          ]
        },
        {
          "id": "u18l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u18_recognize",
          "title": "Finn informasjon",
          "instruction": "Hva skal Anna gi beskjed om?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Bussen er forsinket. Anna kommer klokka tolv.",
          "prompt": "Mali: Jeg er syk. Jeg kommer ikke på skolen. Beklager. Anna: Bussen er forsinket. Jeg kommer klokka tolv.",
          "options": [
            {
              "id": "a",
              "label": "Bussen er forsinket. Anna kommer klokka tolv."
            },
            {
              "id": "b",
              "label": "Bussen er forsinket. Anna kommer klokka åtte."
            },
            {
              "id": "c",
              "label": "Anna er syk og kommer ikke."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u18l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u18_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør ordet om bussen.",
          "hint": "Bussen kommer senere enn planlagt.",
          "explanation": "Bussen er forsinket.",
          "prompt": "Bussen: plan 08.00, ny tid 12.00.",
          "before": "Bussen er",
          "after": ".",
          "accepted": [
            "forsinket"
          ],
          "model": "Bussen er forsinket."
        },
        {
          "id": "u18l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u18_build",
          "title": "Sett sammen",
          "instruction": "Bygg setningen.",
          "hint": "Finn den første delen av setningen.",
          "explanation": "Jeg kommer ikke på skolen.",
          "tokens": [
            "på skolen",
            "ikke",
            "Jeg kommer"
          ],
          "answer": [
            "Jeg kommer",
            "ikke",
            "på skolen"
          ],
          "model": "Jeg kommer ikke på skolen.",
          "sentence": true
        },
        {
          "id": "u18l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u18_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett klokkeslettet.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "Anna kommer klokka tolv.",
          "prompt": "Anna: Bussen er forsinket. Jeg kommer klokka tolv. Svar som skal rettes: Anna kommer klokka åtte.",
          "before": "Anna kommer klokka",
          "after": ".",
          "accepted": [
            "tolv",
            "12",
            "12.00",
            "12:00"
          ],
          "model": "Anna kommer klokka tolv.",
          "responseLength": "sentence"
        },
        {
          "id": "u18l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u18_write",
          "title": "Skriv selv",
          "instruction": "Du er Mali. Skriv tre eller fire setninger til læreren om situasjonen.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Mali er syk og kommer ikke på skolen. Mali trenger hjelp med norsk.",
          "placeholder": "Skriv her …",
          "model": "Hei! Jeg er syk. Jeg kommer ikke på skolen. Kan du hjelpe meg med norsk?",
          "example": "Hei! Jeg er syk. Jeg kommer ikke på skolen. Kan du hjelpe meg med norsk?",
          "checks": [
            "Jeg skrev problemet og hva det betyr for skolen.",
            "Jeg ba om hjelp."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u19",
      "number": "27",
      "title": "I går og i dag",
      "stage": "a1plus",
      "level": "På vei mot A2",
      "intro": "Les og bruk to kjente handlinger i går og i dag.",
      "goal": "Jeg kan fortelle om lesing og skriving i går og i dag.",
      "words": [
        "i går",
        "i dag",
        "nå",
        "leser → leste",
        "skriver → skrev"
      ],
      "lessons": [
        {
          "id": "u19l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u19_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Se på uttrykkene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Jeg leser i dag. Jeg leste i går. Jeg skriver i dag. Jeg skrev i går. I går leste jeg en bok. I dag leser jeg en bok. Dette er to lærte mønstre.",
          "items": [
            {
              "word": "i går",
              "uk": "учора",
              "th": "เมื่อวาน"
            },
            {
              "word": "i dag",
              "uk": "сьогодні",
              "th": "วันนี้"
            },
            {
              "word": "nå",
              "uk": "зараз",
              "th": "ตอนนี้"
            },
            {
              "word": "leser → leste",
              "uk": "читаю → читав / читала",
              "th": "อ่านวันนี้ → อ่านเมื่อวาน"
            },
            {
              "word": "skriver → skrev",
              "uk": "пишу → писав / писала",
              "th": "เขียนวันนี้ → เขียนเมื่อวาน"
            }
          ]
        },
        {
          "id": "u19l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u19_recognize",
          "title": "Finn informasjon",
          "instruction": "Hva gjorde Anna i går?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Anna leste.",
          "prompt": "Anna: I går leste jeg. I dag skriver jeg. Mali: I går skrev jeg. I dag leser jeg.",
          "options": [
            {
              "id": "a",
              "label": "Anna leste."
            },
            {
              "id": "b",
              "label": "Anna skrev."
            },
            {
              "id": "c",
              "label": "Mali leste."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u19l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u19_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør verbet om i går.",
          "hint": "Bruk fortidsformen av «leser».",
          "explanation": "I går leste jeg.",
          "prompt": "I dag leser jeg. I går: lese.",
          "before": "I går",
          "after": "jeg.",
          "accepted": [
            "leste"
          ],
          "model": "I går leste jeg."
        },
        {
          "id": "u19l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u19_build",
          "title": "Sett sammen",
          "instruction": "Begynn med «I går». Sett sammen setningen.",
          "hint": "Finn den første delen av setningen.",
          "explanation": "I går leste jeg en bok.",
          "tokens": [
            "en bok",
            "I går",
            "leste jeg"
          ],
          "answer": [
            "I går",
            "leste jeg",
            "en bok"
          ],
          "model": "I går leste jeg en bok.",
          "sentence": true
        },
        {
          "id": "u19l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u19_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett handlingen.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "I går leste Anna.",
          "prompt": "Logg: I går leste Anna. I dag skriver Anna. Setning som skal rettes: I går skrev Anna.",
          "before": "I går",
          "after": "Anna.",
          "accepted": [
            "leste"
          ],
          "model": "I går leste Anna.",
          "responseLength": "sentence"
        },
        {
          "id": "u19l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u19_write",
          "title": "Skriv selv",
          "instruction": "Du er Anna. Skriv tre eller fire setninger om planen.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "I går: lese en bok, skrive. I dag: lese, skrive.",
          "placeholder": "Skriv her …",
          "model": "I går leste jeg en bok. I går skrev jeg. I dag leser jeg. I dag skriver jeg.",
          "example": "I går leste jeg en bok. I går skrev jeg. I dag leser jeg. I dag skriver jeg.",
          "checks": [
            "Jeg skrev om handlingene i går og i dag.",
            "Jeg brukte leste og skrev om i går."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u20",
      "number": "28",
      "title": "En skoledag – fra beskjed til svar",
      "stage": "a1plus",
      "level": "På vei mot A2",
      "intro": "Les flere korte kilder og skriv et svar.",
      "goal": "Jeg kan finne opplysninger og skrive en tydelig beskjed.",
      "words": [
        "ny beskjed",
        "fra inngangen",
        "Jeg tar med en bok."
      ],
      "lessons": [
        {
          "id": "u20l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u20_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Se på uttrykkene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Ny beskjed: Norsk starter tirsdag klokka ni i rom 2. Ta med en bok. Rute: Fra inngangen går du rett fram til krysset. Ta til venstre til rom 2. Jeg svarer: Jeg kommer klokka ni og tar med en bok.",
          "items": [
            {
              "word": "ny beskjed",
              "uk": "нове повідомлення",
              "th": "ข้อความใหม่"
            },
            {
              "word": "fra inngangen",
              "uk": "від входу",
              "th": "จากทางเข้า"
            },
            {
              "word": "Jeg tar med en bok.",
              "uk": "Я візьму із собою книгу.",
              "th": "ฉันนำหนังสือมาด้วย"
            }
          ]
        },
        {
          "id": "u20l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u20_recognize",
          "title": "Finn informasjon",
          "instruction": "Når starter norsk ifølge den nye beskjeden?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "tirsdag klokka ni",
          "prompt": "Gammel beskjed: norsk mandag klokka åtte i rom 1. Ny beskjed: norsk tirsdag klokka ni i rom 2. Ta med en bok.",
          "options": [
            {
              "id": "a",
              "label": "tirsdag klokka ni"
            },
            {
              "id": "b",
              "label": "mandag klokka ni"
            },
            {
              "id": "c",
              "label": "tirsdag klokka åtte"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u20l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u20_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør svaret på forslaget.",
          "hint": "Du svarer ja til avtalen.",
          "explanation": "Ja, det passer.",
          "prompt": "Anna: Kan vi møtes på tirsdag?",
          "before": "Ja, det",
          "after": ".",
          "accepted": [
            "passer"
          ],
          "model": "Ja, det passer."
        },
        {
          "id": "u20l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u20_build",
          "title": "Sett sammen",
          "instruction": "Bygg setningen.",
          "hint": "Finn den første delen av setningen.",
          "explanation": "Jeg tar med en bok.",
          "tokens": [
            "en bok",
            "Jeg",
            "tar med"
          ],
          "answer": [
            "Jeg",
            "tar med",
            "en bok"
          ],
          "model": "Jeg tar med en bok.",
          "sentence": true
        },
        {
          "id": "u20l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u20_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett dagen i svaret.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "Vi har norsk på tirsdag klokka ni.",
          "prompt": "Plan: Rom 1: norsk mandag klokka ni. Rom 2: norsk tirsdag klokka ni. Rute: Gå rett fram. Ta til venstre til rom 2. Svar til ruten som skal rettes: Vi har norsk på mandag klokka ni.",
          "before": "Vi har norsk på",
          "after": "klokka ni.",
          "accepted": [
            "tirsdag"
          ],
          "model": "Vi har norsk på tirsdag klokka ni.",
          "responseLength": "sentence"
        },
        {
          "id": "u20l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u20_write",
          "title": "Skriv selv",
          "instruction": "Skriv fire eller fem setninger til en medelev. Ta med tid, rom, ting og én grunn.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Ny beskjed: norsk tirsdag klokka ni i rom 2. Ta med en bok. Bok A koster 8 kr. Bok B koster 12 kr.",
          "placeholder": "Skriv her …",
          "model": "Hei! Vi har norsk på tirsdag klokka ni. Vi møtes i rom 2. Jeg tar med bok A. Jeg velger bok A fordi bok A er billigere.",
          "example": "Hei! Vi har norsk på tirsdag klokka ni. Vi møtes i rom 2. Jeg tar med bok A. Jeg velger bok A fordi bok A er billigere.",
          "checks": [
            "Jeg skrev tid, rom og hva jeg tar med.",
            "Jeg skrev én grunn med «fordi»."
          ],
          "minWords": 1
        }
      ]
    }
  ],
  "challenges": [
    {
      "id": "ch_u13",
      "baseUnitId": "u13",
      "number": "21",
      "title": "Skoleuka mi",
      "stage": "a1plus",
      "level": "Mer utfordring",
      "intro": "Les en enkel plan og fortell om en skoledag.",
      "goal": "Jeg kan lese og beskrive en dagsplan.",
      "words": [
        "norsk",
        "en time",
        "en pause",
        "starter",
        "slutter",
        "klokka ni"
      ],
      "lessons": [
        {
          "id": "ch_u13l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u13_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilken oversikt passer for mandag?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Mandag starter norsk 08.00, slutter 12.00 og har pause 09.00.",
          "prompt": "Mandag: norsk 08.00–12.00, pause 09.00. Tirsdag: norsk 09.00–12.00.",
          "options": [
            {
              "id": "a",
              "label": "start 08.00 · slutt 12.00 · pause 09.00"
            },
            {
              "id": "b",
              "label": "start 09.00 · slutt 12.00 · pause 09.00"
            },
            {
              "id": "c",
              "label": "start 08.00 · slutt 09.00 · pause 09.00"
            },
            {
              "id": "d",
              "label": "start 08.00 · slutt 12.00 · pause 08.00"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u13l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u13_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett sluttiden.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "Norsk slutter klokka tolv.",
          "prompt": "Mandag: norsk 08.00–12.00. Setning som skal rettes: Norsk slutter klokka åtte.",
          "before": "Norsk slutter klokka",
          "after": ".",
          "accepted": [
            "tolv",
            "12",
            "12.00",
            "12:00"
          ],
          "model": "Norsk slutter klokka tolv.",
          "responseLength": "sentence"
        },
        {
          "id": "ch_u13l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u13_write",
          "title": "Skriv selv",
          "instruction": "Skriv tre setninger til en medelev om mandag.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Mandag: norsk 08.00–12.00. Pause 09.00.",
          "placeholder": "Skriv her …",
          "model": "Jeg har norsk på mandag. Timen starter klokka åtte. Pausen er klokka ni.",
          "example": "Jeg har norsk på mandag. Timen starter klokka åtte. Pausen er klokka ni.",
          "checks": [
            "Jeg skrev om mandag og norsk.",
            "Jeg skrev når timen starter og når det er pause."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u14",
      "baseUnitId": "u14",
      "number": "22",
      "title": "Finn fram på skolen",
      "stage": "a1plus",
      "level": "Mer utfordring",
      "intro": "Les og skriv korte veibeskrivelser på skolen.",
      "goal": "Jeg kan følge og skrive en kort rute.",
      "words": [
        "en inngang",
        "et rom",
        "ved",
        "gå rett fram",
        "ta til høyre",
        "ta til venstre"
      ],
      "lessons": [
        {
          "id": "ch_u14l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u14_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilken rute går til rom 3?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "høyre, så venstre",
          "prompt": "Start ved inngangen. Se rett fram. Gå til første kryss og ta til høyre. Gå rett fram til neste kryss. Ta til venstre til rom 3.",
          "options": [
            {
              "id": "a",
              "label": "høyre, så venstre"
            },
            {
              "id": "b",
              "label": "venstre, så venstre"
            },
            {
              "id": "c",
              "label": "høyre, så høyre"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u14l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u14_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett den siste svingen.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "I neste kryss: ta til venstre.",
          "prompt": "Start ved inngangen. I første kryss: høyre. I neste kryss: venstre til rom 3. Setning som skal rettes: I neste kryss tar du til høyre.",
          "before": "I neste kryss: ta til",
          "after": ".",
          "accepted": [
            "venstre"
          ],
          "model": "I neste kryss: ta til venstre.",
          "responseLength": "sentence"
        },
        {
          "id": "ch_u14l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u14_write",
          "title": "Skriv selv",
          "instruction": "Skriv tre korte trinn fra inngangen til rom 3.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Start ved inngangen. Første kryss: høyre. Neste kryss: venstre til rom 3. Gå rett fram mellom kryssene.",
          "placeholder": "Skriv her …",
          "model": "Gå rett fram til første kryss. Ta til høyre og gå rett fram. Ta til venstre til rom 3.",
          "example": "Gå rett fram til første kryss. Ta til høyre og gå rett fram. Ta til venstre til rom 3.",
          "checks": [
            "Jeg skrev veien fra inngangen.",
            "Jeg skrev begge svingene i riktig rekkefølge."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u15",
      "baseUnitId": "u15",
      "number": "23",
      "title": "Først, så og til slutt",
      "stage": "a1plus",
      "level": "Mer utfordring",
      "intro": "Ordne og beskriv handlinger på skolen.",
      "goal": "Jeg kan forklare rekkefølgen på handlinger.",
      "words": [
        "først",
        "så",
        "etterpå",
        "til slutt",
        "Jeg leser. → Først leser jeg."
      ],
      "lessons": [
        {
          "id": "ch_u15l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u15_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilken rekkefølge passer?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "leser, skriver, leser, skriver",
          "prompt": "Først leser jeg en bok. Så skriver jeg. Etterpå leser jeg. Til slutt skriver jeg.",
          "options": [
            {
              "id": "a",
              "label": "leser, skriver, leser, skriver"
            },
            {
              "id": "b",
              "label": "leser, leser, skriver, skriver"
            },
            {
              "id": "c",
              "label": "skriver, skriver, leser, skriver"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u15l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u15_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett handlingen i andre trinn.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "Så skriver jeg.",
          "prompt": "Plan: Først leser jeg. Så skriver jeg. Til slutt leser jeg. Setning som skal rettes: Så leser jeg.",
          "before": "Så",
          "after": "jeg.",
          "accepted": [
            "skriver"
          ],
          "model": "Så skriver jeg.",
          "responseLength": "sentence"
        },
        {
          "id": "ch_u15l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u15_write",
          "title": "Skriv selv",
          "instruction": "Skriv tre eller fire setninger til en medelev om planen.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "1. Lese. 2. Skrive. 3. Lese. 4. Skrive.",
          "placeholder": "Skriv her …",
          "model": "Først leser jeg. Så skriver jeg. Etterpå leser jeg. Til slutt skriver jeg.",
          "example": "Først leser jeg. Så skriver jeg. Etterpå leser jeg. Til slutt skriver jeg.",
          "checks": [
            "Jeg beskrev tre eller fire trinn.",
            "Jeg brukte rekkefølgeord og satte handlingen før «jeg»."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u16",
      "baseUnitId": "u16",
      "number": "24",
      "title": "Sammenlign og velg",
      "stage": "a1plus",
      "level": "Mer utfordring",
      "intro": "Sammenlign størrelse og pris før du velger.",
      "goal": "Jeg kan sammenligne to ting og fortelle hva jeg velger.",
      "words": [
        "stor → større enn",
        "liten → mindre enn",
        "billigere enn",
        "dyrere enn"
      ],
      "lessons": [
        {
          "id": "ch_u16l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u16_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilke to opplysninger passer?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Bok A er større og billigere enn bok B.",
          "prompt": "Bok A: stor, 8 kr. Bok B: liten, 12 kr.",
          "options": [
            {
              "id": "a",
              "label": "Bok A er større og billigere enn bok B."
            },
            {
              "id": "b",
              "label": "Bok A er større og dyrere enn bok B."
            },
            {
              "id": "c",
              "label": "Bok A er mindre og billigere enn bok B."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u16l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u16_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett prisopplysningen.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "Bok A er billigere enn bok B.",
          "prompt": "Bok A: stor, 8 kr. Bok B: liten, 12 kr. Setning som skal rettes: Bok A er dyrere enn bok B.",
          "before": "Bok A er",
          "after": "enn bok B.",
          "accepted": [
            "billigere"
          ],
          "model": "Bok A er billigere enn bok B.",
          "responseLength": "sentence"
        },
        {
          "id": "ch_u16l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u16_write",
          "title": "Skriv selv",
          "instruction": "Skriv tre eller fire setninger til en venn. Sammenlign bøkene og velg én.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Bok A: stor, 8 kr. Bok B: liten, 12 kr.",
          "placeholder": "Skriv her …",
          "model": "Bok A er større enn bok B. Bok A er billigere enn bok B. Jeg vil ha bok A.",
          "example": "Bok A er større enn bok B. Bok A er billigere enn bok B. Jeg vil ha bok A.",
          "checks": [
            "Jeg sammenlignet størrelse og pris.",
            "Jeg skrev hvilken bok jeg vil ha."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u17",
      "baseUnitId": "u17",
      "number": "25",
      "title": "Velg og forklar",
      "stage": "a1plus",
      "level": "Mer utfordring",
      "intro": "Velg en ting og gi en enkel grunn.",
      "goal": "Jeg kan begrunne et valg med «fordi».",
      "words": [
        "velger",
        "liker",
        "trenger",
        "fordi",
        "hvorfor"
      ],
      "lessons": [
        {
          "id": "ch_u17l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u17_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilke valg passer til behovene?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Anna og Mali velger bok A. Bok A er stor og billigere.",
          "prompt": "Bok A er stor og koster 8 kr. Bok B er liten og koster 12 kr. Anna trenger en stor bok. Mali trenger en billig bok.",
          "options": [
            {
              "id": "a",
              "label": "Anna: bok A · Mali: bok A"
            },
            {
              "id": "b",
              "label": "Anna: bok A · Mali: bok B"
            },
            {
              "id": "c",
              "label": "Anna: bok B · Mali: bok A"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u17l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u17_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett grunnen.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "Mali velger bok A fordi bok A er billigere.",
          "prompt": "Bok A er stor og koster 8 kr. Bok B er liten og koster 12 kr. Mali trenger en billig bok. Setning som skal rettes: Mali velger bok A fordi bok A er dyrere.",
          "before": "Mali velger bok A fordi bok A er",
          "after": ".",
          "accepted": [
            "billigere"
          ],
          "model": "Mali velger bok A fordi bok A er billigere.",
          "responseLength": "sentence"
        },
        {
          "id": "ch_u17l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u17_write",
          "title": "Skriv selv",
          "instruction": "Skriv fire korte setninger til en venn. Velg en bok og gi en grunn med «fordi».",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Bok A: stor, 8 kr. Bok B: liten, 12 kr. Du trenger en billig bok.",
          "placeholder": "Skriv her …",
          "model": "Jeg trenger en billig bok. Jeg velger bok A. Jeg velger bok A fordi bok A er billigere. Bok A er stor.",
          "example": "Jeg trenger en billig bok. Jeg velger bok A. Jeg velger bok A fordi bok A er billigere. Bok A er stor.",
          "checks": [
            "Jeg valgte en bok som passer behovet.",
            "Jeg begrunnet valget med «fordi»."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u18",
      "baseUnitId": "u18",
      "number": "26",
      "title": "Gi beskjed om et problem",
      "stage": "a1plus",
      "level": "Mer utfordring",
      "intro": "Skriv en praktisk beskjed om en endring.",
      "goal": "Jeg kan forklare et problem og hva som skjer.",
      "words": [
        "syk",
        "forsinket",
        "kommer",
        "en buss",
        "Beklager."
      ],
      "lessons": [
        {
          "id": "ch_u18l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u18_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilken beskjed passer til Anna?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Bussen er forsinket. Jeg kommer klokka tolv.",
          "prompt": "Mali er syk og kommer ikke på skolen. Anna kommer klokka tolv fordi bussen er forsinket. Begge skriver en beskjed til læreren.",
          "options": [
            {
              "id": "a",
              "label": "Bussen er forsinket. Jeg kommer klokka tolv."
            },
            {
              "id": "b",
              "label": "Jeg er syk. Jeg kommer klokka tolv."
            },
            {
              "id": "c",
              "label": "Bussen er forsinket. Jeg kommer klokka åtte."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u18l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u18_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett opplysningen om Anna.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "Anna kommer klokka tolv fordi bussen er forsinket.",
          "prompt": "Mali er syk. Anna kommer klokka tolv fordi bussen er forsinket. Setning som skal rettes: Anna kommer klokka tolv fordi bussen er syk.",
          "before": "Anna kommer klokka tolv fordi bussen er",
          "after": ".",
          "accepted": [
            "forsinket"
          ],
          "model": "Anna kommer klokka tolv fordi bussen er forsinket.",
          "responseLength": "sentence"
        },
        {
          "id": "ch_u18l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u18_write",
          "title": "Skriv selv",
          "instruction": "Du er Anna. Skriv fire korte setninger til læreren om problemet, når du kommer og et spørsmål.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Bussen er forsinket. Anna kommer klokka tolv. Anna trenger hjelp med norsk.",
          "placeholder": "Skriv her …",
          "model": "Hei! Bussen er forsinket. Jeg kommer klokka tolv. Kan du hjelpe meg med norsk?",
          "example": "Hei! Bussen er forsinket. Jeg kommer klokka tolv. Kan du hjelpe meg med norsk?",
          "checks": [
            "Jeg forklarte problemet og når jeg kommer.",
            "Jeg stilte læreren et spørsmål."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u19",
      "baseUnitId": "u19",
      "number": "27",
      "title": "I går og i dag",
      "stage": "a1plus",
      "level": "Mer utfordring",
      "intro": "Les og bruk to kjente handlinger i går og i dag.",
      "goal": "Jeg kan fortelle om lesing og skriving i går og i dag.",
      "words": [
        "i går",
        "i dag",
        "nå",
        "leser → leste",
        "skriver → skrev"
      ],
      "lessons": [
        {
          "id": "ch_u19l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u19_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilken opplysning passer til Mali?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "I går skrev Mali. I dag leser Mali.",
          "prompt": "Annas skolelogg: I går leste jeg en bok på skolen. Jeg skrev på skolen. I dag leser jeg en bok. Jeg skriver på skolen.\nMalis skolelogg: I går skrev jeg. I dag leser jeg en bok på skolen.",
          "options": [
            {
              "id": "a",
              "label": "I går skrev Mali. I dag leser Mali."
            },
            {
              "id": "b",
              "label": "I går leste Mali. I dag leser Mali."
            },
            {
              "id": "c",
              "label": "I går skrev Mali. I dag skriver Mali."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u19l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u19_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett handlingen om Mali i går.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "I går skrev Mali.",
          "prompt": "Anna: I går leste jeg. Mali: I går skrev jeg. I dag leser jeg. Setning som skal rettes: I går leste Mali.",
          "before": "I går",
          "after": "Mali.",
          "accepted": [
            "skrev"
          ],
          "model": "I går skrev Mali.",
          "responseLength": "sentence"
        },
        {
          "id": "ch_u19l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u19_write",
          "title": "Skriv selv",
          "instruction": "Du er Mali. Skriv fire setninger til læreren om loggen.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "I går: lese en bok, skrive. I dag: lese, skrive.",
          "placeholder": "Skriv her …",
          "model": "I går leste jeg en bok. I går skrev jeg. I dag leser jeg. I dag skriver jeg.",
          "example": "I går leste jeg en bok. I går skrev jeg. I dag leser jeg. I dag skriver jeg.",
          "checks": [
            "Jeg skrev om begge handlingene i går og i dag.",
            "Jeg brukte leste og skrev om i går."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u20",
      "baseUnitId": "u20",
      "number": "28",
      "title": "En skoledag – fra beskjed til svar",
      "stage": "a1plus",
      "level": "Mer utfordring",
      "intro": "Les flere korte kilder og skriv et svar.",
      "goal": "Jeg kan finne opplysninger og skrive en tydelig beskjed.",
      "words": [
        "ny beskjed",
        "fra inngangen",
        "Jeg tar med en bok."
      ],
      "lessons": [
        {
          "id": "ch_u20l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u20_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilket svar passer til alle tre kildene?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Norsk er tirsdag klokka ni. Veien går til venstre. Bok A er billigere.",
          "prompt": "Kort 1 – ny beskjed: Norsk er på tirsdag klokka ni i rom 2. Vi har norsk på skolen. Ta med en bok.\nKort 2 – rute: Start ved inngangen. Gå rett fram til krysset. Ta til venstre til rom 2.\nKort 3 – pris: Bok A koster 8 kr. Bok B koster 12 kr. Mali trenger en billig bok.",
          "options": [
            {
              "id": "a",
              "label": "tirsdag klokka ni · til venstre · bok A"
            },
            {
              "id": "b",
              "label": "mandag klokka ni · til venstre · bok A"
            },
            {
              "id": "c",
              "label": "tirsdag klokka ni · til høyre · bok A"
            },
            {
              "id": "d",
              "label": "tirsdag klokka ni · til venstre · bok B"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u20l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u20_repair",
          "title": "Rett opplysningen",
          "instruction": "Rett retningen.",
          "hint": "Bruk opplysningene i teksten.",
          "explanation": "Ta til venstre til rom 2.",
          "prompt": "Ny beskjed: norsk i rom 2. Rute: Fra inngangen rett fram, så til venstre til rom 2. Svar som skal rettes: Ta til høyre til rom 2.",
          "before": "Ta til",
          "after": "til rom 2.",
          "accepted": [
            "venstre"
          ],
          "model": "Ta til venstre til rom 2.",
          "responseLength": "sentence"
        },
        {
          "id": "ch_u20l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u20_write",
          "title": "Skriv selv",
          "instruction": "Skriv fire til seks korte setninger til Mali. Bekreft tid og rom, forklar veien og fortell hvilken bok du tar med og hvorfor.",
          "hint": "Bruk uttrykkene du har lært.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Ny beskjed: norsk tirsdag klokka ni i rom 2. Rute: fra inngangen rett fram, så til venstre. Bok A koster 8 kr. Bok B koster 12 kr.",
          "placeholder": "Skriv her …",
          "model": "Hei, Mali! Vi har norsk tirsdag klokka ni i rom 2. Gå rett fram fra inngangen. Ta til venstre. Jeg tar med bok A fordi bok A er billigere.",
          "example": "Hei, Mali! Vi har norsk tirsdag klokka ni i rom 2. Gå rett fram fra inngangen. Ta til venstre. Jeg tar med bok A fordi bok A er billigere.",
          "checks": [
            "Jeg skrev tid, rom og veien fra inngangen.",
            "Jeg skrev hvilken bok jeg tar med og hvorfor."
          ],
          "minWords": 1
        }
      ]
    }
  ],
  "words": [
    {
      "word": "norsk",
      "uk": "норвезька мова",
      "th": "ภาษานอร์เวย์",
      "meaning": "Jeg har norsk på skolen."
    },
    {
      "word": "en time",
      "uk": "урок",
      "th": "คาบเรียน",
      "meaning": "En time på skolen."
    },
    {
      "word": "en pause",
      "uk": "перерва",
      "th": "พัก",
      "meaning": "Pause klokka ni."
    },
    {
      "word": "starter",
      "uk": "починається",
      "th": "เริ่ม",
      "meaning": "Timen starter klokka åtte."
    },
    {
      "word": "slutter",
      "uk": "закінчується",
      "th": "เลิก",
      "meaning": "Timen slutter klokka tolv."
    },
    {
      "word": "klokka ni",
      "uk": "о дев’ятій",
      "th": "เก้าโมง",
      "meaning": "09.00."
    },
    {
      "word": "en inngang",
      "uk": "вхід",
      "th": "ทางเข้า",
      "meaning": "Start ved inngangen."
    },
    {
      "word": "et rom",
      "uk": "кімната",
      "th": "ห้อง",
      "meaning": "Rom 1 er på skolen."
    },
    {
      "word": "ved",
      "uk": "біля",
      "th": "ข้าง",
      "meaning": "Jeg er ved inngangen."
    },
    {
      "word": "gå rett fram",
      "uk": "іди прямо",
      "th": "เดินตรงไป",
      "meaning": "Gå rett fram til krysset."
    },
    {
      "word": "ta til høyre",
      "uk": "поверни праворуч",
      "th": "เลี้ยวขวา",
      "meaning": "Ta til høyre til rom 1."
    },
    {
      "word": "ta til venstre",
      "uk": "поверни ліворуч",
      "th": "เลี้ยวซ้าย",
      "meaning": "Ta til venstre til rom 2."
    },
    {
      "word": "først",
      "uk": "спочатку",
      "th": "ก่อนอื่น",
      "meaning": "Først leser jeg."
    },
    {
      "word": "så",
      "uk": "потім",
      "th": "จากนั้น",
      "meaning": "Så skriver jeg."
    },
    {
      "word": "etterpå",
      "uk": "потім",
      "th": "หลังจากนั้น",
      "meaning": "Etterpå leser jeg."
    },
    {
      "word": "til slutt",
      "uk": "наприкінці",
      "th": "สุดท้าย",
      "meaning": "Til slutt skriver jeg."
    },
    {
      "word": "Først leser jeg.",
      "uk": "Спочатку я читаю.",
      "th": "ก่อนอื่นฉันอ่าน",
      "meaning": "«Leser» kommer før «jeg» etter først."
    },
    {
      "word": "større enn",
      "uk": "більший за",
      "th": "ใหญ่กว่า",
      "meaning": "Bok A er større enn bok B."
    },
    {
      "word": "mindre enn",
      "uk": "менший за",
      "th": "เล็กกว่า",
      "meaning": "Bok B er mindre enn bok A."
    },
    {
      "word": "billigere enn",
      "uk": "дешевший за",
      "th": "ถูกกว่า",
      "meaning": "8 kr er billigere enn 12 kr."
    },
    {
      "word": "dyrere enn",
      "uk": "дорожчий за",
      "th": "แพงกว่า",
      "meaning": "12 kr er dyrere enn 8 kr."
    },
    {
      "word": "velger",
      "uk": "обираю",
      "th": "เลือก",
      "meaning": "Jeg velger bok A."
    },
    {
      "word": "liker",
      "uk": "подобається",
      "th": "ชอบ",
      "meaning": "Jeg liker bok A."
    },
    {
      "word": "trenger",
      "uk": "потребую",
      "th": "ต้องการ",
      "meaning": "Jeg trenger en bok."
    },
    {
      "word": "fordi",
      "uk": "тому що",
      "th": "เพราะว่า",
      "meaning": "Jeg velger bok A fordi bok A er billigere."
    },
    {
      "word": "hvorfor",
      "uk": "чому",
      "th": "ทำไม",
      "meaning": "Hvorfor velger du bok A?"
    },
    {
      "word": "syk",
      "uk": "хворий / хвора",
      "th": "ป่วย",
      "meaning": "Jeg er syk."
    },
    {
      "word": "forsinket",
      "uk": "запізнюється",
      "th": "ล่าช้า",
      "meaning": "Bussen er forsinket."
    },
    {
      "word": "kommer",
      "uk": "приходить",
      "th": "มา",
      "meaning": "Jeg kommer klokka tolv."
    },
    {
      "word": "en buss",
      "uk": "автобус",
      "th": "รถบัส",
      "meaning": "Bussen er forsinket."
    },
    {
      "word": "Beklager.",
      "uk": "Вибачте.",
      "th": "ขอโทษ",
      "meaning": "Beklager. Jeg kommer klokka tolv."
    },
    {
      "word": "i går",
      "uk": "учора",
      "th": "เมื่อวาน",
      "meaning": "I går leste jeg."
    },
    {
      "word": "i dag",
      "uk": "сьогодні",
      "th": "วันนี้",
      "meaning": "I dag leser jeg."
    },
    {
      "word": "nå",
      "uk": "зараз",
      "th": "ตอนนี้",
      "meaning": "Nå skriver jeg."
    },
    {
      "word": "leste",
      "uk": "читав / читала",
      "th": "อ่านเมื่อวาน",
      "meaning": "I går leste jeg."
    },
    {
      "word": "skrev",
      "uk": "писав / писала",
      "th": "เขียนเมื่อวาน",
      "meaning": "I går skrev jeg."
    },
    {
      "word": "ny beskjed",
      "uk": "нове повідомлення",
      "th": "ข้อความใหม่",
      "meaning": "Les den nye beskjeden."
    },
    {
      "word": "fra inngangen",
      "uk": "від входу",
      "th": "จากทางเข้า",
      "meaning": "Gå rett fram fra inngangen."
    },
    {
      "word": "et kryss",
      "uk": "перехрестя",
      "th": "ทางแยก",
      "meaning": "Gå rett fram til et kryss."
    },
    {
      "word": "første kryss",
      "uk": "перше перехрестя",
      "th": "ทางแยกแรก",
      "meaning": "Ta til høyre i første kryss."
    },
    {
      "word": "neste kryss",
      "uk": "наступне перехрестя",
      "th": "ทางแยกถัดไป",
      "meaning": "Ta til venstre i neste kryss."
    },
    {
      "word": "billig → billigere",
      "uk": "дешевий → дешевший",
      "th": "ราคาถูก → ถูกกว่า",
      "meaning": "Bok A er billig og billigere enn bok B."
    }
  ]
};
