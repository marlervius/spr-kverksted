# Språkverkstedet

Et visuelt norskverksted for ungdom og voksne, fra første ord og videre mot B1.

## Innhold og oppbygning

- To veier dekker de samme 52 temaene. Grunnløpet har 312 øvelser med små steg og øving. Mer utfordring har 156 øvelser med flere opplysninger, retting av avvik og egne korte svar. Begge har ti A0-leksjoner, to broleksjoner, åtte leksjoner med arbeid på vei mot A1 åtte videre temaer på vei mot A2 og 24 temaer innen A2 og på vei mot B1. Eleven kan bytte til samme tema i den andre veien når som helst.
- Lukkede oppgaver har fasit. Navn og frie tekster lagres med egenvurdering. Fullført løp dokumenterer ikke oppnådd språknivå.
- Ingen lydavspilling, tidsgrenser eller innsamling av elevtekster. Arbeidet lagres i nettleseren.

`dist/curriculum.js` eier grunnløpets innhold og ordliste. `dist/challenges.js` eier utfordringsveien. `dist/continuation.js` inneholder fire videre temaer i begge veier, og `dist/next-lessons.js` inneholder åtte nye temaer med tilhørende ordliste. `dist/course-a2.js`, `dist/course-a2plus.js` og `dist/course-b1.js` inneholder de siste temaene; `dist/course-map.js` inneholder modulstruktur, aktiviteter og kilder. `dist/illustrations.js` tegner de konkrete læringsillustrasjonene som SVG. `dist/app.js` eier øvelser, navigasjon, arbeidsbok og lokal lagring. `dist/style.css` eier det lyse læreverkdesignet og responsiv visning.

Siden er statisk og bruker ingen eksterne fonter eller bildebiblioteker. `.openai/hosting.json` beholder eksisterende Site-identitet og static.directory.

## Lagring og tidligere arbeid

Løpet bruker `sprakverkstedet-a0-a1-v2`. Eksisterende svar og fremgang i denne versjonen beholdes; utfordringsoppgavene har egne ID-er og starter uten fremgang. Valgt vei og sist åpnet oppgave i hver vei lagres separat. Arbeidsboka viser begge veier. Framdriftsvisningen teller fullførte øvelser og temaer, ikke oppnådd språknivå eller selvstendig mestring. Hovedknappen gjenopptar arbeidet gjennom hele den valgte veien; A0-knappen åpner første ufullførte A0-øvelse. Den tidligere nøkkelen `sprakverkstedet-v1` endres ikke. Eldre tekster kan leses under «Tidligere tekster», mens gammel progresjon ikke telles i det nye løpet. Arbeidsboka kan kopieres eller lastes ned som tekst.

## Øving, støtte og repetisjon

Læreoppgaver viser modell. I andre oppgaver starter eleven med «Prøv selv» og kan velge eksempel eller hjelp. Hjelp registreres også hvis eleven forlater oppgaven uten å svare. Feil registreres ved forsøket. Etter feil vises et korrekt svar. Valgoppgaver, bygging og gjenhenting registreres hver for seg; åpne tekster vurderes av eleven og lærer, ikke automatisk. Variasjoner velges ved åpning og kan også skiftes med «Ny variant».

«Repeter» bruker tidligere forsøkte gjenhentingsmål fra grunnløpet. I utfordringsveien kan «Repeter korte svar» også bruke lukkede setningsoppgaver; åpne tekster vurderes ikke automatisk. Det må finnes minst tre ulike mål, slik at hjelp eller feil følges av andre mål før samme mål tas opp igjen. Oversikten viser antall forsøkte svar som er klare for repetisjon når minst tre ulike mål er forsøkt. Mål som ennå ikke forfaller, kan tilbys som ekstraøving. Ett, tre og sju dager er praktiske standardintervaller i denne løsningen, ikke vitenskapelig fastslåtte optimale intervaller. Antall klikk eller status er ikke en nivåsertifisering. Forskningsgrunnlaget og begrensninger finnes i lærerområdet.

## Kontroll

Kursoversikten grupperer temaene i moduler fra første ord til arbeid på vei mot B1. Frivillige lærerledede aktiviteter har egen elevregistrering og telles ikke som øvelser eller mestring. Nettstedet spiller ikke av lyd og vurderer ikke uttale eller lytting. Alle leksjoner er tilgjengelige fra oversikten. Illustrasjonene er laget som lokale SVG-er, og de åpne tekstene krever elevens egenvurdering.

Nivåorientering: Council of Europe (2020), *CEFR Companion volume*, særlig s. 54, 66 og 243: https://rm.coe.int/common-european-framework-of-reference-for-languages-learning-teaching/16809ea0d4 . Leksjonsinndelingen er en pedagogisk tilpasning, ikke en offisiell læreplan eller nivåprøve.
