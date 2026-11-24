const A1_EXTENSION = {
  "units": [
    {
      "id": "u9",
      "number": "17",
      "title": "Vi avtaler",
      "level": "A1 – øving",
      "stage": "a1",
      "intro": "Les og skriv korte avtaler om dag og tid.",
      "goal": "Jeg kan foreslå og bekrefte en avtale.",
      "words": [
        "Kan vi møtes …?",
        "Vi møtes …",
        "Ja, det passer.",
        "Nei, det passer ikke."
      ],
      "lessons": [
        {
          "id": "u9l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u9_chat_models",
          "title": "To korte samtaler",
          "instruction": "Les samtalene.",
          "hint": "Legg merke til dag og tid.",
          "explanation": "Du har lest to avtaler.",
          "model": "Anna: Kan vi møtes på mandag klokka åtte? Mali: Ja, det passer.\nAnna: Kan vi møtes på tirsdag klokka tolv? Mali: Nei, det passer ikke.",
          "items": [
            {
              "word": "Kan vi møtes på mandag klokka åtte?",
              "image": "calendar",
              "uk": "Можемо зустрітися в понеділок о восьмій?",
              "th": "เราเจอกันวันจันทร์แปดโมงได้ไหม?"
            },
            {
              "word": "Ja, det passer.",
              "image": "pair",
              "uk": "Так, мені підходить.",
              "th": "ได้ สะดวก"
            },
            {
              "word": "Nei, det passer ikke.",
              "image": "pair",
              "uk": "Ні, мені не підходить.",
              "th": "ไม่ได้ ไม่สะดวก"
            },
            {
              "word": "Vi møtes på tirsdag klokka tolv.",
              "image": "calendar",
              "uk": "Ми зустрінемося у вівторок о дванадцятій.",
              "th": "เราเจอกันวันอังคารตอนเที่ยง"
            }
          ]
        },
        {
          "id": "u9l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u9_read_day_time",
          "title": "Dag og tid",
          "instruction": "Når skal de møtes?",
          "hint": "Finn dag og klokkeslett.",
          "explanation": "De skal møtes på tirsdag klokka tolv.",
          "prompt": "Anna: Vi møtes på tirsdag klokka tolv på skolen. Mali: Ja, det passer.",
          "options": [
            {
              "id": "a",
              "label": "tirsdag klokka tolv"
            },
            {
              "id": "b",
              "label": "mandag klokka tolv"
            },
            {
              "id": "c",
              "label": "tirsdag klokka åtte"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u9l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u9_recall_passer",
          "title": "Svar på forslag",
          "instruction": "Fullfør svaret.",
          "hint": "Svaret betyr ja til avtalen.",
          "explanation": "Ja, det passer.",
          "prompt": "Anna: Kan vi møtes på mandag? Mali: Ja, det …",
          "before": "Ja, det",
          "after": ".",
          "accepted": [
            "passer"
          ],
          "model": "Ja, det passer."
        },
        {
          "id": "u9l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u9_build_meeting",
          "title": "Lag en avtale",
          "instruction": "Sett sammen setningen.",
          "hint": "Begynn med «Vi møtes».",
          "explanation": "Vi møtes på tirsdag klokka tolv.",
          "tokens": [
            "på tirsdag klokka tolv",
            "Vi møtes"
          ],
          "answer": [
            "Vi møtes",
            "på tirsdag klokka tolv"
          ],
          "sentence": true,
          "model": "Vi møtes på tirsdag klokka tolv."
        },
        {
          "id": "u9l5",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u9_actual_agreement",
          "title": "Den faktiske avtalen",
          "instruction": "Når skal Anna og Mali møtes?",
          "hint": "Finn forslaget som får ja.",
          "explanation": "De møtes tirsdag klokka tolv.",
          "prompt": "Anna: Kan vi møtes på mandag klokka åtte? Mali: Nei, det passer ikke. Anna: Kan vi møtes på tirsdag klokka tolv? Mali: Ja, det passer.",
          "options": [
            {
              "id": "a",
              "label": "tirsdag klokka tolv"
            },
            {
              "id": "b",
              "label": "mandag klokka åtte"
            },
            {
              "id": "c",
              "label": "tirsdag klokka åtte"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u9l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u9_write_invitation",
          "title": "Skriv selv",
          "instruction": "Skriv én eller to setninger til en venn. Foreslå en dag og et klokkeslett.",
          "hint": "Bruk ordene og frasene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "placeholder": "Skriv her …",
          "model": "Kan vi møtes på mandag klokka åtte?",
          "example": "Kan vi møtes på mandag klokka åtte?",
          "checks": [
            "Jeg skrev én eller to setninger.",
            "Jeg foreslo en dag og et klokkeslett."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u10",
      "number": "18",
      "title": "Pris og kjøp",
      "level": "A1 – øving",
      "stage": "a1",
      "intro": "Les priser og skriv hva du vil ha. Prisene er laget for øving.",
      "goal": "Jeg kan lese en pris og uttrykke hva jeg vil kjøpe.",
      "words": [
        "pris",
        "kroner",
        "kr",
        "koster",
        "jeg vil ha"
      ],
      "lessons": [
        {
          "id": "u10l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u10_price_models",
          "title": "Pris og vare",
          "instruction": "Les prisene og setningene.",
          "hint": "kr betyr kroner.",
          "explanation": "Du har lest om varer og priser.",
          "model": "Penn: 8 kr. En penn koster åtte kroner. Bok: 12 kr. Jeg vil ha en bok.",
          "items": [
            {
              "word": "en penn: 8 kr",
              "image": "pen",
              "uk": "ручка: 8 крон",
              "th": "ปากกา: 8 โครน"
            },
            {
              "word": "en bok: 12 kr",
              "image": "book",
              "uk": "книга: 12 крон",
              "th": "หนังสือ: 12 โครน"
            },
            {
              "word": "koster",
              "image": "pen",
              "uk": "коштує",
              "th": "ราคา"
            },
            {
              "word": "jeg vil ha",
              "image": "person",
              "uk": "я хочу",
              "th": "ฉันต้องการ"
            }
          ]
        },
        {
          "id": "u10l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u10_read_price",
          "title": "Finn prisen",
          "instruction": "Hva koster boka?",
          "hint": "Finn «bok» i prislista.",
          "explanation": "Boka koster 12 kr.",
          "prompt": "Pris: penn 8 kr · bok 12 kr",
          "options": [
            {
              "id": "a",
              "label": "12 kr"
            },
            {
              "id": "b",
              "label": "8 kr"
            },
            {
              "id": "c",
              "label": "2 kr"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u10l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u10_recall_koster",
          "title": "Pris i en setning",
          "instruction": "Fullfør setningen.",
          "hint": "Ordet står mellom varen og prisen.",
          "explanation": "En penn koster åtte kroner.",
          "prompt": "Pris: en penn 8 kr.",
          "before": "En penn",
          "after": "åtte kroner.",
          "accepted": [
            "koster"
          ],
          "model": "En penn koster åtte kroner."
        },
        {
          "id": "u10l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u10_build_purchase",
          "title": "Jeg vil ha",
          "instruction": "Sett sammen setningen.",
          "hint": "Begynn med «Jeg vil ha».",
          "explanation": "Jeg vil ha en penn.",
          "tokens": [
            "en penn",
            "Jeg vil ha"
          ],
          "answer": [
            "Jeg vil ha",
            "en penn"
          ],
          "sentence": true,
          "model": "Jeg vil ha en penn."
        },
        {
          "id": "u10l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u10_repair_price",
          "title": "Rett prisen",
          "instruction": "Fullfør riktig pris.",
          "hint": "Sammenlign setningen med prislista.",
          "explanation": "Boka koster tolv kroner.",
          "prompt": "Pris: penn 8 kr · bok 12 kr. Setning: Boka koster åtte kroner.",
          "before": "Boka koster",
          "after": "kroner.",
          "accepted": [
            "tolv",
            "12",
            "12,00",
            "12.00"
          ],
          "model": "Boka koster tolv kroner."
        },
        {
          "id": "u10l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u10_write_purchase",
          "title": "Skriv selv",
          "instruction": "Skriv én eller to setninger. Fortell hvilken vare du vil ha og prisen.",
          "hint": "Bruk ordene og frasene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "placeholder": "Skriv her …",
          "model": "Jeg vil ha en penn. En penn koster åtte kroner.",
          "example": "Jeg vil ha en penn. En penn koster åtte kroner.",
          "checks": [
            "Jeg skrev hvilken vare jeg vil ha.",
            "Jeg skrev en pris fra prislista."
          ],
          "minWords": 1,
          "prompt": "Pris: penn 8 kr · bok 12 kr."
        }
      ]
    },
    {
      "id": "u11",
      "number": "19",
      "title": "Kan du hjelpe meg?",
      "level": "A1 – øving",
      "stage": "a1",
      "intro": "Les og skriv en kort beskjed når du trenger hjelp.",
      "goal": "Jeg kan skrive hva jeg trenger hjelp med.",
      "words": [
        "Jeg forstår ikke.",
        "Kan du hjelpe meg?",
        "Kan du vise meg?",
        "Takk!"
      ],
      "lessons": [
        {
          "id": "u11l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u11_help_models",
          "title": "Be om hjelp",
          "instruction": "Les samtalen.",
          "hint": "«Hjelpe meg» betyr gi meg hjelp.",
          "explanation": "Du har lest en samtale om hjelp.",
          "model": "Mali: Jeg forstår ikke. Kan du hjelpe meg? Anna: Ja. Boka er i sekken. Mali: Takk!\nMali: Jeg forstår ikke «koster». Kan du hjelpe meg? Anna: En bok koster 12 kroner. Mali: Takk!",
          "items": [
            {
              "word": "Jeg forstår ikke.",
              "image": "person",
              "uk": "Я не розумію.",
              "th": "ฉันไม่เข้าใจ"
            },
            {
              "word": "Kan du hjelpe meg?",
              "image": "pair",
              "uk": "Можеш мені допомогти?",
              "th": "คุณช่วยฉันได้ไหม?"
            },
            {
              "word": "Kan du vise meg?",
              "image": "pair",
              "uk": "Можеш мені показати?",
              "th": "คุณแสดงให้ฉันดูได้ไหม?"
            },
            {
              "word": "Takk!",
              "image": "pair",
              "uk": "Дякую!",
              "th": "ขอบคุณ!"
            }
          ]
        },
        {
          "id": "u11l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u11_choose_help",
          "title": "Be læreren om hjelp",
          "instruction": "Hvilken beskjed passer?",
          "hint": "Du forstår ikke og trenger hjelp.",
          "explanation": "Beskjeden ber om hjelp.",
          "prompt": "Du forstår ikke på skolen. Du trenger hjelp fra læreren.",
          "options": [
            {
              "id": "a",
              "label": "Jeg forstår ikke. Kan du hjelpe meg?"
            },
            {
              "id": "b",
              "label": "Jeg forstår ikke. Jeg leser på skolen."
            },
            {
              "id": "c",
              "label": "Jeg leser på skolen. Takk!"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u11l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u11_recall_help",
          "title": "Fullfør spørsmålet",
          "instruction": "Skriv ordet som mangler.",
          "hint": "Du ber en person om hjelp.",
          "explanation": "Kan du hjelpe meg?",
          "prompt": "Du trenger hjelp.",
          "before": "Kan du",
          "after": "meg?",
          "accepted": [
            "hjelpe"
          ],
          "model": "Kan du hjelpe meg?"
        },
        {
          "id": "u11l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u11_build_help",
          "title": "Spør om hjelp",
          "instruction": "Sett sammen spørsmålet.",
          "hint": "Begynn med «Kan du».",
          "explanation": "Kan du hjelpe meg?",
          "tokens": [
            "hjelpe meg?",
            "Kan du"
          ],
          "answer": [
            "Kan du",
            "hjelpe meg?"
          ],
          "sentence": false,
          "model": "Kan du hjelpe meg?"
        },
        {
          "id": "u11l5",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u11_where_book_help",
          "title": "Svar med hjelp",
          "instruction": "Hvilket svar viser hvor boka er?",
          "hint": "Mali spør etter boka.",
          "explanation": "Svaret viser at boka er i sekken.",
          "prompt": "Mali: Kan du vise meg boka? Anna: Boka er i sekken. Pennen er på bordet.",
          "options": [
            {
              "id": "a",
              "label": "Boka er i sekken."
            },
            {
              "id": "b",
              "label": "Pennen er på bordet."
            },
            {
              "id": "c",
              "label": "Boka er på bordet."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u11l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u11_write_help",
          "title": "Skriv selv",
          "instruction": "Skriv én eller to setninger til læreren. Fortell hva du ikke forstår, og be om hjelp.",
          "hint": "Bruk ordene og frasene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "placeholder": "Skriv her …",
          "model": "Jeg forstår ikke «koster». Kan du hjelpe meg?",
          "example": "Jeg forstår ikke «koster». Kan du hjelpe meg?",
          "checks": [
            "Jeg skrev hvilket ord jeg ikke forstår.",
            "Jeg ba om hjelp."
          ],
          "minWords": 1,
          "prompt": "Du leser: «En bok koster 12 kr.» Du forstår ikke ordet «koster»."
        }
      ]
    },
    {
      "id": "u12",
      "number": "20",
      "title": "En beskjed er endret",
      "level": "A1 – øving",
      "stage": "a1",
      "intro": "Les en endret avtale og svar med dag, tid og ting.",
      "goal": "Jeg kan finne en endring og skrive et tydelig svar.",
      "words": [
        "gammel tid",
        "ny tid",
        "Ta med …",
        "Jeg tar med …"
      ],
      "lessons": [
        {
          "id": "u12l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u12_changed_message",
          "title": "Gammel og ny beskjed",
          "instruction": "Les beskjedene.",
          "hint": "Se på dag og klokkeslett i begge.",
          "explanation": "Du har lest om en endring.",
          "model": "Gammel tid: mandag klokka åtte. Ny tid: tirsdag klokka tolv. Ta med en bok. Jeg tar med en bok.",
          "items": [
            {
              "word": "gammel tid: mandag klokka åtte",
              "image": "monday",
              "uk": "старий час: понеділок о восьмій",
              "th": "เวลาเดิม: วันจันทร์แปดโมง"
            },
            {
              "word": "ny tid: tirsdag klokka tolv",
              "image": "tuesday",
              "uk": "новий час: вівторок о дванадцятій",
              "th": "เวลาใหม่: วันอังคารตอนเที่ยง"
            },
            {
              "word": "Ta med en bok.",
              "image": "book",
              "uk": "Візьми із собою книгу.",
              "th": "นำหนังสือมาด้วย"
            },
            {
              "word": "Jeg tar med en bok.",
              "image": "book",
              "uk": "Я візьму із собою книгу.",
              "th": "ฉันจะนำหนังสือมาด้วย"
            }
          ]
        },
        {
          "id": "u12l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u12_choose_new_time",
          "title": "Ny tid",
          "instruction": "Hva er den nye avtalen?",
          "hint": "Se etter «ny tid».",
          "explanation": "Den nye tiden er tirsdag klokka tolv.",
          "prompt": "Gammel tid: mandag klokka åtte. Ny tid: tirsdag klokka tolv.",
          "options": [
            {
              "id": "a",
              "label": "tirsdag klokka tolv"
            },
            {
              "id": "b",
              "label": "mandag klokka tolv"
            },
            {
              "id": "c",
              "label": "tirsdag klokka åtte"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u12l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u12_recall_bring",
          "title": "Svar om boka",
          "instruction": "Fullfør setningen.",
          "hint": "Bruk uttrykket «Jeg … med».",
          "explanation": "Jeg tar med en bok.",
          "prompt": "Lærer: Ta med en bok.",
          "before": "Jeg",
          "after": "med en bok.",
          "accepted": [
            "tar"
          ],
          "model": "Jeg tar med en bok."
        },
        {
          "id": "u12l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u12_build_bring",
          "title": "Jeg tar med",
          "instruction": "Sett sammen setningen.",
          "hint": "Begynn med «Jeg tar med».",
          "explanation": "Jeg tar med en bok.",
          "tokens": [
            "en bok",
            "Jeg tar med"
          ],
          "answer": [
            "Jeg tar med",
            "en bok"
          ],
          "sentence": true,
          "model": "Jeg tar med en bok."
        },
        {
          "id": "u12l5",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u12_new_message_summary",
          "title": "Les den nye beskjeden",
          "instruction": "Hvilken oppsummering passer?",
          "hint": "Bruk dag, klokkeslett og ting fra den nye beskjeden.",
          "explanation": "Den nye beskjeden er tirsdag klokka tolv, med bok.",
          "prompt": "Gammel beskjed: mandag klokka åtte. Ta med en penn. Ny beskjed: tirsdag klokka tolv. Ta med en bok.",
          "options": [
            {
              "id": "a",
              "label": "tirsdag klokka tolv · bok"
            },
            {
              "id": "b",
              "label": "tirsdag klokka åtte · bok"
            },
            {
              "id": "c",
              "label": "tirsdag klokka tolv · penn"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u12l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u12_write_confirm",
          "title": "Skriv selv",
          "instruction": "Svar på beskjeden. Skriv to eller tre setninger. Bekreft den nye avtalen og skriv hva du tar med.",
          "hint": "Bruk ordene og frasene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "placeholder": "Skriv her …",
          "model": "Ja, det passer. Vi møtes på tirsdag klokka tolv. Jeg tar med en bok.",
          "example": "Ja, det passer. Vi møtes på tirsdag klokka tolv. Jeg tar med en bok.",
          "checks": [
            "Jeg bekreftet den nye dagen og tiden.",
            "Jeg skrev hva jeg tar med."
          ],
          "minWords": 1,
          "prompt": "Ny beskjed: Vi møtes på tirsdag klokka tolv. Ta med en bok."
        }
      ]
    }
  ],
  "challenges": [
    {
      "id": "ch_u9",
      "baseUnitId": "u9",
      "number": "17",
      "title": "Vi avtaler",
      "stage": "a1",
      "level": "Mer utfordring",
      "intro": "Kombiner navn, dag og klokkeslett i avtaler.",
      "goal": "Jeg kan lese og endre en avtale.",
      "words": [
        "Kan vi møtes …?",
        "Vi møtes …",
        "Ja, det passer.",
        "Nei, det passer ikke."
      ],
      "lessons": [
        {
          "id": "ch_u9l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u9_combine_meeting",
          "title": "Les avtalene",
          "instruction": "Når møter Anna Mali?",
          "hint": "Finn både navn, dag og klokkeslett.",
          "explanation": "Anna møter Mali tirsdag klokka tolv.",
          "prompt": "Anna og Mali: tirsdag klokka tolv. Anna og Nina: tirsdag klokka åtte. Mali og Nina: mandag klokka tolv.",
          "options": [
            {
              "id": "a",
              "label": "tirsdag klokka tolv"
            },
            {
              "id": "b",
              "label": "tirsdag klokka åtte"
            },
            {
              "id": "c",
              "label": "mandag klokka tolv"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u9l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u9_repair_time",
          "title": "Rett avtalen",
          "instruction": "Fullfør riktig klokkeslett.",
          "hint": "Finn avtalen mellom Anna og Mali.",
          "explanation": "Anna og Mali møtes klokka tolv.",
          "prompt": "Avtale: Anna og Mali, tirsdag klokka tolv. Setning som skal rettes: Anna og Mali møtes tirsdag klokka åtte.",
          "before": "Anna og Mali møtes tirsdag klokka",
          "after": ".",
          "accepted": [
            "tolv",
            "12",
            "12.00",
            "12:00"
          ],
          "model": "Anna og Mali møtes tirsdag klokka tolv."
        },
        {
          "id": "ch_u9l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u9_write_alternative",
          "title": "Skriv selv",
          "instruction": "Svar en venn. Si nei til mandag klokka åtte og foreslå et annet tidspunkt. Skriv to eller tre setninger.",
          "hint": "Bruk ordene og frasene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "placeholder": "Skriv her …",
          "model": "Nei, det passer ikke. Kan vi møtes på tirsdag klokka tolv?",
          "example": "Nei, det passer ikke. Kan vi møtes på tirsdag klokka tolv?",
          "checks": [
            "Jeg svarte nei til det første forslaget.",
            "Jeg foreslo en annen dag eller tid."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u10",
      "baseUnitId": "u10",
      "number": "18",
      "title": "Pris og kjøp",
      "stage": "a1",
      "level": "Mer utfordring",
      "intro": "Kombiner varer, antall og priser.",
      "goal": "Jeg kan lese og rette opplysninger om et kjøp.",
      "words": [
        "pris",
        "kroner",
        "kr",
        "koster",
        "jeg vil ha"
      ],
      "lessons": [
        {
          "id": "ch_u10l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u10_choose_item_price",
          "title": "Vare og pris",
          "instruction": "Hvilken vare og pris passer til bestillingen?",
          "hint": "Finn både varen og prisen.",
          "explanation": "En bok koster 12 kr.",
          "prompt": "Pris: penn 8 kr · bok 12 kr. Bestilling: Jeg vil ha en bok.",
          "options": [
            {
              "id": "a",
              "label": "en bok: 12 kr"
            },
            {
              "id": "b",
              "label": "en bok: 8 kr"
            },
            {
              "id": "c",
              "label": "en penn: 12 kr"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u10l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u10_repair_receipt",
          "title": "Rett kvitteringen",
          "instruction": "Skriv riktig vare.",
          "hint": "Sammenlign bestillingen og kvitteringen.",
          "explanation": "Riktig vare er bok.",
          "prompt": "Bestilling: en bok, 12 kr. Kvittering: en penn, 12 kr.",
          "before": "en",
          "after": "",
          "accepted": [
            "bok"
          ],
          "model": "en bok"
        },
        {
          "id": "ch_u10l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u10_write_purchase",
          "title": "Skriv selv",
          "instruction": "Skriv to setninger om hva Mali vil ha og hva varen koster.",
          "hint": "Bruk ordene og frasene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "placeholder": "Skriv her …",
          "model": "Jeg vil ha en bok. En bok koster tolv kroner.",
          "example": "Jeg vil ha en bok. En bok koster tolv kroner.",
          "checks": [
            "Jeg skrev hva Mali vil ha.",
            "Jeg skrev riktig pris for varen."
          ],
          "minWords": 1,
          "prompt": "Du er Mali. Anna vil ha en penn. Mali vil ha en bok. Pris: penn 8 kr · bok 12 kr."
        }
      ]
    },
    {
      "id": "ch_u11",
      "baseUnitId": "u11",
      "number": "19",
      "title": "Kan du hjelpe meg?",
      "stage": "a1",
      "level": "Mer utfordring",
      "intro": "Finn riktig hjelp og skriv en beskjed.",
      "goal": "Jeg kan koble et hjelpebehov til et relevant svar.",
      "words": [
        "Jeg forstår ikke.",
        "Kan du hjelpe meg?",
        "Kan du vise meg?",
        "Takk!"
      ],
      "lessons": [
        {
          "id": "ch_u11l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u11_match_needs",
          "title": "To som trenger hjelp",
          "instruction": "Hvilke svar passer?",
          "hint": "Se etter boka og pennen.",
          "explanation": "Boka er i sekken og pennen er på bordet.",
          "prompt": "Mali: Kan du vise meg boka? Anna: Kan du vise meg pennen? Boka er i sekken. Pennen er på bordet.",
          "options": [
            {
              "id": "a",
              "label": "Mali: Boka er i sekken. Anna: Pennen er på bordet."
            },
            {
              "id": "b",
              "label": "Mali: Boka er på bordet. Anna: Pennen er på bordet."
            },
            {
              "id": "c",
              "label": "Mali: Boka er i sekken. Anna: Pennen er i sekken."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u11l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u11_repair_help",
          "title": "Rett svaret",
          "instruction": "Fullfør riktig sted.",
          "hint": "Se hvor boka er.",
          "explanation": "Boka er i sekken.",
          "prompt": "Boka er i sekken. Mali: Kan du vise meg boka? Svar som skal rettes: Ja! Boka er på bordet.",
          "before": "Ja! Boka er i",
          "after": ".",
          "accepted": [
            "sekken"
          ],
          "model": "Ja! Boka er i sekken."
        },
        {
          "id": "ch_u11l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u11_write_teacher",
          "title": "Skriv selv",
          "instruction": "Skriv to eller tre setninger til læreren. Fortell hva du trenger hjelp med, still et spørsmål og takk.",
          "hint": "Bruk ordene og frasene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "placeholder": "Skriv her …",
          "model": "Jeg forstår ikke «koster». Kan du hjelpe meg? Takk!",
          "example": "Jeg forstår ikke «koster». Kan du hjelpe meg? Takk!",
          "checks": [
            "Jeg skrev hvilket ord jeg ikke forstår.",
            "Jeg ba om hjelp og takket."
          ],
          "minWords": 1,
          "prompt": "Du leser: «En bok koster 12 kr.» Du forstår ikke ordet «koster»."
        }
      ]
    },
    {
      "id": "ch_u12",
      "baseUnitId": "u12",
      "number": "20",
      "title": "En beskjed er endret",
      "stage": "a1",
      "level": "Mer utfordring",
      "intro": "Sammenlign gammel og ny beskjed.",
      "goal": "Jeg kan bruke dag, tid, sted og ting i et svar.",
      "words": [
        "gammel tid",
        "ny tid",
        "Ta med …",
        "Jeg tar med …"
      ],
      "lessons": [
        {
          "id": "ch_u12l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u12_combine_changed",
          "title": "Den nye avtalen",
          "instruction": "Hvilken avtale gjelder nå?",
          "hint": "Bruk alle opplysningene i den nye beskjeden.",
          "explanation": "Den nye avtalen er tirsdag klokka tolv på skolen. Ta med en bok.",
          "prompt": "Gammel: mandag klokka åtte på skolen. Ta med en penn. Ny: tirsdag klokka tolv på skolen. Ta med en bok.",
          "options": [
            {
              "id": "a",
              "label": "tirsdag klokka tolv på skolen · bok"
            },
            {
              "id": "b",
              "label": "mandag klokka tolv på skolen · bok"
            },
            {
              "id": "c",
              "label": "tirsdag klokka åtte på skolen · bok"
            },
            {
              "id": "d",
              "label": "tirsdag klokka tolv på skolen · penn"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u12l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u12_repair_day",
          "title": "Rett den gamle dagen",
          "instruction": "Fullfør den nye dagen.",
          "hint": "Sammenlign gammel og ny beskjed.",
          "explanation": "Den nye dagen er tirsdag.",
          "prompt": "Gammel tid: mandag klokka tolv. Ny tid: tirsdag klokka tolv. Svar som skal rettes: Vi møtes mandag klokka tolv.",
          "before": "Vi møtes",
          "after": "klokka tolv.",
          "accepted": [
            "tirsdag",
            "på tirsdag"
          ],
          "model": "Vi møtes tirsdag klokka tolv."
        },
        {
          "id": "ch_u12l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u12_write_mali",
          "title": "Skriv selv",
          "instruction": "Skriv tre eller fire korte setninger til Mali. Bekreft den nye dagen, tiden og stedet. Skriv hva du tar med.",
          "hint": "Bruk ordene og frasene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "placeholder": "Skriv her …",
          "model": "Hei, Mali! Vi møtes på tirsdag klokka tolv på skolen. Jeg tar med en bok.",
          "example": "Hei, Mali! Vi møtes på tirsdag klokka tolv på skolen. Jeg tar med en bok.",
          "checks": [
            "Jeg skrev til Mali og bekreftet dag, tid og sted.",
            "Jeg skrev hva jeg tar med."
          ],
          "minWords": 1,
          "prompt": "Ny beskjed fra Mali: Vi møtes på tirsdag klokka tolv på skolen. Ta med en bok."
        }
      ]
    }
  ],
  "words": [
    {
      "word": "Kan vi møtes …?",
      "uk": "можемо зустрітися",
      "th": "เราเจอกันได้ไหม",
      "meaning": "Kan vi møtes på mandag?"
    },
    {
      "word": "Vi møtes …",
      "uk": "ми зустрінемося",
      "th": "เราเจอกัน",
      "meaning": "Vi møtes på tirsdag."
    },
    {
      "word": "Ja, det passer.",
      "uk": "так, мені підходить",
      "th": "ได้ สะดวก",
      "meaning": "Ja til et forslag."
    },
    {
      "word": "Nei, det passer ikke.",
      "uk": "ні, мені не підходить",
      "th": "ไม่ได้ ไม่สะดวก",
      "meaning": "Nei til et forslag."
    },
    {
      "word": "en pris",
      "uk": "ціна",
      "th": "ราคา",
      "meaning": "En penn koster 8 kr."
    },
    {
      "word": "kroner / kr",
      "uk": "крони",
      "th": "โครน",
      "meaning": "Norske penger. 8 kr er åtte kroner."
    },
    {
      "word": "koster",
      "uk": "коштує",
      "th": "ราคา",
      "meaning": "En bok koster 12 kr."
    },
    {
      "word": "jeg vil ha",
      "uk": "я хочу",
      "th": "ฉันต้องการ",
      "meaning": "Jeg vil ha en penn."
    },
    {
      "word": "Jeg forstår ikke.",
      "uk": "Я не розумію.",
      "th": "ฉันไม่เข้าใจ",
      "meaning": "Jeg leser, men jeg forstår ikke."
    },
    {
      "word": "Kan du hjelpe meg?",
      "uk": "Можеш мені допомогти?",
      "th": "คุณช่วยฉันได้ไหม?",
      "meaning": "Jeg ber om hjelp."
    },
    {
      "word": "Kan du vise meg?",
      "uk": "Можеш мені показати?",
      "th": "คุณแสดงให้ฉันดูได้ไหม?",
      "meaning": "Jeg ber deg vise meg noe."
    },
    {
      "word": "Takk!",
      "uk": "Дякую!",
      "th": "ขอบคุณ!",
      "meaning": "Jeg sier takk for hjelp."
    },
    {
      "word": "gammel tid",
      "uk": "старий час",
      "th": "เวลาเดิม",
      "meaning": "Tiden i den gamle beskjeden."
    },
    {
      "word": "ny tid",
      "uk": "новий час",
      "th": "เวลาใหม่",
      "meaning": "Tiden i den nye beskjeden."
    },
    {
      "word": "Ta med …",
      "uk": "Візьми із собою …",
      "th": "นำ … มาด้วย",
      "meaning": "Ta med en bok."
    },
    {
      "word": "Jeg tar med …",
      "uk": "Я візьму із собою …",
      "th": "ฉันนำ … มาด้วย",
      "meaning": "Jeg tar med en bok."
    }
  ]
};
