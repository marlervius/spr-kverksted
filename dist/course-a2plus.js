const COURSE_A2PLUS = {
  "units": [
    {
      "id": "u29",
      "number": "37",
      "title": "Vær og aktivitet",
      "stage": "a2plus",
      "level": "A2 · videre",
      "intro": "Les, forstå og skriv om vær og aktivitet.",
      "goal": "Jeg kan planlegge en aktivitet og forklare et valg ut fra været.",
      "words": [
        "regn",
        "værmelding",
        "en jakke",
        "å ta med",
        "hvis"
      ],
      "lessons": [
        {
          "id": "u29l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u29_1",
          "title": "Les og lær",
          "instruction": "Les teksten, ordene og eksemplene.",
          "hint": "Se på eksemplene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "På lørdag skal gruppa gå til vannet. Læreren leser værmeldingen: Det kan bli regn om ettermiddagen. Turen starter klokka ti og slutter klokka to. Alle tar med mat og vann. Amina tar med en jakke hvis det regner. Hun tar også med gode sko. Leo vil sitte ute og spise. Han tar med et ekstra plagg fordi det kan bli kaldt. Gruppen bestemmer seg for å møtes ved inngangen. De får en ny beskjed fra læreren hvis været er dårlig.",
          "bridge": [
            {
              "from": "Det regner. Jeg tar med jakke.",
              "to": "Jeg tar med jakke hvis det regner."
            }
          ],
          "items": [
            {
              "word": "regn",
              "uk": "дощ",
              "th": "ฝน"
            },
            {
              "word": "værmelding",
              "uk": "прогноз погоди",
              "th": "พยากรณ์อากาศ"
            },
            {
              "word": "en jakke",
              "uk": "куртка",
              "th": "เสื้อแจ็กเก็ต"
            },
            {
              "word": "å ta med",
              "uk": "взяти з собою",
              "th": "นำไปด้วย"
            },
            {
              "word": "hvis",
              "uk": "якщо",
              "th": "ถ้า"
            }
          ]
        },
        {
          "id": "u29l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u29_2",
          "title": "Les og velg",
          "instruction": "Hvorfor tar Leo med et ekstra plagg?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Fordi det kan bli kaldt.",
          "prompt": "På lørdag skal gruppa gå til vannet. Læreren leser værmeldingen: Det kan bli regn om ettermiddagen. Turen starter klokka ti og slutter klokka to. Alle tar med mat og vann. Amina tar med en jakke hvis det regner. Hun tar også med gode sko. Leo vil sitte ute og spise. Han tar med et ekstra plagg fordi det kan bli kaldt. Gruppen bestemmer seg for å møtes ved inngangen. De får en ny beskjed fra læreren hvis været er dårlig.",
          "options": [
            {
              "id": "a",
              "label": "Fordi det kan bli kaldt."
            },
            {
              "id": "b",
              "label": "Fordi han skal svømme."
            },
            {
              "id": "c",
              "label": "Fordi turen slutter klokka ti."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u29l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u29_3",
          "title": "Fullfør",
          "instruction": "Skriv ordet på fire bokstaver som viser at regn er en mulig betingelse.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Amina tar med en jakke hvis det regner.",
          "prompt": "Bruk uttrykket fra teksten og eksemplene.",
          "before": "Amina tar med en jakke",
          "after": "det regner.",
          "accepted": [
            "hvis"
          ],
          "model": "Amina tar med en jakke hvis det regner."
        },
        {
          "id": "u29l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u29_4",
          "title": "Sett sammen",
          "instruction": "Bygg setningen. Begynn med den delen som starter med stor bokstav.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Jeg tar med vann hvis vi går på tur.",
          "tokens": [
            "hvis vi går på tur",
            "Jeg tar med vann"
          ],
          "answer": [
            "Jeg tar med vann",
            "hvis vi går på tur"
          ],
          "model": "Jeg tar med vann hvis vi går på tur.",
          "sentence": true
        },
        {
          "id": "u29l5",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u29_5",
          "title": "Les og velg",
          "instruction": "Hva skal alle ta med?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Mat og vann.",
          "prompt": "På lørdag skal gruppa gå til vannet. Læreren leser værmeldingen: Det kan bli regn om ettermiddagen. Turen starter klokka ti og slutter klokka to. Alle tar med mat og vann. Amina tar med en jakke hvis det regner. Hun tar også med gode sko. Leo vil sitte ute og spise. Han tar med et ekstra plagg fordi det kan bli kaldt. Gruppen bestemmer seg for å møtes ved inngangen. De får en ny beskjed fra læreren hvis været er dårlig.",
          "options": [
            {
              "id": "a",
              "label": "Mat og vann."
            },
            {
              "id": "b",
              "label": "Jakke og ekstra sko."
            },
            {
              "id": "c",
              "label": "Bare en mobil."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u29l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u29_6",
          "title": "Skriv selv",
          "instruction": "Skriv til en medelev om en planlagt tur. Ta med tid, sted, hva du tar med, og hva du gjør hvis det regner.",
          "hint": "Bruk teksten og ordene som støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "På lørdag skal gruppa gå til vannet. Læreren leser værmeldingen: Det kan bli regn om ettermiddagen. Turen starter klokka ti og slutter klokka to. Alle tar med mat og vann. Amina tar med en jakke hvis det regner. Hun tar også med gode sko. Leo vil sitte ute og spise. Han tar med et ekstra plagg fordi det kan bli kaldt. Gruppen bestemmer seg for å møtes ved inngangen. De får en ny beskjed fra læreren hvis været er dårlig.",
          "placeholder": "Skriv her …",
          "model": "Vi skal gå til vannet på lørdag. Vi møtes klokka ti ved inngangen. Jeg tar med mat og vann. Jeg tar med en jakke hvis det regner. Vi kan spise sammen. Turen slutter klokka to.",
          "example": "Vi skal gå til vannet på lørdag. Vi møtes klokka ti ved inngangen. Jeg tar med mat og vann. Jeg tar med en jakke hvis det regner. Vi kan spise sammen. Turen slutter klokka to.",
          "checks": [
            "Jeg tok med tid, sted og hva jeg tar med.",
            "Jeg skrev hva jeg gjør hvis det regner."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u30",
      "number": "38",
      "title": "Skjema og digital melding",
      "stage": "a2plus",
      "level": "A2 · videre",
      "intro": "Les, forstå og skriv om skjema og digital melding.",
      "goal": "Jeg kan lese et enkelt skjema og skrive en digital henvendelse.",
      "words": [
        "en avsender",
        "en mottaker",
        "et vedlegg",
        "et skjema",
        "å sende"
      ],
      "lessons": [
        {
          "id": "u30l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u30_1",
          "title": "Les og lær",
          "instruction": "Les teksten, ordene og eksemplene.",
          "hint": "Se på eksemplene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Dette er en oppdiktet øvingstekst. Nadia skal sende et skjema til skolen. Opplysningene i dette eksemplet er oppdiktet. I skjemaet skriver hun navnet Nadia Sol og datoen 15. mars. Hun skal ikke skrive passord i skjemaet. Hun åpner en ny melding. Mottakeren er skolens kontor, og Nadia er avsenderen. Hun skriver «Skjema» i emnefeltet. Så legger hun skjemaet ved meldingen og skriver: «Hei! Jeg sender skjemaet som vedlegg. Vennlig hilsen Nadia.» Før hun sender, ser hun at riktig fil er med.",
          "bridge": [
            {
              "from": "Jeg skriver en melding.",
              "to": "Jeg sender en melding med et vedlegg."
            }
          ],
          "items": [
            {
              "word": "en avsender",
              "uk": "відправник",
              "th": "ผู้ส่ง"
            },
            {
              "word": "en mottaker",
              "uk": "одержувач",
              "th": "ผู้รับ"
            },
            {
              "word": "et vedlegg",
              "uk": "вкладення",
              "th": "ไฟล์แนบ"
            },
            {
              "word": "et skjema",
              "uk": "форма",
              "th": "แบบฟอร์ม"
            },
            {
              "word": "å sende",
              "uk": "надсилати",
              "th": "ส่ง"
            }
          ]
        },
        {
          "id": "u30l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u30_2",
          "title": "Les og velg",
          "instruction": "Hvem er mottaker?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Skolens kontor.",
          "prompt": "Dette er en oppdiktet øvingstekst. Nadia skal sende et skjema til skolen. Opplysningene i dette eksemplet er oppdiktet. I skjemaet skriver hun navnet Nadia Sol og datoen 15. mars. Hun skal ikke skrive passord i skjemaet. Hun åpner en ny melding. Mottakeren er skolens kontor, og Nadia er avsenderen. Hun skriver «Skjema» i emnefeltet. Så legger hun skjemaet ved meldingen og skriver: «Hei! Jeg sender skjemaet som vedlegg. Vennlig hilsen Nadia.» Før hun sender, ser hun at riktig fil er med.",
          "options": [
            {
              "id": "a",
              "label": "Skolens kontor."
            },
            {
              "id": "b",
              "label": "Nadia."
            },
            {
              "id": "c",
              "label": "Skjemaet."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u30l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u30_3",
          "title": "Fullfør",
          "instruction": "Skriv ordet som mangler.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Nadia legger skjemaet ved meldingen. Skjemaet er et vedlegg .",
          "prompt": "Bruk uttrykket fra teksten og eksemplene.",
          "before": "Nadia legger skjemaet ved meldingen. Skjemaet er et",
          "after": ".",
          "accepted": [
            "vedlegg"
          ],
          "model": "Nadia legger skjemaet ved meldingen. Skjemaet er et vedlegg ."
        },
        {
          "id": "u30l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u30_4",
          "title": "Sett sammen",
          "instruction": "Bygg setningen. Begynn med den delen som starter med stor bokstav.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Jeg sender skjemaet som vedlegg.",
          "tokens": [
            "som vedlegg",
            "Jeg sender skjemaet"
          ],
          "answer": [
            "Jeg sender skjemaet",
            "som vedlegg"
          ],
          "model": "Jeg sender skjemaet som vedlegg.",
          "sentence": true
        },
        {
          "id": "u30l5",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u30_5",
          "title": "Les og velg",
          "instruction": "Hva gjør Nadia før hun sender?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Hun ser at riktig fil er med.",
          "prompt": "Dette er en oppdiktet øvingstekst. Nadia skal sende et skjema til skolen. Opplysningene i dette eksemplet er oppdiktet. I skjemaet skriver hun navnet Nadia Sol og datoen 15. mars. Hun skal ikke skrive passord i skjemaet. Hun åpner en ny melding. Mottakeren er skolens kontor, og Nadia er avsenderen. Hun skriver «Skjema» i emnefeltet. Så legger hun skjemaet ved meldingen og skriver: «Hei! Jeg sender skjemaet som vedlegg. Vennlig hilsen Nadia.» Før hun sender, ser hun at riktig fil er med.",
          "options": [
            {
              "id": "a",
              "label": "Hun ser at riktig fil er med."
            },
            {
              "id": "b",
              "label": "Hun skriver et passord i skjemaet."
            },
            {
              "id": "c",
              "label": "Hun sletter meldingen."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u30l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u30_6",
          "title": "Skriv selv",
          "instruction": "Skriv en kort melding til skolens kontor med et oppdiktet navn. Forklar hva du sender som vedlegg, og avslutt høflig.",
          "hint": "Bruk teksten og ordene som støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Dette er en oppdiktet øvingstekst. Nadia skal sende et skjema til skolen. Opplysningene i dette eksemplet er oppdiktet. I skjemaet skriver hun navnet Nadia Sol og datoen 15. mars. Hun skal ikke skrive passord i skjemaet. Hun åpner en ny melding. Mottakeren er skolens kontor, og Nadia er avsenderen. Hun skriver «Skjema» i emnefeltet. Så legger hun skjemaet ved meldingen og skriver: «Hei! Jeg sender skjemaet som vedlegg. Vennlig hilsen Nadia.» Før hun sender, ser hun at riktig fil er med.",
          "placeholder": "Skriv her …",
          "model": "Hei! Jeg heter Nadia Sol. Jeg sender skjemaet som vedlegg. Kan dere se på det? Gi meg gjerne beskjed hvis noe mangler. Vennlig hilsen Nadia.",
          "example": "Hei! Jeg heter Nadia Sol. Jeg sender skjemaet som vedlegg. Kan dere se på det? Gi meg gjerne beskjed hvis noe mangler. Vennlig hilsen Nadia.",
          "checks": [
            "Jeg skrev til kontoret og brukte et oppdiktet navn.",
            "Jeg forklarte hva vedlegget inneholder og avsluttet høflig."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u31",
      "number": "39",
      "title": "Erfaring og praksis",
      "stage": "a2plus",
      "level": "A2 · videre",
      "intro": "Les, forstå og skriv om erfaring og praksis.",
      "goal": "Jeg kan beskrive en erfaring og fortelle når noe skjedde.",
      "words": [
        "en erfaring",
        "praksis",
        "å jobbe",
        "å lære",
        "har jobbet",
        "har lært",
        "å rydde → ryddet",
        "å lage → laget"
      ],
      "lessons": [
        {
          "id": "u31l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u31_1",
          "title": "Les og lær",
          "instruction": "Les teksten, ordene og eksemplene.",
          "hint": "Se på eksemplene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Samira forteller om praksis på en skole. Hun har jobbet på biblioteket. Der har hun lært å finne og rydde bøker. Hun liker å hjelpe andre med å finne det de trenger. I går jobbet hun sammen med en annen elev. De ryddet bøker og laget en liste. Neste uke vil Samira lære mer om biblioteket. Når hun forteller om erfaring, sier hun: «Jeg har jobbet på biblioteket.» Når hun sier når arbeidet skjedde, sier hun: «Jeg jobbet i går.»",
          "bridge": [
            {
              "from": "Jeg jobbet i går.",
              "to": "Jeg har jobbet i en butikk."
            },
            {
              "from": "Jeg lærte å bruke kassa.",
              "to": "Jeg har lært å bruke kassa."
            },
            {
              "from": "å rydde → rydder",
              "to": "I går ryddet de bøker."
            },
            {
              "from": "å lage → lager",
              "to": "I går laget de en liste."
            }
          ],
          "items": [
            {
              "word": "en erfaring",
              "uk": "досвід",
              "th": "ประสบการณ์"
            },
            {
              "word": "praksis",
              "uk": "практика",
              "th": "การฝึกงาน"
            },
            {
              "word": "å jobbe",
              "uk": "працювати",
              "th": "ทำงาน"
            },
            {
              "word": "å lære",
              "uk": "вчитися",
              "th": "เรียนรู้"
            },
            {
              "word": "har jobbet",
              "uk": "працював / працювала",
              "th": "เคยทำงาน"
            },
            {
              "word": "har lært",
              "uk": "навчився / навчилася",
              "th": "ได้เรียนรู้"
            },
            {
              "word": "å rydde → ryddet",
              "uk": "прибирати → прибрав / прибрала",
              "th": "จัดของ → จัดของแล้ว"
            },
            {
              "word": "å lage → laget",
              "uk": "робити → зробив / зробила",
              "th": "ทำ → ทำแล้ว"
            }
          ]
        },
        {
          "id": "u31l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u31_2",
          "title": "Les og velg",
          "instruction": "Hva har Samira lært?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Å finne og rydde bøker.",
          "prompt": "Samira forteller om praksis på en skole. Hun har jobbet på biblioteket. Der har hun lært å finne og rydde bøker. Hun liker å hjelpe andre med å finne det de trenger. I går jobbet hun sammen med en annen elev. De ryddet bøker og laget en liste. Neste uke vil Samira lære mer om biblioteket. Når hun forteller om erfaring, sier hun: «Jeg har jobbet på biblioteket.» Når hun sier når arbeidet skjedde, sier hun: «Jeg jobbet i går.»",
          "options": [
            {
              "id": "a",
              "label": "Å finne og rydde bøker."
            },
            {
              "id": "b",
              "label": "Å kjøre buss."
            },
            {
              "id": "c",
              "label": "Å lage mat."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u31l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u31_3",
          "title": "Fullfør",
          "instruction": "Skriv ordet som mangler.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Samira forteller om erfaring: Jeg har jobbet på biblioteket.",
          "prompt": "Bruk uttrykket fra teksten og eksemplene.",
          "before": "Samira forteller om erfaring: Jeg",
          "after": "jobbet på biblioteket.",
          "accepted": [
            "har"
          ],
          "model": "Samira forteller om erfaring: Jeg har jobbet på biblioteket."
        },
        {
          "id": "u31l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u31_4",
          "title": "Sett sammen",
          "instruction": "Bygg setningen. Begynn med den delen som starter med stor bokstav.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Jeg har lært å finne bøker.",
          "tokens": [
            "å finne bøker",
            "Jeg har lært"
          ],
          "answer": [
            "Jeg har lært",
            "å finne bøker"
          ],
          "model": "Jeg har lært å finne bøker.",
          "sentence": true
        },
        {
          "id": "u31l5",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u31_5",
          "title": "Les og velg",
          "instruction": "Hvilken setning sier når hun jobbet?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Hun jobbet i går.",
          "prompt": "Samira forteller om praksis på en skole. Hun har jobbet på biblioteket. Der har hun lært å finne og rydde bøker. Hun liker å hjelpe andre med å finne det de trenger. I går jobbet hun sammen med en annen elev. De ryddet bøker og laget en liste. Neste uke vil Samira lære mer om biblioteket. Når hun forteller om erfaring, sier hun: «Jeg har jobbet på biblioteket.» Når hun sier når arbeidet skjedde, sier hun: «Jeg jobbet i går.»",
          "options": [
            {
              "id": "a",
              "label": "Hun jobbet i går."
            },
            {
              "id": "b",
              "label": "Hun har jobbet på biblioteket."
            },
            {
              "id": "c",
              "label": "Hun liker biblioteket."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u31l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u31_6",
          "title": "Skriv selv",
          "instruction": "Skriv om en oppdiktet eller egen erfaring. Fortell hvor du har jobbet eller lært noe, hva du har lært, og om noe du gjorde på en bestemt dag.",
          "hint": "Bruk teksten og ordene som støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Samira forteller om praksis på en skole. Hun har jobbet på biblioteket. Der har hun lært å finne og rydde bøker. Hun liker å hjelpe andre med å finne det de trenger. I går jobbet hun sammen med en annen elev. De ryddet bøker og laget en liste. Neste uke vil Samira lære mer om biblioteket. Når hun forteller om erfaring, sier hun: «Jeg har jobbet på biblioteket.» Når hun sier når arbeidet skjedde, sier hun: «Jeg jobbet i går.»",
          "placeholder": "Skriv her …",
          "model": "Jeg har jobbet i en butikk. Jeg har lært å hjelpe kunder. Jeg har også lært å rydde varer. I går jobbet jeg sammen med en kollega. Vi ryddet butikken. Neste uke vil jeg lære mer.",
          "example": "Jeg har jobbet i en butikk. Jeg har lært å hjelpe kunder. Jeg har også lært å rydde varer. I går jobbet jeg sammen med en kollega. Vi ryddet butikken. Neste uke vil jeg lære mer.",
          "checks": [
            "Jeg skrev hvor jeg har jobbet eller lært noe, og hva jeg har lært.",
            "Jeg fortalte hva jeg gjorde på en bestemt dag."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u32",
      "number": "40",
      "title": "Samarbeid om en oppgave",
      "stage": "a2plus",
      "level": "A2 · videre",
      "intro": "Les, forstå og skriv om samarbeid om en oppgave.",
      "goal": "Jeg kan lese en arbeidsfordeling og beskrive hvem som gjør hva.",
      "words": [
        "en oppgave",
        "en rolle",
        "et ansvar",
        "en frist",
        "som"
      ],
      "lessons": [
        {
          "id": "u32l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u32_1",
          "title": "Les og lær",
          "instruction": "Les teksten, ordene og eksemplene.",
          "hint": "Se på eksemplene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Tre elever lager en tekst om skolen. De fordeler arbeidet på mandag. Mali leser informasjonen og har boka. Ali skriver første del av teksten. Niran finner et bilde og skriver en kort tekst til bildet. Fristen er fredag klokka tolv. På torsdag skal alle lese teksten sammen. Da kan de se om noe mangler. Personen som leser informasjonen, har boka. Personen som finner bildet, skriver også en tekst til bildet. Alle har ansvar for at teksten er klar til fristen.",
          "bridge": [
            {
              "from": "Personen leser. Personen har boka.",
              "to": "Personen som leser, har boka."
            }
          ],
          "items": [
            {
              "word": "en oppgave",
              "uk": "завдання",
              "th": "งานที่ได้รับมอบหมาย"
            },
            {
              "word": "en rolle",
              "uk": "роль",
              "th": "บทบาท"
            },
            {
              "word": "et ansvar",
              "uk": "відповідальність",
              "th": "ความรับผิดชอบ"
            },
            {
              "word": "en frist",
              "uk": "кінцевий термін",
              "th": "กำหนดส่ง"
            },
            {
              "word": "som",
              "uk": "який / яка",
              "th": "ที่"
            }
          ]
        },
        {
          "id": "u32l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u32_2",
          "title": "Les og velg",
          "instruction": "Hvem skriver første del?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Ali.",
          "prompt": "Tre elever lager en tekst om skolen. De fordeler arbeidet på mandag. Mali leser informasjonen og har boka. Ali skriver første del av teksten. Niran finner et bilde og skriver en kort tekst til bildet. Fristen er fredag klokka tolv. På torsdag skal alle lese teksten sammen. Da kan de se om noe mangler. Personen som leser informasjonen, har boka. Personen som finner bildet, skriver også en tekst til bildet. Alle har ansvar for at teksten er klar til fristen.",
          "options": [
            {
              "id": "a",
              "label": "Ali."
            },
            {
              "id": "b",
              "label": "Mali."
            },
            {
              "id": "c",
              "label": "Niran."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u32l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u32_3",
          "title": "Fullfør",
          "instruction": "Skriv ordet som mangler.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Personen som leser informasjonen, har boka.",
          "prompt": "Bruk uttrykket fra teksten og eksemplene.",
          "before": "Personen",
          "after": "leser informasjonen, har boka.",
          "accepted": [
            "som"
          ],
          "model": "Personen som leser informasjonen, har boka."
        },
        {
          "id": "u32l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u32_4",
          "title": "Sett sammen",
          "instruction": "Bygg setningen. Begynn med den delen som starter med stor bokstav.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Personen som finner bildet, skriver en tekst.",
          "tokens": [
            "skriver en tekst",
            "Personen som finner bildet,"
          ],
          "answer": [
            "Personen som finner bildet,",
            "skriver en tekst"
          ],
          "model": "Personen som finner bildet, skriver en tekst.",
          "sentence": true
        },
        {
          "id": "u32l5",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u32_5",
          "title": "Les og velg",
          "instruction": "Når skal elevene lese sammen?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "På torsdag.",
          "prompt": "Tre elever lager en tekst om skolen. De fordeler arbeidet på mandag. Mali leser informasjonen og har boka. Ali skriver første del av teksten. Niran finner et bilde og skriver en kort tekst til bildet. Fristen er fredag klokka tolv. På torsdag skal alle lese teksten sammen. Da kan de se om noe mangler. Personen som leser informasjonen, har boka. Personen som finner bildet, skriver også en tekst til bildet. Alle har ansvar for at teksten er klar til fristen.",
          "options": [
            {
              "id": "a",
              "label": "På torsdag."
            },
            {
              "id": "b",
              "label": "På mandag."
            },
            {
              "id": "c",
              "label": "På fredag etter fristen."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u32l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u32_6",
          "title": "Skriv selv",
          "instruction": "Skriv en plan for en gruppe på tre personer. Fortell hvem som gjør hva, når dere skal lese sammen, og når fristen er.",
          "hint": "Bruk teksten og ordene som støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Tre elever lager en tekst om skolen. De fordeler arbeidet på mandag. Mali leser informasjonen og har boka. Ali skriver første del av teksten. Niran finner et bilde og skriver en kort tekst til bildet. Fristen er fredag klokka tolv. På torsdag skal alle lese teksten sammen. Da kan de se om noe mangler. Personen som leser informasjonen, har boka. Personen som finner bildet, skriver også en tekst til bildet. Alle har ansvar for at teksten er klar til fristen.",
          "placeholder": "Skriv her …",
          "model": "Vi er tre i gruppa. Mali leser informasjonen. Ali skriver første del. Niran finner et bilde og skriver om det. Vi leser sammen på torsdag. Fristen er fredag klokka tolv.",
          "example": "Vi er tre i gruppa. Mali leser informasjonen. Ali skriver første del. Niran finner et bilde og skriver om det. Vi leser sammen på torsdag. Fristen er fredag klokka tolv.",
          "checks": [
            "Jeg fordelte arbeid mellom tre personer.",
            "Jeg skrev når vi skal lese sammen, og når fristen er."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u33",
      "number": "41",
      "title": "Mening og motsetning",
      "stage": "a2plus",
      "level": "A2 · videre",
      "intro": "Les, forstå og skriv om mening og motsetning.",
      "goal": "Jeg kan forstå ulike meninger og uttrykke en mening med en grunn.",
      "words": [
        "å mene",
        "enig",
        "uenig",
        "en grunn",
        "men"
      ],
      "lessons": [
        {
          "id": "u33l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u33_1",
          "title": "Les og lær",
          "instruction": "Les teksten, ordene og eksemplene.",
          "hint": "Se på eksemplene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Klassen snakker om pausen. To elever har forskjellige meninger. Kilde 1 – Leila: «Jeg mener at pausen kan være ute. Da får vi frisk luft, og vi kan gå en tur.» Kilde 2 – Bao: «Jeg mener at vi kan være inne. Da kan vi snakke sammen når det regner.» Begge vil bruke pausen sammen med andre. Leila liker frisk luft, men Bao tenker på regnet. De blir enige om å spørre resten av klassen før de bestemmer seg.",
          "bridge": [
            {
              "from": "Skolen trenger flere bøker.",
              "to": "Jeg mener at skolen trenger flere bøker."
            },
            {
              "from": "Jeg er enig.",
              "to": "Jeg er uenig, men jeg forstår grunnen din."
            }
          ],
          "items": [
            {
              "word": "å mene",
              "uk": "вважати",
              "th": "มีความคิดเห็น"
            },
            {
              "word": "enig",
              "uk": "згодний / згодна",
              "th": "เห็นด้วย"
            },
            {
              "word": "uenig",
              "uk": "не згодний / не згодна",
              "th": "ไม่เห็นด้วย"
            },
            {
              "word": "en grunn",
              "uk": "причина",
              "th": "เหตุผล"
            },
            {
              "word": "men",
              "uk": "але",
              "th": "แต่"
            }
          ]
        },
        {
          "id": "u33l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u33_2",
          "title": "Les og velg",
          "instruction": "Hvorfor vil Leila være ute?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Hun vil ha frisk luft.",
          "prompt": "Klassen snakker om pausen. To elever har forskjellige meninger. Kilde 1 – Leila: «Jeg mener at pausen kan være ute. Da får vi frisk luft, og vi kan gå en tur.» Kilde 2 – Bao: «Jeg mener at vi kan være inne. Da kan vi snakke sammen når det regner.» Begge vil bruke pausen sammen med andre. Leila liker frisk luft, men Bao tenker på regnet. De blir enige om å spørre resten av klassen før de bestemmer seg.",
          "options": [
            {
              "id": "a",
              "label": "Hun vil ha frisk luft."
            },
            {
              "id": "b",
              "label": "Hun vil unngå regn."
            },
            {
              "id": "c",
              "label": "Hun vil lese alene."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u33l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u33_3",
          "title": "Fullfør",
          "instruction": "Skriv ordet som mangler.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Jeg mener at pausen kan være ute.",
          "prompt": "Bruk uttrykket fra teksten og eksemplene.",
          "before": "Jeg mener",
          "after": "pausen kan være ute.",
          "accepted": [
            "at"
          ],
          "model": "Jeg mener at pausen kan være ute."
        },
        {
          "id": "u33l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u33_4",
          "title": "Sett sammen",
          "instruction": "Bygg setningen. Begynn med den delen som starter med stor bokstav.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Jeg er uenig, men jeg forstår grunnen din.",
          "tokens": [
            "men jeg forstår grunnen din",
            "Jeg er uenig,"
          ],
          "answer": [
            "Jeg er uenig,",
            "men jeg forstår grunnen din"
          ],
          "model": "Jeg er uenig, men jeg forstår grunnen din.",
          "sentence": true
        },
        {
          "id": "u33l5",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u33_5",
          "title": "Les og velg",
          "instruction": "Hva vil begge elevene?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Være sammen med andre i pausen.",
          "prompt": "Klassen snakker om pausen. To elever har forskjellige meninger. Kilde 1 – Leila: «Jeg mener at pausen kan være ute. Da får vi frisk luft, og vi kan gå en tur.» Kilde 2 – Bao: «Jeg mener at vi kan være inne. Da kan vi snakke sammen når det regner.» Begge vil bruke pausen sammen med andre. Leila liker frisk luft, men Bao tenker på regnet. De blir enige om å spørre resten av klassen før de bestemmer seg.",
          "options": [
            {
              "id": "a",
              "label": "Være sammen med andre i pausen."
            },
            {
              "id": "b",
              "label": "Alltid være inne."
            },
            {
              "id": "c",
              "label": "Bestemme uten resten av klassen."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u33l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u33_6",
          "title": "Skriv selv",
          "instruction": "Skriv om hvor klassen kan ha pause. Skriv en mening og en grunn, beskriv en annen mening og svar respektfullt på den.",
          "hint": "Bruk teksten og ordene som støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Klassen snakker om pausen. To elever har forskjellige meninger. Kilde 1 – Leila: «Jeg mener at pausen kan være ute. Da får vi frisk luft, og vi kan gå en tur.» Kilde 2 – Bao: «Jeg mener at vi kan være inne. Da kan vi snakke sammen når det regner.» Begge vil bruke pausen sammen med andre. Leila liker frisk luft, men Bao tenker på regnet. De blir enige om å spørre resten av klassen før de bestemmer seg.",
          "placeholder": "Skriv her …",
          "model": "Jeg mener at vi kan være ute. Vi får frisk luft. Noen vil være inne når det regner. Jeg forstår den grunnen. Jeg er likevel uenig. Jeg vil ikke alltid være inne. Vi kan spørre resten av klassen.",
          "example": "Jeg mener at vi kan være ute. Vi får frisk luft. Noen vil være inne når det regner. Jeg forstår den grunnen. Jeg er likevel uenig. Jeg vil ikke alltid være inne. Vi kan spørre resten av klassen.",
          "checks": [
            "Jeg skrev en mening og begrunnet den.",
            "Jeg beskrev en annen mening og svarte respektfullt."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u34",
      "number": "42",
      "title": "Et problem og to løsninger",
      "stage": "a2plus",
      "level": "A2 · videre",
      "intro": "Les, forstå og skriv om et problem og to løsninger.",
      "goal": "Jeg kan vurdere løsninger og gi beskjed når en plan endrer seg.",
      "words": [
        "en løsning",
        "en frist",
        "å levere",
        "å utsette",
        "ikke"
      ],
      "lessons": [
        {
          "id": "u34l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u34_1",
          "title": "Les og lær",
          "instruction": "Les teksten, ordene og eksemplene.",
          "hint": "Se på eksemplene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Mina og Tom skal levere en tekst fredag klokka tolv. Torsdag er Mina syk og kan ikke komme på skolen. De har to muligheter. Mina kan skrive hjemme og sende sin del til Tom klokka ni fredag. Da kan Tom sette sammen teksten og levere den. Den andre løsningen er å spørre læreren om en ny frist. Det gir mer tid, men læreren må først si ja. Mina sender Tom en beskjed hvis hun ikke kan skrive hjemme. Hvis hun ikke kan skrive, spør Tom læreren om fristen.",
          "bridge": [
            {
              "from": "Jeg kan ikke komme. Jeg sender en beskjed.",
              "to": "Jeg sender en beskjed hvis jeg ikke kan komme."
            },
            {
              "from": "Jeg sender en beskjed hvis jeg ikke kan komme.",
              "to": "Hvis jeg ikke kan komme, sender jeg en beskjed."
            }
          ],
          "items": [
            {
              "word": "en løsning",
              "uk": "рішення",
              "th": "วิธีแก้ปัญหา"
            },
            {
              "word": "en frist",
              "uk": "кінцевий термін",
              "th": "กำหนดส่ง"
            },
            {
              "word": "å levere",
              "uk": "здавати",
              "th": "ส่งงาน"
            },
            {
              "word": "å utsette",
              "uk": "відкладати",
              "th": "เลื่อน"
            },
            {
              "word": "ikke",
              "uk": "не",
              "th": "ไม่"
            }
          ]
        },
        {
          "id": "u34l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u34_2",
          "title": "Les og velg",
          "instruction": "Hvorfor må de finne en løsning?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Mina er syk og kan ikke komme på skolen.",
          "prompt": "Mina og Tom skal levere en tekst fredag klokka tolv. Torsdag er Mina syk og kan ikke komme på skolen. De har to muligheter. Mina kan skrive hjemme og sende sin del til Tom klokka ni fredag. Da kan Tom sette sammen teksten og levere den. Den andre løsningen er å spørre læreren om en ny frist. Det gir mer tid, men læreren må først si ja. Mina sender Tom en beskjed hvis hun ikke kan skrive hjemme. Hvis hun ikke kan skrive, spør Tom læreren om fristen.",
          "options": [
            {
              "id": "a",
              "label": "Mina er syk og kan ikke komme på skolen."
            },
            {
              "id": "b",
              "label": "Tom har allerede levert teksten."
            },
            {
              "id": "c",
              "label": "Fristen var på mandag."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u34l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u34_3",
          "title": "Fullfør",
          "instruction": "Kommer jeg på skolen? Nei. Fullfør setningen med et nektingsord.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Jeg sender en beskjed hvis jeg ikke kan komme.",
          "prompt": "Bruk uttrykket fra teksten og eksemplene.",
          "before": "Jeg sender en beskjed hvis jeg",
          "after": "kan komme.",
          "accepted": [
            "ikke"
          ],
          "model": "Jeg sender en beskjed hvis jeg ikke kan komme."
        },
        {
          "id": "u34l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u34_4",
          "title": "Sett sammen",
          "instruction": "Bygg setningen. Begynn med den delen som starter med stor bokstav.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Hvis jeg ikke kan komme, sender jeg en beskjed.",
          "tokens": [
            "sender jeg en beskjed",
            "Hvis jeg ikke kan komme,"
          ],
          "answer": [
            "Hvis jeg ikke kan komme,",
            "sender jeg en beskjed"
          ],
          "model": "Hvis jeg ikke kan komme, sender jeg en beskjed.",
          "sentence": true
        },
        {
          "id": "u34l5",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u34_5",
          "title": "Les og velg",
          "instruction": "Hva må skje før de kan få en ny frist?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Læreren må si ja.",
          "prompt": "Mina og Tom skal levere en tekst fredag klokka tolv. Torsdag er Mina syk og kan ikke komme på skolen. De har to muligheter. Mina kan skrive hjemme og sende sin del til Tom klokka ni fredag. Da kan Tom sette sammen teksten og levere den. Den andre løsningen er å spørre læreren om en ny frist. Det gir mer tid, men læreren må først si ja. Mina sender Tom en beskjed hvis hun ikke kan skrive hjemme. Hvis hun ikke kan skrive, spør Tom læreren om fristen.",
          "options": [
            {
              "id": "a",
              "label": "Læreren må si ja."
            },
            {
              "id": "b",
              "label": "Tom må levere teksten først."
            },
            {
              "id": "c",
              "label": "Mina må komme på skolen."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u34l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u34_6",
          "title": "Skriv selv",
          "instruction": "Skriv en melding om et oppdiktet problem. Beskriv to muligheter, hvilken du velger og hvorfor. Fortell også hva du gjør hvis planen ikke går.",
          "hint": "Bruk teksten og ordene som støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Mina og Tom skal levere en tekst fredag klokka tolv. Torsdag er Mina syk og kan ikke komme på skolen. De har to muligheter. Mina kan skrive hjemme og sende sin del til Tom klokka ni fredag. Da kan Tom sette sammen teksten og levere den. Den andre løsningen er å spørre læreren om en ny frist. Det gir mer tid, men læreren må først si ja. Mina sender Tom en beskjed hvis hun ikke kan skrive hjemme. Hvis hun ikke kan skrive, spør Tom læreren om fristen.",
          "placeholder": "Skriv her …",
          "model": "Hei Tom! Jeg er syk i dag. Jeg kan skrive hjemme og sende teksten før klokka ti. Vi kan også spørre læreren om en ny frist. Jeg velger å skrive hjemme fordi vi da kan levere fredag. Hvis jeg ikke kan skrive, sender jeg deg en beskjed.",
          "example": "Hei Tom! Jeg er syk i dag. Jeg kan skrive hjemme og sende teksten før klokka ti. Vi kan også spørre læreren om en ny frist. Jeg velger å skrive hjemme fordi vi da kan levere fredag. Hvis jeg ikke kan skrive, sender jeg deg en beskjed.",
          "checks": [
            "Jeg beskrev problemet og to muligheter.",
            "Jeg forklarte valget og hva jeg gjør hvis planen ikke går."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u35",
      "number": "43",
      "title": "Les en enkel nyhet",
      "stage": "a2plus",
      "level": "A2 · videre",
      "intro": "Les, forstå og skriv om les en enkel nyhet.",
      "goal": "Jeg kan finne hovedinnholdet og skille en opplysning fra en mening.",
      "words": [
        "en overskrift",
        "en kilde",
        "en opplysning",
        "en mening",
        "en dato"
      ],
      "lessons": [
        {
          "id": "u35l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u35_1",
          "title": "Les og lær",
          "instruction": "Les teksten, ordene og eksemplene.",
          "hint": "Se på eksemplene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "OPPDIKTET NYHET – EKSEMPEL\nOverskrift: Biblioteket åpner et nytt rom\nDato: 12. mars. Kilde: Skoleavisa, et oppdiktet eksempel.\nBiblioteket på Sol skole åpner et rom for gruppearbeid på mandag. Rommet har fire bord, og det åpner klokka ti. Elever kan bruke rommet etter skoletid. Bibliotekar Amir sier at elevene må rydde bordene etter bruk. Elevrådet vil ha rommet.\nElev Sara sier: «Jeg synes det nye rommet er en flott idé.» Hun mener at flere kan arbeide sammen der. Biblioteket vil spørre elevene om erfaringene etter én måned. Elevene kan fortelle hva de bruker rommet til. De kan også si om det er lett å finne plass. Biblioteket kan bruke svarene når de planlegger videre. Dette er en oppdiktet tekst, ikke en kontrollert nyhet.",
          "bridge": [
            {
              "from": "Biblioteket åpner klokka ti.",
              "to": "Opplysning: tidspunktet i teksten."
            },
            {
              "from": "Jeg synes åpningen er flott.",
              "to": "Mening: en persons vurdering."
            }
          ],
          "items": [
            {
              "word": "en overskrift",
              "uk": "заголовок",
              "th": "พาดหัวข่าว"
            },
            {
              "word": "en kilde",
              "uk": "джерело",
              "th": "แหล่งข้อมูล"
            },
            {
              "word": "en opplysning",
              "uk": "інформація",
              "th": "ข้อมูล"
            },
            {
              "word": "en mening",
              "uk": "думка",
              "th": "ความคิดเห็น"
            },
            {
              "word": "en dato",
              "uk": "дата",
              "th": "วันที่"
            }
          ]
        },
        {
          "id": "u35l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u35_2",
          "title": "Les og velg",
          "instruction": "Hva er hovedsaken?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Biblioteket åpner et rom for gruppearbeid.",
          "prompt": "OPPDIKTET NYHET – EKSEMPEL\nOverskrift: Biblioteket åpner et nytt rom\nDato: 12. mars. Kilde: Skoleavisa, et oppdiktet eksempel.\nBiblioteket på Sol skole åpner et rom for gruppearbeid på mandag. Rommet har fire bord, og det åpner klokka ti. Elever kan bruke rommet etter skoletid. Bibliotekar Amir sier at elevene må rydde bordene etter bruk. Elevrådet vil ha rommet.\nElev Sara sier: «Jeg synes det nye rommet er en flott idé.» Hun mener at flere kan arbeide sammen der. Biblioteket vil spørre elevene om erfaringene etter én måned. Elevene kan fortelle hva de bruker rommet til. De kan også si om det er lett å finne plass. Biblioteket kan bruke svarene når de planlegger videre. Dette er en oppdiktet tekst, ikke en kontrollert nyhet.",
          "options": [
            {
              "id": "a",
              "label": "Biblioteket åpner et rom for gruppearbeid."
            },
            {
              "id": "b",
              "label": "Skolen stenger biblioteket."
            },
            {
              "id": "c",
              "label": "Alle elevene får nye bøker."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u35l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u35_3",
          "title": "Fullfør",
          "instruction": "Skriv ordet som mangler.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Tittelen over en nyhet heter en overskrift .",
          "prompt": "Bruk uttrykket fra teksten og eksemplene.",
          "before": "Tittelen over en nyhet heter en",
          "after": ".",
          "accepted": [
            "overskrift"
          ],
          "model": "Tittelen over en nyhet heter en overskrift ."
        },
        {
          "id": "u35l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u35_4",
          "title": "Sett sammen",
          "instruction": "Bygg setningen. Begynn med den delen som starter med stor bokstav.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Sara mener at rommet er en flott idé.",
          "tokens": [
            "at rommet er en flott idé",
            "Sara mener"
          ],
          "answer": [
            "Sara mener",
            "at rommet er en flott idé"
          ],
          "model": "Sara mener at rommet er en flott idé.",
          "sentence": true
        },
        {
          "id": "u35l5",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u35_5",
          "title": "Les og velg",
          "instruction": "Hvilken setning er en mening i teksten?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Sara synes rommet er en flott idé.",
          "prompt": "OPPDIKTET NYHET – EKSEMPEL\nOverskrift: Biblioteket åpner et nytt rom\nDato: 12. mars. Kilde: Skoleavisa, et oppdiktet eksempel.\nBiblioteket på Sol skole åpner et rom for gruppearbeid på mandag. Rommet har fire bord, og det åpner klokka ti. Elever kan bruke rommet etter skoletid. Bibliotekar Amir sier at elevene må rydde bordene etter bruk. Elevrådet vil ha rommet.\nElev Sara sier: «Jeg synes det nye rommet er en flott idé.» Hun mener at flere kan arbeide sammen der. Biblioteket vil spørre elevene om erfaringene etter én måned. Elevene kan fortelle hva de bruker rommet til. De kan også si om det er lett å finne plass. Biblioteket kan bruke svarene når de planlegger videre. Dette er en oppdiktet tekst, ikke en kontrollert nyhet.",
          "options": [
            {
              "id": "a",
              "label": "Sara synes rommet er en flott idé."
            },
            {
              "id": "b",
              "label": "Rommet har fire bord."
            },
            {
              "id": "c",
              "label": "Rommet åpner klokka ti."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u35l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u35_6",
          "title": "Skriv selv",
          "instruction": "Gjenfortell den oppdiktede nyheten. Ta med kilde, hovedsak og minst to detaljer. Forklar også hvilken mening Sara har og hvordan du kan undersøke opplysningene.",
          "hint": "Bruk teksten og ordene som støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "OPPDIKTET NYHET – EKSEMPEL\nOverskrift: Biblioteket åpner et nytt rom\nDato: 12. mars. Kilde: Skoleavisa, et oppdiktet eksempel.\nBiblioteket på Sol skole åpner et rom for gruppearbeid på mandag. Rommet har fire bord, og det åpner klokka ti. Elever kan bruke rommet etter skoletid. Bibliotekar Amir sier at elevene må rydde bordene etter bruk. Elevrådet vil ha rommet.\nElev Sara sier: «Jeg synes det nye rommet er en flott idé.» Hun mener at flere kan arbeide sammen der. Biblioteket vil spørre elevene om erfaringene etter én måned. Elevene kan fortelle hva de bruker rommet til. De kan også si om det er lett å finne plass. Biblioteket kan bruke svarene når de planlegger videre. Dette er en oppdiktet tekst, ikke en kontrollert nyhet.",
          "placeholder": "Skriv her …",
          "model": "Dette er en oppdiktet tekst fra Skoleavisa. Den handler om et nytt rom på biblioteket. Rommet åpner mandag klokka ti. Det har fire bord. Sara synes rommet er en flott idé. Jeg kan spørre biblioteket eller lese en annen kilde for å undersøke opplysningene.",
          "example": "Dette er en oppdiktet tekst fra Skoleavisa. Den handler om et nytt rom på biblioteket. Rommet åpner mandag klokka ti. Det har fire bord. Sara synes rommet er en flott idé. Jeg kan spørre biblioteket eller lese en annen kilde for å undersøke opplysningene.",
          "checks": [
            "Jeg oppga kilde, hovedsak og minst to detaljer.",
            "Jeg forklarte Saras mening og hvordan opplysningene kan undersøkes."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u36",
      "number": "44",
      "title": "Hvem viser ordene til?",
      "stage": "a2plus",
      "level": "A2 · videre",
      "intro": "Les, forstå og skriv om hvem viser ordene til?.",
      "goal": "Jeg kan følge personer og ting i en tekst og gjenfortelle hovedinnholdet.",
      "words": [
        "han",
        "hun",
        "de",
        "den",
        "det"
      ],
      "lessons": [
        {
          "id": "u36l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u36_1",
          "title": "Les og lær",
          "instruction": "Les teksten, ordene og eksemplene.",
          "hint": "Se på eksemplene og les teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Ali og Mali møtes på biblioteket etter skolen. Ali leter etter en bok om fotball. Mali finner boka på et bord. Hun gir den til Ali. Han åpner boka og ser på bildene. Så finner han et bilde av et lag. Bildet er gammelt, men det er tydelig. Mali og Ali leser teksten ved bildet sammen. De ser at laget spiller en kamp i byen. Etterpå skriver Ali noen setninger om bildet. Mali leser setningene. Til slutt leverer de boka tilbake før biblioteket stenger. På vei ut snakker de om bildet. Ali vil finne flere bøker om laget en annen dag. Mali vil gjerne lese mer sammen med Ali. De avtaler å møtes på biblioteket igjen.",
          "bridge": [
            {
              "from": "Ali finner boka. Ali åpner boka.",
              "to": "Ali finner boka. Han åpner den."
            },
            {
              "from": "Mali og Ali ser et bilde. Bildet er nytt.",
              "to": "Mali og Ali ser et bilde. De ser at det er nytt."
            }
          ],
          "items": [
            {
              "word": "han",
              "uk": "він",
              "th": "เขา (ผู้ชาย)"
            },
            {
              "word": "hun",
              "uk": "вона",
              "th": "เธอ"
            },
            {
              "word": "de",
              "uk": "вони",
              "th": "พวกเขา"
            },
            {
              "word": "den",
              "uk": "він / вона / це",
              "th": "สิ่งนั้น"
            },
            {
              "word": "det",
              "uk": "воно / це",
              "th": "สิ่งนั้น"
            }
          ]
        },
        {
          "id": "u36l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u36_2",
          "title": "Les og velg",
          "instruction": "Hvem gir boka til Ali?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Mali.",
          "prompt": "Ali og Mali møtes på biblioteket etter skolen. Ali leter etter en bok om fotball. Mali finner boka på et bord. Hun gir den til Ali. Han åpner boka og ser på bildene. Så finner han et bilde av et lag. Bildet er gammelt, men det er tydelig. Mali og Ali leser teksten ved bildet sammen. De ser at laget spiller en kamp i byen. Etterpå skriver Ali noen setninger om bildet. Mali leser setningene. Til slutt leverer de boka tilbake før biblioteket stenger. På vei ut snakker de om bildet. Ali vil finne flere bøker om laget en annen dag. Mali vil gjerne lese mer sammen med Ali. De avtaler å møtes på biblioteket igjen.",
          "options": [
            {
              "id": "a",
              "label": "Mali."
            },
            {
              "id": "b",
              "label": "Ali."
            },
            {
              "id": "c",
              "label": "Biblioteket."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u36l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u36_3",
          "title": "Fullfør",
          "instruction": "Skriv ordet som mangler.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Mali finner boka. Hun gir den til Ali.",
          "prompt": "Bruk uttrykket fra teksten og eksemplene.",
          "before": "Mali finner boka. Hun gir",
          "after": "til Ali.",
          "accepted": [
            "den"
          ],
          "model": "Mali finner boka. Hun gir den til Ali."
        },
        {
          "id": "u36l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u36_4",
          "title": "Sett sammen",
          "instruction": "Begynn med «Mali og Ali leser.» og bygg de to setningene.",
          "hint": "Se på eksemplene i Les og lær.",
          "explanation": "Mali og Ali leser. De ser på bildet.",
          "tokens": [
            "De ser på bildet",
            "Mali og Ali leser."
          ],
          "answer": [
            "Mali og Ali leser.",
            "De ser på bildet"
          ],
          "model": "Mali og Ali leser. De ser på bildet.",
          "sentence": true
        },
        {
          "id": "u36l5",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u36_5",
          "title": "Les og velg",
          "instruction": "Hva viser «det» til i «det er tydelig»?",
          "hint": "Les teksten og sammenlign alternativene.",
          "explanation": "Bildet.",
          "prompt": "Ali og Mali møtes på biblioteket etter skolen. Ali leter etter en bok om fotball. Mali finner boka på et bord. Hun gir den til Ali. Han åpner boka og ser på bildene. Så finner han et bilde av et lag. Bildet er gammelt, men det er tydelig. Mali og Ali leser teksten ved bildet sammen. De ser at laget spiller en kamp i byen. Etterpå skriver Ali noen setninger om bildet. Mali leser setningene. Til slutt leverer de boka tilbake før biblioteket stenger. På vei ut snakker de om bildet. Ali vil finne flere bøker om laget en annen dag. Mali vil gjerne lese mer sammen med Ali. De avtaler å møtes på biblioteket igjen.",
          "options": [
            {
              "id": "a",
              "label": "Bildet."
            },
            {
              "id": "b",
              "label": "Boka."
            },
            {
              "id": "c",
              "label": "Biblioteket."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u36l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u36_6",
          "title": "Skriv selv",
          "instruction": "Gjenfortell historien i et kort avsnitt. Fortell hvem personene er, hva de finner, hva de gjør først og til slutt. Bruk noen av ordene han, hun, de, den og det slik at det er tydelig hva de viser til.",
          "hint": "Bruk teksten og ordene som støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Ali og Mali møtes på biblioteket etter skolen. Ali leter etter en bok om fotball. Mali finner boka på et bord. Hun gir den til Ali. Han åpner boka og ser på bildene. Så finner han et bilde av et lag. Bildet er gammelt, men det er tydelig. Mali og Ali leser teksten ved bildet sammen. De ser at laget spiller en kamp i byen. Etterpå skriver Ali noen setninger om bildet. Mali leser setningene. Til slutt leverer de boka tilbake før biblioteket stenger. På vei ut snakker de om bildet. Ali vil finne flere bøker om laget en annen dag. Mali vil gjerne lese mer sammen med Ali. De avtaler å møtes på biblioteket igjen.",
          "placeholder": "Skriv her …",
          "model": "Ali og Mali møtes på biblioteket. Mali finner en bok og gir den til Ali. Han ser på bildene i boka. Han finner et gammelt bilde av et lag. De leser teksten ved bildet sammen. Ali skriver om bildet, og Mali leser setningene. Til slutt leverer de boka tilbake.",
          "example": "Ali og Mali møtes på biblioteket. Mali finner en bok og gir den til Ali. Han ser på bildene i boka. Han finner et gammelt bilde av et lag. De leser teksten ved bildet sammen. Ali skriver om bildet, og Mali leser setningene. Til slutt leverer de boka tilbake.",
          "checks": [
            "Jeg skrev hvem personene er, hva de finner og hva de gjør først og sist.",
            "Jeg brukte henvisningsord slik at det er tydelig hvem eller hva de viser til."
          ],
          "minWords": 1
        }
      ]
    }
  ],
  "challenges": [
    {
      "id": "ch_u29",
      "baseUnitId": "u29",
      "number": "37",
      "title": "Vær og aktivitet",
      "stage": "a2plus",
      "level": "Mer utfordring",
      "intro": "Les, forstå og skriv om vær og aktivitet.",
      "goal": "Jeg kan planlegge en aktivitet og forklare et valg ut fra været.",
      "words": [
        "regn",
        "værmelding",
        "en jakke",
        "å ta med",
        "hvis"
      ],
      "lessons": [
        {
          "id": "ch_u29l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u29_1",
          "title": "Les og kombiner",
          "instruction": "Hvilken plan passer med teksten?",
          "hint": "Sammenlign alle opplysningene med teksten.",
          "explanation": "Møte ved inngangen klokka ti og ta med mat og vann.",
          "prompt": "På lørdag skal gruppa gå til vannet. Læreren leser værmeldingen: Det kan bli regn om ettermiddagen. Turen starter klokka ti og slutter klokka to. Alle tar med mat og vann. Amina tar med en jakke hvis det regner. Hun tar også med gode sko. Leo vil sitte ute og spise. Han tar med et ekstra plagg fordi det kan bli kaldt. Gruppen bestemmer seg for å møtes ved inngangen. De får en ny beskjed fra læreren hvis været er dårlig.",
          "options": [
            {
              "id": "a",
              "label": "Møte ved inngangen klokka ti og ta med mat og vann."
            },
            {
              "id": "b",
              "label": "Møte ved vannet klokka to og ta med mat."
            },
            {
              "id": "c",
              "label": "Møte ved inngangen klokka ti uten vann."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u29l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u29_2",
          "title": "Rett opplysningen",
          "instruction": "Les teksten. Rett den ene feilaktige opplysningen i setningen.",
          "hint": "Finn opplysningen i teksten.",
          "explanation": "Turen starter klokka ti .",
          "prompt": "På lørdag skal gruppa gå til vannet. Læreren leser værmeldingen: Det kan bli regn om ettermiddagen. Turen starter klokka ti og slutter klokka to. Alle tar med mat og vann. Amina tar med en jakke hvis det regner. Hun tar også med gode sko. Leo vil sitte ute og spise. Han tar med et ekstra plagg fordi det kan bli kaldt. Gruppen bestemmer seg for å møtes ved inngangen. De får en ny beskjed fra læreren hvis været er dårlig.\n\nSetning som skal rettes: Turen starter klokka to.",
          "before": "Turen starter klokka",
          "after": ".",
          "accepted": [
            "ti",
            "10",
            "10.00",
            "10:00"
          ],
          "model": "Turen starter klokka ti ."
        },
        {
          "id": "ch_u29l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u29_3",
          "title": "Skriv en sammenhengende tekst",
          "instruction": "Skriv til en medelev om en planlagt tur. Ta med tid, sted, hva du tar med, og hva du gjør hvis det regner. Skriv seks til ni setninger, og bruk minst to opplysninger fra teksten.",
          "hint": "Bruk modellen bare hvis du trenger støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "På lørdag skal gruppa gå til vannet. Læreren leser værmeldingen: Det kan bli regn om ettermiddagen. Turen starter klokka ti og slutter klokka to. Alle tar med mat og vann. Amina tar med en jakke hvis det regner. Hun tar også med gode sko. Leo vil sitte ute og spise. Han tar med et ekstra plagg fordi det kan bli kaldt. Gruppen bestemmer seg for å møtes ved inngangen. De får en ny beskjed fra læreren hvis været er dårlig.",
          "placeholder": "Skriv her …",
          "model": "Vi skal gå til vannet på lørdag. Vi møtes klokka ti ved inngangen. Jeg tar med mat og vann. Jeg tar med en jakke hvis det regner. Vi kan spise sammen. Turen slutter klokka to.",
          "example": "Vi skal gå til vannet på lørdag. Vi møtes klokka ti ved inngangen. Jeg tar med mat og vann. Jeg tar med en jakke hvis det regner. Vi kan spise sammen. Turen slutter klokka to.",
          "checks": [
            "Jeg tok med tid, sted og hva jeg tar med.",
            "Jeg skrev hva jeg gjør hvis det regner.",
            "Jeg brukte minst to opplysninger fra teksten."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u30",
      "baseUnitId": "u30",
      "number": "38",
      "title": "Skjema og digital melding",
      "stage": "a2plus",
      "level": "Mer utfordring",
      "intro": "Les, forstå og skriv om skjema og digital melding.",
      "goal": "Jeg kan lese et enkelt skjema og skrive en digital henvendelse.",
      "words": [
        "en avsender",
        "en mottaker",
        "et vedlegg",
        "et skjema",
        "å sende"
      ],
      "lessons": [
        {
          "id": "ch_u30l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u30_1",
          "title": "Les og kombiner",
          "instruction": "Hvilken beskrivelse passer?",
          "hint": "Sammenlign alle opplysningene med teksten.",
          "explanation": "Nadia er avsender, kontoret er mottaker, og skjemaet er vedlegg.",
          "prompt": "Dette er en oppdiktet øvingstekst. Nadia skal sende et skjema til skolen. Opplysningene i dette eksemplet er oppdiktet. I skjemaet skriver hun navnet Nadia Sol og datoen 15. mars. Hun skal ikke skrive passord i skjemaet. Hun åpner en ny melding. Mottakeren er skolens kontor, og Nadia er avsenderen. Hun skriver «Skjema» i emnefeltet. Så legger hun skjemaet ved meldingen og skriver: «Hei! Jeg sender skjemaet som vedlegg. Vennlig hilsen Nadia.» Før hun sender, ser hun at riktig fil er med.",
          "options": [
            {
              "id": "a",
              "label": "Nadia er avsender, kontoret er mottaker, og skjemaet er vedlegg."
            },
            {
              "id": "b",
              "label": "Kontoret er avsender, Nadia er mottaker, og skjemaet er emne."
            },
            {
              "id": "c",
              "label": "Nadia er mottaker, skjemaet er avsender, og kontoret er vedlegg."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u30l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u30_2",
          "title": "Rett opplysningen",
          "instruction": "Les teksten. Rett den ene feilaktige opplysningen i setningen.",
          "hint": "Finn opplysningen i teksten.",
          "explanation": "Mottakeren er skolens kontor .",
          "prompt": "Dette er en oppdiktet øvingstekst. Nadia skal sende et skjema til skolen. Opplysningene i dette eksemplet er oppdiktet. I skjemaet skriver hun navnet Nadia Sol og datoen 15. mars. Hun skal ikke skrive passord i skjemaet. Hun åpner en ny melding. Mottakeren er skolens kontor, og Nadia er avsenderen. Hun skriver «Skjema» i emnefeltet. Så legger hun skjemaet ved meldingen og skriver: «Hei! Jeg sender skjemaet som vedlegg. Vennlig hilsen Nadia.» Før hun sender, ser hun at riktig fil er med.\n\nSetning som skal rettes: Mottakeren er skolens lærer.",
          "before": "Mottakeren er skolens",
          "after": ".",
          "accepted": [
            "kontor"
          ],
          "model": "Mottakeren er skolens kontor ."
        },
        {
          "id": "ch_u30l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u30_3",
          "title": "Skriv en sammenhengende tekst",
          "instruction": "Skriv en kort melding til skolens kontor med et oppdiktet navn. Forklar hva du sender som vedlegg, og avslutt høflig. Skriv seks til ni setninger, og bruk minst to opplysninger fra teksten.",
          "hint": "Bruk modellen bare hvis du trenger støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Dette er en oppdiktet øvingstekst. Nadia skal sende et skjema til skolen. Opplysningene i dette eksemplet er oppdiktet. I skjemaet skriver hun navnet Nadia Sol og datoen 15. mars. Hun skal ikke skrive passord i skjemaet. Hun åpner en ny melding. Mottakeren er skolens kontor, og Nadia er avsenderen. Hun skriver «Skjema» i emnefeltet. Så legger hun skjemaet ved meldingen og skriver: «Hei! Jeg sender skjemaet som vedlegg. Vennlig hilsen Nadia.» Før hun sender, ser hun at riktig fil er med.",
          "placeholder": "Skriv her …",
          "model": "Hei! Jeg heter Nadia Sol. Jeg sender skjemaet som vedlegg. Jeg har fylt ut navn og dato. Kan dere se på skjemaet? Gi meg gjerne beskjed hvis noe mangler. Takk for hjelpen. Vennlig hilsen Nadia.",
          "example": "Hei! Jeg heter Nadia Sol. Jeg sender skjemaet som vedlegg. Jeg har fylt ut navn og dato. Kan dere se på skjemaet? Gi meg gjerne beskjed hvis noe mangler. Takk for hjelpen. Vennlig hilsen Nadia.",
          "checks": [
            "Jeg skrev til kontoret og brukte et oppdiktet navn.",
            "Jeg forklarte hva vedlegget inneholder og avsluttet høflig.",
            "Jeg brukte minst to opplysninger fra teksten."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u31",
      "baseUnitId": "u31",
      "number": "39",
      "title": "Erfaring og praksis",
      "stage": "a2plus",
      "level": "Mer utfordring",
      "intro": "Les, forstå og skriv om erfaring og praksis.",
      "goal": "Jeg kan beskrive en erfaring og fortelle når noe skjedde.",
      "words": [
        "en erfaring",
        "praksis",
        "å jobbe",
        "å lære",
        "har jobbet",
        "har lært",
        "å rydde → ryddet",
        "å lage → laget"
      ],
      "lessons": [
        {
          "id": "ch_u31l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u31_1",
          "title": "Les og kombiner",
          "instruction": "Hva passer med teksten?",
          "hint": "Sammenlign alle opplysningene med teksten.",
          "explanation": "Samira har jobbet på biblioteket og ryddet bøker i går.",
          "prompt": "Samira forteller om praksis på en skole. Hun har jobbet på biblioteket. Der har hun lært å finne og rydde bøker. Hun liker å hjelpe andre med å finne det de trenger. I går jobbet hun sammen med en annen elev. De ryddet bøker og laget en liste. Neste uke vil Samira lære mer om biblioteket. Når hun forteller om erfaring, sier hun: «Jeg har jobbet på biblioteket.» Når hun sier når arbeidet skjedde, sier hun: «Jeg jobbet i går.»",
          "options": [
            {
              "id": "a",
              "label": "Samira har jobbet på biblioteket og ryddet bøker i går."
            },
            {
              "id": "b",
              "label": "Samira har jobbet på bussen og ryddet bøker i går."
            },
            {
              "id": "c",
              "label": "Samira har jobbet på biblioteket og skal rydde i går."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u31l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u31_2",
          "title": "Rett opplysningen",
          "instruction": "Les teksten. Rett den ene feilaktige opplysningen i setningen.",
          "hint": "Finn opplysningen i teksten.",
          "explanation": "Hun har jobbet på biblioteket .",
          "prompt": "Samira forteller om praksis på en skole. Hun har jobbet på biblioteket. Der har hun lært å finne og rydde bøker. Hun liker å hjelpe andre med å finne det de trenger. I går jobbet hun sammen med en annen elev. De ryddet bøker og laget en liste. Neste uke vil Samira lære mer om biblioteket. Når hun forteller om erfaring, sier hun: «Jeg har jobbet på biblioteket.» Når hun sier når arbeidet skjedde, sier hun: «Jeg jobbet i går.»\n\nSetning som skal rettes: Hun har jobbet på kontoret.",
          "before": "Hun har jobbet på",
          "after": ".",
          "accepted": [
            "biblioteket"
          ],
          "model": "Hun har jobbet på biblioteket ."
        },
        {
          "id": "ch_u31l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u31_3",
          "title": "Skriv en sammenhengende tekst",
          "instruction": "Skriv om en oppdiktet eller egen erfaring. Fortell hvor du har jobbet eller lært noe, hva du har lært, og om noe du gjorde på en bestemt dag. Skriv seks til ni setninger, og bruk minst to opplysninger fra teksten.",
          "hint": "Bruk modellen bare hvis du trenger støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Samira forteller om praksis på en skole. Hun har jobbet på biblioteket. Der har hun lært å finne og rydde bøker. Hun liker å hjelpe andre med å finne det de trenger. I går jobbet hun sammen med en annen elev. De ryddet bøker og laget en liste. Neste uke vil Samira lære mer om biblioteket. Når hun forteller om erfaring, sier hun: «Jeg har jobbet på biblioteket.» Når hun sier når arbeidet skjedde, sier hun: «Jeg jobbet i går.»",
          "placeholder": "Skriv her …",
          "model": "Samira har jobbet på biblioteket. Hun har lært å finne bøker. Hun har også lært å rydde bøker. I går jobbet hun sammen med en annen elev. De laget en liste og ryddet bøker. Neste uke vil Samira lære mer om biblioteket.",
          "example": "Samira har jobbet på biblioteket. Hun har lært å finne bøker. Hun har også lært å rydde bøker. I går jobbet hun sammen med en annen elev. De laget en liste og ryddet bøker. Neste uke vil Samira lære mer om biblioteket.",
          "checks": [
            "Jeg skrev hvor personen har jobbet eller lært noe, og hva personen har lært.",
            "Jeg fortalte hva personen gjorde på en bestemt dag.",
            "Jeg brukte minst to opplysninger fra teksten."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u32",
      "baseUnitId": "u32",
      "number": "40",
      "title": "Samarbeid om en oppgave",
      "stage": "a2plus",
      "level": "Mer utfordring",
      "intro": "Les, forstå og skriv om samarbeid om en oppgave.",
      "goal": "Jeg kan lese en arbeidsfordeling og beskrive hvem som gjør hva.",
      "words": [
        "en oppgave",
        "en rolle",
        "et ansvar",
        "en frist",
        "som"
      ],
      "lessons": [
        {
          "id": "ch_u32l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u32_1",
          "title": "Les og kombiner",
          "instruction": "Hvilken fordeling og frist er riktig?",
          "hint": "Sammenlign alle opplysningene med teksten.",
          "explanation": "Mali leser, Ali skriver første del, og fristen er fredag klokka tolv.",
          "prompt": "Tre elever lager en tekst om skolen. De fordeler arbeidet på mandag. Mali leser informasjonen og har boka. Ali skriver første del av teksten. Niran finner et bilde og skriver en kort tekst til bildet. Fristen er fredag klokka tolv. På torsdag skal alle lese teksten sammen. Da kan de se om noe mangler. Personen som leser informasjonen, har boka. Personen som finner bildet, skriver også en tekst til bildet. Alle har ansvar for at teksten er klar til fristen.",
          "options": [
            {
              "id": "a",
              "label": "Mali leser, Ali skriver første del, og fristen er fredag klokka tolv."
            },
            {
              "id": "b",
              "label": "Ali leser, Mali skriver første del, og fristen er fredag klokka tolv."
            },
            {
              "id": "c",
              "label": "Mali leser, Ali skriver første del, og fristen er torsdag klokka tolv."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u32l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u32_2",
          "title": "Rett opplysningen",
          "instruction": "Les teksten. Rett den ene feilaktige opplysningen i setningen.",
          "hint": "Finn opplysningen i teksten.",
          "explanation": "Fristen er fredag klokka tolv.",
          "prompt": "Tre elever lager en tekst om skolen. De fordeler arbeidet på mandag. Mali leser informasjonen og har boka. Ali skriver første del av teksten. Niran finner et bilde og skriver en kort tekst til bildet. Fristen er fredag klokka tolv. På torsdag skal alle lese teksten sammen. Da kan de se om noe mangler. Personen som leser informasjonen, har boka. Personen som finner bildet, skriver også en tekst til bildet. Alle har ansvar for at teksten er klar til fristen.\n\nSetning som skal rettes: Fristen er mandag klokka tolv.",
          "before": "Fristen er",
          "after": "klokka tolv.",
          "accepted": [
            "fredag"
          ],
          "model": "Fristen er fredag klokka tolv."
        },
        {
          "id": "ch_u32l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u32_3",
          "title": "Skriv en sammenhengende tekst",
          "instruction": "Skriv en plan for en gruppe på tre personer. Fortell hvem som gjør hva, når dere skal lese sammen, og når fristen er. Skriv seks til ni setninger, og bruk minst to opplysninger fra teksten.",
          "hint": "Bruk modellen bare hvis du trenger støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Tre elever lager en tekst om skolen. De fordeler arbeidet på mandag. Mali leser informasjonen og har boka. Ali skriver første del av teksten. Niran finner et bilde og skriver en kort tekst til bildet. Fristen er fredag klokka tolv. På torsdag skal alle lese teksten sammen. Da kan de se om noe mangler. Personen som leser informasjonen, har boka. Personen som finner bildet, skriver også en tekst til bildet. Alle har ansvar for at teksten er klar til fristen.",
          "placeholder": "Skriv her …",
          "model": "Vi er tre i gruppa. Mali leser informasjonen. Ali skriver første del. Niran finner et bilde og skriver om det. Vi leser sammen på torsdag. Fristen er fredag klokka tolv.",
          "example": "Vi er tre i gruppa. Mali leser informasjonen. Ali skriver første del. Niran finner et bilde og skriver om det. Vi leser sammen på torsdag. Fristen er fredag klokka tolv.",
          "checks": [
            "Jeg fordelte arbeid mellom tre personer.",
            "Jeg skrev når vi skal lese sammen, og når fristen er.",
            "Jeg brukte minst to opplysninger fra teksten."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u33",
      "baseUnitId": "u33",
      "number": "41",
      "title": "Mening og motsetning",
      "stage": "a2plus",
      "level": "Mer utfordring",
      "intro": "Les, forstå og skriv om mening og motsetning.",
      "goal": "Jeg kan forstå ulike meninger og uttrykke en mening med en grunn.",
      "words": [
        "å mene",
        "enig",
        "uenig",
        "en grunn",
        "men"
      ],
      "lessons": [
        {
          "id": "ch_u33l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u33_1",
          "title": "Les og kombiner",
          "instruction": "Hvilken sammenligning passer?",
          "hint": "Sammenlign alle opplysningene med teksten.",
          "explanation": "Leila vil ha frisk luft, mens Bao vil kunne snakke inne når det regner.",
          "prompt": "Klassen snakker om pausen. To elever har forskjellige meninger. Kilde 1 – Leila: «Jeg mener at pausen kan være ute. Da får vi frisk luft, og vi kan gå en tur.» Kilde 2 – Bao: «Jeg mener at vi kan være inne. Da kan vi snakke sammen når det regner.» Begge vil bruke pausen sammen med andre. Leila liker frisk luft, men Bao tenker på regnet. De blir enige om å spørre resten av klassen før de bestemmer seg.",
          "options": [
            {
              "id": "a",
              "label": "Leila vil ha frisk luft, mens Bao vil kunne snakke inne når det regner."
            },
            {
              "id": "b",
              "label": "Leila vil unngå regn, mens Bao vil ha frisk luft ute."
            },
            {
              "id": "c",
              "label": "Begge mener at alle alltid må være ute."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u33l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u33_2",
          "title": "Rett opplysningen",
          "instruction": "Les teksten. Rett den ene feilaktige opplysningen i setningen.",
          "hint": "Finn opplysningen i teksten.",
          "explanation": "Bao vil være inne når det regner.",
          "prompt": "Klassen snakker om pausen. To elever har forskjellige meninger. Kilde 1 – Leila: «Jeg mener at pausen kan være ute. Da får vi frisk luft, og vi kan gå en tur.» Kilde 2 – Bao: «Jeg mener at vi kan være inne. Da kan vi snakke sammen når det regner.» Begge vil bruke pausen sammen med andre. Leila liker frisk luft, men Bao tenker på regnet. De blir enige om å spørre resten av klassen før de bestemmer seg.\n\nSetning som skal rettes: Bao vil være ute når det regner.",
          "before": "Bao vil være",
          "after": "når det regner.",
          "accepted": [
            "inne"
          ],
          "model": "Bao vil være inne når det regner."
        },
        {
          "id": "ch_u33l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u33_3",
          "title": "Skriv en sammenhengende tekst",
          "instruction": "Skriv om hvor klassen kan ha pause. Skriv en mening og en grunn, beskriv en annen mening og svar respektfullt på den. Skriv seks til ni setninger, og bruk minst to opplysninger fra teksten.",
          "hint": "Bruk modellen bare hvis du trenger støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Klassen snakker om pausen. To elever har forskjellige meninger. Kilde 1 – Leila: «Jeg mener at pausen kan være ute. Da får vi frisk luft, og vi kan gå en tur.» Kilde 2 – Bao: «Jeg mener at vi kan være inne. Da kan vi snakke sammen når det regner.» Begge vil bruke pausen sammen med andre. Leila liker frisk luft, men Bao tenker på regnet. De blir enige om å spørre resten av klassen før de bestemmer seg.",
          "placeholder": "Skriv her …",
          "model": "Jeg mener at vi kan være ute. Vi får frisk luft. Noen vil være inne når det regner. Jeg forstår den grunnen. Jeg er likevel uenig. Jeg vil ikke alltid være inne. Vi kan spørre resten av klassen.",
          "example": "Jeg mener at vi kan være ute. Vi får frisk luft. Noen vil være inne når det regner. Jeg forstår den grunnen. Jeg er likevel uenig. Jeg vil ikke alltid være inne. Vi kan spørre resten av klassen.",
          "checks": [
            "Jeg skrev en mening og begrunnet den.",
            "Jeg beskrev en annen mening og svarte respektfullt.",
            "Jeg brukte minst to opplysninger fra teksten."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u34",
      "baseUnitId": "u34",
      "number": "42",
      "title": "Et problem og to løsninger",
      "stage": "a2plus",
      "level": "Mer utfordring",
      "intro": "Les, forstå og skriv om et problem og to løsninger.",
      "goal": "Jeg kan vurdere løsninger og gi beskjed når en plan endrer seg.",
      "words": [
        "en løsning",
        "en frist",
        "å levere",
        "å utsette",
        "ikke"
      ],
      "lessons": [
        {
          "id": "ch_u34l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u34_1",
          "title": "Les og kombiner",
          "instruction": "Hvilken løsning passer med fristen?",
          "hint": "Sammenlign alle opplysningene med teksten.",
          "explanation": "Mina sender klokka ni, og Tom kan sette sammen og levere teksten.",
          "prompt": "Mina og Tom skal levere en tekst fredag klokka tolv. Torsdag er Mina syk og kan ikke komme på skolen. De har to muligheter. Mina kan skrive hjemme og sende sin del til Tom klokka ni fredag. Da kan Tom sette sammen teksten og levere den. Den andre løsningen er å spørre læreren om en ny frist. Det gir mer tid, men læreren må først si ja. Mina sender Tom en beskjed hvis hun ikke kan skrive hjemme. Hvis hun ikke kan skrive, spør Tom læreren om fristen.",
          "options": [
            {
              "id": "a",
              "label": "Mina sender klokka ni, og Tom kan sette sammen og levere teksten."
            },
            {
              "id": "b",
              "label": "Mina sender etter tolv, og Tom leverer før tolv."
            },
            {
              "id": "c",
              "label": "Tom endrer fristen selv uten å spørre læreren."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u34l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u34_2",
          "title": "Rett opplysningen",
          "instruction": "Les teksten. Rett den ene feilaktige opplysningen i setningen.",
          "hint": "Finn opplysningen i teksten.",
          "explanation": "Mina kan sende sin del klokka ni fredag.",
          "prompt": "Mina og Tom skal levere en tekst fredag klokka tolv. Torsdag er Mina syk og kan ikke komme på skolen. De har to muligheter. Mina kan skrive hjemme og sende sin del til Tom klokka ni fredag. Da kan Tom sette sammen teksten og levere den. Den andre løsningen er å spørre læreren om en ny frist. Det gir mer tid, men læreren må først si ja. Mina sender Tom en beskjed hvis hun ikke kan skrive hjemme. Hvis hun ikke kan skrive, spør Tom læreren om fristen.\n\nSetning som skal rettes: Mina kan sende sin del klokka to (14.00) fredag.",
          "before": "Mina kan sende sin del klokka",
          "after": "fredag.",
          "accepted": [
            "ni",
            "9",
            "09.00",
            "09:00"
          ],
          "model": "Mina kan sende sin del klokka ni fredag."
        },
        {
          "id": "ch_u34l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u34_3",
          "title": "Skriv en sammenhengende tekst",
          "instruction": "Skriv en melding om et oppdiktet problem. Beskriv to muligheter, hvilken du velger og hvorfor. Fortell også hva du gjør hvis planen ikke går. Skriv seks til ni setninger, og bruk minst to opplysninger fra teksten.",
          "hint": "Bruk modellen bare hvis du trenger støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Mina og Tom skal levere en tekst fredag klokka tolv. Torsdag er Mina syk og kan ikke komme på skolen. De har to muligheter. Mina kan skrive hjemme og sende sin del til Tom klokka ni fredag. Da kan Tom sette sammen teksten og levere den. Den andre løsningen er å spørre læreren om en ny frist. Det gir mer tid, men læreren må først si ja. Mina sender Tom en beskjed hvis hun ikke kan skrive hjemme. Hvis hun ikke kan skrive, spør Tom læreren om fristen.",
          "placeholder": "Skriv her …",
          "model": "Hei Tom! Jeg er syk i dag. Jeg kan skrive hjemme og sende teksten før klokka ti. Vi kan også spørre læreren om en ny frist. Jeg velger å skrive hjemme fordi vi da kan levere fredag. Hvis jeg ikke kan skrive, sender jeg deg en beskjed.",
          "example": "Hei Tom! Jeg er syk i dag. Jeg kan skrive hjemme og sende teksten før klokka ti. Vi kan også spørre læreren om en ny frist. Jeg velger å skrive hjemme fordi vi da kan levere fredag. Hvis jeg ikke kan skrive, sender jeg deg en beskjed.",
          "checks": [
            "Jeg beskrev problemet og to muligheter.",
            "Jeg forklarte valget og hva jeg gjør hvis planen ikke går.",
            "Jeg brukte minst to opplysninger fra teksten."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u35",
      "baseUnitId": "u35",
      "number": "43",
      "title": "Les en enkel nyhet",
      "stage": "a2plus",
      "level": "Mer utfordring",
      "intro": "Les, forstå og skriv om les en enkel nyhet.",
      "goal": "Jeg kan finne hovedinnholdet og skille en opplysning fra en mening.",
      "words": [
        "en overskrift",
        "en kilde",
        "en opplysning",
        "en mening",
        "en dato"
      ],
      "lessons": [
        {
          "id": "ch_u35l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u35_1",
          "title": "Les og kombiner",
          "instruction": "Hvilken beskrivelse passer med nyheten?",
          "hint": "Sammenlign alle opplysningene med teksten.",
          "explanation": "Rommet åpner mandag klokka ti og har fire bord.",
          "prompt": "OPPDIKTET NYHET – EKSEMPEL\nOverskrift: Biblioteket åpner et nytt rom\nDato: 12. mars. Kilde: Skoleavisa, et oppdiktet eksempel.\nBiblioteket på Sol skole åpner et rom for gruppearbeid på mandag. Rommet har fire bord, og det åpner klokka ti. Elever kan bruke rommet etter skoletid. Bibliotekar Amir sier at elevene må rydde bordene etter bruk. Elevrådet vil ha rommet.\nElev Sara sier: «Jeg synes det nye rommet er en flott idé.» Hun mener at flere kan arbeide sammen der. Biblioteket vil spørre elevene om erfaringene etter én måned. Elevene kan fortelle hva de bruker rommet til. De kan også si om det er lett å finne plass. Biblioteket kan bruke svarene når de planlegger videre. Dette er en oppdiktet tekst, ikke en kontrollert nyhet.",
          "options": [
            {
              "id": "a",
              "label": "Rommet åpner mandag klokka ti og har fire bord."
            },
            {
              "id": "b",
              "label": "Rommet åpner fredag klokka ti og har fire bord."
            },
            {
              "id": "c",
              "label": "Rommet åpner mandag klokka tolv og har fire bord."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u35l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u35_2",
          "title": "Rett opplysningen",
          "instruction": "Les teksten. Rett den ene feilaktige opplysningen i setningen.",
          "hint": "Finn opplysningen i teksten.",
          "explanation": "Rommet har fire bord.",
          "prompt": "OPPDIKTET NYHET – EKSEMPEL\nOverskrift: Biblioteket åpner et nytt rom\nDato: 12. mars. Kilde: Skoleavisa, et oppdiktet eksempel.\nBiblioteket på Sol skole åpner et rom for gruppearbeid på mandag. Rommet har fire bord, og det åpner klokka ti. Elever kan bruke rommet etter skoletid. Bibliotekar Amir sier at elevene må rydde bordene etter bruk. Elevrådet vil ha rommet.\nElev Sara sier: «Jeg synes det nye rommet er en flott idé.» Hun mener at flere kan arbeide sammen der. Biblioteket vil spørre elevene om erfaringene etter én måned. Elevene kan fortelle hva de bruker rommet til. De kan også si om det er lett å finne plass. Biblioteket kan bruke svarene når de planlegger videre. Dette er en oppdiktet tekst, ikke en kontrollert nyhet.\n\nSetning som skal rettes: Rommet har to bord.",
          "before": "Rommet har",
          "after": "bord.",
          "accepted": [
            "fire",
            "4"
          ],
          "model": "Rommet har fire bord."
        },
        {
          "id": "ch_u35l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u35_3",
          "title": "Skriv en sammenhengende tekst",
          "instruction": "Gjenfortell den oppdiktede nyheten. Ta med kilde, hovedsak og minst to detaljer. Forklar også hvilken mening Sara har og hvordan du kan undersøke opplysningene. Skriv seks til ni setninger, og bruk minst to opplysninger fra teksten.",
          "hint": "Bruk modellen bare hvis du trenger støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "OPPDIKTET NYHET – EKSEMPEL\nOverskrift: Biblioteket åpner et nytt rom\nDato: 12. mars. Kilde: Skoleavisa, et oppdiktet eksempel.\nBiblioteket på Sol skole åpner et rom for gruppearbeid på mandag. Rommet har fire bord, og det åpner klokka ti. Elever kan bruke rommet etter skoletid. Bibliotekar Amir sier at elevene må rydde bordene etter bruk. Elevrådet vil ha rommet.\nElev Sara sier: «Jeg synes det nye rommet er en flott idé.» Hun mener at flere kan arbeide sammen der. Biblioteket vil spørre elevene om erfaringene etter én måned. Elevene kan fortelle hva de bruker rommet til. De kan også si om det er lett å finne plass. Biblioteket kan bruke svarene når de planlegger videre. Dette er en oppdiktet tekst, ikke en kontrollert nyhet.",
          "placeholder": "Skriv her …",
          "model": "Dette er en oppdiktet tekst fra Skoleavisa. Den handler om et nytt rom på biblioteket. Rommet åpner mandag klokka ti. Det har fire bord. Sara synes rommet er en flott idé. Jeg kan spørre biblioteket eller lese en annen kilde for å undersøke opplysningene.",
          "example": "Dette er en oppdiktet tekst fra Skoleavisa. Den handler om et nytt rom på biblioteket. Rommet åpner mandag klokka ti. Det har fire bord. Sara synes rommet er en flott idé. Jeg kan spørre biblioteket eller lese en annen kilde for å undersøke opplysningene.",
          "checks": [
            "Jeg oppga kilde, hovedsak og minst to detaljer.",
            "Jeg forklarte Saras mening og hvordan opplysningene kan undersøkes.",
            "Jeg brukte minst to opplysninger fra teksten."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u36",
      "baseUnitId": "u36",
      "number": "44",
      "title": "Hvem viser ordene til?",
      "stage": "a2plus",
      "level": "Mer utfordring",
      "intro": "Les, forstå og skriv om hvem viser ordene til?.",
      "goal": "Jeg kan følge personer og ting i en tekst og gjenfortelle hovedinnholdet.",
      "words": [
        "han",
        "hun",
        "de",
        "den",
        "det"
      ],
      "lessons": [
        {
          "id": "ch_u36l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u36_1",
          "title": "Les og kombiner",
          "instruction": "Hvilken rekkefølge og opplysning passer?",
          "hint": "Sammenlign alle opplysningene med teksten.",
          "explanation": "Mali finner boka; Ali ser på bildene; begge leverer boka tilbake.",
          "prompt": "Ali og Mali møtes på biblioteket etter skolen. Ali leter etter en bok om fotball. Mali finner boka på et bord. Hun gir den til Ali. Han åpner boka og ser på bildene. Så finner han et bilde av et lag. Bildet er gammelt, men det er tydelig. Mali og Ali leser teksten ved bildet sammen. De ser at laget spiller en kamp i byen. Etterpå skriver Ali noen setninger om bildet. Mali leser setningene. Til slutt leverer de boka tilbake før biblioteket stenger. På vei ut snakker de om bildet. Ali vil finne flere bøker om laget en annen dag. Mali vil gjerne lese mer sammen med Ali. De avtaler å møtes på biblioteket igjen.",
          "options": [
            {
              "id": "a",
              "label": "Mali finner boka; Ali ser på bildene; begge leverer boka tilbake."
            },
            {
              "id": "b",
              "label": "Ali leverer boka; Mali finner den; begge går hjem."
            },
            {
              "id": "c",
              "label": "Mali finner bildet; Ali lukker biblioteket; begge skriver."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u36l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u36_2",
          "title": "Rett opplysningen",
          "instruction": "Les teksten. Rett den ene feilaktige opplysningen i setningen.",
          "hint": "Finn opplysningen i teksten.",
          "explanation": "Ali finner et bilde av et lag .",
          "prompt": "Ali og Mali møtes på biblioteket etter skolen. Ali leter etter en bok om fotball. Mali finner boka på et bord. Hun gir den til Ali. Han åpner boka og ser på bildene. Så finner han et bilde av et lag. Bildet er gammelt, men det er tydelig. Mali og Ali leser teksten ved bildet sammen. De ser at laget spiller en kamp i byen. Etterpå skriver Ali noen setninger om bildet. Mali leser setningene. Til slutt leverer de boka tilbake før biblioteket stenger. På vei ut snakker de om bildet. Ali vil finne flere bøker om laget en annen dag. Mali vil gjerne lese mer sammen med Ali. De avtaler å møtes på biblioteket igjen.\n\nSetning som skal rettes: Ali finner et bilde av et hus.",
          "before": "Ali finner et bilde av et",
          "after": ".",
          "accepted": [
            "lag"
          ],
          "model": "Ali finner et bilde av et lag ."
        },
        {
          "id": "ch_u36l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u36_3",
          "title": "Skriv en sammenhengende tekst",
          "instruction": "Gjenfortell historien i et kort avsnitt. Fortell hvem personene er, hva de finner, hva de gjør først og til slutt. Bruk noen av ordene han, hun, de, den og det slik at det er tydelig hva de viser til. Skriv seks til ni setninger, og bruk minst to opplysninger fra teksten.",
          "hint": "Bruk modellen bare hvis du trenger støtte.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Ali og Mali møtes på biblioteket etter skolen. Ali leter etter en bok om fotball. Mali finner boka på et bord. Hun gir den til Ali. Han åpner boka og ser på bildene. Så finner han et bilde av et lag. Bildet er gammelt, men det er tydelig. Mali og Ali leser teksten ved bildet sammen. De ser at laget spiller en kamp i byen. Etterpå skriver Ali noen setninger om bildet. Mali leser setningene. Til slutt leverer de boka tilbake før biblioteket stenger. På vei ut snakker de om bildet. Ali vil finne flere bøker om laget en annen dag. Mali vil gjerne lese mer sammen med Ali. De avtaler å møtes på biblioteket igjen.",
          "placeholder": "Skriv her …",
          "model": "Ali og Mali møtes på biblioteket. Mali finner en bok og gir den til Ali. Han ser på bildene i boka. Han finner et gammelt bilde av et lag. De leser teksten ved bildet sammen. Ali skriver om bildet, og Mali leser setningene. Til slutt leverer de boka tilbake.",
          "example": "Ali og Mali møtes på biblioteket. Mali finner en bok og gir den til Ali. Han ser på bildene i boka. Han finner et gammelt bilde av et lag. De leser teksten ved bildet sammen. Ali skriver om bildet, og Mali leser setningene. Til slutt leverer de boka tilbake.",
          "checks": [
            "Jeg skrev hvem personene er, hva de finner og hva de gjør først og sist.",
            "Jeg brukte henvisningsord slik at det er tydelig hvem eller hva de viser til.",
            "Jeg brukte minst to opplysninger fra teksten."
          ],
          "minWords": 1
        }
      ]
    }
  ],
  "words": [
    {
      "word": "regn",
      "uk": "дощ",
      "th": "ฝน",
      "meaning": "Vann som faller fra skyene."
    },
    {
      "word": "værmelding",
      "uk": "прогноз погоди",
      "th": "พยากรณ์อากาศ",
      "meaning": "Informasjon om været som er ventet."
    },
    {
      "word": "en jakke",
      "uk": "куртка",
      "th": "เสื้อแจ็กเก็ต",
      "meaning": "Et plagg du bruker ute."
    },
    {
      "word": "å ta med",
      "uk": "взяти з собою",
      "th": "นำไปด้วย",
      "meaning": "Ta noe med på tur."
    },
    {
      "word": "hvis",
      "uk": "якщо",
      "th": "ถ้า",
      "meaning": "Innleder en betingelse."
    },
    {
      "word": "en avsender",
      "uk": "відправник",
      "th": "ผู้ส่ง",
      "meaning": "Personen som sender en melding."
    },
    {
      "word": "en mottaker",
      "uk": "одержувач",
      "th": "ผู้รับ",
      "meaning": "Personen som får meldingen."
    },
    {
      "word": "et vedlegg",
      "uk": "вкладення",
      "th": "ไฟล์แนบ",
      "meaning": "En fil som følger med en melding."
    },
    {
      "word": "et skjema",
      "uk": "форма",
      "th": "แบบฟอร์ม",
      "meaning": "Felt som skal fylles ut."
    },
    {
      "word": "å sende",
      "uk": "надсилати",
      "th": "ส่ง",
      "meaning": "Levere en melding digitalt."
    },
    {
      "word": "en erfaring",
      "uk": "досвід",
      "th": "ประสบการณ์",
      "meaning": "Noe du har gjort og lært av."
    },
    {
      "word": "praksis",
      "uk": "практика",
      "th": "การฝึกงาน",
      "meaning": "Tid der du lærer ved å arbeide."
    },
    {
      "word": "å jobbe",
      "uk": "працювати",
      "th": "ทำงาน",
      "meaning": "Gjøre arbeid."
    },
    {
      "word": "å lære",
      "uk": "вчитися",
      "th": "เรียนรู้",
      "meaning": "Få ny kunnskap."
    },
    {
      "word": "har jobbet",
      "uk": "працював / працювала",
      "th": "เคยทำงาน",
      "meaning": "Brukes her om erfaring."
    },
    {
      "word": "har lært",
      "uk": "навчився / навчилася",
      "th": "ได้เรียนรู้",
      "meaning": "Noe jeg kan etter å ha lært."
    },
    {
      "word": "å rydde → ryddet",
      "uk": "прибирати → прибрав / прибрала",
      "th": "จัดของ → จัดของแล้ว",
      "meaning": "I går ryddet de bøker."
    },
    {
      "word": "å lage → laget",
      "uk": "робити → зробив / зробила",
      "th": "ทำ → ทำแล้ว",
      "meaning": "I går laget de en liste."
    },
    {
      "word": "en oppgave",
      "uk": "завдання",
      "th": "งานที่ได้รับมอบหมาย",
      "meaning": "Noe som skal gjøres."
    },
    {
      "word": "en rolle",
      "uk": "роль",
      "th": "บทบาท",
      "meaning": "Det du gjør i en gruppe."
    },
    {
      "word": "et ansvar",
      "uk": "відповідальність",
      "th": "ความรับผิดชอบ",
      "meaning": "Noe du skal passe på."
    },
    {
      "word": "en frist",
      "uk": "кінцевий термін",
      "th": "กำหนดส่ง",
      "meaning": "Siste tidspunkt for å levere."
    },
    {
      "word": "som",
      "uk": "який / яка",
      "th": "ที่",
      "meaning": "Knytter en person til en opplysning."
    },
    {
      "word": "å mene",
      "uk": "вважати",
      "th": "มีความคิดเห็น",
      "meaning": "Ha en mening om noe."
    },
    {
      "word": "enig",
      "uk": "згодний / згодна",
      "th": "เห็นด้วย",
      "meaning": "Ha samme mening."
    },
    {
      "word": "uenig",
      "uk": "не згодний / не згодна",
      "th": "ไม่เห็นด้วย",
      "meaning": "Ha en annen mening."
    },
    {
      "word": "en grunn",
      "uk": "причина",
      "th": "เหตุผล",
      "meaning": "Forklaring på hvorfor."
    },
    {
      "word": "men",
      "uk": "але",
      "th": "แต่",
      "meaning": "Binder sammen ulike opplysninger eller syn."
    },
    {
      "word": "en løsning",
      "uk": "рішення",
      "th": "วิธีแก้ปัญหา",
      "meaning": "En måte å løse et problem på."
    },
    {
      "word": "å levere",
      "uk": "здавати",
      "th": "ส่งงาน",
      "meaning": "Gi fra seg arbeidet."
    },
    {
      "word": "å utsette",
      "uk": "відкладати",
      "th": "เลื่อน",
      "meaning": "Flytte til et senere tidspunkt."
    },
    {
      "word": "ikke",
      "uk": "не",
      "th": "ไม่",
      "meaning": "Gjør en setning negativ."
    },
    {
      "word": "en overskrift",
      "uk": "заголовок",
      "th": "พาดหัวข่าว",
      "meaning": "Tittelen over teksten."
    },
    {
      "word": "en kilde",
      "uk": "джерело",
      "th": "แหล่งข้อมูล",
      "meaning": "Der informasjonen kommer fra."
    },
    {
      "word": "en opplysning",
      "uk": "інформація",
      "th": "ข้อมูล",
      "meaning": "Noe teksten forteller."
    },
    {
      "word": "en mening",
      "uk": "думка",
      "th": "ความคิดเห็น",
      "meaning": "Hva en person mener."
    },
    {
      "word": "en dato",
      "uk": "дата",
      "th": "วันที่",
      "meaning": "Dag, måned og eventuelt år."
    },
    {
      "word": "han",
      "uk": "він",
      "th": "เขา (ผู้ชาย)",
      "meaning": "Kan vise tilbake til en person."
    },
    {
      "word": "hun",
      "uk": "вона",
      "th": "เธอ",
      "meaning": "Kan vise tilbake til en person."
    },
    {
      "word": "de",
      "uk": "вони",
      "th": "พวกเขา",
      "meaning": "Kan vise tilbake til flere personer."
    },
    {
      "word": "den",
      "uk": "він / вона / це",
      "th": "สิ่งนั้น",
      "meaning": "Kan vise tilbake til et substantiv, for eksempel boka."
    },
    {
      "word": "det",
      "uk": "воно / це",
      "th": "สิ่งนั้น",
      "meaning": "Kan vise tilbake til et substantiv, for eksempel bildet."
    }
  ]
};
