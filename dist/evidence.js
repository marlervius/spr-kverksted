'use strict';
const EVIDENCE = {
  principles: [
    {
      title: 'Kom tilbake til ordene',
      practice: 'La et målord dukke opp igjen etter et opphold. Bruk først en tydelig ledetråd, og gi litt mindre støtte når eleven har øvd. Intervallene på 1, 3 og 7 dager og to mellomliggende mål er valgte arbeidsregler for dette løpet, ikke dokumenterte optimale intervaller.',
      sourceIds: ['kim-webb-2022']
    },
    {
      title: 'La eleven hente fram språket',
      practice: 'Etter at eleven har sett og forstått et ord eller uttrykk, gi et forsøk der eleven selv må hente fram norsk form før fasiten vises. Før dette som egen måltype fra gjenkjenning eller avskrift.',
      sourceIds: ['candry-2020', 'webb-2023']
    },
    {
      title: 'Bruk mening og sammenheng',
      practice: 'Plasser nye ord i en forståelig beskjed, situasjon eller kort tekst med et konkret mål. Veksle mellom å hente fram et ord og å bruke sammenhengen til å forstå det; vanskeligere gjenhenting er ikke alltid bedre enn informativ kontekst.',
      sourceIds: ['van-den-broek-2022', 'webb-2023', 'beaulieu-fortier-2024']
    },
    {
      title: 'Gi respons etter et forsøk',
      practice: 'Når eleven har skrevet et svar, vis en kort korrekt modell som svarer på oppgaven, og la eleven prøve på nytt eller rette. Ikke ranger direkte, indirekte eller metalingvistisk feedback som universelt best.',
      sourceIds: ['kang-han-2015']
    },
    {
      title: 'Skill mellom å se og å huske',
      practice: 'Vis om eleven kjente igjen et svar, bygde med støtte, eller hentet fram svaret uten hjelp etter et opphold. «Husket senere» krever her et selvstendig korrekt forsøk minst 24 timer etter et tidligere selvstendig korrekt forsøk.',
      sourceIds: ['kim-webb-2022', 'candry-2020', 'webb-2023']
    }
  ],
  sources: [
    {
      id: 'kim-webb-2022',
      authors: 'Su Kyung Kim og Stuart Webb',
      year: '2022',
      title: 'The Effects of Spaced Practice on Second Language Learning: A Meta-Analysis',
      url: 'https://doi.org/10.1111/lang.12479',
      finding: 'Meta-analysen fant en positiv effekt av fordelt øving på læring i andrespråk. Lengre mellomrom kunne være mer gunstig enn korte ved forsinket test; økende og jevne intervaller var ikke tydelig forskjellige.',
      limits: 'Syntesen dekker ulike L2-mål og læringsopplegg. Den identifiserer ikke optimale intervaller for norske A0-voksne, bestemte fraser eller dette nettstedet.'
    },
    {
      id: 'candry-2020',
      authors: 'Sarah Candry, Julie Decloedt og June Eyckmans',
      year: '2020',
      title: 'Comparing the Merits of Word Writing and Retrieval Practice for L2 Vocabulary Learning',
      url: 'https://doi.org/10.1016/j.system.2020.102206',
      finding: 'I en studie med nederlandsktalende elever på anslått B1-nivå ga gjenhenting av engelsk ordform bedre umiddelbar og forsinket formgjenkalling enn gjentatt avskrift og å se på ordpar.',
      limits: 'Deltakerne var ungdommer 15–18 år, målordene var enkeltord og oppgaven var isolert ordlæring. Resultatet dokumenterer ikke effekt på fri setningsskriving eller A0-voksne.'
    },
    {
      id: 'van-den-broek-2022',
      authors: 'Gesa S. E. van den Broek, E. Wesseling, L. Huijssen, M. Lettink og T. van Gog',
      year: '2022',
      title: 'Vocabulary Learning During Reading: Benefits of Contextual Inferences Versus Retrieval Opportunities',
      url: 'https://doi.org/10.1111/cogs.13135',
      finding: 'I første eksperiment ga informativ inferenskontekst bedre forsinket gjenkalling enn retrieval-kontekst. I et andre eksperiment med grundigere innlæring og feedback ga inferenskontekst og retrieval med feedback lignende resultater. Begge konteksttypene ga bedre gjenkalling enn å ikke møte ordene i teksten. Deltakerne leste ellers forståelige nederlandske eller engelske tekster med nye litauiske ord.',
      limits: 'Studien undersøkte ordlæring under lesing av engelske tekster med lærte fremmedord, ikke norsk A0-skriving. Funnene gjelder oppsettet i studien, ikke alle typer gjenhenting.'
    },
    {
      id: 'webb-2023',
      authors: 'Stuart Webb, Takumi Uchihara og Akifumi Yanagisawa',
      year: '2023',
      title: 'How Effective Is Second Language Incidental Vocabulary Learning? A Meta-Analysis',
      url: 'https://doi.org/10.1017/S0261444822000507',
      finding: 'Meta-analysen av L2 meningsbasert input fant at ukjente ord kan læres gjennom lesing og lytting, men gevinsten varierte med blant annet nivå, teksttype, målgruppe, aktivitet og opphold mellom økter. Ulike ettertester målte gjenkjenning og gjenkalling.',
      limits: 'Dette gjelder hovedsakelig utilsiktet ordlæring fra input, ikke fri skriftproduksjon. Oversikten støtter kontekst som læringsmulighet, men fastsetter ikke optimal lengde eller garanterer at et bestemt ord læres.'
    },
    {
      id: 'kang-han-2015',
      authors: 'EunYoung Kang og Zhaohong Han',
      year: '2015',
      title: 'The Efficacy of Written Corrective Feedback in Improving L2 Written Accuracy: A Meta-Analysis',
      url: 'https://doi.org/10.1111/modl.12189',
      finding: 'Syntesen av 21 studier fant at skriftlig korrigerende feedback kan bedre grammatisk nøyaktighet i L2-skriving. Effekten varierte med blant annet elevnivå, undervisningskontekst og tekstsjanger.',
      limits: 'Studiene var ulike i opplegg og deltakere; syntesen gir ikke en oppskrift for enkeltord eller svært korte A0-svar. Den viser ikke at grammatisk feedback alene gir kommunikativ kompetanse.'
    },
    {
      id: 'beaulieu-fortier-2024',
      authors: 'Suzie Beaulieu og Véronique Fortier',
      year: '2024',
      title: 'Addressing the L2 Learning Needs of Adults with Limited Education: Designing Input-Based Tasks for Form-Meaning Connections',
      url: 'https://doi.org/10.1075/task.22012.bea',
      finding: 'En klasseromsstudie i fransk L2 med 13 voksne med begrenset skolebakgrunn brukte lytte-og-gjør-oppgaver om husholdningsting og tallforming. Forskerne fant flere situasjoner der deltakerne koblet språkform og mening, med liten avhengighet av skrift.',
      limits: 'Studien målte slike læringsmuligheter i samhandling, ikke varig læringsutbytte. Den dokumenterer ikke bedre skriving eller effekt for norske A0-elever.'
    }
  ],
  limits: 'Dette er forskningsfunn fra andre språk, oppgaver og deltakergrupper, ikke en evaluering av Språkverkstedet. De støtter ikke alene at elevene når norsk A1 eller utvikler muntlige ferdigheter. Ingen kilde har testet akkurat denne elevgruppen eller nettstedet. Intervallene 1, 3 og 7 dager og to mellomliggende mål er produktets valgte arbeidsregler, ikke forskningsbaserte optimum.'
};
