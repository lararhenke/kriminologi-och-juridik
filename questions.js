const concepts = [
  {
    term: "RÄTTSPOSITIVISM",
    explanation: "Lagens giltighet bestäms av att den har skapats genom rättsliga regler och procedurer. Man skiljer mellan vad lagen är och vad lagen bör vara."
  },
  {
    term: "LEGALITETSPRINCIPEN",
    explanation: "Ingen får dömas för en handling som inte var kriminaliserad när den utfördes. Straff och myndighetsåtgärder måste ha stöd i lag."
  },
  {
    term: "PROPORTIONALITETSPRINCIPEN",
    explanation: "En åtgärd eller ett straff ska stå i rimlig proportion till handlingen och det mål som ska uppnås."
  },
  {
    term: "OBJEKTIVITETSPRINCIPEN",
    explanation: "Myndigheter och domstolar ska agera opartiskt och fatta beslut på sakliga och objektiva grunder."
  },
  {
    term: "STRIKT ANSVAR",
    explanation: "Ansvar kan uppstå utan att uppsåt eller vårdslöshet behöver bevisas. Fokus ligger på resultatet eller ansvaret för en viss risk."
  },
  {
    term: "RENA HANDLINGSBROTT",
    explanation: "Själva handlingen är tillräcklig för att brottet ska vara fullbordat. Ingen särskild skada eller effekt behöver uppstå."
  },
  {
    term: "EFFEKTBROTT",
    explanation: "En viss effekt eller skada måste uppstå för att brottet ska vara fullbordat. Sambandet mellan handling och effekt behöver kunna visas."
  },
  {
    term: "BROTTSREKVISIT",
    explanation: "De förutsättningar i lagen som måste vara uppfyllda för att en handling ska bedömas som ett visst brott."
  },
  {
    term: "OBJEKTIVA BROTTSREKVISIT",
    explanation: "Brottets yttre och faktiska omständigheter. Fokus ligger på vad som faktiskt har gjorts eller inträffat."
  },
  {
    term: "SUBJEKTIVA BROTTSREKVISIT",
    explanation: "Gärningspersonens avsikt, medvetenhet eller oaktsamhet. Fokus ligger på personens inställning till handlingen."
  }
];

