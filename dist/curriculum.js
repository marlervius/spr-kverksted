const UNITS = [
  {
    "id": "u1",
    "number": "01",
    "title": "Ord rundt meg",
    "level": "A0 – start",
    "stage": "a0",
    "intro": "Se og les ord for ting rundt deg.",
    "goal": "Jeg kan kjenne igjen fire ord.",
    "words": [
      "en bok",
      "en penn",
      "et bord",
      "en stol"
    ],
    "lessons": [
      {
        "id": "u1l1",
        "type": "learn",
        "skill": "exposure",
        "targetKey": "intro_u1",
        "title": "Se og les",
        "instruction": "Les ordene.",
        "model": "en bok · en penn · et bord · en stol",
        "hint": "Se på bildene og les.",
        "explanation": "Du har sett på ordene.",
        "items": [
          {
            "word": "en bok",
            "image": "book",
            "uk": "книга",
            "th": "หนังสือ"
          },
          {
            "word": "en penn",
            "image": "pen",
            "uk": "ручка",
            "th": "ปากกา"
          },
          {
            "word": "et bord",
            "image": "table",
            "uk": "стіл",
            "th": "โต๊ะ"
          },
          {
            "word": "en stol",
            "image": "chair",
            "uk": "стілець",
            "th": "เก้าอี้"
          }
        ]
      },
      {
        "id": "u1l2",
        "type": "choice",
        "skill": "recognition",
        "targetKey": "book",
        "title": "Finn bildet",
        "instruction": "Velg bildet.",
        "prompt": "en bok",
        "hint": "Les ordene og se på bildene.",
        "optionsImageOnly": true,
        "options": [
          {
            "id": "a",
            "label": "en bok",
            "image": "book"
          },
          {
            "id": "b",
            "label": "en penn",
            "image": "pen"
          }
        ],
        "correct": "a",
        "explanation": "Bildet passer til «en bok»."
      },
      {
        "id": "u1l3",
        "type": "input",
        "skill": "recall",
        "targetKey": "book",
        "title": "Hent fram ordet",
        "instruction": "Skriv ordet.",
        "before": "",
        "after": "",
        "image": "book",
        "model": "bok",
        "hint": "Se på bildet. Hent fram ordet.",
        "accepted": [
          "bok",
          "en bok"
        ],
        "explanation": "Ordet er «bok».",
        "variants": [
          {
            "targetKey": "book",
            "image": "book",
            "model": "bok",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "bok",
              "en bok"
            ],
            "explanation": "Ordet er «bok»."
          },
          {
            "targetKey": "pen",
            "image": "pen",
            "model": "penn",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "penn",
              "en penn"
            ],
            "explanation": "Ordet er «penn»."
          },
          {
            "targetKey": "chair",
            "image": "chair",
            "model": "stol",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "stol",
              "en stol"
            ],
            "explanation": "Ordet er «stol»."
          }
        ]
      },
      {
        "id": "u1l4",
        "type": "build",
        "skill": "construction",
        "targetKey": "article_book",
        "title": "Sett sammen",
        "instruction": "Sett sammen.",
        "sentence": false,
        "tokens": [
          "bok",
          "en"
        ],
        "answer": [
          "en",
          "bok"
        ],
        "model": "en bok",
        "hint": "Start med «en».",
        "explanation": "Det blir en bok",
        "variants": [
          {
            "targetKey": "article_book",
            "tokens": [
              "bok",
              "en"
            ],
            "answer": [
              "en",
              "bok"
            ],
            "model": "en bok",
            "hint": "Start med «en».",
            "explanation": "Det blir en bok"
          },
          {
            "targetKey": "article_pen",
            "tokens": [
              "penn",
              "en"
            ],
            "answer": [
              "en",
              "penn"
            ],
            "model": "en penn",
            "hint": "Start med «en».",
            "explanation": "Det blir en penn"
          }
        ]
      },
      {
        "id": "u1l5",
        "type": "choice",
        "skill": "reading",
        "targetKey": "context_u1",
        "title": "Les og velg",
        "instruction": "Hva er med?",
        "prompt": "Utstyr: en bok. En penn.",
        "hint": "Les den korte teksten en gang til.",
        "options": [
          {
            "id": "a",
            "label": "en bok"
          },
          {
            "id": "b",
            "label": "en sekk"
          }
        ],
        "correct": "a",
        "explanation": "Riktig svar er «en bok»."
      },
      {
        "id": "u1l6",
        "type": "choice",
        "skill": "reading",
        "targetKey": "use_u1",
        "title": "Bruk språket",
        "instruction": "Velg det som passer.",
        "prompt": "Du trenger en penn. Velg utstyr.",
        "hint": "Tenk på hva du trenger eller vil si.",
        "options": [
          {
            "id": "a",
            "label": "en penn"
          },
          {
            "id": "b",
            "label": "en stol"
          }
        ],
        "correct": "a",
        "explanation": "«en penn» passer."
      }
    ]
  },
  {
    "id": "u2",
    "number": "02",
    "title": "Jeg og du",
    "level": "A0 – start",
    "stage": "a0",
    "intro": "Si hei og fortell hva du heter.",
    "goal": "Jeg kan si hei og skrive navnet mitt.",
    "words": [
      "hei",
      "navn",
      "jeg",
      "du",
      "jeg heter"
    ],
    "lessons": [
      {
        "id": "u2l1",
        "type": "learn",
        "skill": "exposure",
        "targetKey": "intro_u2",
        "title": "Se og les",
        "instruction": "Les ordene.",
        "model": "jeg · du · jeg heter · hei",
        "hint": "Se på bildene og les.",
        "explanation": "Du har sett på ordene.",
        "items": [
          {
            "word": "jeg",
            "image": "self",
            "uk": "я",
            "th": "ฉัน"
          },
          {
            "word": "du",
            "image": "you",
            "uk": "ти / ви",
            "th": "คุณ"
          },
          {
            "word": "jeg heter",
            "image": "person",
            "uk": "мене звати",
            "th": "ฉันชื่อ"
          },
          {
            "word": "hei",
            "image": "pair",
            "uk": "привіт",
            "th": "สวัสดี"
          }
        ]
      },
      {
        "id": "u2l2",
        "type": "choice",
        "skill": "recognition",
        "targetKey": "jeg",
        "title": "Finn bildet",
        "instruction": "Velg bildet.",
        "prompt": "jeg",
        "hint": "Les ordene og se på bildene.",
        "optionsImageOnly": true,
        "options": [
          {
            "id": "a",
            "label": "jeg",
            "image": "self"
          },
          {
            "id": "b",
            "label": "du",
            "image": "you"
          }
        ],
        "correct": "a",
        "explanation": "Bildet passer til «jeg»."
      },
      {
        "id": "u2l3",
        "type": "input",
        "skill": "recall",
        "targetKey": "jeg",
        "title": "Hent fram ordet",
        "instruction": "Skriv ordet.",
        "before": "",
        "after": "",
        "image": "self",
        "model": "jeg",
        "hint": "Se på bildet. Hent fram ordet.",
        "accepted": [
          "jeg"
        ],
        "explanation": "Ordet er «jeg».",
        "variants": [
          {
            "targetKey": "jeg",
            "image": "self",
            "model": "jeg",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "jeg"
            ],
            "explanation": "Ordet er «jeg»."
          },
          {
            "targetKey": "du",
            "image": "you",
            "model": "du",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "du"
            ],
            "explanation": "Ordet er «du»."
          }
        ]
      },
      {
        "id": "u2l4",
        "type": "build",
        "skill": "construction",
        "targetKey": "presentation_mali",
        "title": "Sett sammen",
        "instruction": "Sett sammen.",
        "sentence": true,
        "tokens": [
          "Mali",
          "heter",
          "Jeg"
        ],
        "answer": [
          "Jeg",
          "heter",
          "Mali"
        ],
        "model": "Jeg heter Mali.",
        "hint": "Start med «Jeg».",
        "explanation": "Det blir Jeg heter Mali.",
        "variants": [
          {
            "targetKey": "presentation_mali",
            "tokens": [
              "Mali",
              "heter",
              "Jeg"
            ],
            "answer": [
              "Jeg",
              "heter",
              "Mali"
            ],
            "model": "Jeg heter Mali.",
            "hint": "Start med «Jeg».",
            "explanation": "Det blir Jeg heter Mali."
          },
          {
            "targetKey": "presentation_anna",
            "tokens": [
              "Anna",
              "heter",
              "Jeg"
            ],
            "answer": [
              "Jeg",
              "heter",
              "Anna"
            ],
            "model": "Jeg heter Anna.",
            "hint": "Start med «Jeg».",
            "explanation": "Det blir Jeg heter Anna."
          }
        ]
      },
      {
        "id": "u2l5",
        "type": "choice",
        "skill": "reading",
        "targetKey": "context_u2",
        "title": "Les og velg",
        "instruction": "Hvem heter Mali?",
        "prompt": "Anna: Jeg heter Anna. Mali: Jeg heter Mali.",
        "hint": "Les den korte teksten en gang til.",
        "options": [
          {
            "id": "a",
            "label": "Mali"
          },
          {
            "id": "b",
            "label": "Anna"
          }
        ],
        "correct": "a",
        "explanation": "Riktig svar er «Mali»."
      },
      {
        "id": "u2l6",
        "type": "choice",
        "skill": "reading",
        "targetKey": "use_u2",
        "title": "Bruk språket",
        "instruction": "Velg det som passer.",
        "prompt": "Du heter Mali. Velg presentasjonen.",
        "hint": "Tenk på hva du trenger eller vil si.",
        "options": [
          {
            "id": "a",
            "label": "Jeg heter Mali."
          },
          {
            "id": "b",
            "label": "Jeg heter Anna."
          }
        ],
        "correct": "a",
        "explanation": "«Jeg heter Mali.» passer."
      }
    ]
  },
  {
    "id": "a03",
    "number": "03",
    "title": "To nye ting",
    "level": "A0 – start",
    "stage": "a0",
    "intro": "Se og les ord for flere ting.",
    "goal": "Jeg kan kjenne igjen en sekk og en telefon.",
    "words": [
      "en sekk",
      "en telefon"
    ],
    "lessons": [
      {
        "id": "a03l1",
        "type": "learn",
        "skill": "exposure",
        "targetKey": "intro_a03",
        "title": "Se og les",
        "instruction": "Les ordene.",
        "model": "en sekk · en telefon · en bok",
        "hint": "Se på bildene og les.",
        "explanation": "Du har sett på ordene.",
        "items": [
          {
            "word": "en sekk",
            "image": "bag",
            "uk": "рюкзак",
            "th": "กระเป๋าเป้"
          },
          {
            "word": "en telefon",
            "image": "phone",
            "uk": "телефон",
            "th": "โทรศัพท์"
          },
          {
            "word": "en bok",
            "image": "book",
            "uk": "книга",
            "th": "หนังสือ"
          }
        ]
      },
      {
        "id": "a03l2",
        "type": "choice",
        "skill": "recognition",
        "targetKey": "bag",
        "title": "Finn bildet",
        "instruction": "Velg bildet.",
        "prompt": "en sekk",
        "hint": "Les ordene og se på bildene.",
        "optionsImageOnly": true,
        "options": [
          {
            "id": "a",
            "label": "en sekk",
            "image": "bag"
          },
          {
            "id": "b",
            "label": "en telefon",
            "image": "phone"
          }
        ],
        "correct": "a",
        "explanation": "Bildet passer til «en sekk»."
      },
      {
        "id": "a03l3",
        "type": "input",
        "skill": "recall",
        "targetKey": "bag",
        "title": "Hent fram ordet",
        "instruction": "Skriv ordet.",
        "before": "",
        "after": "",
        "image": "bag",
        "model": "sekk",
        "hint": "Se på bildet. Hent fram ordet.",
        "accepted": [
          "sekk",
          "en sekk"
        ],
        "explanation": "Ordet er «sekk».",
        "variants": [
          {
            "targetKey": "bag",
            "image": "bag",
            "model": "sekk",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "sekk",
              "en sekk"
            ],
            "explanation": "Ordet er «sekk»."
          },
          {
            "targetKey": "phone",
            "image": "phone",
            "model": "telefon",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "telefon",
              "en telefon"
            ],
            "explanation": "Ordet er «telefon»."
          }
        ]
      },
      {
        "id": "a03l4",
        "type": "build",
        "skill": "construction",
        "targetKey": "article_bag",
        "title": "Sett sammen",
        "instruction": "Sett sammen.",
        "sentence": false,
        "tokens": [
          "sekk",
          "en"
        ],
        "answer": [
          "en",
          "sekk"
        ],
        "model": "en sekk",
        "hint": "Start med «en».",
        "explanation": "Det blir en sekk",
        "variants": [
          {
            "targetKey": "article_bag",
            "tokens": [
              "sekk",
              "en"
            ],
            "answer": [
              "en",
              "sekk"
            ],
            "model": "en sekk",
            "hint": "Start med «en».",
            "explanation": "Det blir en sekk"
          },
          {
            "targetKey": "article_phone",
            "tokens": [
              "telefon",
              "en"
            ],
            "answer": [
              "en",
              "telefon"
            ],
            "model": "en telefon",
            "hint": "Start med «en».",
            "explanation": "Det blir en telefon"
          }
        ]
      },
      {
        "id": "a03l5",
        "type": "choice",
        "skill": "reading",
        "targetKey": "context_a03",
        "title": "Les og velg",
        "instruction": "Hva er med?",
        "prompt": "Utstyr: en sekk. En telefon.",
        "hint": "Les den korte teksten en gang til.",
        "options": [
          {
            "id": "a",
            "label": "en telefon"
          },
          {
            "id": "b",
            "label": "en stol"
          }
        ],
        "correct": "a",
        "explanation": "Riktig svar er «en telefon»."
      },
      {
        "id": "a03l6",
        "type": "choice",
        "skill": "reading",
        "targetKey": "use_a03",
        "title": "Utstyr",
        "instruction": "Velg bildet for Mali.",
        "prompt": "Anna: en sekk. Mali: en telefon.",
        "hint": "Se på navnet og ordet etterpå.",
        "options": [
          {
            "id": "a",
            "label": "en telefon",
            "image": "phone"
          },
          {
            "id": "b",
            "label": "en sekk",
            "image": "bag"
          }
        ],
        "correct": "a",
        "explanation": "Mali har en telefon.",
        "optionsImageOnly": true
      }
    ]
  },
  {
    "id": "a04",
    "number": "04",
    "title": "Her er",
    "level": "A0 – start",
    "stage": "a0",
    "intro": "Les og pek på ting.",
    "goal": "Jeg kan bruke «Her er».",
    "words": [
      "her er"
    ],
    "lessons": [
      {
        "id": "a04l1",
        "type": "learn",
        "skill": "exposure",
        "targetKey": "intro_a04",
        "title": "Se og les",
        "instruction": "Les ordene.",
        "model": "Her er en bok. · Her er en penn.",
        "hint": "Se på bildene og les.",
        "explanation": "Du har sett på ordene.",
        "items": [
          {
            "word": "Her er en bok.",
            "image": "book",
            "uk": "Ось книга.",
            "th": "นี่คือหนังสือ"
          },
          {
            "word": "Her er en penn.",
            "image": "pen",
            "uk": "Ось ручка.",
            "th": "นี่คือปากกา"
          }
        ]
      },
      {
        "id": "a04l2",
        "type": "choice",
        "skill": "recognition",
        "targetKey": "book",
        "title": "Finn bildet",
        "instruction": "Velg bildet.",
        "prompt": "Her er en bok.",
        "hint": "Les ordene og se på bildene.",
        "optionsImageOnly": true,
        "options": [
          {
            "id": "a",
            "label": "Her er en bok.",
            "image": "book"
          },
          {
            "id": "b",
            "label": "Her er en penn.",
            "image": "pen"
          }
        ],
        "correct": "a",
        "explanation": "Bildet passer til «Her er en bok.»."
      },
      {
        "id": "a04l3",
        "type": "input",
        "skill": "recall",
        "targetKey": "book",
        "title": "Hent fram ordet",
        "instruction": "Skriv ordet.",
        "before": "Her er en",
        "after": ".",
        "image": "book",
        "model": "bok",
        "hint": "Se på bildet. Hent fram ordet.",
        "accepted": [
          "bok"
        ],
        "explanation": "Ordet er «bok».",
        "variants": [
          {
            "targetKey": "book",
            "image": "book",
            "model": "bok",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "bok"
            ],
            "explanation": "Ordet er «bok»."
          },
          {
            "targetKey": "pen",
            "image": "pen",
            "model": "penn",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "penn"
            ],
            "explanation": "Ordet er «penn»."
          }
        ]
      },
      {
        "id": "a04l4",
        "type": "build",
        "skill": "construction",
        "targetKey": "here_book",
        "title": "Sett sammen",
        "instruction": "Sett sammen.",
        "sentence": true,
        "tokens": [
          "en bok",
          "Her er"
        ],
        "answer": [
          "Her er",
          "en bok"
        ],
        "model": "Her er en bok.",
        "hint": "Start med «Her er».",
        "explanation": "Det blir Her er en bok.",
        "variants": [
          {
            "targetKey": "here_book",
            "tokens": [
              "en bok",
              "Her er"
            ],
            "answer": [
              "Her er",
              "en bok"
            ],
            "model": "Her er en bok.",
            "hint": "Start med «Her er».",
            "explanation": "Det blir Her er en bok."
          },
          {
            "targetKey": "here_pen",
            "tokens": [
              "en penn",
              "Her er"
            ],
            "answer": [
              "Her er",
              "en penn"
            ],
            "model": "Her er en penn.",
            "hint": "Start med «Her er».",
            "explanation": "Det blir Her er en penn."
          }
        ]
      },
      {
        "id": "a04l5",
        "type": "choice",
        "skill": "reading",
        "targetKey": "context_a04",
        "title": "Les og velg",
        "instruction": "Hva er her?",
        "prompt": "Her er en bok. Her er en penn.",
        "hint": "Les den korte teksten en gang til.",
        "options": [
          {
            "id": "a",
            "label": "en penn"
          },
          {
            "id": "b",
            "label": "en telefon"
          }
        ],
        "correct": "a",
        "explanation": "Riktig svar er «en penn»."
      },
      {
        "id": "a04l6",
        "type": "choice",
        "skill": "reading",
        "targetKey": "use_a04",
        "title": "Bruk språket",
        "instruction": "Velg det som passer.",
        "prompt": "Du viser en bok. Velg beskjeden.",
        "hint": "Tenk på hva du trenger eller vil si.",
        "options": [
          {
            "id": "a",
            "label": "Her er en bok."
          },
          {
            "id": "b",
            "label": "Her er en penn."
          }
        ],
        "correct": "a",
        "explanation": "«Her er en bok.» passer."
      }
    ]
  },
  {
    "id": "a05",
    "number": "05",
    "title": "Jeg har",
    "level": "A0 – start",
    "stage": "a0",
    "intro": "Les om det du har.",
    "goal": "Jeg kan bruke «Jeg har».",
    "words": [
      "jeg har"
    ],
    "lessons": [
      {
        "id": "a05l1",
        "type": "learn",
        "skill": "exposure",
        "targetKey": "intro_a05",
        "title": "Se og les",
        "instruction": "Les ordene.",
        "model": "Jeg har en bok. · Jeg har en penn. · Hvem? · Hva har du?",
        "hint": "Se på bildene og les.",
        "explanation": "Du har sett på ordene.",
        "items": [
          {
            "word": "Jeg har en bok.",
            "image": "hold-book",
            "uk": "У мене є книга.",
            "th": "ฉันมีหนังสือ"
          },
          {
            "word": "Jeg har en penn.",
            "image": "hold-pen",
            "uk": "У мене є ручка.",
            "th": "ฉันมีปากกา"
          },
          {
            "word": "Hvem?",
            "image": "person",
            "uk": "Хто?",
            "th": "ใคร?"
          },
          {
            "word": "Hva har du?",
            "image": "pair",
            "uk": "Що в тебе є?",
            "th": "คุณมีอะไร?"
          }
        ]
      },
      {
        "id": "a05l2",
        "type": "choice",
        "skill": "recognition",
        "targetKey": "book",
        "title": "Finn bildet",
        "instruction": "Velg bildet.",
        "prompt": "Jeg har en bok.",
        "hint": "Les ordene og se på bildene.",
        "optionsImageOnly": true,
        "options": [
          {
            "id": "a",
            "label": "Jeg har en bok.",
            "image": "hold-book"
          },
          {
            "id": "b",
            "label": "Jeg har en penn.",
            "image": "hold-pen"
          }
        ],
        "correct": "a",
        "explanation": "Bildet passer til «Jeg har en bok.»."
      },
      {
        "id": "a05l3",
        "type": "input",
        "skill": "recall",
        "targetKey": "book",
        "title": "Hent fram ordet",
        "instruction": "Skriv ordet.",
        "before": "Jeg har en",
        "after": ".",
        "image": "hold-book",
        "model": "bok",
        "hint": "Se på bildet. Hent fram ordet.",
        "accepted": [
          "bok"
        ],
        "explanation": "Ordet er «bok».",
        "variants": [
          {
            "targetKey": "book",
            "image": "hold-book",
            "model": "bok",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "bok"
            ],
            "explanation": "Ordet er «bok»."
          },
          {
            "targetKey": "pen",
            "image": "hold-pen",
            "model": "penn",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "penn"
            ],
            "explanation": "Ordet er «penn»."
          }
        ]
      },
      {
        "id": "a05l4",
        "type": "build",
        "skill": "construction",
        "targetKey": "have_book",
        "title": "Sett sammen",
        "instruction": "Sett sammen.",
        "sentence": true,
        "tokens": [
          "en bok",
          "Jeg har"
        ],
        "answer": [
          "Jeg har",
          "en bok"
        ],
        "model": "Jeg har en bok.",
        "hint": "Start med «Jeg har».",
        "explanation": "Det blir Jeg har en bok.",
        "variants": [
          {
            "targetKey": "have_book",
            "tokens": [
              "en bok",
              "Jeg har"
            ],
            "answer": [
              "Jeg har",
              "en bok"
            ],
            "model": "Jeg har en bok.",
            "hint": "Start med «Jeg har».",
            "explanation": "Det blir Jeg har en bok."
          },
          {
            "targetKey": "have_pen",
            "tokens": [
              "en penn",
              "Jeg har"
            ],
            "answer": [
              "Jeg har",
              "en penn"
            ],
            "model": "Jeg har en penn.",
            "hint": "Start med «Jeg har».",
            "explanation": "Det blir Jeg har en penn."
          }
        ]
      },
      {
        "id": "a05l5",
        "type": "choice",
        "skill": "reading",
        "targetKey": "context_a05",
        "title": "Les og velg",
        "instruction": "Hvem har en penn?",
        "prompt": "Anna: Jeg har en bok. Mali: Jeg har en penn.",
        "hint": "Les den korte teksten en gang til.",
        "options": [
          {
            "id": "a",
            "label": "Mali"
          },
          {
            "id": "b",
            "label": "Anna"
          }
        ],
        "correct": "a",
        "explanation": "Riktig svar er «Mali».",
        "variants": [
          {
            "targetKey": "context_a05_1",
            "prompt": "Anna: Jeg har en bok. Mali: Jeg har en penn.",
            "instruction": "Hvem har en penn?",
            "options": [
              {
                "id": "a",
                "label": "Mali"
              },
              {
                "id": "b",
                "label": "Anna"
              }
            ],
            "correct": "a",
            "hint": "Les teksten og finn navnet.",
            "explanation": "Svaret er Mali."
          },
          {
            "targetKey": "context_a05_2",
            "prompt": "Mali: Jeg har en bok. Anna: Jeg har en penn.",
            "instruction": "Hvem har en penn?",
            "options": [
              {
                "id": "a",
                "label": "Anna"
              },
              {
                "id": "b",
                "label": "Mali"
              }
            ],
            "correct": "a",
            "hint": "Les teksten og finn navnet.",
            "explanation": "Svaret er Anna."
          }
        ]
      },
      {
        "id": "a05l6",
        "type": "input",
        "skill": "construction",
        "targetKey": "have_completion_pen",
        "title": "Svar om utstyr",
        "instruction": "Fullfør beskjeden.",
        "prompt": "Fortell om det du har.",
        "image": "hold-pen",
        "before": "Jeg har",
        "after": "",
        "accepted": [
          "en penn"
        ],
        "model": "Jeg har en penn.",
        "hint": "Se hva personen holder.",
        "explanation": "Et mulig svar er «Jeg har en penn».",
        "responseLength": "sentence"
      }
    ]
  },
  {
    "id": "a06",
    "number": "06",
    "title": "Tall 1–3",
    "level": "A0 – start",
    "stage": "a0",
    "intro": "Les tallene én, to og tre.",
    "goal": "Jeg kan kjenne igjen tallene 1–3.",
    "words": [
      "én",
      "to",
      "tre"
    ],
    "lessons": [
      {
        "id": "a06l1",
        "type": "learn",
        "skill": "exposure",
        "targetKey": "intro_a06",
        "title": "Se og les",
        "instruction": "Les ordene.",
        "model": "1 · én · 2 · to · 3 · tre · Hvor mange?",
        "hint": "Se på bildene og les.",
        "explanation": "Du har sett på ordene.",
        "items": [
          {
            "word": "1 · én",
            "image": "dots1",
            "uk": "один",
            "th": "หนึ่ง"
          },
          {
            "word": "2 · to",
            "image": "dots2",
            "uk": "два",
            "th": "สอง"
          },
          {
            "word": "3 · tre",
            "image": "dots3",
            "uk": "три",
            "th": "สาม"
          },
          {
            "word": "Hvor mange?",
            "image": "dots2",
            "uk": "Скільки?",
            "th": "กี่ / จำนวนเท่าไร?"
          }
        ]
      },
      {
        "id": "a06l2",
        "type": "choice",
        "skill": "recognition",
        "targetKey": "one",
        "title": "Finn bildet",
        "instruction": "Velg bildet.",
        "prompt": "1 · én",
        "hint": "Les ordene og se på bildene.",
        "optionsImageOnly": true,
        "options": [
          {
            "id": "a",
            "label": "1 · én",
            "image": "dots1"
          },
          {
            "id": "b",
            "label": "2 · to",
            "image": "dots2"
          }
        ],
        "correct": "a",
        "explanation": "Bildet passer til «1 · én»."
      },
      {
        "id": "a06l3",
        "type": "input",
        "skill": "recall",
        "targetKey": "one",
        "title": "Hent fram ordet",
        "instruction": "Skriv ordet.",
        "before": "",
        "after": "",
        "image": "dots1",
        "model": "én",
        "hint": "Se på bildet. Hent fram ordet.",
        "accepted": [
          "én",
          "en"
        ],
        "explanation": "Ordet er «én».",
        "variants": [
          {
            "targetKey": "one",
            "image": "dots1",
            "model": "én",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "én",
              "en"
            ],
            "explanation": "Ordet er «én»."
          },
          {
            "targetKey": "two",
            "image": "dots2",
            "model": "to",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "to"
            ],
            "explanation": "Ordet er «to»."
          },
          {
            "targetKey": "three",
            "image": "dots3",
            "model": "tre",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "tre"
            ],
            "explanation": "Ordet er «tre»."
          }
        ]
      },
      {
        "id": "a06l4",
        "type": "input",
        "skill": "recall",
        "targetKey": "number_word_two",
        "title": "Tall og ord",
        "instruction": "Skriv tallet med bokstaver.",
        "before": "2 =",
        "after": "",
        "accepted": [
          "to"
        ],
        "model": "2 = to",
        "hint": "Tenk på tallet 2.",
        "explanation": "2 skrives «to».",
        "variants": [
          {
            "targetKey": "number_word_two",
            "before": "2 =",
            "accepted": [
              "to"
            ],
            "model": "2 = to",
            "hint": "Tenk på tallet 2.",
            "explanation": "2 skrives «to»."
          },
          {
            "targetKey": "number_word_three",
            "before": "3 =",
            "accepted": [
              "tre"
            ],
            "model": "3 = tre",
            "hint": "Tenk på tallet 3.",
            "explanation": "3 skrives «tre»."
          }
        ]
      },
      {
        "id": "a06l5",
        "type": "choice",
        "skill": "reading",
        "targetKey": "context_a06",
        "title": "Les og velg",
        "instruction": "Hvor mange?",
        "prompt": "Anna: en bok. Mali: en bok.",
        "hint": "Se på bildet og tell.",
        "options": [
          {
            "id": "a",
            "label": "to"
          },
          {
            "id": "b",
            "label": "tre"
          }
        ],
        "correct": "a",
        "explanation": "Det er to.",
        "image": "books2"
      },
      {
        "id": "a06l6",
        "type": "choice",
        "skill": "recognition",
        "targetKey": "number_books_three",
        "title": "Hvor mange?",
        "instruction": "Velg tallet.",
        "image": "books3",
        "hint": "Tell bøkene på bildet.",
        "options": [
          {
            "id": "a",
            "label": "3"
          },
          {
            "id": "b",
            "label": "2"
          }
        ],
        "correct": "a",
        "explanation": "Det er 3."
      }
    ]
  },
  {
    "id": "a07",
    "number": "07",
    "title": "Tre farger",
    "level": "A0 – start",
    "stage": "a0",
    "intro": "Se og les tre farger.",
    "goal": "Jeg kan kjenne igjen rød, blå og grønn.",
    "words": [
      "rød",
      "blå",
      "grønn"
    ],
    "lessons": [
      {
        "id": "a07l1",
        "type": "learn",
        "skill": "exposure",
        "targetKey": "intro_a07",
        "title": "Se og les",
        "instruction": "Les ordene.",
        "model": "en rød bok · en blå bok · en grønn bok",
        "hint": "Se på bildene og les.",
        "explanation": "Du har sett på ordene.",
        "items": [
          {
            "word": "en rød bok",
            "image": "book-red",
            "uk": "червона книга",
            "th": "หนังสือสีแดง"
          },
          {
            "word": "en blå bok",
            "image": "book-blue",
            "uk": "синя книга",
            "th": "หนังสือสีน้ำเงิน"
          },
          {
            "word": "en grønn bok",
            "image": "book-green",
            "uk": "зелена книга",
            "th": "หนังสือสีเขียว"
          }
        ]
      },
      {
        "id": "a07l2",
        "type": "choice",
        "skill": "recognition",
        "targetKey": "red",
        "title": "Finn bildet",
        "instruction": "Velg bildet.",
        "prompt": "en rød bok",
        "hint": "Les ordene og se på bildene.",
        "optionsImageOnly": true,
        "options": [
          {
            "id": "a",
            "label": "en rød bok",
            "image": "book-red"
          },
          {
            "id": "b",
            "label": "en blå bok",
            "image": "book-blue"
          }
        ],
        "correct": "a",
        "explanation": "Bildet passer til «en rød bok»."
      },
      {
        "id": "a07l3",
        "type": "input",
        "skill": "recall",
        "targetKey": "red",
        "title": "Hent fram ordet",
        "instruction": "Skriv ordet.",
        "before": "en",
        "after": "bok",
        "image": "book-red",
        "model": "rød",
        "hint": "Se på bildet. Hent fram ordet.",
        "accepted": [
          "rød"
        ],
        "explanation": "Ordet er «rød».",
        "variants": [
          {
            "targetKey": "red",
            "image": "book-red",
            "model": "rød",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "rød"
            ],
            "explanation": "Ordet er «rød»."
          },
          {
            "targetKey": "blue",
            "image": "book-blue",
            "model": "blå",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "blå"
            ],
            "explanation": "Ordet er «blå»."
          },
          {
            "targetKey": "green",
            "image": "book-green",
            "model": "grønn",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "grønn"
            ],
            "explanation": "Ordet er «grønn»."
          }
        ]
      },
      {
        "id": "a07l4",
        "type": "build",
        "skill": "construction",
        "targetKey": "colourphrase_red_book",
        "title": "Sett sammen",
        "instruction": "Sett sammen.",
        "sentence": false,
        "tokens": [
          "bok",
          "en rød"
        ],
        "answer": [
          "en rød",
          "bok"
        ],
        "model": "en rød bok",
        "hint": "Start med «en rød».",
        "explanation": "Det blir en rød bok",
        "variants": [
          {
            "targetKey": "colourphrase_red_book",
            "tokens": [
              "bok",
              "en rød"
            ],
            "answer": [
              "en rød",
              "bok"
            ],
            "model": "en rød bok",
            "hint": "Start med «en rød».",
            "explanation": "Det blir en rød bok"
          },
          {
            "targetKey": "colourphrase_blue_book",
            "tokens": [
              "bok",
              "en blå"
            ],
            "answer": [
              "en blå",
              "bok"
            ],
            "model": "en blå bok",
            "hint": "Start med «en blå».",
            "explanation": "Det blir en blå bok"
          }
        ]
      },
      {
        "id": "a07l5",
        "type": "choice",
        "skill": "reading",
        "targetKey": "context_a07",
        "title": "Les og velg",
        "instruction": "Hvem har en blå bok?",
        "prompt": "Anna: en rød bok. Mali: en blå bok.",
        "hint": "Les den korte teksten en gang til.",
        "options": [
          {
            "id": "a",
            "label": "Mali"
          },
          {
            "id": "b",
            "label": "Anna"
          }
        ],
        "correct": "a",
        "explanation": "Riktig svar er «Mali».",
        "variants": [
          {
            "targetKey": "context_a07_1",
            "prompt": "Anna: en rød bok. Mali: en blå bok.",
            "instruction": "Hvem har en blå bok?",
            "options": [
              {
                "id": "a",
                "label": "Mali"
              },
              {
                "id": "b",
                "label": "Anna"
              }
            ],
            "correct": "a",
            "hint": "Les teksten og finn navnet.",
            "explanation": "Svaret er Mali."
          },
          {
            "targetKey": "context_a07_2",
            "prompt": "Mali: en rød bok. Anna: en blå bok.",
            "instruction": "Hvem har en blå bok?",
            "options": [
              {
                "id": "a",
                "label": "Anna"
              },
              {
                "id": "b",
                "label": "Mali"
              }
            ],
            "correct": "a",
            "hint": "Les teksten og finn navnet.",
            "explanation": "Svaret er Anna."
          }
        ]
      },
      {
        "id": "a07l6",
        "type": "input",
        "skill": "construction",
        "targetKey": "label_green_book",
        "title": "Skriv en etikett",
        "instruction": "Skriv en etikett.",
        "prompt": "Skriv hva bildet viser.",
        "image": "book-green",
        "before": "",
        "after": "",
        "accepted": [
          "en grønn bok",
          "grønn bok"
        ],
        "model": "en grønn bok",
        "hint": "Skriv fargen og tingen.",
        "explanation": "Et mulig svar er «en grønn bok».",
        "responseLength": "sentence"
      }
    ]
  },
  {
    "id": "a08",
    "number": "08",
    "title": "Stor og liten",
    "level": "A0 – start",
    "stage": "a0",
    "intro": "Sammenlign to bøker.",
    "goal": "Jeg kan kjenne igjen stor og liten.",
    "words": [
      "stor",
      "liten"
    ],
    "lessons": [
      {
        "id": "a08l1",
        "type": "learn",
        "skill": "exposure",
        "targetKey": "intro_a08",
        "title": "Se og les",
        "instruction": "Les ordene.",
        "model": "en stor bok · en liten bok",
        "hint": "Se på bildene og les.",
        "explanation": "Du har sett på ordene.",
        "items": [
          {
            "word": "en stor bok",
            "image": "big-book",
            "uk": "велика книга",
            "th": "หนังสือเล่มใหญ่"
          },
          {
            "word": "en liten bok",
            "image": "small-book",
            "uk": "маленька книга",
            "th": "หนังสือเล่มเล็ก"
          }
        ]
      },
      {
        "id": "a08l2",
        "type": "choice",
        "skill": "recognition",
        "targetKey": "big",
        "title": "Finn bildet",
        "instruction": "Velg bildet.",
        "prompt": "en stor bok",
        "hint": "Les ordene og se på bildene.",
        "optionsImageOnly": true,
        "options": [
          {
            "id": "a",
            "label": "en stor bok",
            "image": "big-book"
          },
          {
            "id": "b",
            "label": "en liten bok",
            "image": "small-book"
          }
        ],
        "correct": "a",
        "explanation": "Bildet passer til «en stor bok»."
      },
      {
        "id": "a08l3",
        "type": "input",
        "skill": "recall",
        "targetKey": "big",
        "title": "Hent fram ordet",
        "instruction": "Skriv ordet.",
        "before": "en",
        "after": "bok",
        "image": "big-book",
        "model": "stor",
        "hint": "Se på bildet. Hent fram ordet.",
        "accepted": [
          "stor"
        ],
        "explanation": "Ordet er «stor».",
        "variants": [
          {
            "targetKey": "big",
            "image": "big-book",
            "model": "stor",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "stor"
            ],
            "explanation": "Ordet er «stor»."
          },
          {
            "targetKey": "small",
            "image": "small-book",
            "model": "liten",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "liten"
            ],
            "explanation": "Ordet er «liten»."
          }
        ]
      },
      {
        "id": "a08l4",
        "type": "build",
        "skill": "construction",
        "targetKey": "sizephrase_big_book",
        "title": "Sett sammen",
        "instruction": "Sett sammen.",
        "sentence": false,
        "tokens": [
          "bok",
          "en stor"
        ],
        "answer": [
          "en stor",
          "bok"
        ],
        "model": "en stor bok",
        "hint": "Start med «en stor».",
        "explanation": "Det blir en stor bok",
        "variants": [
          {
            "targetKey": "sizephrase_big_book",
            "tokens": [
              "bok",
              "en stor"
            ],
            "answer": [
              "en stor",
              "bok"
            ],
            "model": "en stor bok",
            "hint": "Start med «en stor».",
            "explanation": "Det blir en stor bok"
          },
          {
            "targetKey": "sizephrase_small_book",
            "tokens": [
              "bok",
              "en liten"
            ],
            "answer": [
              "en liten",
              "bok"
            ],
            "model": "en liten bok",
            "hint": "Start med «en liten».",
            "explanation": "Det blir en liten bok"
          }
        ]
      },
      {
        "id": "a08l5",
        "type": "choice",
        "skill": "reading",
        "targetKey": "context_a08",
        "title": "Les og velg",
        "instruction": "Hvem har en liten bok?",
        "prompt": "Anna: en stor bok. Mali: en liten bok.",
        "hint": "Les den korte teksten en gang til.",
        "options": [
          {
            "id": "a",
            "label": "Mali"
          },
          {
            "id": "b",
            "label": "Anna"
          }
        ],
        "correct": "a",
        "explanation": "Riktig svar er «Mali».",
        "variants": [
          {
            "targetKey": "context_a08_1",
            "prompt": "Anna: en stor bok. Mali: en liten bok.",
            "instruction": "Hvem har en liten bok?",
            "options": [
              {
                "id": "a",
                "label": "Mali"
              },
              {
                "id": "b",
                "label": "Anna"
              }
            ],
            "correct": "a",
            "hint": "Les teksten og finn navnet.",
            "explanation": "Svaret er Mali."
          },
          {
            "targetKey": "context_a08_2",
            "prompt": "Mali: en stor bok. Anna: en liten bok.",
            "instruction": "Hvem har en liten bok?",
            "options": [
              {
                "id": "a",
                "label": "Anna"
              },
              {
                "id": "b",
                "label": "Mali"
              }
            ],
            "correct": "a",
            "hint": "Les teksten og finn navnet.",
            "explanation": "Svaret er Anna."
          }
        ]
      },
      {
        "id": "a08l6",
        "type": "choice",
        "skill": "recognition",
        "targetKey": "use_a08",
        "title": "Velg etikett",
        "instruction": "Velg etiketten til den markerte boka.",
        "prompt": "",
        "hint": "Sammenlign bøkene i bildet.",
        "options": [
          {
            "id": "a",
            "label": "en stor bok"
          },
          {
            "id": "b",
            "label": "en liten bok"
          }
        ],
        "correct": "a",
        "explanation": "Den markerte boka er stor.",
        "image": "big-book"
      }
    ]
  },
  {
    "id": "a09",
    "number": "09",
    "title": "Jeg leser og skriver",
    "level": "A0 – start",
    "stage": "a0",
    "intro": "Les to setninger om skolen.",
    "goal": "Jeg kan kjenne igjen «Jeg leser» og «Jeg skriver».",
    "words": [
      "jeg leser",
      "jeg skriver"
    ],
    "lessons": [
      {
        "id": "a09l1",
        "type": "learn",
        "skill": "exposure",
        "targetKey": "intro_a09",
        "title": "Se og les",
        "instruction": "Les ordene.",
        "model": "Jeg leser. · Jeg skriver. · Hva gjør du?",
        "hint": "Se på bildene og les.",
        "explanation": "Du har sett på ordene.",
        "items": [
          {
            "word": "Jeg leser.",
            "image": "read",
            "uk": "Я читаю.",
            "th": "ฉันอ่าน"
          },
          {
            "word": "Jeg skriver.",
            "image": "write",
            "uk": "Я пишу.",
            "th": "ฉันเขียน"
          },
          {
            "word": "Hva gjør du?",
            "image": "pair",
            "uk": "Що ти робиш?",
            "th": "คุณกำลังทำอะไร?"
          }
        ]
      },
      {
        "id": "a09l2",
        "type": "choice",
        "skill": "recognition",
        "targetKey": "read",
        "title": "Finn bildet",
        "instruction": "Velg bildet.",
        "prompt": "Jeg leser.",
        "hint": "Les ordene og se på bildene.",
        "optionsImageOnly": true,
        "options": [
          {
            "id": "a",
            "label": "Jeg leser.",
            "image": "read"
          },
          {
            "id": "b",
            "label": "Jeg skriver.",
            "image": "write"
          }
        ],
        "correct": "a",
        "explanation": "Bildet passer til «Jeg leser.»."
      },
      {
        "id": "a09l3",
        "type": "input",
        "skill": "recall",
        "targetKey": "read",
        "title": "Hent fram ordet",
        "instruction": "Skriv ordet.",
        "before": "Jeg",
        "after": ".",
        "image": "read",
        "model": "leser",
        "hint": "Se på bildet. Hent fram ordet.",
        "accepted": [
          "leser"
        ],
        "explanation": "Ordet er «leser».",
        "variants": [
          {
            "targetKey": "read",
            "image": "read",
            "model": "leser",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "leser"
            ],
            "explanation": "Ordet er «leser»."
          },
          {
            "targetKey": "write",
            "image": "write",
            "model": "skriver",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "skriver"
            ],
            "explanation": "Ordet er «skriver»."
          }
        ]
      },
      {
        "id": "a09l4",
        "type": "build",
        "skill": "construction",
        "targetKey": "action_sentence_read",
        "title": "Sett sammen",
        "instruction": "Sett sammen.",
        "sentence": true,
        "tokens": [
          "leser",
          "Jeg"
        ],
        "answer": [
          "Jeg",
          "leser"
        ],
        "model": "Jeg leser.",
        "hint": "Start med «Jeg».",
        "explanation": "Det blir Jeg leser.",
        "variants": [
          {
            "targetKey": "action_sentence_read",
            "tokens": [
              "leser",
              "Jeg"
            ],
            "answer": [
              "Jeg",
              "leser"
            ],
            "model": "Jeg leser.",
            "hint": "Start med «Jeg».",
            "explanation": "Det blir Jeg leser."
          },
          {
            "targetKey": "action_sentence_write",
            "tokens": [
              "skriver",
              "Jeg"
            ],
            "answer": [
              "Jeg",
              "skriver"
            ],
            "model": "Jeg skriver.",
            "hint": "Start med «Jeg».",
            "explanation": "Det blir Jeg skriver."
          }
        ]
      },
      {
        "id": "a09l5",
        "type": "choice",
        "skill": "reading",
        "targetKey": "context_a09",
        "title": "Les og velg",
        "instruction": "Hvem skriver?",
        "prompt": "Anna: Jeg leser. Mali: Jeg skriver.",
        "hint": "Les den korte teksten en gang til.",
        "options": [
          {
            "id": "a",
            "label": "Mali"
          },
          {
            "id": "b",
            "label": "Anna"
          }
        ],
        "correct": "a",
        "explanation": "Riktig svar er «Mali».",
        "variants": [
          {
            "targetKey": "context_a09_1",
            "prompt": "Anna: Jeg leser. Mali: Jeg skriver.",
            "instruction": "Hvem skriver?",
            "options": [
              {
                "id": "a",
                "label": "Mali"
              },
              {
                "id": "b",
                "label": "Anna"
              }
            ],
            "correct": "a",
            "hint": "Les teksten og finn navnet.",
            "explanation": "Svaret er Mali."
          },
          {
            "targetKey": "context_a09_2",
            "prompt": "Mali: Jeg leser. Anna: Jeg skriver.",
            "instruction": "Hvem skriver?",
            "options": [
              {
                "id": "a",
                "label": "Anna"
              },
              {
                "id": "b",
                "label": "Mali"
              }
            ],
            "correct": "a",
            "hint": "Les teksten og finn navnet.",
            "explanation": "Svaret er Anna."
          }
        ]
      },
      {
        "id": "a09l6",
        "type": "input",
        "skill": "construction",
        "targetKey": "action_reply_write",
        "title": "Svar på en melding",
        "instruction": "Svar på spørsmålet.",
        "prompt": "Lærer: Hva gjør du?",
        "image": "write",
        "before": "",
        "after": "",
        "accepted": [
          "Jeg skriver",
          "Jeg skriver med en penn"
        ],
        "model": "Jeg skriver.",
        "hint": "Se på bildet og svar med «Jeg …».",
        "explanation": "Et mulig svar er «Jeg skriver».",
        "responseLength": "sentence",
        "variants": [
          {
            "targetKey": "action_reply_write",
            "image": "write",
            "prompt": "Lærer: Hva gjør du?",
            "accepted": [
              "Jeg skriver",
              "Jeg skriver med en penn"
            ],
            "model": "Jeg skriver.",
            "hint": "Se på bildet og svar med «Jeg …».",
            "explanation": "Et mulig svar er «Jeg skriver»."
          },
          {
            "targetKey": "action_reply_read",
            "image": "read",
            "prompt": "Lærer: Hva gjør du?",
            "accepted": [
              "Jeg leser",
              "Jeg leser en bok"
            ],
            "model": "Jeg leser.",
            "hint": "Se på bildet og svar med «Jeg …».",
            "explanation": "Et mulig svar er «Jeg leser»."
          }
        ]
      }
    ]
  },
  {
    "id": "a10",
    "number": "10",
    "title": "Dette kan jeg",
    "level": "A0 – start",
    "stage": "a0",
    "intro": "Øv på ord og setninger du kjenner.",
    "goal": "Jeg kan bruke ord og setninger fra startdelen.",
    "words": [
      "en sekk",
      "jeg har en bok",
      "to",
      "jeg leser"
    ],
    "lessons": [
      {
        "id": "a10l1",
        "type": "learn",
        "skill": "exposure",
        "targetKey": "intro_a10",
        "title": "Se og les",
        "instruction": "Les ordene.",
        "model": "en sekk · Jeg har en bok. · to · Jeg leser.",
        "hint": "Se på bildene og les.",
        "explanation": "Du har sett på ordene.",
        "items": [
          {
            "word": "en sekk",
            "image": "bag",
            "uk": "рюкзак",
            "th": "กระเป๋าเป้"
          },
          {
            "word": "Jeg har en bok.",
            "image": "hold-book",
            "uk": "У мене є книга.",
            "th": "ฉันมีหนังสือ"
          },
          {
            "word": "to",
            "image": "dots2",
            "uk": "два",
            "th": "สอง"
          },
          {
            "word": "Jeg leser.",
            "image": "read",
            "uk": "Я читаю.",
            "th": "ฉันอ่าน"
          }
        ]
      },
      {
        "id": "a10l2",
        "type": "choice",
        "skill": "recognition",
        "targetKey": "bag",
        "title": "Finn bildet",
        "instruction": "Velg bildet.",
        "prompt": "en sekk",
        "hint": "Les ordene og se på bildene.",
        "optionsImageOnly": true,
        "options": [
          {
            "id": "a",
            "label": "en sekk",
            "image": "bag"
          },
          {
            "id": "b",
            "label": "Jeg har en bok.",
            "image": "hold-book"
          }
        ],
        "correct": "a",
        "explanation": "Bildet passer til «en sekk»."
      },
      {
        "id": "a10l3",
        "type": "input",
        "skill": "recall",
        "targetKey": "bag",
        "title": "Hent fram ordet",
        "instruction": "Skriv ordet.",
        "before": "",
        "after": "",
        "image": "bag",
        "model": "sekk",
        "hint": "Se på bildet. Hent fram ordet.",
        "accepted": [
          "sekk",
          "en sekk"
        ],
        "explanation": "Ordet er «sekk».",
        "variants": [
          {
            "targetKey": "bag",
            "image": "bag",
            "model": "sekk",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "sekk",
              "en sekk"
            ],
            "explanation": "Ordet er «sekk»."
          },
          {
            "targetKey": "two",
            "image": "dots2",
            "model": "to",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "to"
            ],
            "explanation": "Ordet er «to»."
          },
          {
            "targetKey": "read",
            "image": "read",
            "model": "leser",
            "hint": "Se på bildet. Hent fram ordet.",
            "accepted": [
              "leser"
            ],
            "explanation": "Ordet er «leser»."
          }
        ]
      },
      {
        "id": "a10l4",
        "type": "build",
        "skill": "construction",
        "targetKey": "here_phone",
        "title": "Sett sammen",
        "instruction": "Sett sammen.",
        "sentence": true,
        "tokens": [
          "en telefon",
          "Her er"
        ],
        "answer": [
          "Her er",
          "en telefon"
        ],
        "model": "Her er en telefon.",
        "hint": "Start med «Her er».",
        "explanation": "Det blir Her er en telefon.",
        "variants": [
          {
            "targetKey": "here_phone",
            "tokens": [
              "en telefon",
              "Her er"
            ],
            "answer": [
              "Her er",
              "en telefon"
            ],
            "model": "Her er en telefon.",
            "hint": "Start med «Her er».",
            "explanation": "Det blir Her er en telefon."
          },
          {
            "targetKey": "here_book",
            "tokens": [
              "en bok",
              "Her er"
            ],
            "answer": [
              "Her er",
              "en bok"
            ],
            "model": "Her er en bok.",
            "hint": "Start med «Her er».",
            "explanation": "Det blir Her er en bok."
          }
        ]
      },
      {
        "id": "a10l5",
        "type": "choice",
        "skill": "reading",
        "targetKey": "context_a10",
        "title": "Les og velg",
        "instruction": "Hvem leser?",
        "prompt": "Anna: Jeg leser. Mali: Jeg skriver.",
        "hint": "Les den korte teksten en gang til.",
        "options": [
          {
            "id": "a",
            "label": "Anna"
          },
          {
            "id": "b",
            "label": "Mali"
          }
        ],
        "correct": "a",
        "explanation": "Riktig svar er «Anna»."
      },
      {
        "id": "a10l6",
        "type": "input",
        "skill": "construction",
        "targetKey": "have_reply_book",
        "title": "Svar om utstyr",
        "instruction": "Svar på spørsmålet.",
        "prompt": "Lærer: Hva har du?",
        "image": "hold-book",
        "before": "",
        "after": "",
        "accepted": [
          "Jeg har en bok",
          "Jeg har boka"
        ],
        "model": "Jeg har en bok.",
        "hint": "Se på det personen holder. Svar med «Jeg har …».",
        "explanation": "Et mulig svar er «Jeg har en bok».",
        "responseLength": "sentence",
        "variants": [
          {
            "targetKey": "have_reply_book",
            "image": "hold-book",
            "prompt": "Lærer: Hva har du?",
            "accepted": [
              "Jeg har en bok",
              "Jeg har boka"
            ],
            "model": "Jeg har en bok.",
            "hint": "Se på det personen holder.",
            "explanation": "Et mulig svar er «Jeg har en bok»."
          },
          {
            "targetKey": "have_reply_pen",
            "image": "hold-pen",
            "prompt": "Lærer: Hva har du?",
            "accepted": [
              "Jeg har en penn",
              "Jeg har pennen"
            ],
            "model": "Jeg har en penn.",
            "hint": "Se på det personen holder.",
            "explanation": "Et mulig svar er «Jeg har en penn»."
          }
        ]
      }
    ]
  },
  {
    "id": "u3",
    "number": "11",
    "title": "På skolen",
    "level": "På vei",
    "stage": "bridge",
    "intro": "Les og skriv om ting du gjør på skolen.",
    "goal": "Jeg kan bruke «jeg har», «jeg leser» og «jeg skriver».",
    "words": [
      "jeg har",
      "jeg leser",
      "jeg skriver",
      "en skole",
      "på skolen"
    ],
    "lessons": [
      {
        "id": "u3l1",
        "type": "learn",
        "title": "Jeg på skolen",
        "instruction": "Les setningene.",
        "model": "Jeg har en bok og en penn. Jeg er på skolen. Jeg leser. Jeg skriver.",
        "hint": "Se på bildene og les.",
        "explanation": "Du har lest fire setninger.",
        "items": [
          {
            "word": "jeg har en bok",
            "image": "book",
            "uk": "у мене є книга",
            "th": "ฉันมีหนังสือ"
          },
          {
            "word": "jeg leser",
            "image": "read",
            "uk": "я читаю",
            "th": "ฉันอ่าน"
          },
          {
            "word": "jeg skriver",
            "image": "write",
            "uk": "я пишу",
            "th": "ฉันเขียน"
          },
          {
            "word": "på skolen",
            "image": "school",
            "uk": "у школі",
            "th": "ที่โรงเรียน"
          },
          {
            "word": "er",
            "image": "school",
            "uk": "є / перебуває",
            "th": "เป็น / อยู่"
          },
          {
            "word": "og",
            "image": "book",
            "uk": "і / та",
            "th": "และ"
          }
        ],
        "skill": "exposure",
        "targetKey": "u3l1"
      },
      {
        "id": "u3l2",
        "type": "choice",
        "optionsImageOnly": true,
        "title": "Jeg leser",
        "instruction": "Velg bildet.",
        "prompt": "Jeg leser.",
        "hint": "Finn bildet av en person som leser.",
        "explanation": "Ja! Personen leser.",
        "options": [
          {
            "id": "a",
            "label": "leser",
            "image": "read"
          },
          {
            "id": "b",
            "label": "skriver",
            "image": "write"
          }
        ],
        "correct": "a",
        "skill": "recognition",
        "targetKey": "u3l2"
      },
      {
        "id": "u3l3",
        "type": "choice",
        "title": "Jeg har",
        "instruction": "Velg ordet som mangler.",
        "prompt": "Jeg har en ___.",
        "image": "pen",
        "hint": "Se på bildet av en penn.",
        "explanation": "Ja! Jeg har en penn.",
        "options": [
          {
            "id": "a",
            "label": "penn"
          },
          {
            "id": "b",
            "label": "stol"
          },
          {
            "id": "c",
            "label": "skole"
          }
        ],
        "correct": "a",
        "skill": "recognition",
        "targetKey": "u3l3"
      },
      {
        "id": "u3l4",
        "type": "build",
        "title": "Bygg setningen",
        "instruction": "Bygg setningen.",
        "model": "Jeg har en bok.",
        "hint": "Start med «Jeg».",
        "explanation": "Bra! Jeg har en bok.",
        "tokens": [
          "en",
          "bok",
          "har",
          "Jeg"
        ],
        "answer": [
          "Jeg",
          "har",
          "en",
          "bok"
        ],
        "sentence": true,
        "skill": "construction",
        "targetKey": "u3l4"
      },
      {
        "id": "u3l5",
        "type": "input",
        "title": "Jeg skriver",
        "instruction": "Fullfør.",
        "model": "Jeg leser. Jeg skriver.",
        "before": "Jeg",
        "after": ".",
        "image": "write",
        "accepted": [
          "skriver"
        ],
        "hint": "Se på modellen og bildet.",
        "explanation": "Ja! Jeg skriver.",
        "skill": "recall",
        "targetKey": "u3l5"
      },
      {
        "id": "u3l6",
        "type": "write",
        "title": "Om deg",
        "instruction": "Skriv én setning.",
        "model": "Jeg har en bok.",
        "placeholder": "Jeg har ...",
        "example": "Jeg har en penn.",
        "starters": "Jeg har ...",
        "hint": "Bruk «Jeg har» og et ord du kjenner.",
        "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
        "checks": [
          "Jeg startet med «Jeg».",
          "Jeg satte punktum."
        ],
        "minWords": 1,
        "skill": "writing",
        "targetKey": "u3l6"
      }
    ]
  },
  {
    "id": "u4",
    "number": "12",
    "title": "Hvor er boka?",
    "level": "På vei",
    "stage": "bridge",
    "intro": "Fortell hvor boka er.",
    "goal": "Jeg kan bruke på, i og under.",
    "words": [
      "boka",
      "en sekk",
      "på",
      "i",
      "under"
    ],
    "lessons": [
      {
        "id": "u4l1",
        "type": "learn",
        "title": "Hvor er boka?",
        "instruction": "Les setningene.",
        "bridge": [
          {
            "from": "en bok",
            "to": "boka",
            "image": "book"
          },
          {
            "from": "et bord",
            "to": "bordet",
            "image": "table"
          },
          {
            "from": "en sekk",
            "to": "sekken",
            "image": "bag"
          }
        ],
        "model": "Boka er på bordet. Boka er i sekken. Boka er under bordet.",
        "hint": "Se hvor boka er på hvert bilde.",
        "explanation": "Bra! Du har lest om tre steder.",
        "items": [
          {
            "word": "boka er på bordet",
            "image": "book-on-table",
            "uk": "книга на столі",
            "th": "หนังสืออยู่บนโต๊ะ"
          },
          {
            "word": "boka er i sekken",
            "image": "book-in-bag",
            "uk": "книга в рюкзаку",
            "th": "หนังสืออยู่ในกระเป๋า"
          },
          {
            "word": "boka er under bordet",
            "image": "book-under-table",
            "uk": "книга під столом",
            "th": "หนังสืออยู่ใต้โต๊ะ"
          }
        ],
        "skill": "exposure",
        "targetKey": "u4l1"
      },
      {
        "id": "u4l2",
        "type": "choice",
        "optionsImageOnly": true,
        "title": "På bordet",
        "instruction": "Velg riktig bilde.",
        "prompt": "Boka er på bordet.",
        "hint": "Boka ligger oppå bordet.",
        "explanation": "Ja! Boka er på bordet.",
        "options": [
          {
            "id": "a",
            "label": "på bordet",
            "image": "book-on-table"
          },
          {
            "id": "b",
            "label": "under bordet",
            "image": "book-under-table"
          }
        ],
        "correct": "a",
        "skill": "recognition",
        "targetKey": "u4l2"
      },
      {
        "id": "u4l3",
        "type": "choice",
        "title": "I sekken",
        "instruction": "Velg ordet som mangler.",
        "prompt": "Boka er ___ sekken.",
        "image": "book-in-bag",
        "hint": "Se hvor boka er.",
        "explanation": "Ja! Boka er i sekken.",
        "options": [
          {
            "id": "a",
            "label": "på"
          },
          {
            "id": "b",
            "label": "i"
          },
          {
            "id": "c",
            "label": "under"
          }
        ],
        "correct": "b",
        "skill": "recognition",
        "targetKey": "u4l3"
      },
      {
        "id": "u4l4",
        "type": "build",
        "title": "Under bordet",
        "instruction": "Bygg setningen.",
        "model": "Boka er under bordet.",
        "image": "book-under-table",
        "hint": "Start med «Boka».",
        "explanation": "Bra! Boka er under bordet.",
        "tokens": [
          "bordet",
          "er",
          "Boka",
          "under"
        ],
        "answer": [
          "Boka",
          "er",
          "under",
          "bordet"
        ],
        "sentence": true,
        "skill": "construction",
        "targetKey": "u4l4"
      },
      {
        "id": "u4l5",
        "type": "input",
        "title": "På eller under?",
        "instruction": "Fullfør.",
        "model": "Boka er under bordet.",
        "image": "book-on-table",
        "before": "Boka er",
        "after": "bordet.",
        "accepted": [
          "på"
        ],
        "bank": [
          "på",
          "i",
          "under"
        ],
        "hint": "Se på bildet og velg ordet som passer.",
        "explanation": "Ja! Boka er på bordet.",
        "skill": "recall",
        "targetKey": "u4l5"
      },
      {
        "id": "u4l6",
        "type": "write",
        "title": "Hvor er boka?",
        "instruction": "Skriv én setning til bildet.",
        "image": "book-in-bag",
        "model": "Boka er i sekken.",
        "placeholder": "Boka er ...",
        "example": "Boka er i sekken.",
        "starters": "Boka er ...",
        "hint": "Se på bildet og modellen.",
        "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
        "checks": [
          "Jeg skrev hvor boka er.",
          "Jeg satte punktum."
        ],
        "minWords": 1,
        "skill": "writing",
        "targetKey": "u4l6"
      }
    ]
  },
  {
    "id": "u5",
    "number": "13",
    "title": "Min dag",
    "level": "A1 – øving",
    "stage": "a1",
    "intro": "Fortell om dagen din og klokkeslett.",
    "goal": "Jeg kan skrive enkle setninger om dagen.",
    "words": [
      "jeg går på skolen",
      "jeg spiser",
      "klokka åtte",
      "klokka tolv",
      "klokka seks"
    ],
    "lessons": [
      {
        "id": "u5l1",
        "type": "learn",
        "title": "En dag",
        "instruction": "Les setningene.",
        "model": "Jeg går på skolen klokka åtte (08.00). Jeg spiser klokka tolv (12.00). Jeg leser klokka seks (06.00).",
        "hint": "Se på klokkene og tidene.",
        "explanation": "Bra! Du har lest om en dag.",
        "items": [
          {
            "word": "jeg går på skolen",
            "image": "school",
            "uk": "я йду до школи",
            "th": "ฉันไปโรงเรียน"
          },
          {
            "word": "jeg spiser",
            "image": "eat",
            "uk": "я їм",
            "th": "ฉันกิน"
          },
          {
            "word": "klokka åtte (08.00)",
            "image": "clock8",
            "uk": "о восьмій",
            "th": "แปดโมง"
          },
          {
            "word": "klokka tolv (12.00)",
            "image": "clock12",
            "uk": "о дванадцятій",
            "th": "เที่ยง"
          },
          {
            "word": "klokka seks (06.00)",
            "image": "clock18",
            "uk": "о шостій ранку",
            "th": "หกโมงเช้า"
          }
        ],
        "skill": "exposure",
        "targetKey": "u5l1"
      },
      {
        "id": "u5l2",
        "type": "choice",
        "title": "Klokka tolv",
        "instruction": "Velg riktig klokke.",
        "prompt": "Klokka tolv.",
        "hint": "Se etter 12.00.",
        "explanation": "Ja! Klokka er tolv.",
        "options": [
          {
            "id": "a",
            "label": "08.00",
            "image": "clock8"
          },
          {
            "id": "b",
            "label": "12.00",
            "image": "clock12"
          }
        ],
        "correct": "b",
        "skill": "recognition",
        "targetKey": "u5l2"
      },
      {
        "id": "u5l3",
        "type": "choice",
        "optionsImageOnly": true,
        "title": "Jeg spiser",
        "instruction": "Velg riktig bilde.",
        "prompt": "Jeg spiser.",
        "hint": "Finn personen som spiser.",
        "explanation": "Ja! Personen spiser.",
        "options": [
          {
            "id": "a",
            "label": "spiser",
            "image": "eat"
          },
          {
            "id": "b",
            "label": "leser",
            "image": "read"
          }
        ],
        "correct": "a",
        "skill": "recognition",
        "targetKey": "u5l3"
      },
      {
        "id": "u5l4",
        "type": "build",
        "title": "Klokka åtte",
        "instruction": "Bygg setningen.",
        "model": "Jeg går på skolen klokka åtte.",
        "hint": "Start med «Jeg».",
        "explanation": "Bra! Du bygde setningen.",
        "tokens": [
          "klokka åtte",
          "Jeg",
          "går på skolen"
        ],
        "answer": [
          "Jeg",
          "går på skolen",
          "klokka åtte"
        ],
        "sentence": true,
        "skill": "construction",
        "targetKey": "u5l4"
      },
      {
        "id": "u5l5",
        "type": "input",
        "title": "Klokka seks",
        "instruction": "Fullfør.",
        "model": "Jeg leser klokka seks (06.00).",
        "before": "Jeg leser klokka",
        "after": ".",
        "image": "clock18",
        "accepted": [
          "seks"
        ],
        "hint": "Se på modellen.",
        "explanation": "Ja! Jeg leser klokka seks.",
        "skill": "recall",
        "targetKey": "u5l5"
      },
      {
        "id": "u5l6",
        "type": "write",
        "title": "Min dag",
        "instruction": "Skriv én setning om dagen din.",
        "model": "Jeg spiser klokka tolv.",
        "placeholder": "Jeg ...",
        "example": "Jeg leser klokka seks.",
        "starters": "Jeg ...",
        "hint": "Bruk en setning fra modellen eller ordene du kjenner.",
        "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
        "checks": [
          "Jeg startet med «Jeg».",
          "Jeg satte punktum."
        ],
        "minWords": 1,
        "skill": "writing",
        "targetKey": "u5l6"
      }
    ]
  },
  {
    "id": "u6",
    "number": "14",
    "title": "Planer",
    "level": "A1 – øving",
    "stage": "a1",
    "intro": "Fortell hva du skal gjøre.",
    "goal": "Jeg kan bruke «jeg skal» om en plan.",
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
        "id": "u6l1",
        "type": "learn",
        "title": "Jeg skal",
        "instruction": "Les setningene.",
        "model": "Jeg skal lese i morgen. Jeg skal skrive på mandag.",
        "hint": "«Skal» forteller om en plan.",
        "explanation": "Bra! Du har lest to planer.",
        "items": [
          {
            "word": "jeg skal lese",
            "image": "read",
            "uk": "я буду читати",
            "th": "ฉันจะอ่าน"
          },
          {
            "word": "jeg skal skrive",
            "image": "write",
            "uk": "я буду писати",
            "th": "ฉันจะเขียน"
          },
          {
            "word": "i morgen",
            "image": "tomorrow",
            "uk": "завтра",
            "th": "พรุ่งนี้"
          },
          {
            "word": "mandag",
            "image": "monday",
            "uk": "понеділок",
            "th": "วันจันทร์"
          },
          {
            "word": "tirsdag",
            "image": "tuesday",
            "uk": "вівторок",
            "th": "วันอังคาร"
          }
        ],
        "skill": "exposure",
        "targetKey": "u6l1"
      },
      {
        "id": "u6l2",
        "type": "choice",
        "title": "En plan",
        "instruction": "Velg setningen med «skal».",
        "hint": "Se etter «skal».",
        "explanation": "Ja! Setningen har «skal».",
        "options": [
          {
            "id": "a",
            "label": "Jeg leser."
          },
          {
            "id": "b",
            "label": "Jeg skal lese."
          }
        ],
        "correct": "b",
        "skill": "recognition",
        "targetKey": "u6l2"
      },
      {
        "id": "u6l3",
        "type": "choice",
        "title": "En dag",
        "instruction": "Velg dagen i setningen.",
        "prompt": "Jeg skal skrive på tirsdag.",
        "hint": "Dagen står sist.",
        "explanation": "Ja, dagen er tirsdag.",
        "options": [
          {
            "id": "a",
            "label": "mandag"
          },
          {
            "id": "b",
            "label": "tirsdag"
          }
        ],
        "correct": "b",
        "skill": "recognition",
        "targetKey": "u6l3"
      },
      {
        "id": "u6l4",
        "type": "build",
        "title": "En plan for i morgen",
        "instruction": "Bygg setningen.",
        "model": "Jeg skal lese i morgen.",
        "hint": "Start med «Jeg».",
        "explanation": "Bra! Du har bygget en plan.",
        "tokens": [
          "i morgen",
          "skal",
          "Jeg",
          "lese"
        ],
        "answer": [
          "Jeg",
          "skal",
          "lese",
          "i morgen"
        ],
        "sentence": true,
        "skill": "construction",
        "targetKey": "u6l4"
      },
      {
        "id": "u6l5",
        "type": "input",
        "title": "Skrive på mandag",
        "instruction": "Fullfør.",
        "model": "Jeg skal skrive på mandag.",
        "before": "Jeg skal",
        "after": "på mandag.",
        "accepted": [
          "skrive"
        ],
        "hint": "Se på modellen.",
        "explanation": "Ja! Jeg skal skrive på mandag.",
        "skill": "recall",
        "targetKey": "u6l5"
      },
      {
        "id": "u6l6",
        "type": "write",
        "title": "Min plan",
        "instruction": "Skriv én setning om en plan.",
        "model": "Jeg skal lese i morgen.",
        "placeholder": "Jeg skal ...",
        "example": "Jeg skal skrive på tirsdag.",
        "starters": "Jeg skal ...",
        "hint": "Bruk «Jeg skal» og lese eller skrive.",
        "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
        "checks": [
          "Jeg brukte «Jeg skal».",
          "Jeg satte punktum."
        ],
        "minWords": 1,
        "skill": "writing",
        "targetKey": "u6l6"
      }
    ]
  },
  {
    "id": "u7",
    "number": "15",
    "title": "Korte beskjeder",
    "level": "A1 – øving",
    "stage": "a1",
    "intro": "Les korte beskjeder og finn hvem, hva og når.",
    "goal": "Jeg kan finne informasjon som står i en beskjed.",
    "words": [
      "hvem",
      "hva",
      "når"
    ],
    "lessons": [
      {
        "id": "u7l1",
        "type": "learn",
        "title": "Les en beskjed",
        "instruction": "Les beskjeden.",
        "model": "Hei! Jeg heter Anna. Jeg skal lese på skolen på mandag.",
        "hint": "Hvem er Anna? Hva skal Anna gjøre? Når?",
        "explanation": "Bra! Du har lest en beskjed.",
        "items": [
          {
            "word": "hvem: Anna",
            "image": "person",
            "uk": "хто: Анна",
            "th": "ใคร: อันนา"
          },
          {
            "word": "hva: lese på skolen",
            "image": "read",
            "uk": "що: читати в школі",
            "th": "อะไร: อ่านที่โรงเรียน"
          },
          {
            "word": "når: på mandag",
            "image": "calendar",
            "uk": "коли: у понеділок",
            "th": "เมื่อไร: วันจันทร์"
          }
        ],
        "skill": "exposure",
        "targetKey": "u7l1"
      },
      {
        "id": "u7l2",
        "type": "choice",
        "title": "Hvem?",
        "instruction": "Velg riktig navn.",
        "prompt": "Hei! Jeg heter Anna. Jeg skal lese på skolen på mandag.",
        "hint": "Se etter «Jeg heter».",
        "explanation": "Ja! Anna har skrevet beskjeden.",
        "options": [
          {
            "id": "a",
            "label": "Anna"
          },
          {
            "id": "b",
            "label": "Mali"
          }
        ],
        "correct": "a",
        "skill": "reading",
        "targetKey": "u7l2"
      },
      {
        "id": "u7l3",
        "type": "choice",
        "title": "Hva?",
        "instruction": "Velg det Anna skal gjøre.",
        "prompt": "Hei! Jeg heter Anna. Jeg skal lese på skolen på mandag.",
        "hint": "Se etter «Jeg skal».",
        "explanation": "Ja! Anna skal lese.",
        "options": [
          {
            "id": "a",
            "label": "lese"
          },
          {
            "id": "b",
            "label": "skrive"
          }
        ],
        "correct": "a",
        "skill": "reading",
        "targetKey": "u7l3",
        "variants": [
          {
            "targetKey": "message_read",
            "prompt": "Hei! Jeg heter Anna. Jeg skal lese på skolen på mandag.",
            "options": [
              {
                "id": "a",
                "label": "lese"
              },
              {
                "id": "b",
                "label": "skrive"
              }
            ],
            "correct": "a",
            "hint": "Se etter «Jeg skal».",
            "explanation": "Anna skal lese."
          },
          {
            "targetKey": "message_write",
            "prompt": "Hei! Jeg heter Mali. Jeg skal skrive på skolen på tirsdag.",
            "options": [
              {
                "id": "a",
                "label": "skrive"
              },
              {
                "id": "b",
                "label": "lese"
              }
            ],
            "correct": "a",
            "hint": "Se etter «Jeg skal».",
            "explanation": "Mali skal skrive."
          }
        ]
      },
      {
        "id": "u7l4",
        "type": "input",
        "title": "Når?",
        "instruction": "Fullfør.",
        "prompt": "Hei! Jeg heter Mali. Jeg skal skrive på tirsdag.",
        "before": "Jeg skal skrive på",
        "after": ".",
        "accepted": [
          "tirsdag"
        ],
        "hint": "Finn dagen i beskjeden.",
        "explanation": "Ja! Mali skal skrive på tirsdag.",
        "skill": "recall",
        "targetKey": "u7l4"
      },
      {
        "id": "u7l5",
        "type": "choice",
        "title": "Les litt mer",
        "instruction": "Velg når Anna skal lese.",
        "prompt": "Hei! Jeg heter Anna. Jeg har en bok og en penn. Jeg er på skolen. Jeg skal lese på skolen på tirsdag klokka tolv. Jeg skal skrive i morgen.",
        "hint": "Finn «Jeg skal lese» og se etter dagen.",
        "explanation": "Ja! Anna skal lese på tirsdag.",
        "options": [
          {
            "id": "a",
            "label": "på mandag"
          },
          {
            "id": "b",
            "label": "på tirsdag"
          }
        ],
        "correct": "b",
        "skill": "reading",
        "targetKey": "u7l5"
      },
      {
        "id": "u7l6",
        "type": "write",
        "title": "En kort beskjed",
        "instruction": "Skriv en kort beskjed.",
        "model": "Hei! Jeg heter Anna. Jeg skal lese i morgen.",
        "placeholder": "Hei! Jeg heter ...",
        "example": "Hei! Jeg heter Mali. Jeg skal skrive på tirsdag.",
        "starters": "Hei! Jeg heter ... Jeg skal ...",
        "hint": "Bruk modellen og skriv ditt eget navn.",
        "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
        "checks": [
          "Jeg skrev navnet mitt.",
          "Jeg skrev hva jeg skal gjøre.",
          "Jeg skrev når."
        ],
        "minWords": 1,
        "skill": "writing",
        "targetKey": "u7l6"
      }
    ]
  },
  {
    "id": "u8",
    "number": "16",
    "title": "Skriv selv",
    "level": "A1 – øving",
    "stage": "a1",
    "intro": "Bruk ord og setninger du kjenner.",
    "goal": "Jeg kan skrive to til fire korte setninger.",
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
        "id": "u8l1",
        "type": "learn",
        "title": "Se en tekst",
        "instruction": "Les teksten.",
        "model": "Hei! Jeg heter Anna. Jeg har en bok. Jeg leser på skolen. Jeg skal skrive i morgen.",
        "hint": "Se på én setning om gangen.",
        "explanation": "Bra! Du har lest en kort tekst.",
        "items": [
          {
            "word": "Jeg heter Anna.",
            "image": "person",
            "uk": "Мене звати Анна.",
            "th": "ฉันชื่ออันนา"
          },
          {
            "word": "Jeg har en bok.",
            "image": "book",
            "uk": "У мене є книга.",
            "th": "ฉันมีหนังสือ"
          },
          {
            "word": "Jeg leser på skolen.",
            "image": "read",
            "uk": "Я читаю у школі.",
            "th": "ฉันอ่านที่โรงเรียน"
          },
          {
            "word": "Jeg skal skrive i morgen.",
            "image": "calendar",
            "uk": "Я буду писати завтра.",
            "th": "ฉันจะเขียนพรุ่งนี้"
          }
        ],
        "skill": "exposure",
        "targetKey": "u8l1"
      },
      {
        "id": "u8l2",
        "type": "choice",
        "title": "Finn setningen",
        "instruction": "Velg setningen.",
        "image": "book",
        "hint": "Se etter «en bok».",
        "explanation": "Ja! Setningen handler om en bok.",
        "options": [
          {
            "id": "a",
            "label": "Jeg har en bok."
          },
          {
            "id": "b",
            "label": "Jeg har en penn."
          }
        ],
        "correct": "a",
        "skill": "recognition",
        "targetKey": "u8l2"
      },
      {
        "id": "u8l3",
        "type": "choice",
        "title": "En plan",
        "instruction": "Velg setningen med «skal».",
        "hint": "Se etter «skal».",
        "explanation": "Ja! Setningen har «skal».",
        "options": [
          {
            "id": "a",
            "label": "Jeg leser."
          },
          {
            "id": "b",
            "label": "Jeg skal lese i morgen."
          }
        ],
        "correct": "b",
        "skill": "recognition",
        "targetKey": "u8l3"
      },
      {
        "id": "u8l4",
        "type": "build",
        "title": "En setning",
        "instruction": "Bygg setningen.",
        "model": "Jeg har en penn.",
        "hint": "Start med «Jeg».",
        "explanation": "Bra! Du har bygget en setning.",
        "tokens": [
          "en penn",
          "Jeg",
          "har"
        ],
        "answer": [
          "Jeg",
          "har",
          "en penn"
        ],
        "sentence": true,
        "skill": "construction",
        "targetKey": "u8l4"
      },
      {
        "id": "u8l5",
        "type": "input",
        "title": "En plan",
        "instruction": "Fullfør.",
        "model": "Jeg skal lese i morgen.",
        "before": "Jeg skal",
        "after": "i morgen.",
        "accepted": [
          "lese"
        ],
        "hint": "Se på modellen.",
        "explanation": "Ja! Jeg skal lese i morgen.",
        "skill": "recall",
        "targetKey": "u8l5",
        "variants": [
          {
            "targetKey": "plan_read",
            "model": "Jeg skal lese i morgen.",
            "before": "Jeg skal",
            "after": "i morgen.",
            "accepted": [
              "lese"
            ],
            "hint": "Tenk på en plan om å lese.",
            "explanation": "Jeg skal lese i morgen."
          },
          {
            "targetKey": "plan_write",
            "model": "Jeg skal skrive i morgen.",
            "before": "Jeg skal",
            "after": "i morgen.",
            "accepted": [
              "skrive"
            ],
            "hint": "Tenk på en plan om å skrive.",
            "explanation": "Jeg skal skrive i morgen."
          }
        ]
      },
      {
        "id": "u8l6",
        "type": "write",
        "title": "Skriv selv",
        "instruction": "Skriv to til fire korte setninger.",
        "model": "Jeg heter Anna. Jeg har en bok. Jeg leser på skolen. Jeg skal skrive i morgen.",
        "placeholder": "Jeg heter ...",
        "example": "Jeg heter Mali. Jeg har en penn. Jeg skal lese i morgen.",
        "starters": "Jeg heter ... Jeg har ... Jeg leser ... Jeg skal ...",
        "hint": "Bruk modellen og ord du kjenner.",
        "explanation": "Teksten er lagret. Les den sammen med en medelev eller læreren.",
        "checks": [
          "Jeg skrev to til fire setninger.",
          "Jeg startet setningene med stor bokstav.",
          "Jeg satte punktum."
        ],
        "minWords": 1,
        "skill": "writing",
        "targetKey": "u8l6"
      }
    ]
  }
];

