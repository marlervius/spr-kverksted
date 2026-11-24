const COURSE_B1 = {
  "units": [
    {
      "id": "u37",
      "number": "45",
      "title": "En jobbannonse og en søknad",
      "stage": "b1",
      "level": "Mot B1",
      "intro": "Jeg kan lese en annonse og skrive en relevant henvendelse.",
      "goal": "Jeg kan lese en annonse og skrive en relevant henvendelse.",
      "words": [
        "en søknad",
        "en erfaring",
        "en oppgave",
        "et krav",
        "en CV"
      ],
      "lessons": [
        {
          "id": "u37l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u37_learn",
          "title": "Les og lær",
          "instruction": "Les teksten, språkbroene og uttrykkene.",
          "hint": "Les teksten én gang til.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Fiktiv annonse: Verkstedet søker en elev til praksis på biblioteket etter skolen. Oppgavene er å sette bøker på plass og hjelpe besøkende med å finne fram. Du må være tilgjengelig på tirsdager og like å samarbeide. Erfaring med kundeservice er nyttig, men ikke et krav. Skriv kort om hvorfor du ønsker praksis, og fortell om relevant erfaring.\n\nAmir har jobbet som frivillig på en skolekafé. Der har han lært å samarbeide og hjelpe andre. Han kan møte på tirsdager. Han ønsker å lære mer om bibliotekarbeid. I søknaden vil han forklare sammenhengen mellom det han har gjort før, og oppgavene i annonsen. En CV kan gi en kort oversikt; søknaden kan forklare hvorfor erfaringen er relevant. Dette er en øvingsannonse, ikke en virkelig stilling.\n\nFor søkeren er det også viktig å lese hele annonsen før han skriver. Oppgaven med bøker handler om orden på biblioteket, mens oppgaven med besøkende handler om å hjelpe mennesker. Amir kan forklare hvilken oppgave han helst vil lære mer om og hvorfor.",
          "bridge": [
            {
              "from": "Jeg jobbet på skolekafé.",
              "to": "Jeg har jobbet på skolekafé og har lært å samarbeide."
            },
            {
              "from": "Jeg har erfaring.",
              "to": "Erfaringen er relevant fordi jeg har hjulpet andre."
            },
            {
              "from": "gjør → gjorde → har gjort",
              "to": "Noe Amir har gjort før."
            },
            {
              "from": "hjelper → hjalp → har hjulpet",
              "to": "Amir har hjulpet andre."
            }
          ],
          "items": [
            {
              "word": "en søknad",
              "uk": "заява",
              "th": "ใบสมัคร"
            },
            {
              "word": "en erfaring",
              "uk": "досвід",
              "th": "ประสบการณ์"
            },
            {
              "word": "en oppgave",
              "uk": "завдання",
              "th": "หน้าที่"
            },
            {
              "word": "et krav",
              "uk": "вимога",
              "th": "ข้อกำหนด"
            },
            {
              "word": "en CV",
              "uk": "резюме",
              "th": "ประวัติย่อ"
            }
          ]
        },
        {
          "id": "u37l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u37_reading",
          "title": "Les og forstå",
          "instruction": "Hvilken erfaring er relevant for oppgaven med å hjelpe besøkende?",
          "hint": "Les kilden nøye.",
          "explanation": "Å hjelpe andre på skolekaféen",
          "prompt": "Fiktiv annonse: Verkstedet søker en elev til praksis på biblioteket etter skolen. Oppgavene er å sette bøker på plass og hjelpe besøkende med å finne fram. Du må være tilgjengelig på tirsdager og like å samarbeide. Erfaring med kundeservice er nyttig, men ikke et krav. Skriv kort om hvorfor du ønsker praksis, og fortell om relevant erfaring.\n\nAmir har jobbet som frivillig på en skolekafé. Der har han lært å samarbeide og hjelpe andre. Han kan møte på tirsdager. Han ønsker å lære mer om bibliotekarbeid. I søknaden vil han forklare sammenhengen mellom det han har gjort før, og oppgavene i annonsen. En CV kan gi en kort oversikt; søknaden kan forklare hvorfor erfaringen er relevant. Dette er en øvingsannonse, ikke en virkelig stilling.\n\nFor søkeren er det også viktig å lese hele annonsen før han skriver. Oppgaven med bøker handler om orden på biblioteket, mens oppgaven med besøkende handler om å hjelpe mennesker. Amir kan forklare hvilken oppgave han helst vil lære mer om og hvorfor.",
          "options": [
            {
              "id": "a",
              "label": "Å hjelpe andre på skolekaféen"
            },
            {
              "id": "b",
              "label": "Å lese annonsen hjemme"
            },
            {
              "id": "c",
              "label": "Å ønske seg en ny bok"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u37l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u37_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør uttrykket.",
          "hint": "Bruk språkbroen og teksten.",
          "explanation": "Jeg har jobbet på en skolekafé.",
          "prompt": "Erfaring: arbeid på skolekafé.",
          "before": "Jeg har",
          "after": "på en skolekafé.",
          "accepted": [
            "jobbet",
            "arbeidet"
          ],
          "model": "Jeg har jobbet på en skolekafé."
        },
        {
          "id": "u37l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u37_build",
          "title": "Bygg en setning",
          "instruction": "Start med «Jeg har jobbet på skolekafé», og bygg setningen.",
          "hint": "Bruk språkbroen.",
          "explanation": "Jeg har jobbet på skolekafé og har lært å hjelpe andre.",
          "prompt": "Erfaring: arbeid på skolekafé.",
          "tokens": [
            "å hjelpe andre",
            "og har lært",
            "Jeg har jobbet på skolekafé"
          ],
          "answer": [
            "Jeg har jobbet på skolekafé",
            "og har lært",
            "å hjelpe andre"
          ],
          "model": "Jeg har jobbet på skolekafé og har lært å hjelpe andre.",
          "sentence": true
        },
        {
          "id": "u37l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u37_repair",
          "title": "Rett meningen",
          "instruction": "Rett den ene opplysningen som er feil.",
          "hint": "Sammenlign setningen med kilden.",
          "explanation": "Praksisen er på tirsdager.",
          "prompt": "Annonse: Praksisen er på tirsdager. Feil: Praksisen er på fredager.",
          "before": "Praksisen er på",
          "after": ".",
          "accepted": [
            "tirsdager"
          ],
          "model": "Praksisen er på tirsdager."
        },
        {
          "id": "u37l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u37_write",
          "title": "Skriv selv",
          "instruction": "Skriv en kort søknad på ett eller to avsnitt, omtrent 8–12 setninger. Du kan bruke en oppdiktet person.",
          "hint": "Bruk kildene og språkbroen.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "Annonse: Biblioteket trenger hjelp til bøker og besøkende på tirsdager.",
          "placeholder": "Skriv her …",
          "model": "Hei til biblioteket! Jeg søker praksis hos dere. Jeg kan møte på tirsdager. Jeg har jobbet på skolekafé. Der har jeg lært å samarbeide. Jeg har også hjulpet andre. Det er nyttig når besøkende trenger hjelp. Jeg ønsker å lære mer om å organisere bøker. Jeg håper å høre fra dere. Vennlig hilsen Amir.",
          "checks": [
            "Jeg skrev hvem jeg henvender meg til og hva jeg søker.",
            "Jeg knyttet erfaring eller læring til en oppgave.",
            "Jeg skrev når jeg kan møte og avsluttet høflig."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u38",
      "number": "46",
      "title": "Når en tjeneste ikke fungerer",
      "stage": "b1",
      "level": "Mot B1",
      "intro": "Jeg kan skrive en saklig melding om et problem.",
      "goal": "Jeg kan skrive en saklig melding om et problem.",
      "words": [
        "en avtale",
        "en bestilling",
        "en dokumentasjon",
        "Jeg ønsker",
        "Kan dere …?"
      ],
      "lessons": [
        {
          "id": "u38l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u38_learn",
          "title": "Les og lær",
          "instruction": "Les teksten, språkbroene og uttrykkene.",
          "hint": "Les teksten én gang til.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Fiktiv avtale: En elev bestiller utskrift av en plakat hos Kopihjørnet. Bestillingen sier farge og levering tirsdag. Eleven betaler på forhånd. Tirsdag får eleven en plakat i svart-hvitt. På kvitteringen står det «farge».\n\nEleven skriver til Kopihjørnet: «Hei! Jeg bestilte en plakat i farge til tirsdag, men plakaten er i svart-hvitt. Kvitteringen viser at jeg bestilte farge. Jeg ønsker en ny plakat i farge. Kan dere svare på meldingen min? Vennlig hilsen Sara.» Meldingen forklarer hva som var avtalt, hva problemet er, og hvilken dokumentasjon eleven har. Den sier også hva eleven ønsker. Slike opplysninger gjør det lettere for mottakeren å undersøke saken. Dette er en oppdiktet situasjon med egne vilkår. Teksten sier ikke hvilke juridiske rettigheter kunden har.\n\nSara kan gjøre meldingen lettere å forstå med en tydelig overskrift og en høflig avslutning. Hun kan beskrive forskjellen mellom avtalen og plakaten hun fikk. Hun trenger ikke gjette hvorfor feilen oppstod. Kvitteringen er relevant fordi den viser hva bestillingen sier.",
          "bridge": [
            {
              "from": "Jeg vil ha en ny plakat.",
              "to": "Jeg ønsker en ny plakat."
            },
            {
              "from": "Svar meg.",
              "to": "Kan dere svare på meldingen min?"
            },
            {
              "from": "bestiller → bestilte",
              "to": "Sara bestilte en plakat."
            },
            {
              "from": "får → fikk",
              "to": "Sara fikk en plakat."
            }
          ],
          "items": [
            {
              "word": "en avtale",
              "uk": "домовленість",
              "th": "ข้อตกลง"
            },
            {
              "word": "en bestilling",
              "uk": "замовлення",
              "th": "คำสั่งซื้อ"
            },
            {
              "word": "en dokumentasjon",
              "uk": "підтвердження",
              "th": "หลักฐาน"
            },
            {
              "word": "Jeg ønsker",
              "uk": "Я бажаю",
              "th": "ฉันต้องการ"
            },
            {
              "word": "Kan dere …?",
              "uk": "Чи можете ви …?",
              "th": "คุณช่วย … ได้ไหม"
            }
          ]
        },
        {
          "id": "u38l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u38_reading",
          "title": "Les og forstå",
          "instruction": "Hva viser kvitteringen?",
          "hint": "Les kilden nøye.",
          "explanation": "At plakaten ble bestilt i farge",
          "prompt": "Fiktiv avtale: En elev bestiller utskrift av en plakat hos Kopihjørnet. Bestillingen sier farge og levering tirsdag. Eleven betaler på forhånd. Tirsdag får eleven en plakat i svart-hvitt. På kvitteringen står det «farge».\n\nEleven skriver til Kopihjørnet: «Hei! Jeg bestilte en plakat i farge til tirsdag, men plakaten er i svart-hvitt. Kvitteringen viser at jeg bestilte farge. Jeg ønsker en ny plakat i farge. Kan dere svare på meldingen min? Vennlig hilsen Sara.» Meldingen forklarer hva som var avtalt, hva problemet er, og hvilken dokumentasjon eleven har. Den sier også hva eleven ønsker. Slike opplysninger gjør det lettere for mottakeren å undersøke saken. Dette er en oppdiktet situasjon med egne vilkår. Teksten sier ikke hvilke juridiske rettigheter kunden har.\n\nSara kan gjøre meldingen lettere å forstå med en tydelig overskrift og en høflig avslutning. Hun kan beskrive forskjellen mellom avtalen og plakaten hun fikk. Hun trenger ikke gjette hvorfor feilen oppstod. Kvitteringen er relevant fordi den viser hva bestillingen sier.",
          "options": [
            {
              "id": "a",
              "label": "At plakaten ble bestilt i farge"
            },
            {
              "id": "b",
              "label": "At plakaten ble levert i farge"
            },
            {
              "id": "c",
              "label": "At leveringen er på fredag"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u38l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u38_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør setningen med «ønsker».",
          "hint": "Bruk språkbroen og teksten.",
          "explanation": "Jeg ønsker en ny plakat.",
          "prompt": "Sara vil be om en ny plakat.",
          "before": "Jeg",
          "after": "en ny plakat.",
          "accepted": [
            "ønsker"
          ],
          "model": "Jeg ønsker en ny plakat."
        },
        {
          "id": "u38l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u38_build",
          "title": "Bygg en setning",
          "instruction": "Start med «Kan dere», og bygg setningen.",
          "hint": "Bruk språkbroen.",
          "explanation": "Kan dere svare på meldingen min?",
          "prompt": "Sara vil be om en ny plakat.",
          "tokens": [
            "meldingen min?",
            "svare på",
            "Kan dere"
          ],
          "answer": [
            "Kan dere",
            "svare på",
            "meldingen min?"
          ],
          "model": "Kan dere svare på meldingen min?",
          "sentence": false
        },
        {
          "id": "u38l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u38_repair",
          "title": "Rett meningen",
          "instruction": "Rett den ene opplysningen som er feil.",
          "hint": "Sammenlign setningen med kilden.",
          "explanation": "Plakaten er i svart-hvitt.",
          "prompt": "Bestilt: farge. Levert: svart-hvitt. Feil: Plakaten er i farge.",
          "before": "Plakaten er i",
          "after": ".",
          "accepted": [
            "svart-hvitt",
            "svart hvitt"
          ],
          "model": "Plakaten er i svart-hvitt."
        },
        {
          "id": "u38l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u38_write",
          "title": "Skriv selv",
          "instruction": "Skriv en saklig melding på ett eller to avsnitt, omtrent 8–12 setninger.",
          "hint": "Bruk kildene og språkbroen.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "Du bestilte en plakat i farge til tirsdag, men fikk svart-hvitt. Kvitteringen viser farge.",
          "placeholder": "Skriv her …",
          "model": "Hei til Kopihjørnet! Jeg skriver om plakatbestillingen min. Jeg bestilte en plakat i farge. Den skulle være klar tirsdag. Jeg fikk plakaten på tirsdag, men den er i svart-hvitt. Kvitteringen viser at jeg bestilte farge. Jeg ønsker en ny plakat i farge. Kan dere undersøke saken? Kan dere svare på meldingen min? Vennlig hilsen Sara.",
          "checks": [
            "Jeg skrev til riktig mottaker og beskrev avtalen.",
            "Jeg forklarte problemet og viste til dokumentasjon.",
            "Jeg skrev et konkret ønske og avsluttet høflig."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u39",
      "number": "47",
      "title": "Les en fagtekst og vurder kilden",
      "stage": "b1",
      "level": "Mot B1",
      "intro": "Jeg kan skille mellom opplysninger og antakelser og vise til en kilde.",
      "goal": "Jeg kan skille mellom opplysninger og antakelser og vise til en kilde.",
      "words": [
        "en kilde",
        "en tabell",
        "ifølge teksten",
        "en antakelse"
      ],
      "lessons": [
        {
          "id": "u39l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u39_learn",
          "title": "Les og lær",
          "instruction": "Les teksten, språkbroene og uttrykkene.",
          "hint": "Les teksten én gang til.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Fiktiv klasseromsundersøkelse, laget til denne øvingen 10. mars: En klasse undersøker hvordan 20 elever kommer til skolen én bestemt dag. Formålet er å øve på å lese en tabell, ikke å beskrive alle elever i Norge. Tabellen viser: går 8, sykler 5, buss 7. Tallene gjelder bare elevene i denne klassen denne dagen.\n\nIfølge tabellen gikk åtte elever. Teksten viser ikke hvorfor de valgte å gå. Kanskje var været fint, men det er en antakelse: Undersøkelsen inneholder ingen opplysning om været. Vi kan heller ikke vite hvordan de samme elevene reiser hver dag. Når vi bruker tall, må vi fortelle hvor de kommer fra, og hva de faktisk viser. Det gjør det lettere for andre å kontrollere påstanden vår.\n\nTabellen har tre kategorier, og summen er 20 elever. Buss er den nest største kategorien i dette eksempelet. Siden kilden bare gjelder én dag, kan en ny undersøkelse på en annen dag gi et annet resultat. Den muligheten vet vi likevel ikke noe sikkert om her.",
          "bridge": [
            {
              "from": "Åtte elever gikk.",
              "to": "Ifølge tabellen gikk åtte elever."
            },
            {
              "from": "Jeg ser et tall.",
              "to": "Teksten viser ikke hvorfor elevene gikk."
            }
          ],
          "items": [
            {
              "word": "en kilde",
              "uk": "джерело",
              "th": "แหล่งข้อมูล"
            },
            {
              "word": "en tabell",
              "uk": "таблиця",
              "th": "ตาราง"
            },
            {
              "word": "ifølge teksten",
              "uk": "згідно з текстом",
              "th": "ตามข้อความ"
            },
            {
              "word": "en antakelse",
              "uk": "припущення",
              "th": "ข้อสันนิษฐาน"
            }
          ]
        },
        {
          "id": "u39l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u39_reading",
          "title": "Les og forstå",
          "instruction": "Hva viser tabellen?",
          "hint": "Les kilden nøye.",
          "explanation": "Åtte elever gikk denne dagen.",
          "prompt": "Fiktiv klasseromsundersøkelse, laget til denne øvingen 10. mars: En klasse undersøker hvordan 20 elever kommer til skolen én bestemt dag. Formålet er å øve på å lese en tabell, ikke å beskrive alle elever i Norge. Tabellen viser: går 8, sykler 5, buss 7. Tallene gjelder bare elevene i denne klassen denne dagen.\n\nIfølge tabellen gikk åtte elever. Teksten viser ikke hvorfor de valgte å gå. Kanskje var været fint, men det er en antakelse: Undersøkelsen inneholder ingen opplysning om været. Vi kan heller ikke vite hvordan de samme elevene reiser hver dag. Når vi bruker tall, må vi fortelle hvor de kommer fra, og hva de faktisk viser. Det gjør det lettere for andre å kontrollere påstanden vår.\n\nTabellen har tre kategorier, og summen er 20 elever. Buss er den nest største kategorien i dette eksempelet. Siden kilden bare gjelder én dag, kan en ny undersøkelse på en annen dag gi et annet resultat. Den muligheten vet vi likevel ikke noe sikkert om her.",
          "options": [
            {
              "id": "a",
              "label": "Åtte elever gikk denne dagen."
            },
            {
              "id": "b",
              "label": "Alle elever i Norge går til skolen."
            },
            {
              "id": "c",
              "label": "Været var fint denne dagen."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u39l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u39_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør uttrykket.",
          "hint": "Bruk språkbroen og teksten.",
          "explanation": "Ifølge tabellen gikk åtte elever.",
          "prompt": "Fiktiv klasseromsundersøkelse: gikk 8, syklet 5, buss 7. Kilde: øvingsdata fra én klasse én dag.",
          "before": "",
          "after": "tabellen gikk åtte elever.",
          "accepted": [
            "Ifølge"
          ],
          "model": "Ifølge tabellen gikk åtte elever."
        },
        {
          "id": "u39l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u39_build",
          "title": "Bygg en setning",
          "instruction": "Start med «Ifølge tabellen», og bygg setningen.",
          "hint": "Bruk språkbroen.",
          "explanation": "Ifølge tabellen gikk åtte elever til skolen.",
          "prompt": "Fiktiv klasseromsundersøkelse: gikk 8, syklet 5, buss 7. Kilde: øvingsdata fra én klasse én dag.",
          "tokens": [
            "til skolen",
            "gikk åtte elever",
            "Ifølge tabellen"
          ],
          "answer": [
            "Ifølge tabellen",
            "gikk åtte elever",
            "til skolen"
          ],
          "model": "Ifølge tabellen gikk åtte elever til skolen.",
          "sentence": true
        },
        {
          "id": "u39l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u39_repair",
          "title": "Rett meningen",
          "instruction": "Rett den ene opplysningen som er feil.",
          "hint": "Sammenlign setningen med kilden.",
          "explanation": "Tabellen viser at åtte elever gikk.",
          "prompt": "Fiktiv klasseromsundersøkelse: gikk 8, syklet 5, buss 7. Feil: Tabellen viser at fem elever gikk.",
          "before": "Tabellen viser at",
          "after": "elever gikk.",
          "accepted": [
            "åtte",
            "8"
          ],
          "model": "Tabellen viser at åtte elever gikk."
        },
        {
          "id": "u39l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u39_write",
          "title": "Skriv selv",
          "instruction": "Forklar hva tabellen viser, og hva den ikke viser. Oppgi kilden og begrunn én antakelse som usikker. Skriv ett eller to avsnitt, omtrent 8–12 setninger.",
          "hint": "Bruk kildene og språkbroen.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "Fiktiv klasseromsundersøkelse, laget til denne øvingen 10. mars: En klasse undersøker hvordan 20 elever kommer til skolen én bestemt dag. Formålet er å øve på å lese en tabell, ikke å beskrive alle elever i Norge. Tabellen viser: går 8, sykler 5, buss 7. Tallene gjelder bare elevene i denne klassen denne dagen.\n\nIfølge tabellen gikk åtte elever. Teksten viser ikke hvorfor de valgte å gå. Kanskje var været fint, men det er en antakelse: Undersøkelsen inneholder ingen opplysning om været. Vi kan heller ikke vite hvordan de samme elevene reiser hver dag. Når vi bruker tall, må vi fortelle hvor de kommer fra, og hva de faktisk viser. Det gjør det lettere for andre å kontrollere påstanden vår.\n\nTabellen har tre kategorier, og summen er 20 elever. Buss er den nest største kategorien i dette eksempelet. Siden kilden bare gjelder én dag, kan en ny undersøkelse på en annen dag gi et annet resultat. Den muligheten vet vi likevel ikke noe sikkert om her.",
          "placeholder": "Skriv her …",
          "model": "Ifølge den fiktive klassetabellen gikk åtte elever til skolen. Fem syklet. Sju tok buss. Kilden gjelder én klasse på én dag. Spørreskjemaet spør ikke om årsaker. Kanskje var været fint, men det vet vi ikke fra kildene. Vi kan heller ikke si at tallene gjelder alle elever. Derfor bør vi oppgi både kilden og begrensningen når vi bruker tallene.",
          "checks": [
            "Jeg viste til kilden og beskrev minst to opplysninger.",
            "Jeg skilte en antakelse fra det tabellen viser.",
            "Jeg forklarte hvorfor kilden har en begrensning."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u40",
      "number": "48",
      "title": "En kort fortelling – mer enn det som står",
      "stage": "b1",
      "level": "Mot B1",
      "intro": "Jeg kan lese en fortelling og begrunne en tolkning med tekstbelegg.",
      "goal": "Jeg kan lese en fortelling og begrunne en tolkning med tekstbelegg.",
      "words": [
        "en fortelling",
        "et spor",
        "mens",
        "da"
      ],
      "lessons": [
        {
          "id": "u40l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u40_learn",
          "title": "Les og lær",
          "instruction": "Les teksten, språkbroene og uttrykkene.",
          "hint": "Les teksten én gang til.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Egenskrevet fortelling: Lea gikk inn i klasserommet før timen. Teksten hennes var i en mappe. Mens de andre elevene jobbet, leste hun de første linjene igjen. Hun var ved døra og gikk bort til klokka. Da læreren gikk bort til henne, var mappa på bordet. «Vil du lese teksten min først?» spurte hun. Læreren leste teksten sammen med henne.\n\nEtterpå leste Lea teksten for gruppa. En elev skrev at starten gjorde henne nysgjerrig. Lea skrev et forslag fra gruppa på et ark. Vi får ikke direkte vite hva Lea føler før læreren kommer. Vi kan likevel foreslå en tolkning og vise til detaljer i teksten. Flere tolkninger kan passe når de er begrunnet med konkrete spor.\n\nI teksten er gruppa en mottaker for teksten til Lea. Læreren leser først, og deretter leser Lea for gruppa. Forslaget fra gruppa gir Lea noe konkret å arbeide videre med. En leser kan peke på disse hendelsene når leseren forklarer en mulig tolkning.",
          "bridge": [
            {
              "from": "å spørre → spør → spurte",
              "to": "Lea spurte læreren. Én elev skrev at starten gjorde henne nysgjerrig: gjøre → gjorde."
            },
            {
              "from": "Lea leste. De andre jobbet samtidig.",
              "to": "Mens de andre jobbet, leste Lea."
            },
            {
              "from": "Læreren gikk bort. Mappa var på bordet.",
              "to": "Da læreren gikk bort, var mappa på bordet."
            }
          ],
          "items": [
            {
              "word": "en fortelling",
              "uk": "оповідання",
              "th": "เรื่องเล่า"
            },
            {
              "word": "et spor",
              "uk": "підказка",
              "th": "เบาะแส"
            },
            {
              "word": "mens",
              "uk": "поки",
              "th": "ขณะที่"
            },
            {
              "word": "da",
              "uk": "коли",
              "th": "เมื่อ"
            }
          ]
        },
        {
          "id": "u40l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u40_reading",
          "title": "Les og forstå",
          "instruction": "Hva gjør Lea mens de andre jobber?",
          "hint": "Les kilden nøye.",
          "explanation": "Hun leser de første linjene igjen.",
          "prompt": "Egenskrevet fortelling: Lea gikk inn i klasserommet før timen. Teksten hennes var i en mappe. Mens de andre elevene jobbet, leste hun de første linjene igjen. Hun var ved døra og gikk bort til klokka. Da læreren gikk bort til henne, var mappa på bordet. «Vil du lese teksten min først?» spurte hun. Læreren leste teksten sammen med henne.\n\nEtterpå leste Lea teksten for gruppa. En elev skrev at starten gjorde henne nysgjerrig. Lea skrev et forslag fra gruppa på et ark. Vi får ikke direkte vite hva Lea føler før læreren kommer. Vi kan likevel foreslå en tolkning og vise til detaljer i teksten. Flere tolkninger kan passe når de er begrunnet med konkrete spor.\n\nI teksten er gruppa en mottaker for teksten til Lea. Læreren leser først, og deretter leser Lea for gruppa. Forslaget fra gruppa gir Lea noe konkret å arbeide videre med. En leser kan peke på disse hendelsene når leseren forklarer en mulig tolkning.",
          "options": [
            {
              "id": "a",
              "label": "Hun leser de første linjene igjen."
            },
            {
              "id": "b",
              "label": "Hun går hjem."
            },
            {
              "id": "c",
              "label": "Hun skriver på tavla."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u40l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u40_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør uttrykket.",
          "hint": "Bruk språkbroen og teksten.",
          "explanation": "Mens de andre jobbet, leste Lea.",
          "prompt": "Mens Lea leser, arbeider de andre elevene.",
          "before": "Mens de andre",
          "after": ", leste Lea.",
          "accepted": [
            "jobbet",
            "arbeidet"
          ],
          "model": "Mens de andre jobbet, leste Lea."
        },
        {
          "id": "u40l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u40_build",
          "title": "Bygg en setning",
          "instruction": "Start med «Mens de andre jobbet,», og bygg setningen.",
          "hint": "Bruk språkbroen.",
          "explanation": "Mens de andre jobbet, leste Lea teksten sin.",
          "prompt": "Mens Lea leser, arbeider de andre elevene.",
          "tokens": [
            "teksten sin",
            "leste Lea",
            "Mens de andre jobbet,"
          ],
          "answer": [
            "Mens de andre jobbet,",
            "leste Lea",
            "teksten sin"
          ],
          "model": "Mens de andre jobbet, leste Lea teksten sin.",
          "sentence": true
        },
        {
          "id": "u40l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u40_repair",
          "title": "Rett meningen",
          "instruction": "Rett den ene opplysningen som er feil.",
          "hint": "Sammenlign setningen med kilden.",
          "explanation": "Lea leste for gruppa.",
          "prompt": "Fortellingen: Etterpå leste Lea teksten for gruppa. En elev skrev at starten gjorde henne nysgjerrig. Feil: Lea leste for hele skolen.",
          "before": "Lea leste for",
          "after": ".",
          "accepted": [
            "gruppa",
            "gruppen"
          ],
          "model": "Lea leste for gruppa."
        },
        {
          "id": "u40l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u40_write",
          "title": "Skriv selv",
          "instruction": "Foreslå hva Lea kan føle før læreren kommer. Bruk to spor fra fortellingen og forklar hvordan de støtter tolkningen. Skriv ett eller to avsnitt, omtrent 8–12 setninger.",
          "hint": "Bruk kildene og språkbroen.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "Egenskrevet fortelling: Lea gikk inn i klasserommet før timen. Teksten hennes var i en mappe. Mens de andre elevene jobbet, leste hun de første linjene igjen. Hun var ved døra og gikk bort til klokka. Da læreren gikk bort til henne, var mappa på bordet. «Vil du lese teksten min først?» spurte hun. Læreren leste teksten sammen med henne.\n\nEtterpå leste Lea teksten for gruppa. En elev skrev at starten gjorde henne nysgjerrig. Lea skrev et forslag fra gruppa på et ark. Vi får ikke direkte vite hva Lea føler før læreren kommer. Vi kan likevel foreslå en tolkning og vise til detaljer i teksten. Flere tolkninger kan passe når de er begrunnet med konkrete spor.\n\nI teksten er gruppa en mottaker for teksten til Lea. Læreren leser først, og deretter leser Lea for gruppa. Forslaget fra gruppa gir Lea noe konkret å arbeide videre med. En leser kan peke på disse hendelsene når leseren forklarer en mulig tolkning.",
          "placeholder": "Skriv her …",
          "model": "Jeg tror Lea kan være spent før lesingen. Hun går til døra og klokka. Hun spør også læreren om å lese teksten først. Det kan tyde på at hun ønsker støtte. Etterpå leser hun for gruppa. Hun skriver et forslag fra gruppa. Jeg tolker det som at hun kan bruke responsen videre. En annen tolkning er mulig hvis den støttes med spor fra teksten.",
          "checks": [
            "Jeg foreslo en mulig tolkning og viste til to konkrete spor.",
            "Jeg forklarte sammenhengen mellom spor og tolkning.",
            "Jeg skrev sammenhengende og brukte fortid der det passer."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u41",
      "number": "49",
      "title": "Skriv et begrunnet innlegg",
      "stage": "b1",
      "level": "Mot B1",
      "intro": "Jeg kan uttrykke et synspunkt og svare på et motargument.",
      "goal": "Jeg kan uttrykke et synspunkt og svare på et motargument.",
      "words": [
        "et synspunkt",
        "en begrunnelse",
        "et motargument",
        "på den andre siden"
      ],
      "lessons": [
        {
          "id": "u41l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u41_learn",
          "title": "Les og lær",
          "instruction": "Les teksten, språkbroene og uttrykkene.",
          "hint": "Les teksten én gang til.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Elevrådet diskuterer en stille sone i pausen. Noen elever ønsker et rolig rom der de kan lese eller hvile. Andre ønsker at alle rom skal være åpne for samtaler. Begge gruppene har saklige grunner. Et rolig rom kan gi plass til elever som trenger en pause fra lyd. Samtidig kan færre rom til samtaler gjøre det vanskeligere for store grupper å være sammen.\n\nEt innlegg kan presentere begge sider før skribenten forklarer sin egen mening. Eksempel: «På den ene siden kan en stille sone gi ro. På den andre siden trenger mange et sted å snakke. Jeg mener at skolen bør prøve en stille sone i ett rom, fordi de andre rommene fortsatt er åpne for samtaler.» Et eksempel kan gjøre begrunnelsen mer konkret. Det finnes ikke ett riktig personlig standpunkt i denne diskusjonen.\n\nEn skribent kan også foreslå en prøveperiode. Da kan elevrådet undersøke om løsningen fungerer for begge gruppene. Et innlegg trenger ikke skjule at andre mener noe annet. Når et motargument kommer fram, kan skribenten forklare hvordan forslaget tar hensyn til det. Elevrådet kan så diskutere flere mulige løsninger før det bestemmer seg.",
          "bridge": [
            {
              "from": "Noen ønsker ro. Andre ønsker samtale.",
              "to": "På den ene siden trenger noen ro. På den andre siden trenger andre samtale."
            },
            {
              "from": "Jeg mener det. Jeg har en grunn.",
              "to": "Jeg mener at vi bør prøve, fordi vi da kan undersøke behovet."
            }
          ],
          "items": [
            {
              "word": "et synspunkt",
              "uk": "точка зору",
              "th": "ความคิดเห็น"
            },
            {
              "word": "en begrunnelse",
              "uk": "обґрунтування",
              "th": "เหตุผลสนับสนุน"
            },
            {
              "word": "et motargument",
              "uk": "контраргумент",
              "th": "ข้อโต้แย้ง"
            },
            {
              "word": "på den andre siden",
              "uk": "з іншого боку",
              "th": "ในอีกด้านหนึ่ง"
            }
          ]
        },
        {
          "id": "u41l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u41_reading",
          "title": "Les og forstå",
          "instruction": "Hva er et argument for en stille sone?",
          "hint": "Les kilden nøye.",
          "explanation": "Noen elever trenger ro i pausen.",
          "prompt": "Elevrådet diskuterer en stille sone i pausen. Noen elever ønsker et rolig rom der de kan lese eller hvile. Andre ønsker at alle rom skal være åpne for samtaler. Begge gruppene har saklige grunner. Et rolig rom kan gi plass til elever som trenger en pause fra lyd. Samtidig kan færre rom til samtaler gjøre det vanskeligere for store grupper å være sammen.\n\nEt innlegg kan presentere begge sider før skribenten forklarer sin egen mening. Eksempel: «På den ene siden kan en stille sone gi ro. På den andre siden trenger mange et sted å snakke. Jeg mener at skolen bør prøve en stille sone i ett rom, fordi de andre rommene fortsatt er åpne for samtaler.» Et eksempel kan gjøre begrunnelsen mer konkret. Det finnes ikke ett riktig personlig standpunkt i denne diskusjonen.\n\nEn skribent kan også foreslå en prøveperiode. Da kan elevrådet undersøke om løsningen fungerer for begge gruppene. Et innlegg trenger ikke skjule at andre mener noe annet. Når et motargument kommer fram, kan skribenten forklare hvordan forslaget tar hensyn til det. Elevrådet kan så diskutere flere mulige løsninger før det bestemmer seg.",
          "options": [
            {
              "id": "a",
              "label": "Noen elever trenger ro i pausen."
            },
            {
              "id": "b",
              "label": "Alle rom blir større."
            },
            {
              "id": "c",
              "label": "Ingen elever ønsker å snakke."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u41l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u41_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør uttrykket.",
          "hint": "Bruk språkbroen og teksten.",
          "explanation": "På den andre siden trenger noen et sted å snakke.",
          "prompt": "Noen trenger ro, andre trenger et sted å snakke.",
          "before": "På den andre",
          "after": "trenger noen et sted å snakke.",
          "accepted": [
            "siden"
          ],
          "model": "På den andre siden trenger noen et sted å snakke."
        },
        {
          "id": "u41l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u41_build",
          "title": "Bygg en setning",
          "instruction": "Start med «På den ene siden», og bygg setningen.",
          "hint": "Bruk språkbroen.",
          "explanation": "På den ene siden kan en stille sone gi ro.",
          "prompt": "Noen trenger ro, andre trenger et sted å snakke.",
          "tokens": [
            "gi ro",
            "kan en stille sone",
            "På den ene siden"
          ],
          "answer": [
            "På den ene siden",
            "kan en stille sone",
            "gi ro"
          ],
          "model": "På den ene siden kan en stille sone gi ro.",
          "sentence": true
        },
        {
          "id": "u41l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u41_repair",
          "title": "Rett meningen",
          "instruction": "Rett den ene opplysningen som er feil.",
          "hint": "Sammenlign setningen med kilden.",
          "explanation": "Et argument for stille sone er mer ro.",
          "prompt": "Forslag: Et rom er stille. Andre rom er åpne for samtale. Argument: Noen trenger ro. Feil: Et argument for stille sone er mer støy.",
          "before": "Et argument for stille sone er mer",
          "after": ".",
          "accepted": [
            "ro"
          ],
          "model": "Et argument for stille sone er mer ro."
        },
        {
          "id": "u41l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u41_write",
          "title": "Skriv selv",
          "instruction": "Skriv et innlegg til elevrådet med synspunkt, begrunnelse, eksempel og et motargument. Skriv ett eller to avsnitt, omtrent 8–12 setninger.",
          "hint": "Bruk kildene og språkbroen.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "Elevrådet diskuterer en stille sone i pausen. Noen elever ønsker et rolig rom der de kan lese eller hvile. Andre ønsker at alle rom skal være åpne for samtaler. Begge gruppene har saklige grunner. Et rolig rom kan gi plass til elever som trenger en pause fra lyd. Samtidig kan færre rom til samtaler gjøre det vanskeligere for store grupper å være sammen.\n\nEt innlegg kan presentere begge sider før skribenten forklarer sin egen mening. Eksempel: «På den ene siden kan en stille sone gi ro. På den andre siden trenger mange et sted å snakke. Jeg mener at skolen bør prøve en stille sone i ett rom, fordi de andre rommene fortsatt er åpne for samtaler.» Et eksempel kan gjøre begrunnelsen mer konkret. Det finnes ikke ett riktig personlig standpunkt i denne diskusjonen.\n\nEn skribent kan også foreslå en prøveperiode. Da kan elevrådet undersøke om løsningen fungerer for begge gruppene. Et innlegg trenger ikke skjule at andre mener noe annet. Når et motargument kommer fram, kan skribenten forklare hvordan forslaget tar hensyn til det. Elevrådet kan så diskutere flere mulige løsninger før det bestemmer seg.",
          "placeholder": "Skriv her …",
          "model": "Jeg mener at skolen bør prøve en stille sone. Noen trenger ro i pausen. For eksempel kan de lese i ett rom. På den andre siden vil mange snakke med venner. Det er et viktig behov. To andre rom kan fortsatt være åpne for samtale. Derfor kan en prøveperiode gi plass til begge gruppene. Elevrådet kan undersøke hvordan løsningen fungerer.",
          "checks": [
            "Jeg uttrykte og begrunnet mitt eget synspunkt.",
            "Jeg ga et konkret eksempel og presenterte et annet syn.",
            "Jeg svarte saklig på motargumentet."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u42",
      "number": "50",
      "title": "Språk, kultur og identitet",
      "stage": "b1",
      "level": "Mot B1",
      "intro": "Jeg kan sammenligne skriftformer og skrive om språk på en nyansert måte.",
      "goal": "Jeg kan sammenligne skriftformer og skrive om språk på en nyansert måte.",
      "words": [
        "et skriftspråk",
        "en dialekt",
        "bokmål",
        "nynorsk"
      ],
      "lessons": [
        {
          "id": "u42l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u42_learn",
          "title": "Les og lær",
          "instruction": "Les teksten, språkbroene og uttrykkene.",
          "hint": "Les teksten én gang til.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Egenskrevet øvingstekst: Nora skriver en melding på bokmål: «Jeg kan ikke komme i dag.» Eivind skriver den samme meldingen på nynorsk: «Eg kan ikkje komme i dag.» I disse setningene betyr jeg og eg det samme. Ikke og ikkje har også samme mening. Formene er ulike, men begge meldingene sier at personen ikke kan komme i dag.\n\nBokmål og nynorsk er skriftspråk. Dialekt handler om talemåter. Det er derfor nyttig å skille mellom hvordan en person skriver, og hvordan personen snakker. Vi kan ikke vite hvilken dialekt Nora eller Eivind bruker ut fra disse korte meldingene. Folk kan bruke flere språk eller språkformer i ulike situasjoner. Hvordan språk henger sammen med identitet, kan være forskjellig fra person til person. I denne oppgaven kan du bruke et oppdiktet eksempel dersom du ikke vil skrive om deg selv.\n\nNår vi sammenligner meldingene, ser vi på det som faktisk står i dem. Skriveformen alene forteller ikke hele historien om personen. En elev kan for eksempel beskrive en oppdiktet person som bruker ulike språk hjemme og på skolen. En annen elev kan velge en annen situasjon. Ingen trenger å dele private erfaringer for å løse oppgaven.",
          "bridge": [
            {
              "from": "Bokmål: jeg / ikke",
              "to": "Nynorsk: eg / ikkje"
            },
            {
              "from": "Skriftspråk: form i skrift",
              "to": "Dialekt: talemåte"
            }
          ],
          "items": [
            {
              "word": "et skriftspråk",
              "uk": "писемна мова",
              "th": "ภาษาเขียน"
            },
            {
              "word": "en dialekt",
              "uk": "діалект",
              "th": "ภาษาถิ่น"
            },
            {
              "word": "bokmål",
              "uk": "букмол",
              "th": "บุกมอล"
            },
            {
              "word": "nynorsk",
              "uk": "нюношк",
              "th": "นีนอร์สก์"
            }
          ]
        },
        {
          "id": "u42l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u42_reading",
          "title": "Les og forstå",
          "instruction": "Hva er likt i meldingene?",
          "hint": "Les kilden nøye.",
          "explanation": "Begge sier at personen ikke kan komme i dag.",
          "prompt": "Egenskrevet øvingstekst: Nora skriver en melding på bokmål: «Jeg kan ikke komme i dag.» Eivind skriver den samme meldingen på nynorsk: «Eg kan ikkje komme i dag.» I disse setningene betyr jeg og eg det samme. Ikke og ikkje har også samme mening. Formene er ulike, men begge meldingene sier at personen ikke kan komme i dag.\n\nBokmål og nynorsk er skriftspråk. Dialekt handler om talemåter. Det er derfor nyttig å skille mellom hvordan en person skriver, og hvordan personen snakker. Vi kan ikke vite hvilken dialekt Nora eller Eivind bruker ut fra disse korte meldingene. Folk kan bruke flere språk eller språkformer i ulike situasjoner. Hvordan språk henger sammen med identitet, kan være forskjellig fra person til person. I denne oppgaven kan du bruke et oppdiktet eksempel dersom du ikke vil skrive om deg selv.\n\nNår vi sammenligner meldingene, ser vi på det som faktisk står i dem. Skriveformen alene forteller ikke hele historien om personen. En elev kan for eksempel beskrive en oppdiktet person som bruker ulike språk hjemme og på skolen. En annen elev kan velge en annen situasjon. Ingen trenger å dele private erfaringer for å løse oppgaven.",
          "options": [
            {
              "id": "a",
              "label": "Begge sier at personen ikke kan komme i dag."
            },
            {
              "id": "b",
              "label": "Begge bruker nøyaktig samme ordformer."
            },
            {
              "id": "c",
              "label": "Begge forteller hvilken dialekt personen snakker."
            }
          ],
          "correct": "a"
        },
        {
          "id": "u42l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u42_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør uttrykket.",
          "hint": "Bruk språkbroen og teksten.",
          "explanation": "På nynorsk kan «jeg» skrives eg.",
          "prompt": "Bokmål: Jeg kan ikke komme. Nynorsk: … kan ikkje komme. Skriv den nynorske formen for «jeg».",
          "before": "På nynorsk kan «jeg» skrives",
          "after": ".",
          "accepted": [
            "eg"
          ],
          "model": "På nynorsk kan «jeg» skrives eg."
        },
        {
          "id": "u42l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u42_build",
          "title": "Bygg en setning",
          "instruction": "Start med «På bokmål», og bygg setningen.",
          "hint": "Bruk språkbroen.",
          "explanation": "På bokmål skriver Nora «jeg kan ikke».",
          "prompt": "Bokmål: Jeg kan ikke komme. Nynorsk: … kan ikkje komme. Skriv den nynorske formen for «jeg».",
          "tokens": [
            "«jeg kan ikke»",
            "skriver Nora",
            "På bokmål"
          ],
          "answer": [
            "På bokmål",
            "skriver Nora",
            "«jeg kan ikke»"
          ],
          "model": "På bokmål skriver Nora «jeg kan ikke».",
          "sentence": true
        },
        {
          "id": "u42l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u42_repair",
          "title": "Rett meningen",
          "instruction": "Rett den ene opplysningen som er feil.",
          "hint": "Sammenlign setningen med kilden.",
          "explanation": "Meldingene viser ikke hvilken dialekt Nora bruker.",
          "prompt": "Bokmål: Jeg kan ikke komme i dag. Nynorsk: Eg kan ikkje komme i dag. Feil: Meldingene viser hvilken dialekt Nora bruker.",
          "before": "Meldingene viser ikke hvilken",
          "after": "Nora bruker.",
          "accepted": [
            "dialekt"
          ],
          "model": "Meldingene viser ikke hvilken dialekt Nora bruker."
        },
        {
          "id": "u42l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u42_write",
          "title": "Skriv selv",
          "instruction": "Sammenlign meldingene og skriv om hvordan språk kan bety noe for en person. Bruk gjerne en oppdiktet person. Skriv ett eller to avsnitt, omtrent 8–12 setninger.",
          "hint": "Bruk kildene og språkbroen.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "Egenskrevet øvingstekst: Nora skriver en melding på bokmål: «Jeg kan ikke komme i dag.» Eivind skriver den samme meldingen på nynorsk: «Eg kan ikkje komme i dag.» I disse setningene betyr jeg og eg det samme. Ikke og ikkje har også samme mening. Formene er ulike, men begge meldingene sier at personen ikke kan komme i dag.\n\nBokmål og nynorsk er skriftspråk. Dialekt handler om talemåter. Det er derfor nyttig å skille mellom hvordan en person skriver, og hvordan personen snakker. Vi kan ikke vite hvilken dialekt Nora eller Eivind bruker ut fra disse korte meldingene. Folk kan bruke flere språk eller språkformer i ulike situasjoner. Hvordan språk henger sammen med identitet, kan være forskjellig fra person til person. I denne oppgaven kan du bruke et oppdiktet eksempel dersom du ikke vil skrive om deg selv.\n\nNår vi sammenligner meldingene, ser vi på det som faktisk står i dem. Skriveformen alene forteller ikke hele historien om personen. En elev kan for eksempel beskrive en oppdiktet person som bruker ulike språk hjemme og på skolen. En annen elev kan velge en annen situasjon. Ingen trenger å dele private erfaringer for å løse oppgaven.",
          "placeholder": "Skriv her …",
          "model": "Bokmålsmeldingen bruker «jeg» og «ikke». Nynorskmeldingen bruker «eg» og «ikkje». Begge meldingene har samme mening. De sier at personen ikke kan komme i dag. Bokmål og nynorsk er skriftformer. Dialekt handler om talemåte. Vi vet ikke hvilken dialekt avsenderne bruker. En oppdiktet elev kan bruke ulike språk på skolen og hjemme. Hva språk betyr for identiteten, kan være forskjellig fra person til person.",
          "checks": [
            "Jeg sammenlignet minst to ordformer og forklarte meningen.",
            "Jeg skilte mellom skriftspråk og dialekt.",
            "Jeg ga et eksempel uten å anta at alle har samme erfaring."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u43",
      "number": "51",
      "title": "Fra kilder til forklaring",
      "stage": "b1",
      "level": "Mot B1",
      "intro": "Jeg kan velge informasjon fra to kilder og forklare den for en mottaker.",
      "goal": "Jeg kan velge informasjon fra to kilder og forklare den for en mottaker.",
      "words": [
        "en mottaker",
        "å forklare",
        "en opplysning",
        "med egne ord"
      ],
      "lessons": [
        {
          "id": "u43l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u43_learn",
          "title": "Les og lær",
          "instruction": "Les teksten, språkbroene og uttrykkene.",
          "hint": "Les teksten én gang til.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "To fiktive øvingskilder handler om en skolehage. Kilde A er en plan fra elevgruppa: Gruppen møtes tirsdag etter skolen og dyrker urter i kasser ved inngangen. Kilde B er en melding fra vaktmesteren: Gruppen kan hente vann ved døra til verkstedet. Utstyr skal settes tilbake etter bruk. Begge kildene er laget for denne oppgaven.\n\nEn ny elev trenger en enkel forklaring. Vi kan velge opplysninger som hjelper eleven å finne tid, sted og vann. Vi kan også fortelle hva gruppa gjør med utstyret etterpå. I en forklaring er det lurt å si hvor informasjonen kommer fra og formulere den på en måte mottakeren forstår. Vi trenger ikke kopiere hele planene. Her er én mulighet: «Ifølge elevgruppas plan møtes vi tirsdag ved inngangen. Vaktmesterens melding sier at vi henter vann ved verkstedet.»\n\nDen nye eleven trenger ikke alle detaljer fra begge kildene, men må få nok informasjon til å delta. Tid og møtested kommer fra planen, mens opplysninger om vann og utstyr kommer fra meldingen. Når du skriver til den nye eleven, kan du samle disse opplysningene i en sammenhengende beskjed og bruke ord mottakeren kjenner.",
          "bridge": [
            {
              "from": "Planen sier: Gruppen møtes tirsdag.",
              "to": "Ifølge planen møtes gruppen tirsdag."
            },
            {
              "from": "To kilder gir ulike opplysninger.",
              "to": "Jeg velger og forklarer opplysninger fra begge kildene."
            }
          ],
          "items": [
            {
              "word": "en mottaker",
              "uk": "одержувач",
              "th": "ผู้รับ"
            },
            {
              "word": "å forklare",
              "uk": "пояснювати",
              "th": "อธิบาย"
            },
            {
              "word": "en opplysning",
              "uk": "відомість",
              "th": "ข้อมูล"
            },
            {
              "word": "med egne ord",
              "uk": "своїми словами",
              "th": "ด้วยคำของตนเอง"
            }
          ]
        },
        {
          "id": "u43l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u43_reading",
          "title": "Les og forstå",
          "instruction": "Hvor møtes hagegruppa ifølge planen?",
          "hint": "Les kilden nøye.",
          "explanation": "Ved inngangen",
          "prompt": "To fiktive øvingskilder handler om en skolehage. Kilde A er en plan fra elevgruppa: Gruppen møtes tirsdag etter skolen og dyrker urter i kasser ved inngangen. Kilde B er en melding fra vaktmesteren: Gruppen kan hente vann ved døra til verkstedet. Utstyr skal settes tilbake etter bruk. Begge kildene er laget for denne oppgaven.\n\nEn ny elev trenger en enkel forklaring. Vi kan velge opplysninger som hjelper eleven å finne tid, sted og vann. Vi kan også fortelle hva gruppa gjør med utstyret etterpå. I en forklaring er det lurt å si hvor informasjonen kommer fra og formulere den på en måte mottakeren forstår. Vi trenger ikke kopiere hele planene. Her er én mulighet: «Ifølge elevgruppas plan møtes vi tirsdag ved inngangen. Vaktmesterens melding sier at vi henter vann ved verkstedet.»\n\nDen nye eleven trenger ikke alle detaljer fra begge kildene, men må få nok informasjon til å delta. Tid og møtested kommer fra planen, mens opplysninger om vann og utstyr kommer fra meldingen. Når du skriver til den nye eleven, kan du samle disse opplysningene i en sammenhengende beskjed og bruke ord mottakeren kjenner.",
          "options": [
            {
              "id": "a",
              "label": "Ved inngangen"
            },
            {
              "id": "b",
              "label": "Ved bussholdeplassen"
            },
            {
              "id": "c",
              "label": "I biblioteket"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u43l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u43_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør uttrykket.",
          "hint": "Bruk språkbroen og teksten.",
          "explanation": "Ifølge planen møtes gruppen tirsdag.",
          "prompt": "Kilde A, fiktiv elevplan: Gruppen møtes tirsdag etter skolen ved inngangen.",
          "before": "Ifølge",
          "after": "møtes gruppen tirsdag.",
          "accepted": [
            "planen",
            "elevgruppas plan",
            "elevplanen",
            "kilde A"
          ],
          "model": "Ifølge planen møtes gruppen tirsdag."
        },
        {
          "id": "u43l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u43_build",
          "title": "Bygg en setning",
          "instruction": "Start med «Ifølge planen», og bygg setningen.",
          "hint": "Bruk språkbroen.",
          "explanation": "Ifølge planen møtes gruppen på tirsdag.",
          "prompt": "Kilde A, fiktiv elevplan: Gruppen møtes tirsdag etter skolen ved inngangen.",
          "tokens": [
            "på tirsdag",
            "møtes gruppen",
            "Ifølge planen"
          ],
          "answer": [
            "Ifølge planen",
            "møtes gruppen",
            "på tirsdag"
          ],
          "model": "Ifølge planen møtes gruppen på tirsdag.",
          "sentence": true
        },
        {
          "id": "u43l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u43_repair",
          "title": "Rett meningen",
          "instruction": "Rett den ene opplysningen som er feil.",
          "hint": "Sammenlign setningen med kilden.",
          "explanation": "Gruppa henter vann ved verkstedet.",
          "prompt": "Kilde B: Gruppen kan hente vann ved døra til verkstedet. Feil: Gruppa henter vann ved biblioteket.",
          "before": "Gruppa henter vann ved",
          "after": ".",
          "accepted": [
            "verkstedet",
            "døra til verkstedet"
          ],
          "model": "Gruppa henter vann ved verkstedet."
        },
        {
          "id": "u43l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u43_write",
          "title": "Skriv selv",
          "instruction": "Forklar hageaktiviteten til en ny elev. Bruk begge kildene og oppgi hvor opplysningene kommer fra. Skriv ett eller to avsnitt, omtrent 8–12 setninger.",
          "hint": "Bruk kildene og språkbroen.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "To fiktive øvingskilder handler om en skolehage. Kilde A er en plan fra elevgruppa: Gruppen møtes tirsdag etter skolen og dyrker urter i kasser ved inngangen. Kilde B er en melding fra vaktmesteren: Gruppen kan hente vann ved døra til verkstedet. Utstyr skal settes tilbake etter bruk. Begge kildene er laget for denne oppgaven.\n\nEn ny elev trenger en enkel forklaring. Vi kan velge opplysninger som hjelper eleven å finne tid, sted og vann. Vi kan også fortelle hva gruppa gjør med utstyret etterpå. I en forklaring er det lurt å si hvor informasjonen kommer fra og formulere den på en måte mottakeren forstår. Vi trenger ikke kopiere hele planene. Her er én mulighet: «Ifølge elevgruppas plan møtes vi tirsdag ved inngangen. Vaktmesterens melding sier at vi henter vann ved verkstedet.»\n\nDen nye eleven trenger ikke alle detaljer fra begge kildene, men må få nok informasjon til å delta. Tid og møtested kommer fra planen, mens opplysninger om vann og utstyr kommer fra meldingen. Når du skriver til den nye eleven, kan du samle disse opplysningene i en sammenhengende beskjed og bruke ord mottakeren kjenner.",
          "placeholder": "Skriv her …",
          "model": "Hei til deg som er ny i hagegruppa! Ifølge elevgruppas plan møtes vi tirsdag etter skolen. Kassene står ved inngangen. Der dyrker gruppa urter. Vaktmesterens melding sier at vi henter vann ved verkstedet. Vi bruker vannet til plantene. Etter arbeidet setter vi utstyret tilbake. Da er utstyret klart for andre. Velkommen til gruppa!",
          "checks": [
            "Jeg valgte relevante opplysninger fra begge kilder.",
            "Jeg skrev slik at en ny elev forstår tid, sted og praktiske vilkår.",
            "Jeg viste til kildene og forklarte med egne ord."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "u44",
      "number": "52",
      "title": "Samlet prosjekt – planlegg og formidle",
      "stage": "b1",
      "level": "Mot B1",
      "intro": "Jeg kan bruke flere kilder til å planlegge og begrunne et forslag.",
      "goal": "Jeg kan bruke flere kilder til å planlegge og begrunne et forslag.",
      "words": [
        "et mål",
        "et vilkår",
        "en plan",
        "en tilbakemelding"
      ],
      "lessons": [
        {
          "id": "u44l1",
          "type": "learn",
          "skill": "exposure",
          "targetKey": "u44_learn",
          "title": "Les og lær",
          "instruction": "Les teksten, språkbroene og uttrykkene.",
          "hint": "Les teksten én gang til.",
          "explanation": "Du har lest teksten og uttrykkene.",
          "model": "Fiktivt skoleprosjekt: En elevgruppe vil lage en lesepause for nye elever. Målet er å gjøre det lett å finne en bok og møte andre. Tre øvingskilder gir informasjon. Kilde A, elevrådsnotat: Biblioteket er ledig tirsdag etter skolen. Kilde B, bibliotekmelding: Bøker kan lånes til aktiviteten, men skal leveres tilbake samme dag. Kilde C, elevforslag: Noen ønsker å lese stille; andre vil snakke om bøker.\n\nEt forslag må ta hensyn til alle tre kildene. Det kan foreslå at elevene møtes i biblioteket på tirsdag, velger mellom stille lesing og boksamtale, og leverer bøkene tilbake etterpå. Skribenten bør forklare hvorfor planen passer målet. Etter en første versjon kan en medelev spørre om planen viser når bøkene skal leveres. Skribenten kan da lese kildene igjen og forbedre teksten. Kildene er laget for oppgaven, og prosjektet er oppdiktet.\n\nGruppa må også tenke på mottakeren for forslaget. Elevrådet trenger å forstå både målet og hvordan planen kan gjennomføres. En tydelig tekst viser hva som skal skje, når det skal skje, og hvem aktiviteten er for. Den kan forklare hvordan to valgmuligheter gir plass til ulike ønsker. Før teksten leveres, kan skribenten kontrollere at hvert praktisk vilkår er tatt med.",
          "bridge": [
            {
              "from": "Jeg har et forslag.",
              "to": "Jeg begrunner forslaget med opplysninger fra kildene."
            },
            {
              "from": "Jeg får en konkret tilbakemelding.",
              "to": "Jeg leser teksten på nytt og forbedrer den."
            }
          ],
          "items": [
            {
              "word": "et mål",
              "uk": "мета",
              "th": "เป้าหมาย"
            },
            {
              "word": "et vilkår",
              "uk": "умова",
              "th": "เงื่อนไข"
            },
            {
              "word": "en plan",
              "uk": "план",
              "th": "แผน"
            },
            {
              "word": "en tilbakemelding",
              "uk": "відгук",
              "th": "ข้อเสนอแนะ"
            }
          ]
        },
        {
          "id": "u44l2",
          "type": "choice",
          "skill": "reading",
          "targetKey": "u44_reading",
          "title": "Les og forstå",
          "instruction": "Når er biblioteket ledig ifølge elevrådsnotatet?",
          "hint": "Les kilden nøye.",
          "explanation": "Tirsdag etter skolen",
          "prompt": "Fiktivt skoleprosjekt: En elevgruppe vil lage en lesepause for nye elever. Målet er å gjøre det lett å finne en bok og møte andre. Tre øvingskilder gir informasjon. Kilde A, elevrådsnotat: Biblioteket er ledig tirsdag etter skolen. Kilde B, bibliotekmelding: Bøker kan lånes til aktiviteten, men skal leveres tilbake samme dag. Kilde C, elevforslag: Noen ønsker å lese stille; andre vil snakke om bøker.\n\nEt forslag må ta hensyn til alle tre kildene. Det kan foreslå at elevene møtes i biblioteket på tirsdag, velger mellom stille lesing og boksamtale, og leverer bøkene tilbake etterpå. Skribenten bør forklare hvorfor planen passer målet. Etter en første versjon kan en medelev spørre om planen viser når bøkene skal leveres. Skribenten kan da lese kildene igjen og forbedre teksten. Kildene er laget for oppgaven, og prosjektet er oppdiktet.\n\nGruppa må også tenke på mottakeren for forslaget. Elevrådet trenger å forstå både målet og hvordan planen kan gjennomføres. En tydelig tekst viser hva som skal skje, når det skal skje, og hvem aktiviteten er for. Den kan forklare hvordan to valgmuligheter gir plass til ulike ønsker. Før teksten leveres, kan skribenten kontrollere at hvert praktisk vilkår er tatt med.",
          "options": [
            {
              "id": "a",
              "label": "Tirsdag etter skolen"
            },
            {
              "id": "b",
              "label": "Mandag før skolen"
            },
            {
              "id": "c",
              "label": "Fredag kveld"
            }
          ],
          "correct": "a"
        },
        {
          "id": "u44l3",
          "type": "input",
          "skill": "recall",
          "targetKey": "u44_recall",
          "title": "Hent fram uttrykket",
          "instruction": "Fullfør uttrykket.",
          "hint": "Bruk språkbroen og teksten.",
          "explanation": "Bøkene skal leveres tilbake samme dag.",
          "prompt": "Kilde B sier at bøkene må leveres tilbake på dagen de lånes.",
          "before": "Bøkene skal leveres tilbake samme",
          "after": ".",
          "accepted": [
            "dag"
          ],
          "model": "Bøkene skal leveres tilbake samme dag."
        },
        {
          "id": "u44l4",
          "type": "build",
          "skill": "construction",
          "targetKey": "u44_build",
          "title": "Bygg en setning",
          "instruction": "Start med «Ifølge elevrådsnotatet», og bygg setningen.",
          "hint": "Bruk språkbroen.",
          "explanation": "Ifølge elevrådsnotatet er biblioteket ledig tirsdag etter skolen.",
          "prompt": "Kilde A, fiktivt elevrådsnotat: Biblioteket er ledig tirsdag etter skolen.",
          "tokens": [
            "tirsdag etter skolen",
            "er biblioteket ledig",
            "Ifølge elevrådsnotatet"
          ],
          "answer": [
            "Ifølge elevrådsnotatet",
            "er biblioteket ledig",
            "tirsdag etter skolen"
          ],
          "model": "Ifølge elevrådsnotatet er biblioteket ledig tirsdag etter skolen.",
          "sentence": true
        },
        {
          "id": "u44l5",
          "type": "input",
          "skill": "construction",
          "targetKey": "u44_repair",
          "title": "Rett meningen",
          "instruction": "Rett den ene opplysningen som er feil.",
          "hint": "Sammenlign setningen med kilden.",
          "explanation": "Bibliotekmeldingen sier at bøkene skal leveres tilbake samme dag.",
          "prompt": "Kilde B, fiktiv bibliotekmelding: Bøker kan lånes, men skal leveres tilbake samme dag. Feil: Bibliotekmeldingen sier at bøkene kan beholdes.",
          "before": "Bibliotekmeldingen sier at bøkene skal",
          "after": "samme dag.",
          "accepted": [
            "leveres tilbake"
          ],
          "model": "Bibliotekmeldingen sier at bøkene skal leveres tilbake samme dag."
        },
        {
          "id": "u44l6",
          "type": "write",
          "skill": "writing",
          "targetKey": "u44_write",
          "title": "Skriv selv",
          "instruction": "Skriv et forslag til elevrådet: mål, mottaker, plan og begrunnelse. Bruk kildene, og forbedre teksten etter konkret respons. Skriv ett eller to avsnitt, omtrent 8–12 setninger.",
          "hint": "Bruk kildene og språkbroen.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "Fiktivt skoleprosjekt: En elevgruppe vil lage en lesepause for nye elever. Målet er å gjøre det lett å finne en bok og møte andre. Tre øvingskilder gir informasjon. Kilde A, elevrådsnotat: Biblioteket er ledig tirsdag etter skolen. Kilde B, bibliotekmelding: Bøker kan lånes til aktiviteten, men skal leveres tilbake samme dag. Kilde C, elevforslag: Noen ønsker å lese stille; andre vil snakke om bøker.\n\nEt forslag må ta hensyn til alle tre kildene. Det kan foreslå at elevene møtes i biblioteket på tirsdag, velger mellom stille lesing og boksamtale, og leverer bøkene tilbake etterpå. Skribenten bør forklare hvorfor planen passer målet. Etter en første versjon kan en medelev spørre om planen viser når bøkene skal leveres. Skribenten kan da lese kildene igjen og forbedre teksten. Kildene er laget for oppgaven, og prosjektet er oppdiktet.\n\nGruppa må også tenke på mottakeren for forslaget. Elevrådet trenger å forstå både målet og hvordan planen kan gjennomføres. En tydelig tekst viser hva som skal skje, når det skal skje, og hvem aktiviteten er for. Den kan forklare hvordan to valgmuligheter gir plass til ulike ønsker. Før teksten leveres, kan skribenten kontrollere at hvert praktisk vilkår er tatt med.",
          "placeholder": "Skriv her …",
          "model": "Hei til elevrådet! Jeg foreslår en lesepause for nye elever. Målet er å finne bøker og møte andre. Ifølge elevrådsnotatet er biblioteket ledig tirsdag etter skolen. Vi kan tilby både stille lesing og boksamtale, slik elevforslaget ønsker. Bibliotekmeldingen sier at bøkene må leveres tilbake samme dag. Derfor avslutter vi med å levere dem. To valg gjør at flere kan finne en aktivitet som passer. En medelev spurte når bøkene skal leveres. Etter responsen la jeg til at de leveres samme dag.",
          "checks": [
            "Jeg beskrev mål, mottaker og en gjennomførbar plan.",
            "Jeg brukte og oppga relevante opplysninger fra kildene.",
            "Jeg begrunnet planen og forbedret minst ett punkt etter respons."
          ],
          "minWords": 1
        }
      ]
    }
  ],
  "challenges": [
    {
      "id": "ch_u37",
      "baseUnitId": "u37",
      "number": "45",
      "title": "En jobbannonse og en søknad",
      "stage": "b1",
      "level": "Mer utfordring",
      "intro": "Jeg kan lese en annonse og skrive en relevant henvendelse.",
      "goal": "Jeg kan selvstendig lese en annonse og skrive en relevant henvendelse.",
      "words": [
        "en søknad",
        "en erfaring",
        "en oppgave",
        "et krav",
        "en CV"
      ],
      "lessons": [
        {
          "id": "ch_u37l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u37_combine",
          "title": "Les og kombiner",
          "instruction": "Hvem oppfyller begge vilkårene i annonsen?",
          "hint": "Les begge opplysningene og sammenlign svarene.",
          "explanation": "Lea",
          "prompt": "Annonse: Praksis på tirsdager. Du må like å samarbeide. Kandidater: Lea kan tirsdag og liker samarbeid. Ali kan bare torsdag og liker samarbeid. Mari kan tirsdag, men vil arbeide alene.",
          "options": [
            {
              "id": "a",
              "label": "Lea"
            },
            {
              "id": "b",
              "label": "Ali"
            },
            {
              "id": "c",
              "label": "Mari"
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u37l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u37_repair",
          "title": "Rett meningsfeilen",
          "instruction": "Rett den ene meningsfeilen.",
          "hint": "Sjekk opplysningen mot kildene.",
          "explanation": "Kundeservice er nyttig, men ikke et krav.",
          "prompt": "Annonse: Erfaring med kundeservice er nyttig, men ikke et krav. Feil: Kundeservice er et krav.",
          "before": "Kundeservice er nyttig, men ikke et",
          "after": ".",
          "accepted": [
            "krav"
          ],
          "model": "Kundeservice er nyttig, men ikke et krav."
        },
        {
          "id": "ch_u37l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u37_write",
          "title": "Skriv selvstendig",
          "instruction": "Skriv en søknad på ett eller to avsnitt, omtrent 8–12 setninger. Bruk en oppdiktet søker.",
          "hint": "Velg relevante opplysninger og forklar dem.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "Praksis: tirsdag. Oppgaver: bøker og besøkende. Søker: har jobbet på skolekafé og har lært samarbeid.",
          "placeholder": "Skriv her …",
          "model": "Hei til biblioteket! Jeg søker praksis hos dere. Jeg kan møte på tirsdager. Jeg har jobbet på skolekafé. Der har jeg lært å samarbeide. Jeg har også hjulpet andre. Det er nyttig når besøkende trenger hjelp. Jeg ønsker å lære mer om å organisere bøker. Jeg håper å høre fra dere. Vennlig hilsen Amir.",
          "checks": [
            "Jeg skrev til riktig mottaker og viste hva jeg søker.",
            "Jeg knyttet erfaring til oppgaver og tok med dagen.",
            "Jeg begrunnet ønsket mitt og avsluttet høflig."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u38",
      "baseUnitId": "u38",
      "number": "46",
      "title": "Når en tjeneste ikke fungerer",
      "stage": "b1",
      "level": "Mer utfordring",
      "intro": "Jeg kan skrive en saklig melding om et problem.",
      "goal": "Jeg kan selvstendig skrive en saklig melding om et problem.",
      "words": [
        "en avtale",
        "en bestilling",
        "en dokumentasjon",
        "Jeg ønsker",
        "Kan dere …?"
      ],
      "lessons": [
        {
          "id": "ch_u38l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u38_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilken melding stemmer med begge kildene?",
          "hint": "Les begge opplysningene og sammenlign svarene.",
          "explanation": "Jeg bestilte farge, men fikk svart-hvitt på tirsdag.",
          "prompt": "Kvittering: farge, tirsdag. Leveringsnotat: svart-hvitt, tirsdag.",
          "options": [
            {
              "id": "a",
              "label": "Jeg bestilte farge, men fikk svart-hvitt på tirsdag."
            },
            {
              "id": "b",
              "label": "Jeg bestilte svart-hvitt og fikk farge på tirsdag."
            },
            {
              "id": "c",
              "label": "Jeg bestilte farge, men fikk den på fredag."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u38l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u38_repair",
          "title": "Rett meningsfeilen",
          "instruction": "Rett den ene meningsfeilen.",
          "hint": "Sjekk opplysningen mot kildene.",
          "explanation": "Kvitteringen viser farge.",
          "prompt": "Kvittering: farge. Feil: Kvitteringen viser svart-hvitt.",
          "before": "Kvitteringen viser",
          "after": ".",
          "accepted": [
            "farge"
          ],
          "model": "Kvitteringen viser farge."
        },
        {
          "id": "ch_u38l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u38_write",
          "title": "Skriv selvstendig",
          "instruction": "Skriv en selvstendig melding på ett eller to avsnitt, omtrent 8–12 setninger.",
          "hint": "Velg relevante opplysninger og forklar dem.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "Kvittering: plakat i farge til tirsdag. Leveringsnotat: svart-hvitt på tirsdag.",
          "placeholder": "Skriv her …",
          "model": "Hei til Kopihjørnet! Jeg skriver om plakatbestillingen min. Jeg bestilte en plakat i farge. Den skulle være klar tirsdag. Jeg fikk plakaten på tirsdag, men den er i svart-hvitt. Kvitteringen viser at jeg bestilte farge. Jeg ønsker en ny plakat i farge. Kan dere undersøke saken? Kan dere svare på meldingen min? Vennlig hilsen Sara.",
          "checks": [
            "Jeg forklarte avtale og problem ved hjelp av begge kildene.",
            "Jeg ba om en konkret løsning i en saklig tone.",
            "Jeg skrev til mottakeren og avsluttet høflig."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u39",
      "baseUnitId": "u39",
      "number": "47",
      "title": "Les en fagtekst og vurder kilden",
      "stage": "b1",
      "level": "Mer utfordring",
      "intro": "Jeg kan skille mellom opplysninger og antakelser og vise til en kilde.",
      "goal": "Jeg kan selvstendig skille mellom opplysninger og antakelser og vise til en kilde.",
      "words": [
        "en kilde",
        "en tabell",
        "ifølge teksten",
        "en antakelse"
      ],
      "lessons": [
        {
          "id": "ch_u39l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u39_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilken påstand kan begrunnes med begge kildene?",
          "hint": "Les begge opplysningene og sammenlign svarene.",
          "explanation": "Åtte gikk den dagen, men årsaken er ukjent.",
          "prompt": "Kilde A, fiktiv klassetabell: 8 gikk, 5 syklet, 7 tok buss. Kilde B, spørreskjemaet: Det spør bare om reisemåte én dag, ikke om årsaker.",
          "options": [
            {
              "id": "a",
              "label": "Åtte gikk den dagen, men årsaken er ukjent."
            },
            {
              "id": "b",
              "label": "Åtte gikk fordi været var fint."
            },
            {
              "id": "c",
              "label": "Alle i Norge reiser slik hver dag."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u39l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u39_repair",
          "title": "Rett meningsfeilen",
          "instruction": "Rett den ene meningsfeilen.",
          "hint": "Sjekk opplysningen mot kildene.",
          "explanation": "Kilde B spør ikke om årsaker.",
          "prompt": "Kilde A, fiktiv klassetabell: 8 gikk, 5 syklet, 7 tok buss. Kilde B, spørreskjemaet: Det spør bare om reisemåte én dag, ikke om årsaker. Feil: Kilde B forklarer hvorfor elevene gikk.",
          "before": "Kilde B spør ikke om",
          "after": ".",
          "accepted": [
            "årsaker",
            "hvorfor elevene gikk"
          ],
          "model": "Kilde B spør ikke om årsaker."
        },
        {
          "id": "ch_u39l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u39_write",
          "title": "Skriv selvstendig",
          "instruction": "Forklar resultatet til en annen klasse. Bruk begge kildene og skill fakta fra antakelse. Skriv ett eller to avsnitt, omtrent 8–12 setninger.",
          "hint": "Velg relevante opplysninger og forklar dem.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "Kilde A, fiktiv klassetabell: 8 gikk, 5 syklet, 7 tok buss. Kilde B, spørreskjemaet: Det spør bare om reisemåte én dag, ikke om årsaker.",
          "placeholder": "Skriv her …",
          "model": "Ifølge den fiktive klassetabellen gikk åtte elever til skolen. Fem syklet. Sju tok buss. Kilden gjelder én klasse på én dag. Spørreskjemaet spør ikke om årsaker. Kanskje var været fint, men det vet vi ikke fra kildene. Vi kan heller ikke si at tallene gjelder alle elever. Derfor bør vi oppgi både kilden og begrensningen når vi bruker tallene.",
          "checks": [
            "Jeg viste til kilden og beskrev minst to opplysninger.",
            "Jeg skilte en antakelse fra det tabellen viser.",
            "Jeg forklarte hvorfor kilden har en begrensning."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u40",
      "baseUnitId": "u40",
      "number": "48",
      "title": "En kort fortelling – mer enn det som står",
      "stage": "b1",
      "level": "Mer utfordring",
      "intro": "Jeg kan lese en fortelling og begrunne en tolkning med tekstbelegg.",
      "goal": "Jeg kan selvstendig lese en fortelling og begrunne en tolkning med tekstbelegg.",
      "words": [
        "en fortelling",
        "et spor",
        "mens",
        "da"
      ],
      "lessons": [
        {
          "id": "ch_u40l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u40_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilken oppsummering stemmer med begge delene?",
          "hint": "Les begge opplysningene og sammenlign svarene.",
          "explanation": "Før lesingen er hun ved døra og klokka; etterpå skriver hun et forslag.",
          "prompt": "Fortellingen: Lea er ved døra og går bort til klokka før læreren kommer. Etter lesingen skriver hun et forslag fra gruppa.",
          "options": [
            {
              "id": "a",
              "label": "Før lesingen er hun ved døra og klokka; etterpå skriver hun et forslag."
            },
            {
              "id": "b",
              "label": "Før lesingen går hun hjem; etterpå skriver hun ingenting."
            },
            {
              "id": "c",
              "label": "Før lesingen smiler hun til gruppa; etterpå ser hun på klokka."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u40l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u40_repair",
          "title": "Rett meningsfeilen",
          "instruction": "Rett den ene meningsfeilen.",
          "hint": "Sjekk opplysningen mot kildene.",
          "explanation": "Etter lesingen skrev Lea et forslag fra gruppa.",
          "prompt": "Fortellingen: Lea er ved døra og går bort til klokka før læreren kommer. Etter lesingen skriver hun et forslag fra gruppa. Feil: Etter lesingen skrev Lea et forslag fra læreren.",
          "before": "Etter lesingen skrev Lea et forslag fra",
          "after": ".",
          "accepted": [
            "gruppa",
            "gruppen"
          ],
          "model": "Etter lesingen skrev Lea et forslag fra gruppa."
        },
        {
          "id": "ch_u40l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u40_write",
          "title": "Skriv selvstendig",
          "instruction": "Skriv en begrunnet tolkning av hvordan Lea kan oppleve situasjonen før og etter lesingen. Bruk spor fra begge delene. Skriv ett eller to avsnitt, omtrent 8–12 setninger.",
          "hint": "Velg relevante opplysninger og forklar dem.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "Fortellingen: Lea er ved døra og går bort til klokka før læreren kommer. Etter lesingen skriver hun et forslag fra gruppa. Før lesingen spør Lea læreren: «Vil du lese teksten min først?»",
          "placeholder": "Skriv her …",
          "model": "Jeg tror Lea kan være spent før lesingen. Hun går til døra og klokka. Hun spør også læreren om å lese teksten først. Det kan tyde på at hun ønsker støtte. Etterpå leser hun for gruppa. Hun skriver et forslag fra gruppa. Jeg tolker det som at hun kan bruke responsen videre. En annen tolkning er mulig hvis den støttes med spor fra teksten.",
          "checks": [
            "Jeg foreslo en mulig tolkning og viste til to konkrete spor.",
            "Jeg forklarte sammenhengen mellom spor og tolkning.",
            "Jeg skrev sammenhengende og brukte fortid der det passer."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u41",
      "baseUnitId": "u41",
      "number": "49",
      "title": "Skriv et begrunnet innlegg",
      "stage": "b1",
      "level": "Mer utfordring",
      "intro": "Jeg kan uttrykke et synspunkt og svare på et motargument.",
      "goal": "Jeg kan selvstendig uttrykke et synspunkt og svare på et motargument.",
      "words": [
        "et synspunkt",
        "en begrunnelse",
        "et motargument",
        "på den andre siden"
      ],
      "lessons": [
        {
          "id": "ch_u41l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u41_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilket forslag tar hensyn til begge kildene?",
          "hint": "Les begge opplysningene og sammenlign svarene.",
          "explanation": "Prøv ett stille rom og behold to rom til samtale.",
          "prompt": "Kilde A, elevrådsnotat: Ett rom kan være stille; to andre rom er åpne for samtale. Kilde B, elevkommentar: Noen trenger ro, men andre vil snakke i pausen.",
          "options": [
            {
              "id": "a",
              "label": "Prøv ett stille rom og behold to rom til samtale."
            },
            {
              "id": "b",
              "label": "Gjør alle rom stille."
            },
            {
              "id": "c",
              "label": "Steng alle rom i pausene."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u41l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u41_repair",
          "title": "Rett meningsfeilen",
          "instruction": "Rett den ene meningsfeilen.",
          "hint": "Sjekk opplysningen mot kildene.",
          "explanation": "Notatet foreslår ett stille rom.",
          "prompt": "Kilde A, elevrådsnotat: Ett rom kan være stille; to andre rom er åpne for samtale. Kilde B, elevkommentar: Noen trenger ro, men andre vil snakke i pausen. Feil: Notatet sier at alle rom skal være stille.",
          "before": "Notatet foreslår",
          "after": "stille rom.",
          "accepted": [
            "ett",
            "1"
          ],
          "model": "Notatet foreslår ett stille rom."
        },
        {
          "id": "ch_u41l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u41_write",
          "title": "Skriv selvstendig",
          "instruction": "Skriv et innlegg til elevrådet som bruker begge kildene, presenterer et motargument og begrunner et eget forslag. Skriv ett eller to avsnitt, omtrent 8–12 setninger.",
          "hint": "Velg relevante opplysninger og forklar dem.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "Kilde A, elevrådsnotat: Ett rom kan være stille; to andre rom er åpne for samtale. Kilde B, elevkommentar: Noen trenger ro, men andre vil snakke i pausen.",
          "placeholder": "Skriv her …",
          "model": "Jeg mener at skolen bør prøve en stille sone. Noen trenger ro i pausen. For eksempel kan de lese i ett rom. På den andre siden vil mange snakke med venner. Det er et viktig behov. To andre rom kan fortsatt være åpne for samtale. Derfor kan en prøveperiode gi plass til begge gruppene. Elevrådet kan undersøke hvordan løsningen fungerer.",
          "checks": [
            "Jeg uttrykte og begrunnet mitt eget synspunkt.",
            "Jeg ga et konkret eksempel og presenterte et annet syn.",
            "Jeg svarte saklig på motargumentet."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u42",
      "baseUnitId": "u42",
      "number": "50",
      "title": "Språk, kultur og identitet",
      "stage": "b1",
      "level": "Mer utfordring",
      "intro": "Jeg kan sammenligne skriftformer og skrive om språk på en nyansert måte.",
      "goal": "Jeg kan selvstendig sammenligne skriftformer og skrive om språk på en nyansert måte.",
      "words": [
        "et skriftspråk",
        "en dialekt",
        "bokmål",
        "nynorsk"
      ],
      "lessons": [
        {
          "id": "ch_u42l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u42_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilken sammenligning støttes av begge meldingene?",
          "hint": "Les begge opplysningene og sammenlign svarene.",
          "explanation": "Formene er ulike, men meningen er lik; dialekten er ukjent.",
          "prompt": "Melding A, bokmål: «Jeg kan ikke komme i dag.» Melding B, nynorsk: «Eg kan ikkje komme i dag.» Ingen avsender har oppgitt dialekt.",
          "options": [
            {
              "id": "a",
              "label": "Formene er ulike, men meningen er lik; dialekten er ukjent."
            },
            {
              "id": "b",
              "label": "Meningen er ulik, og begge dialektene er kjent."
            },
            {
              "id": "c",
              "label": "Formene er like, og begge bruker samme dialekt."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u42l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u42_repair",
          "title": "Rett meningsfeilen",
          "instruction": "Rett den ene meningsfeilen.",
          "hint": "Sjekk opplysningen mot kildene.",
          "explanation": "Melding B viser ikke avsenderens dialekt.",
          "prompt": "Melding A, bokmål: «Jeg kan ikke komme i dag.» Melding B, nynorsk: «Eg kan ikkje komme i dag.» Ingen avsender har oppgitt dialekt. Feil: Melding B viser hvilken dialekt avsenderen snakker.",
          "before": "Melding B viser ikke avsenderens",
          "after": ".",
          "accepted": [
            "dialekt"
          ],
          "model": "Melding B viser ikke avsenderens dialekt."
        },
        {
          "id": "ch_u42l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u42_write",
          "title": "Skriv selvstendig",
          "instruction": "Skriv en kort tekst for en medelev: sammenlign begge meldingene, forklar forskjellen på skriftform og dialekt, og gi et frivillig eller oppdiktet identitetseksempel. Skriv ett eller to avsnitt, omtrent 8–12 setninger.",
          "hint": "Velg relevante opplysninger og forklar dem.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "Melding A, bokmål: «Jeg kan ikke komme i dag.» Melding B, nynorsk: «Eg kan ikkje komme i dag.» Ingen avsender har oppgitt dialekt.",
          "placeholder": "Skriv her …",
          "model": "Bokmålsmeldingen bruker «jeg» og «ikke». Nynorskmeldingen bruker «eg» og «ikkje». Begge meldingene har samme mening. De sier at personen ikke kan komme i dag. Bokmål og nynorsk er skriftformer. Dialekt handler om talemåte. Vi vet ikke hvilken dialekt avsenderne bruker. En oppdiktet elev kan bruke ulike språk på skolen og hjemme. Hva språk betyr for identiteten, kan være forskjellig fra person til person.",
          "checks": [
            "Jeg sammenlignet minst to ordformer og forklarte meningen.",
            "Jeg skilte mellom skriftspråk og dialekt.",
            "Jeg ga et eksempel uten å anta at alle har samme erfaring."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u43",
      "baseUnitId": "u43",
      "number": "51",
      "title": "Fra kilder til forklaring",
      "stage": "b1",
      "level": "Mer utfordring",
      "intro": "Jeg kan velge informasjon fra to kilder og forklare den for en mottaker.",
      "goal": "Jeg kan selvstendig velge informasjon fra to kilder og forklare den for en mottaker.",
      "words": [
        "en mottaker",
        "å forklare",
        "en opplysning",
        "med egne ord"
      ],
      "lessons": [
        {
          "id": "ch_u43l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u43_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilken forklaring bruker begge kilder riktig?",
          "hint": "Les begge opplysningene og sammenlign svarene.",
          "explanation": "Møt tirsdag ved inngangen; hent vann ved verkstedet og sett utstyr tilbake.",
          "prompt": "Kilde A, fiktiv elevplan: Tirsdag etter skolen, urtekasser ved inngangen. Kilde B, fiktiv vaktmestermelding: Vann ved verkstedet; sett utstyr tilbake etter bruk.",
          "options": [
            {
              "id": "a",
              "label": "Møt tirsdag ved inngangen; hent vann ved verkstedet og sett utstyr tilbake."
            },
            {
              "id": "b",
              "label": "Møt fredag ved verkstedet; la utstyret stå ute."
            },
            {
              "id": "c",
              "label": "Møt tirsdag i biblioteket; hent vann ved inngangen."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u43l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u43_repair",
          "title": "Rett meningsfeilen",
          "instruction": "Rett den ene meningsfeilen.",
          "hint": "Sjekk opplysningen mot kildene.",
          "explanation": "Planen sier at gruppa møtes tirsdag etter skolen.",
          "prompt": "Kilde A, fiktiv elevplan: Tirsdag etter skolen, urtekasser ved inngangen. Kilde B, fiktiv vaktmestermelding: Vann ved verkstedet; sett utstyr tilbake etter bruk. Feil: Planen sier at gruppa møtes fredag.",
          "before": "Planen sier at gruppa møtes",
          "after": "etter skolen.",
          "accepted": [
            "tirsdag",
            "på tirsdag"
          ],
          "model": "Planen sier at gruppa møtes tirsdag etter skolen."
        },
        {
          "id": "ch_u43l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u43_write",
          "title": "Skriv selvstendig",
          "instruction": "Skriv en selvstendig beskjed til en ny deltaker. Kombiner begge kilder, oppgi dem og forklar med egne ord hva deltakeren skal gjøre. Skriv ett eller to avsnitt, omtrent 8–12 setninger.",
          "hint": "Velg relevante opplysninger og forklar dem.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "Kilde A, fiktiv elevplan: Tirsdag etter skolen, urtekasser ved inngangen. Kilde B, fiktiv vaktmestermelding: Vann ved verkstedet; sett utstyr tilbake etter bruk.",
          "placeholder": "Skriv her …",
          "model": "Hei til deg som er ny i hagegruppa! Ifølge elevgruppas plan møtes vi tirsdag etter skolen. Kassene står ved inngangen. Der dyrker gruppa urter. Vaktmesterens melding sier at vi henter vann ved verkstedet. Vi bruker vannet til plantene. Etter arbeidet setter vi utstyret tilbake. Da er utstyret klart for andre. Velkommen til gruppa!",
          "checks": [
            "Jeg valgte relevante opplysninger fra begge kilder.",
            "Jeg skrev slik at en ny elev forstår tid, sted og praktiske vilkår.",
            "Jeg viste til kildene og forklarte med egne ord."
          ],
          "minWords": 1
        }
      ]
    },
    {
      "id": "ch_u44",
      "baseUnitId": "u44",
      "number": "52",
      "title": "Samlet prosjekt – planlegg og formidle",
      "stage": "b1",
      "level": "Mer utfordring",
      "intro": "Jeg kan bruke flere kilder til å planlegge og begrunne et forslag.",
      "goal": "Jeg kan selvstendig bruke flere kilder til å planlegge og begrunne et forslag.",
      "words": [
        "et mål",
        "et vilkår",
        "en plan",
        "en tilbakemelding"
      ],
      "lessons": [
        {
          "id": "ch_u44l1",
          "type": "choice",
          "skill": "reading",
          "targetKey": "ch_u44_combine",
          "title": "Les og kombiner",
          "instruction": "Hvilken plan oppfyller alle tre kildene?",
          "hint": "Les begge opplysningene og sammenlign svarene.",
          "explanation": "Møt tirsdag, tilby lesing og samtale, og lever bøkene samme dag.",
          "prompt": "A, fiktivt elevrådsnotat: Biblioteket er ledig tirsdag etter skolen. B, fiktiv bibliotekmelding: Bøker leveres tilbake samme dag. C, fiktivt elevforslag: Ønske om både stille lesing og boksamtale.",
          "options": [
            {
              "id": "a",
              "label": "Møt tirsdag, tilby lesing og samtale, og lever bøkene samme dag."
            },
            {
              "id": "b",
              "label": "Møt fredag, tilby bare samtale, og behold bøkene."
            },
            {
              "id": "c",
              "label": "Møt tirsdag, tilby bare stille lesing, og behold bøkene."
            }
          ],
          "correct": "a"
        },
        {
          "id": "ch_u44l2",
          "type": "input",
          "skill": "construction",
          "targetKey": "ch_u44_repair",
          "title": "Rett meningsfeilen",
          "instruction": "Rett den ene meningsfeilen.",
          "hint": "Sjekk opplysningen mot kildene.",
          "explanation": "Kilden som sier at bøkene skal leveres samme dag, er bibliotekmeldingen.",
          "prompt": "A, fiktivt elevrådsnotat: Biblioteket er ledig tirsdag etter skolen. B, fiktiv bibliotekmelding: Bøker leveres tilbake samme dag. C, fiktivt elevforslag: Ønske om både stille lesing og boksamtale. Feil: Elevrådsnotatet sier at bøkene skal leveres samme dag.",
          "before": "Kilden som sier at bøkene skal leveres samme dag, er",
          "after": ".",
          "accepted": [
            "bibliotekmeldingen",
            "kilde B",
            "B"
          ],
          "model": "Kilden som sier at bøkene skal leveres samme dag, er bibliotekmeldingen."
        },
        {
          "id": "ch_u44l3",
          "type": "write",
          "skill": "writing",
          "targetKey": "ch_u44_write",
          "title": "Skriv selvstendig",
          "instruction": "Skriv et samlet forslag til elevrådet. Bruk alle tre kildene, begrunn valgene og forbedre forslaget etter konkret respons. Skriv ett eller to avsnitt, omtrent 8–12 setninger.",
          "hint": "Velg relevante opplysninger og forklar dem.",
          "explanation": "Teksten er lagret. Les den gjerne sammen med en medelev eller læreren.",
          "prompt": "A, fiktivt elevrådsnotat: Biblioteket er ledig tirsdag etter skolen. B, fiktiv bibliotekmelding: Bøker leveres tilbake samme dag. C, fiktivt elevforslag: Ønske om både stille lesing og boksamtale.",
          "placeholder": "Skriv her …",
          "model": "Hei til elevrådet! Jeg foreslår en lesepause for nye elever. Målet er å finne bøker og møte andre. Ifølge elevrådsnotatet er biblioteket ledig tirsdag etter skolen. Vi kan tilby både stille lesing og boksamtale, slik elevforslaget ønsker. Bibliotekmeldingen sier at bøkene må leveres tilbake samme dag. Derfor avslutter vi med å levere dem. To valg gjør at flere kan finne en aktivitet som passer. En medelev spurte når bøkene skal leveres. Etter responsen la jeg til at de leveres samme dag.",
          "checks": [
            "Jeg beskrev mål, mottaker og en gjennomførbar plan.",
            "Jeg brukte og oppga relevante opplysninger fra kildene.",
            "Jeg begrunnet planen og forbedret minst ett punkt etter respons."
          ],
          "minWords": 1
        }
      ]
    }
  ],
  "words": [
    {
      "word": "en søknad",
      "uk": "заява",
      "th": "ใบสมัคร",
      "meaning": "En tekst der du søker en jobb."
    },
    {
      "word": "en erfaring",
      "uk": "досвід",
      "th": "ประสบการณ์",
      "meaning": "Noe du har gjort og lært av."
    },
    {
      "word": "en oppgave",
      "uk": "завдання",
      "th": "หน้าที่",
      "meaning": "Noe du skal gjøre."
    },
    {
      "word": "et krav",
      "uk": "вимога",
      "th": "ข้อกำหนด",
      "meaning": "Noe som er nødvendig."
    },
    {
      "word": "en CV",
      "uk": "резюме",
      "th": "ประวัติย่อ",
      "meaning": "En oversikt over erfaring og utdanning."
    },
    {
      "word": "en avtale",
      "uk": "домовленість",
      "th": "ข้อตกลง",
      "meaning": "Noe partene har blitt enige om."
    },
    {
      "word": "en bestilling",
      "uk": "замовлення",
      "th": "คำสั่งซื้อ",
      "meaning": "Noe du har bedt om å få."
    },
    {
      "word": "en dokumentasjon",
      "uk": "підтвердження",
      "th": "หลักฐาน",
      "meaning": "Opplysninger som viser hva som skjedde."
    },
    {
      "word": "Jeg ønsker",
      "uk": "Я бажаю",
      "th": "ฉันต้องการ",
      "meaning": "En høflig måte å si hva du vil ha."
    },
    {
      "word": "Kan dere …?",
      "uk": "Чи можете ви …?",
      "th": "คุณช่วย … ได้ไหม",
      "meaning": "Et høflig spørsmål til en mottaker."
    },
    {
      "word": "en kilde",
      "uk": "джерело",
      "th": "แหล่งข้อมูล",
      "meaning": "Der opplysninger kommer fra."
    },
    {
      "word": "en tabell",
      "uk": "таблиця",
      "th": "ตาราง",
      "meaning": "En oversikt med rader og kolonner."
    },
    {
      "word": "ifølge teksten",
      "uk": "згідно з текстом",
      "th": "ตามข้อความ",
      "meaning": "Viser hvor en opplysning står."
    },
    {
      "word": "en antakelse",
      "uk": "припущення",
      "th": "ข้อสันนิษฐาน",
      "meaning": "Noe vi tror, men ikke vet fra kilden."
    },
    {
      "word": "en fortelling",
      "uk": "оповідання",
      "th": "เรื่องเล่า",
      "meaning": "En tekst om hendelser."
    },
    {
      "word": "et spor",
      "uk": "підказка",
      "th": "เบาะแส",
      "meaning": "En detalj som kan støtte en tolkning."
    },
    {
      "word": "mens",
      "uk": "поки",
      "th": "ขณะที่",
      "meaning": "Binder sammen hendelser som skjer samtidig."
    },
    {
      "word": "da",
      "uk": "коли",
      "th": "เมื่อ",
      "meaning": "Viser til et tidspunkt i fortiden."
    },
    {
      "word": "et synspunkt",
      "uk": "точка зору",
      "th": "ความคิดเห็น",
      "meaning": "Det noen mener."
    },
    {
      "word": "en begrunnelse",
      "uk": "обґрунтування",
      "th": "เหตุผลสนับสนุน",
      "meaning": "En forklaring på hvorfor noen mener noe."
    },
    {
      "word": "et motargument",
      "uk": "контраргумент",
      "th": "ข้อโต้แย้ง",
      "meaning": "En grunn til å mene noe annet."
    },
    {
      "word": "på den andre siden",
      "uk": "з іншого боку",
      "th": "ในอีกด้านหนึ่ง",
      "meaning": "Innleder et annet perspektiv."
    },
    {
      "word": "et skriftspråk",
      "uk": "писемна мова",
      "th": "ภาษาเขียน",
      "meaning": "En språkform som brukes i skrift."
    },
    {
      "word": "en dialekt",
      "uk": "діалект",
      "th": "ภาษาถิ่น",
      "meaning": "En talemåte knyttet til et område."
    },
    {
      "word": "bokmål",
      "uk": "букмол",
      "th": "บุกมอล",
      "meaning": "En norsk skriftform."
    },
    {
      "word": "nynorsk",
      "uk": "нюношк",
      "th": "นีนอร์สก์",
      "meaning": "En norsk skriftform."
    },
    {
      "word": "en mottaker",
      "uk": "одержувач",
      "th": "ผู้รับ",
      "meaning": "Personen som skal lese teksten."
    },
    {
      "word": "å forklare",
      "uk": "пояснювати",
      "th": "อธิบาย",
      "meaning": "Å gjøre en sammenheng tydelig."
    },
    {
      "word": "en opplysning",
      "uk": "відомість",
      "th": "ข้อมูล",
      "meaning": "En bit informasjon."
    },
    {
      "word": "med egne ord",
      "uk": "своїми словами",
      "th": "ด้วยคำของตนเอง",
      "meaning": "Å forklare uten bare å kopiere."
    },
    {
      "word": "et mål",
      "uk": "мета",
      "th": "เป้าหมาย",
      "meaning": "Det man ønsker å oppnå."
    },
    {
      "word": "et vilkår",
      "uk": "умова",
      "th": "เงื่อนไข",
      "meaning": "Noe planen må ta hensyn til."
    },
    {
      "word": "en plan",
      "uk": "план",
      "th": "แผน",
      "meaning": "En oversikt over hva som skal skje."
    },
    {
      "word": "en tilbakemelding",
      "uk": "відгук",
      "th": "ข้อเสนอแนะ",
      "meaning": "Et svar som kan hjelpe deg å forbedre teksten."
    }
  ]
};