const responsibilityQuestions = [
  {
    category: "Strikt ansvar",
    question: "Vad innebär strikt ansvar?",
    options: [
      "Ansvar kan uppstå utan att uppsåt eller vårdslöshet behöver bevisas.",
      "Ansvar uppstår bara om någon avsiktligt orsakat skada.",
      "Ansvar uppstår bara om en domstol kan visa en särskild effekt."
    ],
    answer: 0,
    explanation: "Strikt ansvar innebär att uppsåt eller vårdslöshet inte alltid behöver bevisas."
  },
  {
    category: "Strikt ansvar",
    question: "Vilket begrepp passar bäst? En person eller verksamhet kan hållas ansvarig även om ingen vårdslöshet kan visas.",
    options: ["Strikt ansvar", "Rent handlingsbrott", "Effektbrott"],
    answer: 0,
    explanation: "Det beskriver strikt ansvar."
  },
  {
    category: "Strikt ansvar",
    question: "Vad ligger i fokus vid strikt ansvar?",
    options: [
      "Att uppsåt alltid kan bevisas.",
      "Ansvar för resultatet eller en viss risk.",
      "Att ingen handling behöver ha skett."
    ],
    answer: 1,
    explanation: "Vid strikt ansvar ligger fokus på resultatet eller ansvaret för en viss risk, inte på att bevisa uppsåt."
  },
  {
    category: "Strikt ansvar",
    question: "Vilket påstående stämmer bäst om strikt ansvar?",
    options: [
      "Det kräver alltid att personen ville orsaka skadan.",
      "Det kan gälla utan bevisat uppsåt eller vårdslöshet.",
      "Det betyder att inget ansvar kan utdömas."
    ],
    answer: 1,
    explanation: "Strikt ansvar kan gälla även när uppsåt eller vårdslöshet inte kan visas."
  },
  {
    category: "Strikt ansvar",
    question: "En tillverkare hålls ansvarig för skada från en defekt produkt trots att ingen försumlighet kan visas. Vilket begrepp passar bäst?",
    options: ["Effektbrott", "Strikt ansvar", "Rent handlingsbrott"],
    answer: 1,
    explanation: "Det är ett exempel på strikt ansvar i materialet."
  },
  {
    category: "Strikt ansvar",
    question: "Vilket krav behöver inte alltid bevisas vid strikt ansvar?",
    options: ["Uppsåt eller vårdslöshet", "Att det finns en lag", "Att en bedömning görs"],
    answer: 0,
    explanation: "Det centrala är att uppsåt eller vårdslöshet inte alltid behöver bevisas."
  },
  {
    category: "Rena handlingsbrott",
    question: "Vad är ett rent handlingsbrott?",
    options: [
      "Ett brott där själva handlingen är tillräcklig.",
      "Ett brott där en viss skada alltid måste uppstå.",
      "Ett brott som bara kan begås av företag."
    ],
    answer: 0,
    explanation: "Vid rena handlingsbrott är själva handlingen kriminaliserad."
  },
  {
    category: "Rena handlingsbrott",
    question: "Behöver en särskild skada uppstå för att ett rent handlingsbrott ska vara fullbordat?",
    options: ["Ja, alltid", "Nej", "Bara om gärningspersonen erkänner"],
    answer: 1,
    explanation: "Ingen särskild effekt eller skada behöver uppstå."
  },
  {
    category: "Rena handlingsbrott",
    question: "Vilket begrepp passar bäst? Det räcker att den förbjudna handlingen utförs.",
    options: ["Effektbrott", "Rent handlingsbrott", "Strikt ansvar"],
    answer: 1,
    explanation: "Det är kännetecknande för ett rent handlingsbrott."
  },
  {
    category: "Rena handlingsbrott",
    question: "Olovlig körning används i materialet som exempel på...",
    options: ["Rent handlingsbrott", "Effektbrott", "Strikt ansvar"],
    answer: 0,
    explanation: "Olovlig körning är ett exempel där själva handlingen är tillräcklig."
  },
  {
    category: "Rena handlingsbrott",
    question: "En person kör utan giltigt körkort men ingen skadas. Vilket begrepp passar bäst?",
    options: ["Rent handlingsbrott", "Effektbrott", "Strikt ansvar"],
    answer: 0,
    explanation: "Brottet kan vara fullbordat genom själva handlingen."
  },
  {
    category: "Rena handlingsbrott",
    question: "Vad är avgörande vid ett rent handlingsbrott?",
    options: ["Att en förbjuden handling utförs", "Att en viss skada uppstår", "Att gärningspersonen betalar skadestånd"],
    answer: 0,
    explanation: "Själva den förbjudna handlingen är avgörande."
  },
  {
    category: "Effektbrott",
    question: "Vad krävs för ett effektbrott?",
    options: [
      "Att en viss effekt eller skada uppstår.",
      "Att ingen konsekvens uppstår.",
      "Att handlingen sker inför vittnen."
    ],
    answer: 0,
    explanation: "Effektbrott kräver att en bestämd effekt eller skada uppstår."
  },
  {
    category: "Effektbrott",
    question: "Vilket begrepp passar bäst? Handlingens konsekvens är avgörande för om brottet är fullbordat.",
    options: ["Strikt ansvar", "Rent handlingsbrott", "Effektbrott"],
    answer: 2,
    explanation: "Det beskriver ett effektbrott."
  },
  {
    category: "Effektbrott",
    question: "Vad behöver rättsväsendet kunna visa vid ett effektbrott?",
    options: [
      "Att skadan eller effekten orsakades av handlingen.",
      "Att gärningspersonen alltid erkände.",
      "Att brottet skedde på offentlig plats."
    ],
    answer: 0,
    explanation: "Det behöver finnas ett samband mellan handlingen och den effekt som krävs."
  },
  {
    category: "Effektbrott",
    question: "Skadegörelse används i materialet som exempel på...",
    options: ["Effektbrott", "Strikt ansvar", "Rent handlingsbrott"],
    answer: 0,
    explanation: "Skadegörelse kräver att materiell skada uppstår."
  },
  {
    category: "Effektbrott",
    question: "Vilket påstående stämmer bäst om effektbrott?",
    options: [
      "En viss effekt eller skada måste inträffa.",
      "Ingen effekt behöver inträffa.",
      "Det krävs aldrig något samband mellan handling och skada."
    ],
    answer: 0,
    explanation: "Effektbrott förutsätter en viss effekt eller skada."
  },
  {
    category: "Effektbrott",
    question: "En person försöker skada ett föremål men ingen skada uppstår. Vilken viktig fråga blir central om brottet är ett effektbrott?",
    options: [
      "Om den effekt som lagen kräver faktiskt uppstod.",
      "Om personen är över 18 år.",
      "Om någon såg händelsen."
    ],
    answer: 0,
    explanation: "För ett fullbordat effektbrott måste den föreskrivna effekten ha uppstått."
  },
  {
    category: "Jämförelse",
    question: "Vilken är den viktigaste skillnaden mellan rena handlingsbrott och effektbrott?",
    options: [
      "Effektbrott kräver en viss effekt; rena handlingsbrott gör det inte.",
      "Rena handlingsbrott kräver alltid skada; effektbrott gör det inte.",
      "Det finns ingen skillnad."
    ],
    answer: 0,
    explanation: "Skillnaden är om en bestämd effekt eller skada måste uppstå."
  },
  {
    category: "Jämförelse",
    question: "Vilket begrepp hör ihop med formuleringen: 'ingen specifik effekt eller skada behöver uppstå'?",
    options: ["Rent handlingsbrott", "Effektbrott", "Strikt ansvar"],
    answer: 0,
    explanation: "Formuleringen beskriver rena handlingsbrott."
  },
  {
    category: "Jämförelse",
    question: "Vilket begrepp hör ihop med formuleringen: 'en viss effekt eller skada måste uppstå'?",
    options: ["Rent handlingsbrott", "Effektbrott", "Strikt ansvar"],
    answer: 1,
    explanation: "Formuleringen beskriver effektbrott."
  },
  {
    category: "Jämförelse",
    question: "Vilket begrepp skiljer sig från de andra genom att det handlar om ansvar utan krav på bevisat uppsåt eller vårdslöshet?",
    options: ["Strikt ansvar", "Rent handlingsbrott", "Effektbrott"],
    answer: 0,
    explanation: "Strikt ansvar handlar om själva ansvarsformen."
  },
  {
    category: "Jämförelse",
    question: "Vilket alternativ parar ihop begrepp och förklaring korrekt?",
    options: [
      "Effektbrott – en viss effekt måste uppstå.",
      "Rent handlingsbrott – en viss skada måste alltid uppstå.",
      "Strikt ansvar – uppsåt måste alltid bevisas."
    ],
    answer: 0,
    explanation: "Effektbrott kräver en bestämd effekt eller skada."
  },
  {
    category: "Jämförelse",
    question: "Vilket alternativ är korrekt?",
    options: [
      "Rena handlingsbrott fokuserar på att den förbjudna handlingen utförts.",
      "Effektbrott är alltid brott utan konsekvens.",
      "Strikt ansvar betyder att ingen kan hållas ansvarig."
    ],
    answer: 0,
    explanation: "Vid rena handlingsbrott är själva handlingen central."
  }
];