const GLOSSARY = [
  {
    "word": "en telefon",
    "uk": "телефон",
    "th": "โทรศัพท์",
    "meaning": "En telefon.",
    "image": "phone"
  },
  {
    "word": "her er",
    "uk": "ось",
    "th": "นี่คือ",
    "meaning": "Her er en bok."
  },
  {
    "word": "én",
    "uk": "один",
    "th": "หนึ่ง",
    "meaning": "Tallet 1.",
    "image": "dots1"
  },
  {
    "word": "to",
    "uk": "два",
    "th": "สอง",
    "meaning": "Tallet 2.",
    "image": "dots2"
  },
  {
    "word": "tre",
    "uk": "три",
    "th": "สาม",
    "meaning": "Tallet 3.",
    "image": "dots3"
  },
  {
    "word": "rød",
    "uk": "червоний",
    "th": "สีแดง",
    "meaning": "En rød bok.",
    "image": "book-red"
  },
  {
    "word": "blå",
    "uk": "синій",
    "th": "สีน้ำเงิน",
    "meaning": "En blå bok.",
    "image": "book-blue"
  },
  {
    "word": "grønn",
    "uk": "зелений",
    "th": "สีเขียว",
    "meaning": "En grønn bok.",
    "image": "book-green"
  },
  {
    "word": "stor",
    "uk": "великий",
    "th": "ใหญ่",
    "meaning": "En stor bok.",
    "image": "big-book"
  },
  {
    "word": "liten",
    "uk": "маленький",
    "th": "เล็ก",
    "meaning": "En liten bok.",
    "image": "small-book"
  },
  {
    "word": "en bok",
    "uk": "книга",
    "th": "หนังสือ",
    "meaning": "Du kan lese i en bok.",
    "image": "book"
  },
  {
    "word": "en penn",
    "uk": "ручка",
    "th": "ปากกา",
    "meaning": "Du kan skrive med en penn.",
    "image": "pen"
  },
  {
    "word": "et bord",
    "uk": "стіл",
    "th": "โต๊ะ",
    "meaning": "Du kan ha en bok på et bord.",
    "image": "table"
  },
  {
    "word": "en stol",
    "uk": "стілець",
    "th": "เก้าอี้",
    "meaning": "Du kan sitte på en stol.",
    "image": "chair"
  },
  {
    "word": "hei",
    "uk": "привіт",
    "th": "สวัสดี",
    "meaning": "En hilsen."
  },
  {
    "word": "navn",
    "uk": "ім’я",
    "th": "ชื่อ",
    "meaning": "Anna er et navn."
  },
  {
    "word": "jeg",
    "uk": "я",
    "th": "ฉัน",
    "meaning": "Jeg snakker om meg selv.",
    "image": "self"
  },
  {
    "word": "du",
    "uk": "ти / ви",
    "th": "คุณ",
    "meaning": "Jeg snakker til deg.",
    "image": "you"
  },
  {
    "word": "jeg heter",
    "uk": "мене звати",
    "th": "ฉันชื่อ",
    "meaning": "Jeg sier navnet mitt."
  },
  {
    "word": "er",
    "uk": "є / перебуває",
    "th": "เป็น / อยู่",
    "meaning": "Jeg er på skolen."
  },
  {
    "word": "og",
    "uk": "і / та",
    "th": "และ",
    "meaning": "En bok og en penn."
  },
  {
    "word": "jeg har",
    "uk": "у мене є",
    "th": "ฉันมี",
    "meaning": "Jeg har en bok."
  },
  {
    "word": "jeg leser",
    "uk": "я читаю",
    "th": "ฉันอ่าน",
    "meaning": "Jeg leser en bok.",
    "image": "read"
  },
  {
    "word": "jeg skriver",
    "uk": "я пишу",
    "th": "ฉันเขียน",
    "meaning": "Jeg skriver med en penn.",
    "image": "write"
  },
  {
    "word": "en skole",
    "uk": "школа",
    "th": "โรงเรียน",
    "meaning": "Et sted for å lære.",
    "image": "school"
  },
  {
    "word": "på skolen",
    "uk": "у школі",
    "th": "ที่โรงเรียน",
    "meaning": "Jeg er på skolen.",
    "image": "school"
  },
  {
    "word": "boka",
    "uk": "книга",
    "th": "หนังสือเล่มนั้น",
    "meaning": "Boka er på bordet.",
    "image": "book"
  },
  {
    "word": "en sekk",
    "uk": "рюкзак",
    "th": "กระเป๋าเป้",
    "meaning": "Du kan ha en bok i en sekk.",
    "image": "bag"
  },
  {
    "word": "på",
    "uk": "на",
    "th": "บน",
    "meaning": "Boka er på bordet.",
    "image": "book-on-table"
  },
  {
    "word": "i",
    "uk": "у / в",
    "th": "ใน",
    "meaning": "Boka er i sekken.",
    "image": "book-in-bag"
  },
  {
    "word": "under",
    "uk": "під",
    "th": "ใต้",
    "meaning": "Boka er under bordet.",
    "image": "book-under-table"
  },
  {
    "word": "bordet",
    "uk": "стіл",
    "th": "โต๊ะตัวนั้น",
    "meaning": "Boka er på bordet.",
    "image": "table"
  },
  {
    "word": "sekken",
    "uk": "рюкзак",
    "th": "กระเป๋าเป้ใบนั้น",
    "meaning": "Boka er i sekken.",
    "image": "bag"
  },
  {
    "word": "jeg går på skolen",
    "uk": "я йду до школи",
    "th": "ฉันไปโรงเรียน",
    "meaning": "Jeg går på skolen klokka åtte.",
    "image": "school"
  },
  {
    "word": "jeg spiser",
    "uk": "я їм",
    "th": "ฉันกิน",
    "meaning": "Jeg spiser klokka tolv.",
    "image": "eat"
  },
  {
    "word": "klokka åtte",
    "uk": "о восьмій",
    "th": "แปดโมง",
    "meaning": "08.00.",
    "image": "clock8"
  },
  {
    "word": "klokka tolv",
    "uk": "о дванадцятій",
    "th": "เที่ยง",
    "meaning": "12.00.",
    "image": "clock12"
  },
  {
    "word": "klokka seks",
    "uk": "о шостій",
    "th": "หกโมง",
    "meaning": "Her: 06.00.",
    "image": "clock18"
  },
  {
    "word": "jeg skal",
    "uk": "я буду",
    "th": "ฉันจะ",
    "meaning": "Jeg skal lese i morgen."
  },
  {
    "word": "lese",
    "uk": "читати",
    "th": "อ่าน",
    "meaning": "Jeg skal lese.",
    "image": "read"
  },
  {
    "word": "skrive",
    "uk": "писати",
    "th": "เขียน",
    "meaning": "Jeg skal skrive.",
    "image": "write"
  },
  {
    "word": "i morgen",
    "uk": "завтра",
    "th": "พรุ่งนี้",
    "meaning": "Dagen etter i dag.",
    "image": "tomorrow"
  },
  {
    "word": "mandag",
    "uk": "понеділок",
    "th": "วันจันทร์",
    "meaning": "En dag i uka.",
    "image": "monday"
  },
  {
    "word": "tirsdag",
    "uk": "вівторок",
    "th": "วันอังคาร",
    "meaning": "En dag i uka.",
    "image": "tuesday"
  },
  {
    "word": "hvem",
    "uk": "хто",
    "th": "ใคร",
    "meaning": "Hvem? Anna."
  },
  {
    "word": "hva",
    "uk": "що",
    "th": "อะไร",
    "meaning": "Hva? Lese."
  },
  {
    "word": "når",
    "uk": "коли",
    "th": "เมื่อไร",
    "meaning": "Når? På tirsdag."
  },
  {
    "word": "hvor mange",
    "uk": "скільки",
    "th": "กี่ / จำนวนเท่าไร",
    "meaning": "Hvor mange? To."
  },
  {
    "word": "to penner",
    "uk": "дві ручки",
    "th": "ปากกาสองด้าม",
    "meaning": "2 penner.",
    "image": "pen"
  }
];
