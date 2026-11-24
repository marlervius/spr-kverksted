const CHALLENGE_UNITS = [
  {
    "id": "ch_u1",
    "baseUnitId": "u1",
    "number": "01",
    "title": "Ord rundt meg",
    "stage": "a0",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan bruke to ord sammen.",
    "words": [
      "en bok",
      "en penn",
      "et bord",
      "en stol"
    ],
    "lessons": [
      {
        "id": "ch_u1l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_u1_combine",
        "title": "Les og velg",
        "instruction": "Velg bildene som passer.",
        "hint": "Se på begge ordene.",
        "explanation": "Begge bildene passer til ordene.",
        "prompt": "en bok · en penn",
        "options": [
          {
            "id": "a",
            "label": "bok og penn",
            "images": [
              "book",
              "pen"
            ]
          },
          {
            "id": "b",
            "label": "bok og stol",
            "images": [
              "book",
              "chair"
            ]
          },
          {
            "id": "c",
            "label": "penn og bord",
            "images": [
              "pen",
              "table"
            ]
          }
        ],
        "correct": "a",
        "optionsImageOnly": true
      },
      {
        "id": "ch_u1l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_u1_repair",
        "title": "Rett etiketten",
        "instruction": "Skriv riktig etikett.",
        "hint": "Se på bildet. Endre ordet som er feil.",
        "explanation": "En riktig etikett er «en bok».",
        "image": "book",
        "prompt": "Etikett: en penn",
        "before": "",
        "after": "",
        "accepted": [
          "en bok",
          "bok"
        ],
        "model": "en bok",
        "responseLength": "sentence"
      },
      {
        "id": "ch_u1l3",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_u1_complete",
        "title": "Fullfør",
        "instruction": "Fullfør utstyrslista.",
        "hint": "Se på bildene og ordet som allerede står.",
        "explanation": "Et mulig svar er «en penn».",
        "images": [
          "book",
          "pen"
        ],
        "prompt": "Utstyr: en bok ·",
        "before": "",
        "after": "",
        "accepted": [
          "en penn",
          "penn"
        ],
        "model": "en penn",
        "responseLength": "sentence"
      }
    ]
  },
  {
    "id": "ch_u2",
    "baseUnitId": "u2",
    "number": "02",
    "title": "Jeg og du",
    "stage": "a0",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan holde orden på jeg, du og navn.",
    "words": [
      "hei",
      "navn",
      "jeg",
      "du",
      "jeg heter"
    ],
    "lessons": [
      {
        "id": "ch_u2l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_u2_names",
        "title": "To navn",
        "instruction": "Velg riktig svar.",
        "hint": "Les begge navnene.",
        "explanation": "Anna og Mali er navnene.",
        "prompt": "Jeg heter Anna. Du heter Mali.",
        "options": [
          {
            "id": "a",
            "label": "jeg: Anna · du: Mali"
          },
          {
            "id": "b",
            "label": "jeg: Anna · du: Anna"
          },
          {
            "id": "c",
            "label": "jeg: Mali · du: Mali"
          }
        ],
        "correct": "a"
      },
      {
        "id": "ch_u2l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_u2_name_repair",
        "title": "Rett navnet",
        "instruction": "Skriv riktig navn.",
        "hint": "Se på navnet ved «jeg».",
        "explanation": "Navnet er Anna.",
        "prompt": "Jeg: Anna · Du: Mali. Jeg heter Mali.",
        "before": "Jeg heter",
        "after": ".",
        "accepted": [
          "Anna"
        ],
        "model": "Jeg heter Anna."
      },
      {
        "id": "ch_u2l3",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_u2_present_du",
        "title": "Presenter deg",
        "instruction": "Fullfør presentasjonen.",
        "hint": "Bruk navnet etter «du».",
        "explanation": "Setningen er «Jeg heter Mali».",
        "prompt": "Du: Mali",
        "before": "Jeg heter",
        "after": ".",
        "accepted": [
          "Mali"
        ],
        "model": "Jeg heter Mali."
      }
    ]
  },
  {
    "id": "ch_a03",
    "baseUnitId": "a03",
    "number": "03",
    "title": "To nye ting",
    "stage": "a0",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan finne ting og rette etiketter.",
    "words": [
      "en sekk",
      "en telefon"
    ],
    "lessons": [
      {
        "id": "ch_a03l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_a03_combine",
        "title": "Les og velg",
        "instruction": "Velg bildene som passer.",
        "hint": "Se på begge ordene.",
        "explanation": "Begge bildene passer til ordene.",
        "prompt": "en sekk · en telefon",
        "options": [
          {
            "id": "a",
            "label": "sekk og telefon",
            "images": [
              "bag",
              "phone"
            ]
          },
          {
            "id": "b",
            "label": "sekk og bok",
            "images": [
              "bag",
              "book"
            ]
          },
          {
            "id": "c",
            "label": "telefon og penn",
            "images": [
              "phone",
              "pen"
            ]
          }
        ],
        "correct": "a",
        "optionsImageOnly": true
      },
      {
        "id": "ch_a03l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_a03_repair",
        "title": "Rett etiketten",
        "instruction": "Skriv riktig etikett.",
        "hint": "Se på bildet. Endre ordet som er feil.",
        "explanation": "En riktig etikett er «en sekk».",
        "image": "bag",
        "prompt": "Etikett: en telefon",
        "before": "",
        "after": "",
        "accepted": [
          "en sekk",
          "sekk"
        ],
        "model": "en sekk",
        "responseLength": "sentence",
        "variants": [
          {
            "targetKey": "ch_a03_repair_bag",
            "image": "bag",
            "prompt": "Etikett: en telefon",
            "accepted": [
              "en sekk",
              "sekk"
            ],
            "model": "en sekk",
            "hint": "Se på bildet.",
            "explanation": "En riktig etikett er «en sekk»."
          },
          {
            "targetKey": "ch_a03_repair_phone",
            "image": "phone",
            "prompt": "Etikett: en sekk",
            "accepted": [
              "en telefon",
              "telefon"
            ],
            "model": "en telefon",
            "hint": "Se på bildet.",
            "explanation": "En riktig etikett er «en telefon»."
          }
        ]
      },
      {
        "id": "ch_a03l3",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_a03_complete",
        "title": "Fullfør",
        "instruction": "Fullfør utstyrslista.",
        "hint": "Se på bildene og ordet som allerede står.",
        "explanation": "Et mulig svar er «en telefon».",
        "images": [
          "bag",
          "phone"
        ],
        "prompt": "Utstyr: en sekk ·",
        "before": "",
        "after": "",
        "accepted": [
          "en telefon",
          "telefon"
        ],
        "model": "en telefon",
        "responseLength": "sentence"
      }
    ]
  },
  {
    "id": "ch_a04",
    "baseUnitId": "a04",
    "number": "04",
    "title": "Her er",
    "stage": "a0",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan vise fram flere ting med ord.",
    "words": [
      "her er"
    ],
    "lessons": [
      {
        "id": "ch_a04l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_a04_combine",
        "title": "Les og velg",
        "instruction": "Velg bildene som passer.",
        "hint": "Se på begge ordene.",
        "explanation": "Begge bildene passer til ordene.",
        "prompt": "Her er en bok. Her er en penn.",
        "options": [
          {
            "id": "a",
            "label": "bok og penn",
            "images": [
              "book",
              "pen"
            ]
          },
          {
            "id": "b",
            "label": "bok og sekk",
            "images": [
              "book",
              "bag"
            ]
          },
          {
            "id": "c",
            "label": "penn og telefon",
            "images": [
              "pen",
              "phone"
            ]
          }
        ],
        "correct": "a",
        "optionsImageOnly": true
      },
      {
        "id": "ch_a04l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_a04_repair",
        "title": "Rett etiketten",
        "instruction": "Skriv riktig etikett.",
        "hint": "Se på bildet. Endre ordet som er feil.",
        "explanation": "En riktig etikett er «en telefon».",
        "image": "phone",
        "prompt": "Etikett: Her er en bok.",
        "before": "",
        "after": "",
        "accepted": [
          "en telefon",
          "telefon",
          "Her er en telefon"
        ],
        "model": "en telefon",
        "responseLength": "sentence"
      },
      {
        "id": "ch_a04l3",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_a04_complete",
        "title": "Fullfør",
        "instruction": "Fullfør setningen.",
        "hint": "Se på bildene og ordet som allerede står.",
        "explanation": "Et mulig svar er «bok».",
        "images": [
          "bag",
          "book"
        ],
        "prompt": "Her er en sekk. Her er en …",
        "before": "Her er en",
        "after": ".",
        "accepted": [
          "bok"
        ],
        "model": "bok",
        "responseLength": "sentence"
      }
    ]
  },
  {
    "id": "ch_a05",
    "baseUnitId": "a05",
    "number": "05",
    "title": "Jeg har",
    "stage": "a0",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan fortelle hva noen har.",
    "words": [
      "jeg har"
    ],
    "lessons": [
      {
        "id": "ch_a05l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_a05_combine",
        "title": "Les og velg",
        "instruction": "Velg bildene som passer.",
        "hint": "Se på begge ordene.",
        "explanation": "Begge bildene passer til ordene.",
        "prompt": "Jeg har en bok. Jeg har en penn.",
        "options": [
          {
            "id": "a",
            "label": "bok og penn",
            "images": [
              "book",
              "pen"
            ]
          },
          {
            "id": "b",
            "label": "bok og sekk",
            "images": [
              "book",
              "bag"
            ]
          },
          {
            "id": "c",
            "label": "penn og telefon",
            "images": [
              "pen",
              "phone"
            ]
          }
        ],
        "correct": "a",
        "optionsImageOnly": true
      },
      {
        "id": "ch_a05l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_a05_repair",
        "title": "Rett etiketten",
        "instruction": "Fullfør riktig setning.",
        "hint": "Se på bildet. Endre ordet som er feil.",
        "explanation": "En riktig etikett er «en penn».",
        "image": "hold-pen",
        "prompt": "Etikett: Jeg har en bok.",
        "before": "Jeg har",
        "after": ".",
        "accepted": [
          "en penn"
        ],
        "model": "en penn",
        "responseLength": "sentence"
      },
      {
        "id": "ch_a05l3",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_a05_complete",
        "title": "Fullfør",
        "instruction": "Fullfør setningen.",
        "hint": "Se på bildene og ordet som allerede står.",
        "explanation": "Et mulig svar er «penn».",
        "images": [
          "book",
          "pen"
        ],
        "prompt": "Jeg har en bok. Jeg har en …",
        "before": "Jeg har en",
        "after": ".",
        "accepted": [
          "penn"
        ],
        "model": "penn",
        "responseLength": "sentence"
      }
    ]
  },
  {
    "id": "ch_a06",
    "baseUnitId": "a06",
    "number": "06",
    "title": "Tall 1–3",
    "stage": "a0",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan knytte tall til riktige ting.",
    "words": [
      "én",
      "to",
      "tre"
    ],
    "lessons": [
      {
        "id": "ch_a06l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_a06_combine_count",
        "title": "Antall og ting",
        "instruction": "Velg bildene som passer.",
        "hint": "Se både på tallet og tingen.",
        "explanation": "Bildene viser to bøker og én penn.",
        "prompt": "bok: to · penn: én",
        "options": [
          {
            "id": "a",
            "label": "to bøker og én penn",
            "images": [
              "books2",
              "pen"
            ]
          },
          {
            "id": "b",
            "label": "tre bøker og én penn",
            "images": [
              "books3",
              "pen"
            ]
          },
          {
            "id": "c",
            "label": "to bøker og én sekk",
            "images": [
              "books2",
              "bag"
            ]
          }
        ],
        "correct": "a",
        "optionsImageOnly": true
      },
      {
        "id": "ch_a06l2",
        "type": "input",
        "skill": "recall",
        "targetKey": "ch_a06_repair_count",
        "title": "Rett tallet",
        "instruction": "Skriv riktig tallord.",
        "hint": "Tell bøkene på bildet.",
        "explanation": "Tallordet er «tre».",
        "image": "books3",
        "prompt": "Etikett: bok: to",
        "before": "",
        "after": "",
        "accepted": [
          "tre"
        ],
        "model": "tre"
      },
      {
        "id": "ch_a06l3",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_a06_count_sentence",
        "title": "Tell og skriv",
        "instruction": "Fullfør tallordet for penn.",
        "hint": "Se på pennen.",
        "explanation": "Tallordet er «én».",
        "before": "penn:",
        "after": "",
        "accepted": [
          "én",
          "en"
        ],
        "model": "én",
        "images": [
          "books2",
          "pen"
        ],
        "prompt": "bok: to · penn: …"
      }
    ]
  },
  {
    "id": "ch_a07",
    "baseUnitId": "a07",
    "number": "07",
    "title": "Tre farger",
    "stage": "a0",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan kombinere farge og ting.",
    "words": [
      "rød",
      "blå",
      "grønn"
    ],
    "lessons": [
      {
        "id": "ch_a07l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_a07_combine",
        "title": "Les og velg",
        "instruction": "Velg bildene som passer.",
        "hint": "Se på begge ordene.",
        "explanation": "Begge bildene passer til ordene.",
        "prompt": "en rød bok · en blå penn",
        "options": [
          {
            "id": "a",
            "label": "rød bok og blå penn",
            "images": [
              "book-red",
              "pen-blue"
            ]
          },
          {
            "id": "b",
            "label": "rød bok og telefon",
            "images": [
              "book-red",
              "phone"
            ]
          },
          {
            "id": "c",
            "label": "blå bok og blå penn",
            "images": [
              "book-blue",
              "pen-blue"
            ]
          }
        ],
        "correct": "a",
        "optionsImageOnly": true
      },
      {
        "id": "ch_a07l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_a07_repair",
        "title": "Rett etiketten",
        "instruction": "Skriv riktig etikett.",
        "hint": "Se på bildet. Endre ordet som er feil.",
        "explanation": "En riktig etikett er «en grønn bok».",
        "image": "book-green",
        "prompt": "Etikett: en rød bok",
        "before": "",
        "after": "",
        "accepted": [
          "en grønn bok",
          "grønn bok"
        ],
        "model": "en grønn bok",
        "responseLength": "sentence"
      },
      {
        "id": "ch_a07l3",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_a07_colour_label",
        "title": "Skriv etikett",
        "instruction": "Skriv en etikett til boka.",
        "hint": "Skriv farge og ting.",
        "explanation": "En riktig etikett er «en blå bok».",
        "image": "book-blue",
        "before": "",
        "after": "",
        "accepted": [
          "en blå bok",
          "blå bok"
        ],
        "model": "en blå bok",
        "responseLength": "sentence"
      }
    ]
  },
  {
    "id": "ch_a08",
    "baseUnitId": "a08",
    "number": "08",
    "title": "Stor og liten",
    "stage": "a0",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan sammenligne størrelse og beskrive ting.",
    "words": [
      "stor",
      "liten"
    ],
    "lessons": [
      {
        "id": "ch_a08l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_a08_combine",
        "title": "Les og velg",
        "instruction": "Velg bildene som passer.",
        "hint": "Se på begge ordene.",
        "explanation": "Begge bildene passer til ordene.",
        "prompt": "en stor bok · en penn",
        "options": [
          {
            "id": "a",
            "label": "stor bok og penn",
            "images": [
              "big-book",
              "pen"
            ]
          },
          {
            "id": "b",
            "label": "liten bok og penn",
            "images": [
              "small-book",
              "pen"
            ]
          },
          {
            "id": "c",
            "label": "stor bok og sekk",
            "images": [
              "big-book",
              "bag"
            ]
          }
        ],
        "correct": "a",
        "optionsImageOnly": true
      },
      {
        "id": "ch_a08l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_a08_repair",
        "title": "Rett etiketten",
        "instruction": "Skriv riktig etikett.",
        "hint": "Se på bildet. Endre ordet som er feil.",
        "explanation": "En riktig etikett er «en liten bok».",
        "image": "small-book",
        "prompt": "Etikett: en stor bok",
        "before": "",
        "after": "",
        "accepted": [
          "en liten bok",
          "liten bok"
        ],
        "model": "en liten bok",
        "responseLength": "sentence"
      },
      {
        "id": "ch_a08l3",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_a08_size_label",
        "title": "Skriv etikett",
        "instruction": "Skriv en etikett til den markerte boka.",
        "hint": "Sammenlign bøkene.",
        "explanation": "En riktig etikett er «en stor bok».",
        "image": "big-book",
        "before": "",
        "after": "",
        "accepted": [
          "en stor bok",
          "stor bok"
        ],
        "model": "en stor bok",
        "responseLength": "sentence"
      }
    ]
  },
  {
    "id": "ch_a09",
    "baseUnitId": "a09",
    "number": "09",
    "title": "Jeg leser og skriver",
    "stage": "a0",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan skrive hva jeg har og gjør.",
    "words": [
      "jeg leser",
      "jeg skriver"
    ],
    "lessons": [
      {
        "id": "ch_a09l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_a09_read_pair",
        "title": "To personer",
        "instruction": "Velg riktig svar.",
        "hint": "Se på begge handlingene.",
        "explanation": "Anna leser og Mali skriver.",
        "prompt": "Anna: Jeg leser. Mali: Jeg skriver.",
        "options": [
          {
            "id": "a",
            "label": "Anna leser · Mali skriver"
          },
          {
            "id": "b",
            "label": "Anna leser · Mali leser"
          },
          {
            "id": "c",
            "label": "Anna skriver · Mali skriver"
          }
        ],
        "correct": "a"
      },
      {
        "id": "ch_a09l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_a09_repair_action",
        "title": "Rett beskjeden",
        "instruction": "Fullfør riktig setning.",
        "hint": "Se på handlingen i bildet.",
        "explanation": "Setningen er «Jeg skriver».",
        "image": "write",
        "prompt": "Jeg leser.",
        "before": "Jeg",
        "after": ".",
        "accepted": [
          "skriver"
        ],
        "model": "Jeg skriver."
      },
      {
        "id": "ch_a09l3",
        "type": "write",
        "skill": "writing",
        "targetKey": "ch_a09_two_sentences",
        "title": "Skriv en beskjed",
        "instruction": "Skriv hva du har og hva du gjør. Skriv to setninger.",
        "images": [
          "hold-book",
          "read"
        ],
        "model": "Jeg har en bok. Jeg leser.",
        "example": "Jeg har en bok. Jeg leser.",
        "placeholder": "Skriv her …",
        "hint": "Bruk setningene og ordene du kjenner.",
        "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
        "checks": [
          "Jeg skrev to setninger.",
          "Jeg skrev hva jeg har.",
          "Jeg skrev hva jeg gjør."
        ],
        "minWords": 1
      }
    ]
  },
  {
    "id": "ch_a10",
    "baseUnitId": "a10",
    "number": "10",
    "title": "Dette kan jeg",
    "stage": "a0",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan kombinere kjente ord i en beskjed.",
    "words": [
      "en sekk",
      "jeg har en bok",
      "to",
      "jeg leser"
    ],
    "lessons": [
      {
        "id": "ch_a10l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_a10_combine",
        "title": "Les og velg",
        "instruction": "Velg bildene som passer.",
        "hint": "Se på begge ordene.",
        "explanation": "Begge bildene passer til ordene.",
        "prompt": "en grønn bok · en telefon",
        "options": [
          {
            "id": "a",
            "label": "grønn bok og telefon",
            "images": [
              "book-green",
              "phone"
            ]
          },
          {
            "id": "b",
            "label": "blå bok og telefon",
            "images": [
              "book-blue",
              "phone"
            ]
          },
          {
            "id": "c",
            "label": "grønn bok og sekk",
            "images": [
              "book-green",
              "bag"
            ]
          }
        ],
        "correct": "a",
        "optionsImageOnly": true
      },
      {
        "id": "ch_a10l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_a10_repair_action",
        "title": "Rett beskjeden",
        "instruction": "Fullfør riktig setning.",
        "hint": "Se på bildet.",
        "explanation": "Setningen er «Jeg leser».",
        "image": "read",
        "prompt": "Jeg skriver.",
        "before": "Jeg",
        "after": ".",
        "accepted": [
          "leser"
        ],
        "model": "Jeg leser."
      },
      {
        "id": "ch_a10l3",
        "type": "write",
        "skill": "writing",
        "targetKey": "ch_a10_two_sentences",
        "title": "Skriv en beskjed",
        "instruction": "Skriv hva du har og hva du gjør. Skriv to setninger.",
        "images": [
          "hold-pen",
          "write"
        ],
        "model": "Jeg har en penn. Jeg skriver.",
        "example": "Jeg har en penn. Jeg skriver.",
        "placeholder": "Skriv her …",
        "hint": "Bruk setningene og ordene du kjenner.",
        "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
        "checks": [
          "Jeg skrev to setninger.",
          "Jeg skrev hva jeg har.",
          "Jeg skrev hva jeg gjør."
        ],
        "minWords": 1
      }
    ]
  },
  {
    "id": "ch_u3",
    "baseUnitId": "u3",
    "number": "11",
    "title": "På skolen",
    "stage": "bridge",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan kombinere opplysninger om skolesaker og handlinger.",
    "words": [
      "jeg har",
      "jeg leser",
      "jeg skriver",
      "en skole",
      "på skolen"
    ],
    "lessons": [
      {
        "id": "ch_u3l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_u3_details",
        "title": "Les og kombiner",
        "instruction": "Hvem har en penn og skriver?",
        "hint": "Les hele teksten. Se etter begge opplysningene.",
        "explanation": "Mali har en penn og skriver.",
        "prompt": "Anna: Jeg har en penn. Jeg leser. Mali: Jeg har en penn. Jeg skriver. Nina: Jeg har en bok. Jeg skriver.",
        "options": [
          {
            "id": "a",
            "label": "Mali"
          },
          {
            "id": "b",
            "label": "Anna"
          },
          {
            "id": "c",
            "label": "Nina"
          }
        ],
        "correct": "a"
      },
      {
        "id": "ch_u3l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_u3_repair",
        "title": "Rett opplysningen",
        "instruction": "Fullfør riktig opplysning.",
        "hint": "Se på teksten en gang til.",
        "explanation": "Nina har en bok.",
        "prompt": "Anna: Jeg har en penn. Jeg leser. Mali: Jeg har en penn. Jeg skriver. Nina: Jeg har en bok. Jeg skriver. Setning som skal rettes: Nina har en penn.",
        "before": "Nina har en",
        "after": ".",
        "accepted": [
          "bok"
        ],
        "model": "Nina har en bok."
      },
      {
        "id": "ch_u3l3",
        "type": "write",
        "skill": "writing",
        "targetKey": "ch_u3_write",
        "title": "Skriv en beskjed",
        "instruction": "Skriv til læreren. Fortell hva du har og hva du gjør på skolen.",
        "hint": "Bruk ordene og setningene du kjenner.",
        "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
        "model": "Jeg har en bok. Jeg leser på skolen.",
        "example": "Jeg har en bok. Jeg leser på skolen.",
        "placeholder": "Skriv her …",
        "checks": [
          "Jeg skrev hva jeg har.",
          "Jeg skrev hva jeg gjør."
        ],
        "minWords": 1
      }
    ]
  },
  {
    "id": "ch_u4",
    "baseUnitId": "u4",
    "number": "12",
    "title": "Hvor er boka?",
    "stage": "bridge",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan beskrive to plasseringer.",
    "words": [
      "boka",
      "en sekk",
      "på",
      "i",
      "under"
    ],
    "lessons": [
      {
        "id": "ch_u4l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_u4_details",
        "title": "Les og kombiner",
        "instruction": "Hvor er boka, og hvor er pennen?",
        "hint": "Les hele teksten. Se etter begge opplysningene.",
        "explanation": "Svaret er «Boka er på bordet. Pennen er i sekken.».",
        "prompt": "Boka er på bordet. Pennen er i sekken. Jeg har en bok.",
        "options": [
          {
            "id": "a",
            "label": "Boka er på bordet. Pennen er i sekken."
          },
          {
            "id": "b",
            "label": "Boka er under bordet. Pennen er i sekken."
          },
          {
            "id": "c",
            "label": "Boka er på bordet. Pennen er på bordet."
          }
        ],
        "correct": "a"
      },
      {
        "id": "ch_u4l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_u4_repair",
        "title": "Rett opplysningen",
        "instruction": "Fullfør riktig opplysning.",
        "hint": "Se på teksten og bildet en gang til.",
        "explanation": "Riktig opplysning er «Boka er på bordet.».",
        "prompt": "Boka er på bordet. Pennen er i sekken. Jeg har en bok. Setning som skal rettes: Boka er under bordet.",
        "image": "book-on-table",
        "before": "Boka er",
        "after": "bordet.",
        "accepted": [
          "på"
        ],
        "model": "Boka er på bordet."
      },
      {
        "id": "ch_u4l3",
        "type": "write",
        "skill": "writing",
        "targetKey": "ch_u4_two_sentences",
        "title": "Skriv en beskjed",
        "instruction": "Skriv en kort beskjed. Skriv én setning om bilde 1 og én setning om bilde 2.",
        "images": [
          "book-on-table",
          "book-in-bag"
        ],
        "model": "Boka er på bordet. Boka er i sekken.",
        "example": "Boka er på bordet. Boka er i sekken.",
        "placeholder": "Skriv her …",
        "hint": "Bruk setningene og ordene du kjenner.",
        "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
        "checks": [
          "Jeg skrev to setninger.",
          "Jeg skrev hvor boka er på bilde 1.",
          "Jeg skrev hvor boka er på bilde 2."
        ],
        "minWords": 1
      }
    ]
  },
  {
    "id": "ch_u5",
    "baseUnitId": "u5",
    "number": "13",
    "title": "Min dag",
    "stage": "a1",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan knytte aktiviteter til klokkeslett.",
    "words": [
      "jeg går på skolen",
      "jeg spiser",
      "klokka åtte",
      "klokka tolv",
      "klokka seks"
    ],
    "lessons": [
      {
        "id": "ch_u5l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_u5_details",
        "title": "Les og kombiner",
        "instruction": "Hva gjør Anna klokka åtte og klokka tolv?",
        "hint": "Les hele teksten. Se etter begge opplysningene.",
        "explanation": "Svaret er «Hun går på skolen og spiser.».",
        "prompt": "Anna går på skolen klokka åtte. Anna spiser klokka tolv. Anna leser klokka seks.",
        "options": [
          {
            "id": "a",
            "label": "Anna går på skolen og spiser."
          },
          {
            "id": "b",
            "label": "Anna leser og spiser."
          },
          {
            "id": "c",
            "label": "Anna går på skolen og leser."
          }
        ],
        "correct": "a"
      },
      {
        "id": "ch_u5l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_u5_repair",
        "title": "Rett opplysningen",
        "instruction": "Fullfør riktig opplysning.",
        "hint": "Se på teksten en gang til.",
        "explanation": "Riktig opplysning er «Anna spiser klokka tolv.».",
        "prompt": "Anna går på skolen klokka åtte. Anna spiser klokka tolv. Anna leser klokka seks. Setning som skal rettes: Anna spiser klokka åtte.",
        "before": "Anna spiser klokka",
        "after": ".",
        "accepted": [
          "tolv",
          "12",
          "12.00"
        ],
        "model": "Anna spiser klokka tolv."
      },
      {
        "id": "ch_u5l3",
        "type": "write",
        "skill": "writing",
        "targetKey": "ch_u5_write",
        "title": "Skriv en beskjed",
        "instruction": "Skriv til en venn om dagen din. Skriv to eller tre korte setninger med klokkeslett.",
        "hint": "Bruk ordene og setningene du kjenner.",
        "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
        "model": "Jeg går på skolen klokka åtte. Jeg leser klokka seks.",
        "example": "Jeg går på skolen klokka åtte. Jeg leser klokka seks.",
        "placeholder": "Skriv her …",
        "checks": [
          "Jeg skrev to eller tre setninger.",
          "Jeg skrev minst ett klokkeslett."
        ],
        "minWords": 1
      }
    ]
  },
  {
    "id": "ch_u6",
    "baseUnitId": "u6",
    "number": "14",
    "title": "Planer",
    "stage": "a1",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan holde orden på flere planer.",
    "words": [
      "jeg skal",
      "lese",
      "skrive",
      "i morgen",
      "mandag",
      "tirsdag"
    ],
    "lessons": [
      {
        "id": "ch_u6l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_u6_details",
        "title": "Les og kombiner",
        "instruction": "Hvem skal lese på tirsdag?",
        "hint": "Les hele teksten. Se etter begge opplysningene.",
        "explanation": "Svaret er «Mali».",
        "prompt": "Anna skal lese på mandag. Anna skal skrive på tirsdag. Mali skal lese på tirsdag.",
        "options": [
          {
            "id": "a",
            "label": "Mali"
          },
          {
            "id": "b",
            "label": "Anna"
          },
          {
            "id": "c",
            "label": "Anna og Mali"
          }
        ],
        "correct": "a",
        "variants": [
          {
            "targetKey": "ch_u6_details_tuesday",
            "prompt": "Anna skal lese på mandag. Anna skal skrive på tirsdag. Mali skal lese på tirsdag.",
            "instruction": "Hvem skal lese på tirsdag?",
            "options": [
              {
                "id": "a",
                "label": "Mali"
              },
              {
                "id": "b",
                "label": "Anna"
              },
              {
                "id": "c",
                "label": "Anna og Mali"
              }
            ],
            "correct": "a",
            "hint": "Finn lese og tirsdag.",
            "explanation": "Mali skal lese på tirsdag."
          },
          {
            "targetKey": "ch_u6_details_monday",
            "prompt": "Anna skal lese på tirsdag. Anna skal skrive på mandag. Mali skal lese på mandag.",
            "instruction": "Hvem skal lese på mandag?",
            "options": [
              {
                "id": "a",
                "label": "Mali"
              },
              {
                "id": "b",
                "label": "Anna"
              },
              {
                "id": "c",
                "label": "Anna og Mali"
              }
            ],
            "correct": "a",
            "hint": "Finn lese og mandag.",
            "explanation": "Mali skal lese på mandag."
          }
        ]
      },
      {
        "id": "ch_u6l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_u6_repair",
        "title": "Rett opplysningen",
        "instruction": "Fullfør riktig opplysning.",
        "hint": "Se på teksten en gang til.",
        "explanation": "Riktig opplysning er «Anna skal skrive på tirsdag.».",
        "prompt": "Anna skal lese på mandag. Anna skal skrive på tirsdag. Mali skal lese på tirsdag. Setning som skal rettes: Anna skal skrive på mandag.",
        "before": "Anna skal skrive på",
        "after": ".",
        "accepted": [
          "tirsdag"
        ],
        "model": "Anna skal skrive på tirsdag."
      },
      {
        "id": "ch_u6l3",
        "type": "write",
        "skill": "writing",
        "targetKey": "ch_u6_write",
        "title": "Skriv en beskjed",
        "instruction": "Skriv til en venn om planene dine. Skriv to eller tre setninger.",
        "hint": "Bruk ordene og setningene du kjenner.",
        "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
        "model": "Jeg skal lese på mandag. Jeg skal skrive på tirsdag.",
        "example": "Jeg skal lese på mandag. Jeg skal skrive på tirsdag.",
        "placeholder": "Skriv her …",
        "checks": [
          "Jeg skrev to eller tre setninger.",
          "Jeg skrev hva jeg skal gjøre og når."
        ],
        "minWords": 1
      }
    ]
  },
  {
    "id": "ch_u7",
    "baseUnitId": "u7",
    "number": "15",
    "title": "Korte beskjeder",
    "stage": "a1",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan finne detaljer og svare på en beskjed.",
    "words": [
      "hvem",
      "hva",
      "når"
    ],
    "lessons": [
      {
        "id": "ch_u7l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_u7_details",
        "title": "Les og kombiner",
        "instruction": "Når skal Mali lese på skolen?",
        "hint": "Les hele teksten. Se etter begge opplysningene.",
        "explanation": "Svaret er «mandag klokka åtte».",
        "prompt": "Hei! Jeg heter Mali. Jeg skal lese på skolen på mandag klokka åtte. Jeg skal skrive på tirsdag klokka tolv.",
        "options": [
          {
            "id": "a",
            "label": "mandag klokka åtte"
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
        "id": "ch_u7l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_u7_repair",
        "title": "Rett opplysningen",
        "instruction": "Fullfør riktig opplysning.",
        "hint": "Se på teksten en gang til.",
        "explanation": "Riktig opplysning er «Mali skal skrive på tirsdag.».",
        "prompt": "Hei! Jeg heter Mali. Jeg skal lese på skolen på mandag klokka åtte. Jeg skal skrive på tirsdag klokka tolv. Setning som skal rettes: Mali skal skrive på mandag.",
        "before": "Mali skal skrive på",
        "after": ".",
        "accepted": [
          "tirsdag"
        ],
        "model": "Mali skal skrive på tirsdag."
      },
      {
        "id": "ch_u7l3",
        "type": "write",
        "skill": "writing",
        "targetKey": "ch_u7_write",
        "title": "Skriv en beskjed",
        "instruction": "Skriv en kort beskjed til læreren. Skriv hvem du er, hva du skal gjøre og når.",
        "hint": "Bruk ordene og setningene du kjenner.",
        "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
        "model": "Hei! Jeg heter Mali. Jeg skal lese på mandag. Jeg skal skrive på tirsdag.",
        "example": "Hei! Jeg heter Mali. Jeg skal lese på mandag. Jeg skal skrive på tirsdag.",
        "placeholder": "Skriv her …",
        "checks": [
          "Jeg skrev to til fire setninger.",
          "Jeg skrev navn, hva og når."
        ],
        "minWords": 1
      }
    ]
  },
  {
    "id": "ch_u8",
    "baseUnitId": "u8",
    "number": "16",
    "title": "Skriv selv",
    "stage": "a1",
    "level": "Mer utfordring",
    "intro": "Bruk ord og setninger du kjenner i nye oppgaver.",
    "goal": "Jeg kan bruke flere opplysninger i en egen beskjed.",
    "words": [
      "hei",
      "jeg heter",
      "jeg har",
      "jeg leser",
      "jeg skal",
      "i morgen"
    ],
    "lessons": [
      {
        "id": "ch_u8l1",
        "type": "choice",
        "skill": "reading",
        "targetKey": "ch_u8_details",
        "title": "Les og kombiner",
        "instruction": "Hvilken plan passer med teksten?",
        "hint": "Les hele teksten. Se etter begge opplysningene.",
        "explanation": "Svaret er «Anna skal lese på tirsdag og skrive på mandag.».",
        "prompt": "Hei! Jeg heter Anna. Jeg har en bok. Jeg skal lese på skolen på tirsdag. Jeg skal skrive på mandag.",
        "options": [
          {
            "id": "a",
            "label": "Anna skal lese på tirsdag og skrive på mandag."
          },
          {
            "id": "b",
            "label": "Anna skal lese på mandag og skrive på mandag."
          },
          {
            "id": "c",
            "label": "Anna skal lese på tirsdag og skrive på tirsdag."
          }
        ],
        "correct": "a"
      },
      {
        "id": "ch_u8l2",
        "type": "input",
        "skill": "construction",
        "targetKey": "ch_u8_repair",
        "title": "Rett opplysningen",
        "instruction": "Fullfør riktig opplysning.",
        "hint": "Se på teksten en gang til.",
        "explanation": "Riktig opplysning er «Anna skal lese på tirsdag.».",
        "prompt": "Hei! Jeg heter Anna. Jeg har en bok. Jeg skal lese på skolen på tirsdag. Jeg skal skrive på mandag. Setning som skal rettes: Anna skal lese på mandag.",
        "before": "Anna skal lese på",
        "after": ".",
        "accepted": [
          "tirsdag"
        ],
        "model": "Anna skal lese på tirsdag."
      },
      {
        "id": "ch_u8l3",
        "type": "write",
        "skill": "writing",
        "targetKey": "ch_u8_write",
        "title": "Skriv en beskjed",
        "instruction": "Skriv en kort beskjed til en venn. Fortell hvem du er, hva du har og en plan.",
        "hint": "Bruk ordene og setningene du kjenner.",
        "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
        "model": "Hei! Jeg heter Anna. Jeg har en bok. Jeg skal lese i morgen.",
        "example": "Hei! Jeg heter Anna. Jeg har en bok. Jeg skal lese i morgen.",
        "placeholder": "Skriv her …",
        "checks": [
          "Jeg skrev to til fire setninger.",
          "Jeg skrev hvem jeg er, hva jeg har og en plan."
        ],
        "minWords": 1
      }
    ]
  }
];