const rekvisitQuestions = [
  {
    category: "Brottsrekvisit",
    question: "Vad är brottsrekvisit?",
    options: [
      "Förutsättningar som måste vara uppfyllda för ett visst brott.",
      "En lista över alla svenska domstolar.",
      "Ett annat ord för straff."
    ],
    answer: 0,
    explanation: "Brottsrekvisit är de villkor i lagen som måste vara uppfyllda för att ett visst brott ska föreligga."
  },
  {
    category: "Brottsrekvisit",
    question: "Vilka två huvudtyper av brottsrekvisit tränar vi på här?",
    options: [
      "Objektiva och subjektiva.",
      "Allmänna och privata.",
      "Skriftliga och muntliga."
    ],
    answer: 0,
    explanation: "Materialet skiljer mellan objektiva och subjektiva brottsrekvisit."
  },
  {
    category: "Brottsrekvisit",
    question: "Många brott kräver...",
    options: [
      "både objektiva och subjektiva rekvisit.",
      "bara subjektiva rekvisit.",
      "inga rekvisit alls."
    ],
    answer: 0,
    explanation: "Många brott kräver både en brottslig handling och en relevant inställning hos gärningspersonen."
  },
  {
    category: "Objektiva brottsrekvisit",
    question: "Vad fokuserar objektiva brottsrekvisit på?",
    options: [
      "Yttre omständigheter och faktiska handlingar.",
      "Gärningspersonens tankar och avsikter.",
      "Vilket straff domstolen väljer."
    ],
    answer: 0,
    explanation: "Objektiva rekvisit beskriver det som faktiskt har gjorts eller inträffat."
  },
  {
    category: "Objektiva brottsrekvisit",
    question: "Vilken fråga passar bäst för objektiva brottsrekvisit?",
    options: ["Vad gjorde personen?", "Vad tänkte personen?", "Vilket straff bör personen få?"],
    answer: 0,
    explanation: "Objektiva rekvisit handlar om den faktiska handlingen och de yttre omständigheterna."
  },
  {
    category: "Objektiva brottsrekvisit",
    question: "En person tar någon annans mobiltelefon utan lov. Vilken typ av rekvisit beskriver detta främst?",
    options: ["Objektivt", "Subjektivt"],
    answer: 0,
    explanation: "Påståendet beskriver den faktiska handlingen."
  },
  {
    category: "Objektiva brottsrekvisit",
    question: "En person slår en annan person. Vilken typ av rekvisit beskriver själva slaget?",
    options: ["Objektivt", "Subjektivt"],
    answer: 0,
    explanation: "Själva slaget är en yttre, faktisk handling."
  },
  {
    category: "Objektiva brottsrekvisit",
    question: "Ett fönster går sönder efter att någon kastat en sten. Vilken typ av rekvisit beskriver den uppkomna skadan?",
    options: ["Objektivt", "Subjektivt"],
    answer: 0,
    explanation: "Den faktiska skadan är en yttre omständighet."
  },
  {
    category: "Objektiva brottsrekvisit",
    question: "En person kör en bil utan giltigt körkort. Vad beskriver detta främst?",
    options: ["Objektivt rekvisit", "Subjektivt rekvisit"],
    answer: 0,
    explanation: "Det beskriver den konkreta handlingen."
  },
  {
    category: "Objektiva brottsrekvisit",
    question: "Vilket av följande är objektivt?",
    options: [
      "Att någon tar ett föremål som tillhör någon annan.",
      "Att någon vill behålla föremålet.",
      "Att någon känner skuld efteråt."
    ],
    answer: 0,
    explanation: "Att ta föremålet är själva den yttre handlingen."
  },
  {
    category: "Objektiva brottsrekvisit",
    question: "Vilket påstående beskriver ett objektivt rekvisit?",
    options: [
      "Personen bryter upp en låst dörr.",
      "Personen har för avsikt att stjäla.",
      "Personen vet att handlingen är olaglig."
    ],
    answer: 0,
    explanation: "Att bryta upp dörren är en faktisk handling."
  },
  {
    category: "Objektiva brottsrekvisit",
    question: "En person överför pengar från någon annans konto. Vad beskriver själva överföringen?",
    options: ["Objektivt rekvisit", "Subjektivt rekvisit"],
    answer: 0,
    explanation: "Överföringen är en konkret handling."
  },
  {
    category: "Objektiva brottsrekvisit",
    question: "En cykel tillhör någon annan. Vilken typ av omständighet är ägandeförhållandet?",
    options: ["Objektiv", "Subjektiv"],
    answer: 0,
    explanation: "Vem som äger cykeln är en yttre faktisk omständighet."
  },
  {
    category: "Subjektiva brottsrekvisit",
    question: "Vad fokuserar subjektiva brottsrekvisit på?",
    options: [
      "Gärningspersonens avsikt, medvetenhet eller oaktsamhet.",
      "Den fysiska platsen där handlingen skedde.",
      "Domstolens organisation."
    ],
    answer: 0,
    explanation: "Subjektiva rekvisit handlar om gärningspersonens inställning till handlingen."
  },
  {
    category: "Subjektiva brottsrekvisit",
    question: "Vilken fråga passar bäst för subjektiva brottsrekvisit?",
    options: ["Vad tänkte eller avsåg personen?", "Vad hände rent fysiskt?", "Vilken domstol prövar målet?"],
    answer: 0,
    explanation: "Subjektiva rekvisit handlar om avsikt, medvetenhet och oaktsamhet."
  },
  {
    category: "Subjektiva brottsrekvisit",
    question: "En person tar en mobiltelefon med avsikt att behålla den. Vad beskriver avsikten främst?",
    options: ["Subjektivt rekvisit", "Objektivt rekvisit"],
    answer: 0,
    explanation: "Avsikten att behålla mobilen beskriver gärningspersonens inställning."
  },
  {
    category: "Subjektiva brottsrekvisit",
    question: "En person slår någon med avsikt att skada. Vad beskriver avsikten?",
    options: ["Subjektivt rekvisit", "Objektivt rekvisit"],
    answer: 0,
    explanation: "Avsikten att skada är subjektiv."
  },
  {
    category: "Subjektiva brottsrekvisit",
    question: "Vilket av följande är subjektivt?",
    options: [
      "Personen vill behålla det stulna föremålet.",
      "Personen tar föremålet.",
      "Föremålet tillhör någon annan."
    ],
    answer: 0,
    explanation: "Viljan eller avsikten är ett subjektivt rekvisit."
  },
  {
    category: "Subjektiva brottsrekvisit",
    question: "Gärningspersonen vet att väskan tillhör någon annan men tar den ändå. Vad beskriver medvetenheten?",
    options: ["Subjektivt rekvisit", "Objektivt rekvisit"],
    answer: 0,
    explanation: "Medvetenheten hör till gärningspersonens inre inställning."
  },
  {
    category: "Subjektiva brottsrekvisit",
    question: "Vilket begrepp hör främst ihop med subjektiva rekvisit?",
    options: ["Uppsåt", "Fysisk handling", "Skadans storlek"],
    answer: 0,
    explanation: "Uppsåt är centralt när man bedömer subjektiva rekvisit."
  },
  {
    category: "Subjektiva brottsrekvisit",
    question: "Vilket begrepp kan också vara relevant för subjektiva rekvisit?",
    options: ["Oaktsamhet", "Tingsrätt", "Äganderätt till en byggnad"],
    answer: 0,
    explanation: "Oaktsamhet kan vara den subjektiva förutsättning som lagen kräver."
  },
  {
    category: "Subjektiva brottsrekvisit",
    question: "En person orsakar en skada genom oaktsamhet. Vilken del beskriver personens inställning?",
    options: ["Oaktsamheten", "Själva skadan"],
    answer: 0,
    explanation: "Oaktsamheten är kopplad till den subjektiva sidan."
  },
  {
    category: "Kombination av rekvisit",
    question: "Stöld kräver både att någon olovligen tar något och en relevant avsikt. Vad visar detta?",
    options: [
      "Att brottet kan kräva både objektiva och subjektiva rekvisit.",
      "Att bara objektiva rekvisit spelar roll.",
      "Att rekvisit inte behövs."
    ],
    answer: 0,
    explanation: "Många brott kräver att båda typerna av rekvisit är uppfyllda."
  },
  {
    category: "Kombination av rekvisit",
    question: "En person tar av misstag en identisk jacka som tillhör någon annan. Vilken del behöver undersökas särskilt?",
    options: [
      "Det subjektiva rekvisitet – personens avsikt och medvetenhet.",
      "Vilken domstolsbyggnad som ligger närmast.",
      "Om jackan är dyr."
    ],
    answer: 0,
    explanation: "Den faktiska handlingen kan ha skett, men personens avsikt behöver också bedömas."
  },
  {
    category: "Kombination av rekvisit",
    question: "En person slår en annan och orsakar skada. För att bedöma brottet behöver man också undersöka...",
    options: [
      "gärningspersonens uppsåt eller oaktsamhet.",
      "vilket gymnasium personen gått på.",
      "vilken tid rättegången börjar."
    ],
    answer: 0,
    explanation: "Utöver handlingen behöver den subjektiva sidan bedömas."
  },
  {
    category: "Kombination av rekvisit",
    question: "Vilket par är korrekt?",
    options: [
      "Objektivt = handlingen. Subjektivt = avsikten.",
      "Objektivt = avsikten. Subjektivt = handlingen.",
      "Objektivt = straffet. Subjektivt = domstolen."
    ],
    answer: 0,
    explanation: "Objektivt beskriver det yttre; subjektivt beskriver gärningspersonens inställning."
  },
  {
    category: "Kombination av rekvisit",
    question: "En person förstör medvetet någon annans cykel. Vad är 'förstör cykeln'?",
    options: ["Objektivt rekvisit", "Subjektivt rekvisit"],
    answer: 0,
    explanation: "Det beskriver den faktiska handlingen och skadan."
  },
  {
    category: "Kombination av rekvisit",
    question: "En person förstör medvetet någon annans cykel. Vad är 'medvetet'?",
    options: ["Subjektivt rekvisit", "Objektivt rekvisit"],
    answer: 0,
    explanation: "Medvetenheten beskriver gärningspersonens inställning."
  },
  {
    category: "Kombination av rekvisit",
    question: "Vilket påstående stämmer?",
    options: [
      "Objektiva och subjektiva rekvisit bedömer olika delar av samma händelse.",
      "Objektiva och subjektiva rekvisit betyder exakt samma sak.",
      "Subjektiva rekvisit handlar bara om straffets längd."
    ],
    answer: 0,
    explanation: "De två typerna kompletterar varandra när ett brott bedöms."
  },
  {
    category: "Kombination av rekvisit",
    question: "Varför används både objektiva och subjektiva rekvisit?",
    options: [
      "För att bedöma både vad som hände och gärningspersonens inställning.",
      "För att välja vilken domstol som ligger närmast.",
      "För att bestämma hur många vittnen som behövs."
    ],
    answer: 0,
    explanation: "Bedömningen omfattar både den yttre handlingen och den subjektiva sidan."
  }
];

const studyAdvice = {
  responsibility: {
    "Strikt ansvar": "Strikt ansvar – särskilt att uppsåt eller vårdslöshet inte alltid behöver bevisas.",
    "Rena handlingsbrott": "Rena handlingsbrott – själva handlingen räcker; en särskild effekt behöver inte uppstå.",
    "Effektbrott": "Effektbrott – en viss effekt eller skada måste uppstå och kunna kopplas till handlingen.",
    "Jämförelse": "Skillnaden mellan strikt ansvar, rena handlingsbrott och effektbrott."
  },
  rekvisit: {
    "Brottsrekvisit": "Brottsrekvisit – vilka förutsättningar som måste vara uppfyllda för ett brott.",
    "Objektiva brottsrekvisit": "Objektiva brottsrekvisit – handlingen och de yttre, faktiska omständigheterna.",
    "Subjektiva brottsrekvisit": "Subjektiva brottsrekvisit – uppsåt, avsikt, medvetenhet och oaktsamhet.",
    "Kombination av rekvisit": "Hur objektiva och subjektiva rekvisit kombineras i samma brott."
  }
};
