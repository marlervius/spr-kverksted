const COURSE_A2 = {
  "units": [
    {
      "id": "u21",
      "number": "29",
      "title": "Mat og måltider",
      "stage": "a2",
      "level": "A2 · grunnlag",
      "intro": "Les og skriv om temaet.",
      "goal": "Jeg kan lese en meny og bestille et måltid.",
      "words": [
        "en meny",
        "en frokost",
        "en lunsj",
        "brød",
        "en suppe",
        "Jeg vil gjerne ha …"
      ],
      "lessons": [
        {
          "id": "u21l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u21_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Les uttrykkene og se på teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Til frokost spiser jeg brød. Til lunsj vil jeg gjerne ha suppe. Meny: brød 8 kr, suppe 12 kr. Jeg velger brød fordi brød er billigere.",
          "items": [
            {
              "word": "en meny",
              "uk": "меню",
              "th": "เมนู"
            },
            {
              "word": "en frokost",
              "uk": "сніданок",
              "th": "อาหารเช้า"
            },
            {
              "word": "en lunsj",
              "uk": "обід",
              "th": "อาหารกลางวัน"
            },
            {
              "word": "brød",
              "uk": "хліб",
              "th": "ขนมปัง"
            },
            {
              "word": "en suppe",
              "uk": "суп",
              "th": "ซุป"
            },
            {
              "word": "Jeg vil gjerne ha …",
              "uk": "Я хотів / хотіла б …",
              "th": "ฉันต้องการ …"
            }
          ],
          "bridge": [
            {
              "from": "Jeg vil ha suppe.",
              "to": "Jeg vil gjerne ha suppe."
            }
          ]
        },
        {
          "id": "u21l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u21_read",
          "title": "Les og velg",
          "instruction": "Hva vil Anna ha til lunsj?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «suppe».",
          "prompt": "Menyen på skolen har brød og suppe. Brød koster 8 kr, og suppe koster 12 kr. Anna vil gjerne ha suppe til lunsj. Mali trenger et billigere måltid og vil spise brød til frokost. Mali leser menyen sammen med Anna. De snakker om hva maten koster. Etterpå går de på skolen.",
          "options": [
            {
              "id": "a",
              "label": "suppe"
            },
            {
              "id": "b",
              "label": "brød"
            },
            {
              "id": "c",
              "label": "en penn"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u21l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u21_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør setningen.",
          "hint": "Bruk betydningen i oppgaven.",
          "explanation": "Jeg vil gjerne ha suppe.",
          "prompt": "Mali ønsker suppe og vil formulere ønsket høflig.",
          "before": "Jeg vil",
          "after": "ha suppe.",
          "accepted": [
            "gjerne"
          ],
          "model": "Jeg vil gjerne ha suppe."
        },
        {
          "id": "u21l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u21_build",
          "title": "Sett sammen",
          "instruction": "Begynn med «Jeg vil gjerne ha». Sett sammen setningen.",
          "hint": "Se på første del av setningen.",
          "explanation": "Jeg vil gjerne ha suppe til lunsj.",
          "tokens": [
            "til lunsj",
            "suppe",
            "Jeg vil gjerne ha"
          ],
          "answer": [
            "Jeg vil gjerne ha",
            "suppe",
            "til lunsj"
          ],
          "model": "Jeg vil gjerne ha suppe til lunsj.",
          "sentence": true
        },
        {
          "id": "u21l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u21_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "Suppe koster 12 kr.",
          "prompt": "Menyen på skolen har brød og suppe. Brød koster 8 kr, og suppe koster 12 kr. Anna vil gjerne ha suppe til lunsj. Mali trenger et billigere måltid og vil spise brød til frokost. Mali leser menyen sammen med Anna. De snakker om hva maten koster. Etterpå går de på skolen. Setning som skal rettes: Suppe koster 8 kr.",
          "before": "Suppe koster",
          "after": "kr.",
          "accepted": [
            "12",
            "tolv",
            "12.00",
            "12,00"
          ],
          "model": "Suppe koster 12 kr."
        },
        {
          "id": "u21l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u21_write",
          "title": "Skriv selv",
          "instruction": "Skriv fire til seks korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Meny: brød 8 kr, suppe 12 kr. Skriv til en person på skolen.",
          "placeholder": "Skriv her …",
          "model": "Jeg vil gjerne ha suppe til lunsj. Suppe koster 12 kr. Jeg liker suppe. Jeg spiser lunsj på skolen.",
          "example": "Jeg vil gjerne ha suppe til lunsj. Suppe koster 12 kr. Jeg liker suppe. Jeg spiser lunsj på skolen.",
          "checks": [
            "Jeg skrev hva jeg ønsker og til hvilket måltid.",
            "Jeg brukte en pris fra menyen."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u22",
      "number": "30",
      "title": "Fritid og invitasjoner",
      "stage": "a2",
      "level": "A2 · grunnlag",
      "intro": "Les og skriv om temaet.",
      "goal": "Jeg kan fortelle hva jeg liker og avtale en aktivitet.",
      "words": [
        "en tur",
        "musikk",
        "fotball",
        "å gå tur",
        "Jeg liker å …"
      ],
      "lessons": [
        {
          "id": "u22l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u22_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Les uttrykkene og se på teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Jeg leser. Jeg liker å lese. Mali liker å gå tur. Anna liker musikk og fotball. Kan vi gå tur på tirsdag? Ja, det passer.",
          "items": [
            {
              "word": "en tur",
              "uk": "прогулянка",
              "th": "การเดินเล่น"
            },
            {
              "word": "musikk",
              "uk": "музика",
              "th": "ดนตรี"
            },
            {
              "word": "fotball",
              "uk": "футбол",
              "th": "ฟุตบอล"
            },
            {
              "word": "å gå tur",
              "uk": "гуляти",
              "th": "เดินเล่น"
            },
            {
              "word": "Jeg liker å …",
              "uk": "Мені подобається …",
              "th": "ฉันชอบ …"
            }
          ],
          "bridge": [
            {
              "from": "Jeg leser.",
              "to": "Jeg liker å lese."
            }
          ]
        },
        {
          "id": "u22l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u22_read",
          "title": "Les og velg",
          "instruction": "Når passer turen for begge?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «tirsdag klokka tolv».",
          "prompt": "Anna liker å lese, og Mali liker å gå tur. De vil gjøre en aktivitet sammen. På mandag passer det ikke for Mali. Tirsdag klokka tolv passer for begge. Anna skriver en beskjed og foreslår en tur på tirsdag klokka tolv. Mali leser beskjeden. Mali liker forslaget og svarer ja. De møtes på skolen.",
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
          "id": "u22l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u22_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør setningen.",
          "hint": "Bruk betydningen i oppgaven.",
          "explanation": "Anna liker å lese .",
          "prompt": "Anna leser. Hun liker handlingen.",
          "before": "Anna liker å",
          "after": ".",
          "accepted": [
            "lese"
          ],
          "model": "Anna liker å lese ."
        },
        {
          "id": "u22l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u22_build",
          "title": "Sett sammen",
          "instruction": "Begynn med «Jeg liker». Sett sammen setningen.",
          "hint": "Se på første del av setningen.",
          "explanation": "Jeg liker å lese på skolen.",
          "tokens": [
            "på skolen",
            "å lese",
            "Jeg liker"
          ],
          "answer": [
            "Jeg liker",
            "å lese",
            "på skolen"
          ],
          "model": "Jeg liker å lese på skolen.",
          "sentence": true
        },
        {
          "id": "u22l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u22_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "Mali kan gå tur på tirsdag.",
          "prompt": "Anna liker å lese, og Mali liker å gå tur. De vil gjøre en aktivitet sammen. På mandag passer det ikke for Mali. Tirsdag klokka tolv passer for begge. Anna skriver en beskjed og foreslår en tur på tirsdag klokka tolv. Mali leser beskjeden. Mali liker forslaget og svarer ja. De møtes på skolen. Setning som skal rettes: Mali kan gå tur på mandag.",
          "before": "Mali kan gå tur på",
          "after": ".",
          "accepted": [
            "tirsdag"
          ],
          "model": "Mali kan gå tur på tirsdag."
        },
        {
          "id": "u22l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u22_write",
          "title": "Skriv selv",
          "instruction": "Skriv fire til seks korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Du liker å lese. Du inviterer en venn til å lese på skolen på tirsdag klokka tolv.",
          "placeholder": "Skriv her …",
          "model": "Jeg liker å lese. Jeg vil gjerne lese på skolen. Kan vi lese sammen på tirsdag klokka tolv? Jeg håper det passer.",
          "example": "Jeg liker å lese. Jeg vil gjerne lese på skolen. Kan vi lese sammen på tirsdag klokka tolv? Jeg håper det passer.",
          "checks": [
            "Jeg skrev hva jeg liker.",
            "Jeg foreslo aktivitet, dag og tid."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u23",
      "number": "31",
      "title": "Reise med buss",
      "stage": "a2",
      "level": "A2 · grunnlag",
      "intro": "Les og skriv om temaet.",
      "goal": "Jeg kan lese avgang, ankomst og holdeplass.",
      "words": [
        "et busskort",
        "en holdeplass",
        "en avgang",
        "en ankomst",
        "gå av",
        "halv ni",
        "bytte buss",
        "et bibliotek"
      ],
      "lessons": [
        {
          "id": "u23l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u23_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Les uttrykkene og se på teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Halv ni er 08.30. Bussen har avgang fra skoleholdeplassen 08.30. Ankomst ved biblioteket er 09.00. Jeg bruker busskort og går av ved biblioteket. Jeg kan bytte buss ved skolen. Jeg går av én buss og tar en annen.",
          "items": [
            {
              "word": "et busskort",
              "uk": "проїзна картка",
              "th": "บัตรโดยสารรถบัส"
            },
            {
              "word": "en holdeplass",
              "uk": "зупинка",
              "th": "ป้ายรถเมล์"
            },
            {
              "word": "en avgang",
              "uk": "відправлення",
              "th": "เวลาออก"
            },
            {
              "word": "en ankomst",
              "uk": "прибуття",
              "th": "เวลาถึง"
            },
            {
              "word": "gå av",
              "uk": "вийти з автобуса",
              "th": "ลงรถ"
            },
            {
              "word": "halv ni",
              "uk": "половина дев’ятої",
              "th": "แปดโมงครึ่ง"
            },
            {
              "word": "bytte buss",
              "uk": "пересісти на інший автобус",
              "th": "เปลี่ยนรถบัส"
            },
            {
              "word": "et bibliotek",
              "uk": "бібліотека",
              "th": "ห้องสมุด"
            }
          ],
          "bridge": [
            {
              "from": "08.30",
              "to": "klokka halv ni"
            }
          ]
        },
        {
          "id": "u23l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u23_read",
          "title": "Les og velg",
          "instruction": "Når er ankomst ved biblioteket med buss A?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «09.00».",
          "prompt": "Dette er en fiktiv bussrute. Buss A går fra skolen klokka 08.30, som også heter halv ni. Bussen kommer til biblioteket klokka 09.00. Buss B går fra skolen klokka 09.00 og kommer til biblioteket klokka 09.30. Mali har et busskort og vil komme til biblioteket klokka 09.00. Mali leser rutetabellen før reisen.",
          "options": [
            {
              "id": "a",
              "label": "09.00"
            },
            {
              "id": "b",
              "label": "08.30"
            },
            {
              "id": "c",
              "label": "12.00"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u23l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u23_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Skriv klokkeslettet med ord.",
          "hint": "Bruk betydningen i oppgaven.",
          "explanation": "Avgang er klokka halv ni.",
          "prompt": "Avgangen er 08.30.",
          "before": "Avgang er klokka",
          "after": ".",
          "accepted": [
            "halv ni"
          ],
          "model": "Avgang er klokka halv ni."
        },
        {
          "id": "u23l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u23_build",
          "title": "Sett sammen",
          "instruction": "Begynn med «Jeg». Sett sammen setningen.",
          "hint": "Se på første del av setningen.",
          "explanation": "Jeg går av ved biblioteket.",
          "tokens": [
            "ved biblioteket",
            "går av",
            "Jeg"
          ],
          "answer": [
            "Jeg",
            "går av",
            "ved biblioteket"
          ],
          "model": "Jeg går av ved biblioteket.",
          "sentence": true
        },
        {
          "id": "u23l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u23_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "Buss A har ankomst 09.00.",
          "prompt": "Dette er en fiktiv bussrute. Buss A går fra skolen klokka 08.30, som også heter halv ni. Bussen kommer til biblioteket klokka 09.00. Buss B går fra skolen klokka 09.00 og kommer til biblioteket klokka 09.30. Mali har et busskort og vil komme til biblioteket klokka 09.00. Mali leser rutetabellen før reisen. Setning som skal rettes: Buss A har ankomst 08.30.",
          "before": "Buss A har ankomst",
          "after": ".",
          "accepted": [
            "09.00",
            "09:00",
            "9.00",
            "9:00",
            "klokka ni",
            "ni"
          ],
          "model": "Buss A har ankomst 09.00."
        },
        {
          "id": "u23l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u23_write",
          "title": "Skriv selv",
          "instruction": "Skriv fire til seks korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Fiktiv rute: Skolen → biblioteket. Avgang 08.30, ankomst 09.00. Du har busskort.",
          "placeholder": "Skriv her …",
          "model": "Hei! Jeg tar bussen fra skolen. Avgang er halv ni. Jeg har busskort. Jeg går av ved biblioteket klokka ni.",
          "example": "Hei! Jeg tar bussen fra skolen. Avgang er halv ni. Jeg har busskort. Jeg går av ved biblioteket klokka ni.",
          "checks": [
            "Jeg skrev avgang og ankomst.",
            "Jeg skrev hvor jeg går av."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u24",
      "number": "32",
      "title": "Kontakt legekontoret",
      "stage": "a2",
      "level": "A2 · grunnlag",
      "intro": "Les og skriv om temaet.",
      "goal": "Jeg kan be om en time med en kort beskjed.",
      "words": [
        "en lege",
        "en time hos legen",
        "vondt i hodet",
        "feber",
        "bestille en time",
        "flytte en time"
      ],
      "lessons": [
        {
          "id": "u24l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u24_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Les uttrykkene og se på teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Jeg vil bestille en time hos legen. Jeg har vondt i hodet. Jeg har feber. Jeg kan ikke mandag. Kan vi flytte timen til tirsdag?",
          "items": [
            {
              "word": "en lege",
              "uk": "лікар / лікарка",
              "th": "แพทย์"
            },
            {
              "word": "en time hos legen",
              "uk": "запис до лікаря",
              "th": "นัดพบแพทย์"
            },
            {
              "word": "vondt i hodet",
              "uk": "болить голова",
              "th": "ปวดหัว"
            },
            {
              "word": "feber",
              "uk": "температура",
              "th": "มีไข้"
            },
            {
              "word": "bestille en time",
              "uk": "записатися на прийом",
              "th": "นัดหมาย"
            },
            {
              "word": "flytte en time",
              "uk": "перенести прийом",
              "th": "เลื่อนนัด"
            }
          ],
          "bridge": [
            {
              "from": "Jeg har vondt.",
              "to": "Jeg har vondt i hodet."
            },
            {
              "from": "Jeg trenger hjelp.",
              "to": "Jeg vil bestille en time hos legen."
            }
          ]
        },
        {
          "id": "u24l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u24_read",
          "title": "Les og velg",
          "instruction": "Hvilken time passer Mali?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «tirsdag 12.00».",
          "prompt": "Dette er en oppdiktet situasjon. Legekontoret har ledig time mandag klokka ni og tirsdag klokka tolv. Mali kan ikke på mandag og har vondt i hodet. Mali vil bestille time på tirsdag klokka tolv. Anna har en time på mandag. Mali skriver en kort beskjed til legekontoret og spør om tiden på tirsdag passer.",
          "options": [
            {
              "id": "a",
              "label": "tirsdag 12.00"
            },
            {
              "id": "b",
              "label": "mandag 09.00"
            },
            {
              "id": "c",
              "label": "tirsdag 09.00"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u24l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u24_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør setningen.",
          "hint": "Bruk betydningen i oppgaven.",
          "explanation": "Jeg vil bestille en time hos legen.",
          "prompt": "Du vil avtale en ny time hos legen.",
          "before": "Jeg vil",
          "after": "en time hos legen.",
          "accepted": [
            "bestille",
            "avtale",
            "ha"
          ],
          "model": "Jeg vil bestille en time hos legen."
        },
        {
          "id": "u24l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u24_build",
          "title": "Sett sammen",
          "instruction": "Begynn med «Jeg vil bestille». Sett sammen setningen.",
          "hint": "Se på første del av setningen.",
          "explanation": "Jeg vil bestille en time hos legen.",
          "tokens": [
            "hos legen",
            "en time",
            "Jeg vil bestille"
          ],
          "answer": [
            "Jeg vil bestille",
            "en time",
            "hos legen"
          ],
          "model": "Jeg vil bestille en time hos legen.",
          "sentence": true
        },
        {
          "id": "u24l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u24_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "Mali vil ha time på tirsdag klokka tolv.",
          "prompt": "Dette er en oppdiktet situasjon. Legekontoret har ledig time mandag klokka ni og tirsdag klokka tolv. Mali kan ikke på mandag og har vondt i hodet. Mali vil bestille time på tirsdag klokka tolv. Anna har en time på mandag. Mali skriver en kort beskjed til legekontoret og spør om tiden på tirsdag passer. Setning som skal rettes: Mali vil ha time mandag klokka tolv.",
          "before": "Mali vil ha time på",
          "after": "klokka tolv.",
          "accepted": [
            "tirsdag"
          ],
          "model": "Mali vil ha time på tirsdag klokka tolv."
        },
        {
          "id": "u24l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u24_write",
          "title": "Skriv selv",
          "instruction": "Skriv fire til seks korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Du er Mali. Du vil bestille time på tirsdag klokka tolv. Du har vondt i hodet.",
          "placeholder": "Skriv her …",
          "model": "Jeg vil bestille en time hos legen. Jeg har vondt i hodet. Jeg kan ikke på mandag. Tirsdag klokka tolv passer.",
          "example": "Jeg vil bestille en time hos legen. Jeg har vondt i hodet. Jeg kan ikke på mandag. Tirsdag klokka tolv passer.",
          "checks": [
            "Jeg ba om time og skrev tidspunkt.",
            "Jeg beskrev Malis behov."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u25",
      "number": "33",
      "title": "Fortell om i går",
      "stage": "a2",
      "level": "A2 · grunnlag",
      "intro": "Les og skriv om temaet.",
      "goal": "Jeg kan fortelle om noen kjente handlinger i går.",
      "words": [
        "går → gikk",
        "spiser → spiste",
        "er → var",
        "først",
        "til slutt"
      ],
      "lessons": [
        {
          "id": "u25l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u25_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Les uttrykkene og se på teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "I dag går jeg på skolen. I går gikk jeg på skolen. I dag spiser jeg brød. I går spiste jeg brød. I dag er jeg på skolen. I går var jeg på skolen. I dag leser jeg. I går leste jeg. I dag skriver jeg. I går skrev jeg.",
          "items": [
            {
              "word": "går → gikk",
              "uk": "іде → ішов / ішла",
              "th": "ไปวันนี้ → ไปเมื่อวาน"
            },
            {
              "word": "spiser → spiste",
              "uk": "їсть → їв / їла",
              "th": "กินวันนี้ → กินเมื่อวาน"
            },
            {
              "word": "er → var",
              "uk": "є → був / була",
              "th": "เป็นวันนี้ → เป็นเมื่อวาน"
            },
            {
              "word": "først",
              "uk": "спочатку",
              "th": "ก่อนอื่น"
            },
            {
              "word": "til slutt",
              "uk": "наприкінці",
              "th": "สุดท้าย"
            }
          ],
          "bridge": [
            {
              "from": "I dag går jeg.",
              "to": "I går gikk jeg."
            },
            {
              "from": "I dag spiser jeg.",
              "to": "I går spiste jeg."
            },
            {
              "from": "I dag er jeg på skolen.",
              "to": "I går var jeg på skolen."
            },
            {
              "from": "I dag leser jeg.",
              "to": "I går leste jeg."
            },
            {
              "from": "I dag skriver jeg.",
              "to": "I går skrev jeg."
            }
          ]
        },
        {
          "id": "u25l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u25_read",
          "title": "Les og velg",
          "instruction": "Hva spiste Anna i går?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «brød».",
          "prompt": "Annas logg: I går gikk jeg på skolen. Først leste jeg en bok i rom 2. Så spiste jeg brød på skolen. Til slutt skrev jeg en beskjed til Mali. Jeg var på skolen hele dagen. I dag leser jeg en bok og skriver på skolen. Malis logg: I går var jeg også på skolen. Jeg leste og skrev. I dag leser jeg en annen bok. Anna og Mali leser sammen på skolen. De har begge med en bok.",
          "options": [
            {
              "id": "a",
              "label": "brød"
            },
            {
              "id": "b",
              "label": "suppe"
            },
            {
              "id": "c",
              "label": "en bok"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u25l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u25_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør setningen.",
          "hint": "Bruk betydningen i oppgaven.",
          "explanation": "I går gikk Anna på skolen.",
          "prompt": "I dag går Anna på skolen. I går: gå på skolen.",
          "before": "I går",
          "after": "Anna på skolen.",
          "accepted": [
            "gikk"
          ],
          "model": "I går gikk Anna på skolen."
        },
        {
          "id": "u25l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u25_build",
          "title": "Sett sammen",
          "instruction": "Begynn med «I går». Sett sammen setningen.",
          "hint": "Se på første del av setningen.",
          "explanation": "I går gikk jeg på skolen.",
          "tokens": [
            "på skolen",
            "gikk jeg",
            "I går"
          ],
          "answer": [
            "I går",
            "gikk jeg",
            "på skolen"
          ],
          "model": "I går gikk jeg på skolen.",
          "sentence": true
        },
        {
          "id": "u25l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u25_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "I går spiste Anna brød.",
          "prompt": "Annas logg: I går gikk jeg på skolen. Først leste jeg en bok i rom 2. Så spiste jeg brød på skolen. Til slutt skrev jeg en beskjed til Mali. Jeg var på skolen hele dagen. I dag leser jeg en bok og skriver på skolen. Malis logg: I går var jeg også på skolen. Jeg leste og skrev. I dag leser jeg en annen bok. Anna og Mali leser sammen på skolen. De har begge med en bok. Setning som skal rettes: I går spiste Anna suppe.",
          "before": "I går spiste Anna",
          "after": ".",
          "accepted": [
            "brød"
          ],
          "model": "I går spiste Anna brød."
        },
        {
          "id": "u25l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u25_write",
          "title": "Skriv selv",
          "instruction": "Skriv fem til sju korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Du er Mali. I går: gå på skolen, lese en bok, spise brød, skrive. I dag: lese.",
          "placeholder": "Skriv her …",
          "model": "I går gikk jeg på skolen. Først leste jeg en bok. Så spiste jeg brød. Til slutt skrev jeg. Jeg var på skolen. I dag leser jeg.",
          "example": "I går gikk jeg på skolen. Først leste jeg en bok. Så spiste jeg brød. Til slutt skrev jeg. Jeg var på skolen. I dag leser jeg.",
          "checks": [
            "Jeg skrev hva Mali gjorde i går og hva Mali gjør i dag.",
            "Jeg brukte fortidsformene som er lært."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u26",
      "number": "34",
      "title": "Oppgaver og frister",
      "stage": "a2",
      "level": "A2 · grunnlag",
      "intro": "Les og skriv om temaet.",
      "goal": "Jeg kan forstå en frist og skrive hva jeg må gjøre.",
      "words": [
        "en oppgave",
        "en frist",
        "levere",
        "innen",
        "Jeg må …",
        "Jeg kan …"
      ],
      "lessons": [
        {
          "id": "u26l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u26_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Les uttrykkene og se på teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Norsk: Les en bok. Lever innen mandag. Skriveoppgave: Skriv. Lever innen tirsdag. Jeg må lese innen mandag. Jeg kan skrive i dag. Jeg skal lese i morgen.",
          "items": [
            {
              "word": "en oppgave",
              "uk": "завдання",
              "th": "งาน"
            },
            {
              "word": "en frist",
              "uk": "кінцевий термін",
              "th": "กำหนดส่ง"
            },
            {
              "word": "levere",
              "uk": "здати",
              "th": "ส่ง"
            },
            {
              "word": "innen",
              "uk": "не пізніше",
              "th": "ภายใน"
            },
            {
              "word": "Jeg må …",
              "uk": "Я мушу …",
              "th": "ฉันต้อง …"
            },
            {
              "word": "Jeg kan …",
              "uk": "Я можу …",
              "th": "ฉันสามารถ …"
            }
          ],
          "bridge": [
            {
              "from": "Oppgaven er nødvendig.",
              "to": "Jeg må lese."
            },
            {
              "from": "Det er mulig.",
              "to": "Jeg kan skrive."
            },
            {
              "from": "Jeg har en plan.",
              "to": "Jeg skal lese."
            }
          ]
        },
        {
          "id": "u26l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u26_read",
          "title": "Les og velg",
          "instruction": "Hvilken frist kommer først?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «leseoppgaven: mandag».",
          "prompt": "Anna har to oppgaver på skolen. I norsk må hun lese en bok og levere innen mandag. I skriveoppgaven må hun skrive en tekst og levere innen tirsdag. Det er mandag i dag. Anna ser på fristene og finner ut at norskoppgaven må leveres først. Hun begynner med å lese boka. Hun kan skrive senere i dag. Anna sender en beskjed til læreren og forklarer planen sin. Hun skal levere norskoppgaven på mandag og skriveoppgaven på tirsdag. Begge oppgavene er på norsk.",
          "options": [
            {
              "id": "a",
              "label": "leseoppgaven: mandag"
            },
            {
              "id": "b",
              "label": "skriveoppgaven: tirsdag"
            },
            {
              "id": "c",
              "label": "skriveoppgaven: mandag"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u26l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u26_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør setningen med «må».",
          "hint": "Bruk betydningen i oppgaven.",
          "explanation": "Jeg må lese innen mandag.",
          "prompt": "Oppgave: Les en bok. Frist: mandag. Dette er nødvendig.",
          "before": "Jeg",
          "after": "lese innen mandag.",
          "accepted": [
            "må"
          ],
          "model": "Jeg må lese innen mandag."
        },
        {
          "id": "u26l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u26_build",
          "title": "Sett sammen",
          "instruction": "Begynn med «Jeg». Sett sammen setningen.",
          "hint": "Se på første del av setningen.",
          "explanation": "Jeg må lese innen mandag.",
          "tokens": [
            "innen mandag",
            "må lese",
            "Jeg"
          ],
          "answer": [
            "Jeg",
            "må lese",
            "innen mandag"
          ],
          "model": "Jeg må lese innen mandag.",
          "sentence": true
        },
        {
          "id": "u26l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u26_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "Norsk: Lever innen mandag.",
          "prompt": "Anna har to oppgaver på skolen. I norsk må hun lese en bok og levere innen mandag. I skriveoppgaven må hun skrive en tekst og levere innen tirsdag. Det er mandag i dag. Anna ser på fristene og finner ut at norskoppgaven må leveres først. Hun begynner med å lese boka. Hun kan skrive senere i dag. Anna sender en beskjed til læreren og forklarer planen sin. Hun skal levere norskoppgaven på mandag og skriveoppgaven på tirsdag. Begge oppgavene er på norsk. Setning som skal rettes: Norsk har frist tirsdag.",
          "before": "Norsk: Lever innen",
          "after": ".",
          "accepted": [
            "mandag"
          ],
          "model": "Norsk: Lever innen mandag."
        },
        {
          "id": "u26l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u26_write",
          "title": "Skriv selv",
          "instruction": "Skriv fem til sju korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Du er Anna. Les en bok og lever innen mandag. Skriv og lever innen tirsdag. Skriv til læreren.",
          "placeholder": "Skriv her …",
          "model": "Jeg må lese en bok innen mandag. Jeg leser først. Jeg kan skrive etterpå. Jeg skal levere skriveoppgaven innen tirsdag. Jeg følger planen.",
          "example": "Jeg må lese en bok innen mandag. Jeg leser først. Jeg kan skrive etterpå. Jeg skal levere skriveoppgaven innen tirsdag. Jeg følger planen.",
          "checks": [
            "Jeg skrev begge oppgavene og fristene.",
            "Jeg skrev hva jeg må eller skal gjøre."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u27",
      "number": "35",
      "title": "Bolig og nærmiljø",
      "stage": "a2",
      "level": "A2 · grunnlag",
      "intro": "Les og skriv om temaet.",
      "goal": "Jeg kan forstå en enkel stedsbeskrivelse og skrive et behov.",
      "words": [
        "et kjøkken",
        "et bad",
        "en nabo",
        "åpent",
        "stengt",
        "nær",
        "en stor bok → et stort kjøkken",
        "en liten bok → et lite bad"
      ],
      "lessons": [
        {
          "id": "u27l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u27_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Les uttrykkene og se på teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Kjøkkenet er stort. Badet er lite. Jeg har en nabo. Skolen er nær. Biblioteket er åpent på tirsdag og stengt på mandag. En stor bok → et stort kjøkken. En liten bok → et lite bad.",
          "items": [
            {
              "word": "et kjøkken",
              "uk": "кухня",
              "th": "ห้องครัว"
            },
            {
              "word": "et bad",
              "uk": "ванна кімната",
              "th": "ห้องน้ำ"
            },
            {
              "word": "en nabo",
              "uk": "сусід / сусідка",
              "th": "เพื่อนบ้าน"
            },
            {
              "word": "åpent",
              "uk": "відчинено",
              "th": "เปิด"
            },
            {
              "word": "stengt",
              "uk": "зачинено",
              "th": "ปิด"
            },
            {
              "word": "nær",
              "uk": "поруч",
              "th": "ใกล้"
            },
            {
              "word": "en stor bok → et stort kjøkken",
              "uk": "велика книга → велика кухня",
              "th": "หนังสือเล่มใหญ่ → ห้องครัวขนาดใหญ่"
            },
            {
              "word": "en liten bok → et lite bad",
              "uk": "маленька книга → маленька ванна",
              "th": "หนังสือเล่มเล็ก → ห้องน้ำขนาดเล็ก"
            }
          ],
          "bridge": [
            {
              "from": "en stor bok",
              "to": "et stort kjøkken"
            },
            {
              "from": "en liten bok",
              "to": "et lite bad"
            }
          ]
        },
        {
          "id": "u27l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u27_read",
          "title": "Les og velg",
          "instruction": "Når er biblioteket åpent?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «tirsdag».",
          "prompt": "Mali bor nær skolen. I boligen er det et stort kjøkken og et lite bad. Anna er naboen til Mali. Mali trenger en bok og vil gjerne lese på biblioteket. Biblioteket er stengt på mandag og åpent på tirsdag. På tirsdag kan Mali gå til biblioteket. Mali skriver en beskjed til Anna og foreslår at de møtes ved biblioteket. Anna leser beskjeden og ser at tirsdag passer. Begge vil lese en bok. De skal møtes ved inngangen på tirsdag.",
          "options": [
            {
              "id": "a",
              "label": "tirsdag"
            },
            {
              "id": "b",
              "label": "mandag"
            },
            {
              "id": "c",
              "label": "mandag og tirsdag"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u27l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u27_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør setningen.",
          "hint": "Bruk betydningen i oppgaven.",
          "explanation": "Biblioteket er åpent på tirsdag.",
          "prompt": "Biblioteket: tirsdag 09.00–12.00. Du kan gå inn.",
          "before": "Biblioteket er",
          "after": "på tirsdag.",
          "accepted": [
            "åpent"
          ],
          "model": "Biblioteket er åpent på tirsdag."
        },
        {
          "id": "u27l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u27_build",
          "title": "Sett sammen",
          "instruction": "Begynn med «Biblioteket». Sett sammen setningen.",
          "hint": "Se på første del av setningen.",
          "explanation": "Biblioteket er åpent på tirsdag.",
          "tokens": [
            "på tirsdag",
            "er åpent",
            "Biblioteket"
          ],
          "answer": [
            "Biblioteket",
            "er åpent",
            "på tirsdag"
          ],
          "model": "Biblioteket er åpent på tirsdag.",
          "sentence": true
        },
        {
          "id": "u27l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u27_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "Biblioteket er stengt på mandag.",
          "prompt": "Mali bor nær skolen. I boligen er det et stort kjøkken og et lite bad. Anna er naboen til Mali. Mali trenger en bok og vil gjerne lese på biblioteket. Biblioteket er stengt på mandag og åpent på tirsdag. På tirsdag kan Mali gå til biblioteket. Mali skriver en beskjed til Anna og foreslår at de møtes ved biblioteket. Anna leser beskjeden og ser at tirsdag passer. Begge vil lese en bok. De skal møtes ved inngangen på tirsdag. Setning som skal rettes: Biblioteket er åpent på mandag.",
          "before": "Biblioteket er",
          "after": "på mandag.",
          "accepted": [
            "stengt"
          ],
          "model": "Biblioteket er stengt på mandag."
        },
        {
          "id": "u27l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u27_write",
          "title": "Skriv selv",
          "instruction": "Skriv fem til sju korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Du er Mali. Biblioteket er stengt mandag og åpent tirsdag. Du trenger en bok. Skriv til naboen Anna.",
          "placeholder": "Skriv her …",
          "model": "Hei, Anna! Jeg trenger en bok. Biblioteket er stengt på mandag. Biblioteket er åpent på tirsdag. Vi kan lese der. Kan vi møtes på tirsdag?",
          "example": "Hei, Anna! Jeg trenger en bok. Biblioteket er stengt på mandag. Biblioteket er åpent på tirsdag. Vi kan lese der. Kan vi møtes på tirsdag?",
          "checks": [
            "Jeg skrev behovet for en bok.",
            "Jeg brukte riktig åpningstid."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u28",
      "number": "36",
      "title": "En kort fortelling – les og fortell videre",
      "stage": "a2",
      "level": "A2 · grunnlag",
      "intro": "Les og skriv om temaet.",
      "goal": "Jeg kan finne hovedopplysninger og fortelle dem videre.",
      "words": [
        "en fortelling",
        "en medelev"
      ],
      "lessons": [
        {
          "id": "u28l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u28_learn",
          "title": "Les og lær",
          "instruction": "Les teksten og uttrykkene.",
          "hint": "Les uttrykkene og se på teksten igjen.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "I går gikk Mali på skolen. Først leste Mali en bok. Så spiste Mali brød. Mali skrev en beskjed til Anna. Til slutt var Mali ved biblioteket.",
          "items": [
            {
              "word": "en fortelling",
              "uk": "оповідання",
              "th": "เรื่องเล่า"
            },
            {
              "word": "en medelev",
              "uk": "однокласник / однокласниця",
              "th": "เพื่อนร่วมชั้น"
            }
          ]
        },
        {
          "id": "u28l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u28_read",
          "title": "Les og velg",
          "instruction": "Hva gjorde Mali før måltidet?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «Mali leste en bok.».",
          "prompt": "I går gikk Mali på skolen. Mali gikk til rom 2 med en bok. Først leste Mali boka sammen med Anna. Så spiste Mali brød, og Anna spiste også. Mali skrev en kort beskjed til Anna om biblioteket. Etter skolen var Mali ved biblioteket. Der leste Mali i boka en gang til. Anna var på skolen og leste en bok. I dag leser Mali på skolen. Mali forteller en medelev om dagen i går: Først leste jeg, så spiste jeg, og til slutt var jeg ved biblioteket.",
          "options": [
            {
              "id": "a",
              "label": "Mali leste en bok."
            },
            {
              "id": "b",
              "label": "Mali spiste brød."
            },
            {
              "id": "c",
              "label": "Anna skrev en beskjed."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u28l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u28_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør setningen.",
          "hint": "Bruk betydningen i oppgaven.",
          "explanation": "I går skrev Mali en beskjed.",
          "prompt": "I dag skriver Mali. I går: skrive en beskjed.",
          "before": "I går",
          "after": "Mali en beskjed.",
          "accepted": [
            "skrev"
          ],
          "model": "I går skrev Mali en beskjed."
        },
        {
          "id": "u28l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u28_build",
          "title": "Sett sammen",
          "instruction": "Begynn med «I går». Sett sammen setningen.",
          "hint": "Se på første del av setningen.",
          "explanation": "I går gikk Mali på skolen.",
          "tokens": [
            "på skolen",
            "gikk Mali",
            "I går"
          ],
          "answer": [
            "I går",
            "gikk Mali",
            "på skolen"
          ],
          "model": "I går gikk Mali på skolen.",
          "sentence": true
        },
        {
          "id": "u28l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u28_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "Mali spiste brød.",
          "prompt": "I går gikk Mali på skolen. Mali gikk til rom 2 med en bok. Først leste Mali boka sammen med Anna. Så spiste Mali brød, og Anna spiste også. Mali skrev en kort beskjed til Anna om biblioteket. Etter skolen var Mali ved biblioteket. Der leste Mali i boka en gang til. Anna var på skolen og leste en bok. I dag leser Mali på skolen. Mali forteller en medelev om dagen i går: Først leste jeg, så spiste jeg, og til slutt var jeg ved biblioteket. Setning som skal rettes: Mali spiste suppe.",
          "before": "Mali spiste",
          "after": ".",
          "accepted": [
            "brød"
          ],
          "model": "Mali spiste brød."
        },
        {
          "id": "u28l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u28_write",
          "title": "Skriv selv",
          "instruction": "Skriv fem til sju korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Fortell videre til en medelev: I går gikk Mali på skolen, leste en bok, spiste brød, skrev en beskjed og var ved biblioteket.",
          "placeholder": "Skriv her …",
          "model": "I går gikk Mali på skolen. Først leste Mali en bok. Så spiste Mali brød. Mali skrev en beskjed til Anna. Til slutt var Mali ved biblioteket. I dag leser Mali på skolen.",
          "example": "I går gikk Mali på skolen. Først leste Mali en bok. Så spiste Mali brød. Mali skrev en beskjed til Anna. Til slutt var Mali ved biblioteket. I dag leser Mali på skolen.",
          "checks": [
            "Jeg skrev hvem, når og hvor.",
            "Jeg fikk med flere handlinger i riktig rekkefølge."
          ],
          "minWords": 1
        }
      ]
    }
  ],
  "challenges": [
    {
      "id": "ch_u21",
      "baseUnitId": "u21",
      "number": "29",
      "title": "Mat og måltider",
      "stage": "a2",
      "level": "Mer utfordring",
      "intro": "Bruk uttrykkene i en ny oppgave.",
      "goal": "Jeg kan lese en meny og bestille et måltid.",
      "words": [
        "en meny",
        "en frokost",
        "en lunsj",
        "brød",
        "en suppe",
        "Jeg vil gjerne ha …"
      ],
      "lessons": [
        {
          "id": "ch_u21l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u21_combine",
          "title": "Les og velg",
          "instruction": "Hva passer for Mali?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «brød til frokost, 8 kr».",
          "prompt": "Menyen på skolen har brød og suppe. Brød koster 8 kr, og suppe koster 12 kr. Anna vil gjerne ha suppe til lunsj. Mali trenger et billigere måltid og vil spise brød til frokost. Mali leser menyen sammen med Anna. De snakker om hva maten koster. Etterpå går de på skolen.",
          "options": [
            {
              "id": "a",
              "label": "brød til frokost, 8 kr"
            },
            {
              "id": "b",
              "label": "suppe til frokost, 12 kr"
            },
            {
              "id": "c",
              "label": "brød til lunsj, 8 kr"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u21l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u21_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "Mali vil ha brød til frokost.",
          "prompt": "Menyen på skolen har brød og suppe. Brød koster 8 kr, og suppe koster 12 kr. Anna vil gjerne ha suppe til lunsj. Mali trenger et billigere måltid og vil spise brød til frokost. Mali leser menyen sammen med Anna. De snakker om hva maten koster. Etterpå går de på skolen. Setning som skal rettes: Mali vil ha suppe til frokost.",
          "before": "Mali vil ha",
          "after": "til frokost.",
          "accepted": [
            "brød"
          ],
          "model": "Mali vil ha brød til frokost."
        },
        {
          "id": "ch_u21l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u21_write",
          "title": "Skriv selv",
          "instruction": "Skriv fire til seks korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Meny: brød 8 kr, suppe 12 kr. Du trenger en billigere lunsj. Skriv til en venn om valget og prisen.",
          "placeholder": "Skriv her …",
          "model": "Hei! Jeg vil gjerne ha brød til lunsj. Brød koster 8 kr. Jeg velger brød fordi brød er billigere. Vi møtes på skolen.",
          "example": "Hei! Jeg vil gjerne ha brød til lunsj. Brød koster 8 kr. Jeg velger brød fordi brød er billigere. Vi møtes på skolen.",
          "checks": [
            "Jeg skrev hva jeg velger og prisen.",
            "Jeg ga en grunn med «fordi»."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u22",
      "baseUnitId": "u22",
      "number": "30",
      "title": "Fritid og invitasjoner",
      "stage": "a2",
      "level": "Mer utfordring",
      "intro": "Bruk uttrykkene i en ny oppgave.",
      "goal": "Jeg kan fortelle hva jeg liker og avtale en aktivitet.",
      "words": [
        "en tur",
        "musikk",
        "fotball",
        "å gå tur",
        "Jeg liker å …"
      ],
      "lessons": [
        {
          "id": "ch_u22l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u22_combine",
          "title": "Les og velg",
          "instruction": "Hvilket forslag passer begge og Malis interesse?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «gå tur tirsdag klokka tolv».",
          "prompt": "Anna liker å lese, og Mali liker å gå tur. De vil gjøre en aktivitet sammen. På mandag passer det ikke for Mali. Tirsdag klokka tolv passer for begge. Anna skriver en beskjed og foreslår en tur på tirsdag klokka tolv. Mali leser beskjeden. Mali liker forslaget og svarer ja. De møtes på skolen.",
          "options": [
            {
              "id": "a",
              "label": "gå tur tirsdag klokka tolv"
            },
            {
              "id": "b",
              "label": "gå tur mandag klokka tolv"
            },
            {
              "id": "c",
              "label": "lese tirsdag klokka tolv"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u22l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u22_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "De møtes på tirsdag klokka tolv.",
          "prompt": "Anna liker å lese, og Mali liker å gå tur. De vil gjøre en aktivitet sammen. På mandag passer det ikke for Mali. Tirsdag klokka tolv passer for begge. Anna skriver en beskjed og foreslår en tur på tirsdag klokka tolv. Mali leser beskjeden. Mali liker forslaget og svarer ja. De møtes på skolen. Setning som skal rettes: De møtes mandag klokka tolv.",
          "before": "De møtes på",
          "after": "klokka tolv.",
          "accepted": [
            "tirsdag"
          ],
          "model": "De møtes på tirsdag klokka tolv."
        },
        {
          "id": "ch_u22l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u22_write",
          "title": "Skriv selv",
          "instruction": "Skriv fire til seks korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Du er Mali. Mandag passer ikke. Du liker å gå tur og foreslår tirsdag klokka tolv til Anna.",
          "placeholder": "Skriv her …",
          "model": "Mandag passer ikke for meg. Jeg liker å gå tur. Kan vi gå tur på tirsdag klokka tolv? Vi kan møtes på skolen.",
          "example": "Mandag passer ikke for meg. Jeg liker å gå tur. Kan vi gå tur på tirsdag klokka tolv? Vi kan møtes på skolen.",
          "checks": [
            "Jeg sa at mandag ikke passer.",
            "Jeg foreslo tur på tirsdag klokka tolv."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u23",
      "baseUnitId": "u23",
      "number": "31",
      "title": "Reise med buss",
      "stage": "a2",
      "level": "Mer utfordring",
      "intro": "Bruk uttrykkene i en ny oppgave.",
      "goal": "Jeg kan lese avgang, ankomst og holdeplass.",
      "words": [
        "et busskort",
        "en holdeplass",
        "en avgang",
        "en ankomst",
        "gå av",
        "halv ni",
        "bytte buss",
        "et bibliotek"
      ],
      "lessons": [
        {
          "id": "ch_u23l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u23_combine",
          "title": "Les og velg",
          "instruction": "Hvilken avgang passer Mali?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «Buss A: 08.30».",
          "prompt": "Dette er en fiktiv bussrute. Buss A går fra skolen klokka 08.30, som også heter halv ni. Bussen kommer til biblioteket klokka 09.00. Buss B går fra skolen klokka 09.00 og kommer til biblioteket klokka 09.30. Mali har et busskort og vil komme til biblioteket klokka 09.00. Mali leser rutetabellen før reisen.",
          "options": [
            {
              "id": "a",
              "label": "Buss A: 08.30"
            },
            {
              "id": "b",
              "label": "Buss B: 09.00"
            },
            {
              "id": "c",
              "label": "Buss A: 09.00"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u23l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u23_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "Buss A har avgang 08.30.",
          "prompt": "Dette er en fiktiv bussrute. Buss A går fra skolen klokka 08.30, som også heter halv ni. Bussen kommer til biblioteket klokka 09.00. Buss B går fra skolen klokka 09.00 og kommer til biblioteket klokka 09.30. Mali har et busskort og vil komme til biblioteket klokka 09.00. Mali leser rutetabellen før reisen. Setning som skal rettes: Buss A har avgang 09.00.",
          "before": "Buss A har avgang",
          "after": ".",
          "accepted": [
            "08.30",
            "08:30",
            "8.30",
            "8:30",
            "halv ni",
            "klokka halv ni"
          ],
          "model": "Buss A har avgang 08.30."
        },
        {
          "id": "ch_u23l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u23_write",
          "title": "Skriv selv",
          "instruction": "Skriv fire til seks korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Du er Mali. Bruk buss A: avgang skolen 08.30, ankomst biblioteket 09.00. Skriv en beskjed til Anna.",
          "placeholder": "Skriv her …",
          "model": "Hei, Anna! Jeg tar buss A fra skolen. Bussen har avgang halv ni. Jeg har busskort. Jeg går av ved biblioteket klokka ni.",
          "example": "Hei, Anna! Jeg tar buss A fra skolen. Bussen har avgang halv ni. Jeg har busskort. Jeg går av ved biblioteket klokka ni.",
          "checks": [
            "Jeg skrev avgang og ankomst.",
            "Jeg skrev hvor jeg går av."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u24",
      "baseUnitId": "u24",
      "number": "32",
      "title": "Kontakt legekontoret",
      "stage": "a2",
      "level": "Mer utfordring",
      "intro": "Bruk uttrykkene i en ny oppgave.",
      "goal": "Jeg kan be om en time med en kort beskjed.",
      "words": [
        "en lege",
        "en time hos legen",
        "vondt i hodet",
        "feber",
        "bestille en time",
        "flytte en time"
      ],
      "lessons": [
        {
          "id": "ch_u24l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u24_combine",
          "title": "Les og velg",
          "instruction": "Hvilken beskjed passer til Mali?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «Jeg vil ha time tirsdag klokka tolv.».",
          "prompt": "Dette er en oppdiktet situasjon. Legekontoret har ledig time mandag klokka ni og tirsdag klokka tolv. Mali kan ikke på mandag og har vondt i hodet. Mali vil bestille time på tirsdag klokka tolv. Anna har en time på mandag. Mali skriver en kort beskjed til legekontoret og spør om tiden på tirsdag passer.",
          "options": [
            {
              "id": "a",
              "label": "Jeg vil ha time tirsdag klokka tolv."
            },
            {
              "id": "b",
              "label": "Jeg vil ha time mandag klokka ni."
            },
            {
              "id": "c",
              "label": "Jeg vil ha time tirsdag klokka ni."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u24l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u24_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "Mali vil ha time på tirsdag klokka tolv.",
          "prompt": "Dette er en oppdiktet situasjon. Legekontoret har ledig time mandag klokka ni og tirsdag klokka tolv. Mali kan ikke på mandag og har vondt i hodet. Mali vil bestille time på tirsdag klokka tolv. Anna har en time på mandag. Mali skriver en kort beskjed til legekontoret og spør om tiden på tirsdag passer. Setning som skal rettes: Mali vil ha time mandag klokka tolv.",
          "before": "Mali vil ha time på",
          "after": "klokka tolv.",
          "accepted": [
            "tirsdag"
          ],
          "model": "Mali vil ha time på tirsdag klokka tolv."
        },
        {
          "id": "ch_u24l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u24_write",
          "title": "Skriv selv",
          "instruction": "Skriv fire til seks korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Du er Mali. Du har time mandag klokka ni, men mandag passer ikke. Du vil flytte timen til tirsdag klokka tolv.",
          "placeholder": "Skriv her …",
          "model": "Jeg har time mandag klokka ni. Mandag passer ikke for meg. Kan vi flytte timen til tirsdag klokka tolv? Jeg kan komme da.",
          "example": "Jeg har time mandag klokka ni. Mandag passer ikke for meg. Kan vi flytte timen til tirsdag klokka tolv? Jeg kan komme da.",
          "checks": [
            "Jeg oppga gammel tid og at den ikke passer.",
            "Jeg foreslo ny dag og tid."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u25",
      "baseUnitId": "u25",
      "number": "33",
      "title": "Fortell om i går",
      "stage": "a2",
      "level": "Mer utfordring",
      "intro": "Bruk uttrykkene i en ny oppgave.",
      "goal": "Jeg kan fortelle om noen kjente handlinger i går.",
      "words": [
        "går → gikk",
        "spiser → spiste",
        "er → var",
        "først",
        "til slutt"
      ],
      "lessons": [
        {
          "id": "ch_u25l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u25_combine",
          "title": "Les og velg",
          "instruction": "Hva gjorde Anna etter lesingen?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «Anna spiste brød.».",
          "prompt": "Annas logg: I går gikk jeg på skolen. Først leste jeg en bok i rom 2. Så spiste jeg brød på skolen. Til slutt skrev jeg en beskjed til Mali. Jeg var på skolen hele dagen. I dag leser jeg en bok og skriver på skolen. Malis logg: I går var jeg også på skolen. Jeg leste og skrev. I dag leser jeg en annen bok. Anna og Mali leser sammen på skolen. De har begge med en bok.",
          "options": [
            {
              "id": "a",
              "label": "Anna spiste brød."
            },
            {
              "id": "b",
              "label": "Anna spiste suppe."
            },
            {
              "id": "c",
              "label": "Mali spiste brød."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u25l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u25_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "Anna spiste brød.",
          "prompt": "Annas logg: I går gikk jeg på skolen. Først leste jeg en bok i rom 2. Så spiste jeg brød på skolen. Til slutt skrev jeg en beskjed til Mali. Jeg var på skolen hele dagen. I dag leser jeg en bok og skriver på skolen. Malis logg: I går var jeg også på skolen. Jeg leste og skrev. I dag leser jeg en annen bok. Anna og Mali leser sammen på skolen. De har begge med en bok. Setning som skal rettes: Anna spiste suppe.",
          "before": "Anna spiste",
          "after": ".",
          "accepted": [
            "brød"
          ],
          "model": "Anna spiste brød."
        },
        {
          "id": "ch_u25l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u25_write",
          "title": "Skriv selv",
          "instruction": "Skriv fem til sju korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Du er Anna. I går gikk du på skolen, leste en bok, spiste brød og skrev. I dag leser du. Skriv til en medelev.",
          "placeholder": "Skriv her …",
          "model": "Hei! I går gikk jeg på skolen. Først leste jeg en bok. Så spiste jeg brød. Til slutt skrev jeg. I dag leser jeg.",
          "example": "Hei! I går gikk jeg på skolen. Først leste jeg en bok. Så spiste jeg brød. Til slutt skrev jeg. I dag leser jeg.",
          "checks": [
            "Jeg skrev om Annas handlinger i riktig rekkefølge.",
            "Jeg skrev om i går og i dag."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u26",
      "baseUnitId": "u26",
      "number": "34",
      "title": "Oppgaver og frister",
      "stage": "a2",
      "level": "Mer utfordring",
      "intro": "Bruk uttrykkene i en ny oppgave.",
      "goal": "Jeg kan forstå en frist og skrive hva jeg må gjøre.",
      "words": [
        "en oppgave",
        "en frist",
        "levere",
        "innen",
        "Jeg må …",
        "Jeg kan …"
      ],
      "lessons": [
        {
          "id": "ch_u26l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u26_combine",
          "title": "Les og velg",
          "instruction": "Hva må Anna gjøre først og når er fristen?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «lese en bok · mandag».",
          "prompt": "Anna har to oppgaver på skolen. I norsk må hun lese en bok og levere innen mandag. I skriveoppgaven må hun skrive en tekst og levere innen tirsdag. Det er mandag i dag. Anna ser på fristene og finner ut at norskoppgaven må leveres først. Hun begynner med å lese boka. Hun kan skrive senere i dag. Anna sender en beskjed til læreren og forklarer planen sin. Hun skal levere norskoppgaven på mandag og skriveoppgaven på tirsdag. Begge oppgavene er på norsk.",
          "options": [
            {
              "id": "a",
              "label": "lese en bok · mandag"
            },
            {
              "id": "b",
              "label": "lese en bok · tirsdag"
            },
            {
              "id": "c",
              "label": "skrive · mandag"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u26l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u26_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "Norsk har frist mandag.",
          "prompt": "Anna har to oppgaver på skolen. I norsk må hun lese en bok og levere innen mandag. I skriveoppgaven må hun skrive en tekst og levere innen tirsdag. Det er mandag i dag. Anna ser på fristene og finner ut at norskoppgaven må leveres først. Hun begynner med å lese boka. Hun kan skrive senere i dag. Anna sender en beskjed til læreren og forklarer planen sin. Hun skal levere norskoppgaven på mandag og skriveoppgaven på tirsdag. Begge oppgavene er på norsk. Setning som skal rettes: Norsk har frist tirsdag.",
          "before": "Norsk har frist",
          "after": ".",
          "accepted": [
            "mandag"
          ],
          "model": "Norsk har frist mandag."
        },
        {
          "id": "ch_u26l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u26_write",
          "title": "Skriv selv",
          "instruction": "Skriv fem til sju korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Du er Anna. Norsk: lese en bok innen mandag. Skriveoppgave: skrive innen tirsdag. Skriv en plan til læreren.",
          "placeholder": "Skriv her …",
          "model": "Jeg må lese en bok innen mandag. Jeg leser først. Så kan jeg skrive. Jeg skal levere skriveoppgaven innen tirsdag. Jeg følger planen.",
          "example": "Jeg må lese en bok innen mandag. Jeg leser først. Så kan jeg skrive. Jeg skal levere skriveoppgaven innen tirsdag. Jeg følger planen.",
          "checks": [
            "Jeg skrev hva jeg skal gjøre og begge fristene.",
            "Jeg skrev hva jeg gjør først."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u27",
      "baseUnitId": "u27",
      "number": "35",
      "title": "Bolig og nærmiljø",
      "stage": "a2",
      "level": "Mer utfordring",
      "intro": "Bruk uttrykkene i en ny oppgave.",
      "goal": "Jeg kan forstå en enkel stedsbeskrivelse og skrive et behov.",
      "words": [
        "et kjøkken",
        "et bad",
        "en nabo",
        "åpent",
        "stengt",
        "nær",
        "en stor bok → et stort kjøkken",
        "en liten bok → et lite bad"
      ],
      "lessons": [
        {
          "id": "ch_u27l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u27_combine",
          "title": "Les og velg",
          "instruction": "Hvilken plan passer Mali?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «møte Anna ved biblioteket tirsdag».",
          "prompt": "Mali bor nær skolen. I boligen er det et stort kjøkken og et lite bad. Anna er naboen til Mali. Mali trenger en bok og vil gjerne lese på biblioteket. Biblioteket er stengt på mandag og åpent på tirsdag. På tirsdag kan Mali gå til biblioteket. Mali skriver en beskjed til Anna og foreslår at de møtes ved biblioteket. Anna leser beskjeden og ser at tirsdag passer. Begge vil lese en bok. De skal møtes ved inngangen på tirsdag.",
          "options": [
            {
              "id": "a",
              "label": "møte Anna ved biblioteket tirsdag"
            },
            {
              "id": "b",
              "label": "møte Anna ved biblioteket mandag"
            },
            {
              "id": "c",
              "label": "møte Mali ved biblioteket mandag"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u27l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u27_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "Biblioteket er stengt på mandag.",
          "prompt": "Mali bor nær skolen. I boligen er det et stort kjøkken og et lite bad. Anna er naboen til Mali. Mali trenger en bok og vil gjerne lese på biblioteket. Biblioteket er stengt på mandag og åpent på tirsdag. På tirsdag kan Mali gå til biblioteket. Mali skriver en beskjed til Anna og foreslår at de møtes ved biblioteket. Anna leser beskjeden og ser at tirsdag passer. Begge vil lese en bok. De skal møtes ved inngangen på tirsdag. Setning som skal rettes: Biblioteket er åpent på mandag.",
          "before": "Biblioteket er",
          "after": "på mandag.",
          "accepted": [
            "stengt"
          ],
          "model": "Biblioteket er stengt på mandag."
        },
        {
          "id": "ch_u27l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u27_write",
          "title": "Skriv selv",
          "instruction": "Skriv fem til sju korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Du er Mali. Du trenger en bok. Biblioteket er åpent tirsdag og stengt mandag. Skriv til naboen Anna og foreslå å møtes.",
          "placeholder": "Skriv her …",
          "model": "Hei, Anna! Jeg trenger en bok. Biblioteket er stengt på mandag. Det er åpent på tirsdag. Vi kan lese der. Kan vi møtes ved biblioteket på tirsdag?",
          "example": "Hei, Anna! Jeg trenger en bok. Biblioteket er stengt på mandag. Det er åpent på tirsdag. Vi kan lese der. Kan vi møtes ved biblioteket på tirsdag?",
          "checks": [
            "Jeg skrev behov og når biblioteket er åpent.",
            "Jeg foreslo å møte Anna."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u28",
      "baseUnitId": "u28",
      "number": "36",
      "title": "En kort fortelling – les og fortell videre",
      "stage": "a2",
      "level": "Mer utfordring",
      "intro": "Bruk uttrykkene i en ny oppgave.",
      "goal": "Jeg kan finne hovedopplysninger og fortelle dem videre.",
      "words": [
        "en fortelling",
        "en medelev"
      ],
      "lessons": [
        {
          "id": "ch_u28l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u28_combine",
          "title": "Les og velg",
          "instruction": "Hvilken oppsummering passer til Mali i går?",
          "hint": "Les teksten og sammenlign opplysningene.",
          "explanation": "Riktig svar er «leste i rom 2 · spiste brød · var ved biblioteket».",
          "prompt": "I går gikk Mali på skolen. Mali gikk til rom 2 med en bok. Først leste Mali boka sammen med Anna. Så spiste Mali brød, og Anna spiste også. Mali skrev en kort beskjed til Anna om biblioteket. Etter skolen var Mali ved biblioteket. Der leste Mali i boka en gang til. Anna var på skolen og leste en bok. I dag leser Mali på skolen. Mali forteller en medelev om dagen i går: Først leste jeg, så spiste jeg, og til slutt var jeg ved biblioteket.",
          "options": [
            {
              "id": "a",
              "label": "leste i rom 2 · spiste brød · var ved biblioteket"
            },
            {
              "id": "b",
              "label": "leste i rom 2 · spiste suppe · var ved biblioteket"
            },
            {
              "id": "c",
              "label": "leste i rom 1 · spiste brød · var ved biblioteket"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u28l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u28_repair",
          "title": "Rett opplysningen",
          "instruction": "Fullfør den riktige opplysningen.",
          "hint": "Sammenlign setningen med teksten.",
          "explanation": "Mali leste i rom 2.",
          "prompt": "I går gikk Mali på skolen. Mali gikk til rom 2 med en bok. Først leste Mali boka sammen med Anna. Så spiste Mali brød, og Anna spiste også. Mali skrev en kort beskjed til Anna om biblioteket. Etter skolen var Mali ved biblioteket. Der leste Mali i boka en gang til. Anna var på skolen og leste en bok. I dag leser Mali på skolen. Mali forteller en medelev om dagen i går: Først leste jeg, så spiste jeg, og til slutt var jeg ved biblioteket. Setning som skal rettes: Mali leste i rom 1.",
          "before": "Mali leste i rom",
          "after": ".",
          "accepted": [
            "2",
            "to"
          ],
          "model": "Mali leste i rom 2."
        },
        {
          "id": "ch_u28l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u28_write",
          "title": "Skriv selv",
          "instruction": "Skriv fem til sju korte setninger.",
          "hint": "Bruk opplysningene og uttrykkene du kjenner.",
          "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
          "prompt": "Skriv til en medelev: Mali gikk på skolen i går, leste en bok i rom 2, spiste brød, skrev til Anna og var ved biblioteket.",
          "placeholder": "Skriv her …",
          "model": "Hei! I går gikk Mali på skolen. Først leste Mali en bok i rom 2. Så spiste Mali brød. Mali skrev til Anna. Til slutt var Mali ved biblioteket.",
          "example": "Hei! I går gikk Mali på skolen. Først leste Mali en bok i rom 2. Så spiste Mali brød. Mali skrev til Anna. Til slutt var Mali ved biblioteket.",
          "checks": [
            "Jeg skrev hvem, når og hvor.",
            "Jeg fortalte handlingene i riktig rekkefølge."
          ],
          "minWords": 1
        }
      ]
    }
  ],
  "words": [
    {
      "word": "en meny",
      "uk": "меню",
      "th": "เมนู",
      "meaning": "Eksempel: en meny"
    },
    {
      "word": "en frokost",
      "uk": "сніданок",
      "th": "อาหารเช้า",
      "meaning": "Eksempel: en frokost"
    },
    {
      "word": "en lunsj",
      "uk": "обід",
      "th": "อาหารกลางวัน",
      "meaning": "Eksempel: en lunsj"
    },
    {
      "word": "brød",
      "uk": "хліб",
      "th": "ขนมปัง",
      "meaning": "Eksempel: brød"
    },
    {
      "word": "en suppe",
      "uk": "суп",
      "th": "ซุป",
      "meaning": "Eksempel: en suppe"
    },
    {
      "word": "Jeg vil gjerne ha …",
      "uk": "Я хотів / хотіла б …",
      "th": "ฉันต้องการ …",
      "meaning": "Eksempel: Jeg vil gjerne ha …"
    },
    {
      "word": "en tur",
      "uk": "прогулянка",
      "th": "การเดินเล่น",
      "meaning": "Eksempel: en tur"
    },
    {
      "word": "musikk",
      "uk": "музика",
      "th": "ดนตรี",
      "meaning": "Eksempel: musikk"
    },
    {
      "word": "fotball",
      "uk": "футбол",
      "th": "ฟุตบอล",
      "meaning": "Eksempel: fotball"
    },
    {
      "word": "å gå tur",
      "uk": "гуляти",
      "th": "เดินเล่น",
      "meaning": "Eksempel: å gå tur"
    },
    {
      "word": "Jeg liker å …",
      "uk": "Мені подобається …",
      "th": "ฉันชอบ …",
      "meaning": "Eksempel: Jeg liker å …"
    },
    {
      "word": "et busskort",
      "uk": "проїзна картка",
      "th": "บัตรโดยสารรถบัส",
      "meaning": "Eksempel: et busskort"
    },
    {
      "word": "en holdeplass",
      "uk": "зупинка",
      "th": "ป้ายรถเมล์",
      "meaning": "Eksempel: en holdeplass"
    },
    {
      "word": "en avgang",
      "uk": "відправлення",
      "th": "เวลาออก",
      "meaning": "Eksempel: en avgang"
    },
    {
      "word": "en ankomst",
      "uk": "прибуття",
      "th": "เวลาถึง",
      "meaning": "Eksempel: en ankomst"
    },
    {
      "word": "gå av",
      "uk": "вийти з автобуса",
      "th": "ลงรถ",
      "meaning": "Eksempel: gå av"
    },
    {
      "word": "halv ni",
      "uk": "половина дев’ятої",
      "th": "แปดโมงครึ่ง",
      "meaning": "Eksempel: halv ni"
    },
    {
      "word": "bytte buss",
      "uk": "пересісти на інший автобус",
      "th": "เปลี่ยนรถบัส",
      "meaning": "Eksempel: bytte buss"
    },
    {
      "word": "et bibliotek",
      "uk": "бібліотека",
      "th": "ห้องสมุด",
      "meaning": "Eksempel: et bibliotek"
    },
    {
      "word": "en lege",
      "uk": "лікар / лікарка",
      "th": "แพทย์",
      "meaning": "Eksempel: en lege"
    },
    {
      "word": "en time hos legen",
      "uk": "запис до лікаря",
      "th": "นัดพบแพทย์",
      "meaning": "Eksempel: en time hos legen"
    },
    {
      "word": "vondt i hodet",
      "uk": "болить голова",
      "th": "ปวดหัว",
      "meaning": "Eksempel: vondt i hodet"
    },
    {
      "word": "feber",
      "uk": "температура",
      "th": "มีไข้",
      "meaning": "Eksempel: feber"
    },
    {
      "word": "bestille en time",
      "uk": "записатися на прийом",
      "th": "นัดหมาย",
      "meaning": "Eksempel: bestille en time"
    },
    {
      "word": "flytte en time",
      "uk": "перенести прийом",
      "th": "เลื่อนนัด",
      "meaning": "Eksempel: flytte en time"
    },
    {
      "word": "går → gikk",
      "uk": "іде → ішов / ішла",
      "th": "ไปวันนี้ → ไปเมื่อวาน",
      "meaning": "Eksempel: går → gikk"
    },
    {
      "word": "spiser → spiste",
      "uk": "їсть → їв / їла",
      "th": "กินวันนี้ → กินเมื่อวาน",
      "meaning": "Eksempel: spiser → spiste"
    },
    {
      "word": "er → var",
      "uk": "є → був / була",
      "th": "เป็นวันนี้ → เป็นเมื่อวาน",
      "meaning": "Eksempel: er → var"
    },
    {
      "word": "først",
      "uk": "спочатку",
      "th": "ก่อนอื่น",
      "meaning": "Eksempel: først"
    },
    {
      "word": "til slutt",
      "uk": "наприкінці",
      "th": "สุดท้าย",
      "meaning": "Eksempel: til slutt"
    },
    {
      "word": "en oppgave",
      "uk": "завдання",
      "th": "งาน",
      "meaning": "Eksempel: en oppgave"
    },
    {
      "word": "en frist",
      "uk": "кінцевий термін",
      "th": "กำหนดส่ง",
      "meaning": "Eksempel: en frist"
    },
    {
      "word": "levere",
      "uk": "здати",
      "th": "ส่ง",
      "meaning": "Eksempel: levere"
    },
    {
      "word": "innen",
      "uk": "не пізніше",
      "th": "ภายใน",
      "meaning": "Eksempel: innen"
    },
    {
      "word": "Jeg må …",
      "uk": "Я мушу …",
      "th": "ฉันต้อง …",
      "meaning": "Eksempel: Jeg må …"
    },
    {
      "word": "Jeg kan …",
      "uk": "Я можу …",
      "th": "ฉันสามารถ …",
      "meaning": "Eksempel: Jeg kan …"
    },
    {
      "word": "et kjøkken",
      "uk": "кухня",
      "th": "ห้องครัว",
      "meaning": "Eksempel: et kjøkken"
    },
    {
      "word": "et bad",
      "uk": "ванна кімната",
      "th": "ห้องน้ำ",
      "meaning": "Eksempel: et bad"
    },
    {
      "word": "en nabo",
      "uk": "сусід / сусідка",
      "th": "เพื่อนบ้าน",
      "meaning": "Eksempel: en nabo"
    },
    {
      "word": "åpent",
      "uk": "відчинено",
      "th": "เปิด",
      "meaning": "Eksempel: åpent"
    },
    {
      "word": "stengt",
      "uk": "зачинено",
      "th": "ปิด",
      "meaning": "Eksempel: stengt"
    },
    {
      "word": "nær",
      "uk": "поруч",
      "th": "ใกล้",
      "meaning": "Eksempel: nær"
    },
    {
      "word": "en stor bok → et stort kjøkken",
      "uk": "велика книга → велика кухня",
      "th": "หนังสือเล่มใหญ่ → ห้องครัวขนาดใหญ่",
      "meaning": "Eksempel: en stor bok → et stort kjøkken"
    },
    {
      "word": "en liten bok → et lite bad",
      "uk": "маленька книга → маленька ванна",
      "th": "หนังสือเล่มเล็ก → ห้องน้ำขนาดเล็ก",
      "meaning": "Eksempel: en liten bok → et lite bad"
    },
    {
      "word": "en fortelling",
      "uk": "оповідання",
      "th": "เรื่องเล่า",
      "meaning": "Eksempel: en fortelling"
    },
    {
      "word": "en medelev",
      "uk": "однокласник / однокласниця",
      "th": "เพื่อนร่วมชั้น",
      "meaning": "Eksempel: en medelev"
    }
  ]
};
