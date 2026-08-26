const concepts = [
  {
    "term": "RÄTTSPOSITIVISM",
    "shortDefinition": "En lag är giltig om den har tillkommit på rätt sätt.",
    "details": "Lagens giltighet bestäms av att den har skapats genom rättsliga regler och procedurer. Man skiljer mellan vad lagen är och vad lagen bör vara. En lag kan därför vara juridiskt giltig även om man anser att den är orättvis, dåligt anpassad eller föråldrad.",
    "example": "En person kan anse att en viss lag är orättvis, men lagen gäller ändå tills den ändras eller upphävs."
  },
  {
    "term": "LEGALITETSPRINCIPEN",
    "shortDefinition": "Ingen får dömas för något som inte var förbjudet enligt lag.",
    "details": "Det måste finnas stöd i lagen för att någon ska kunna dömas och straffas. En handling kan inte göras straffbar i efterhand.",
    "example": "Om en handling blir förbjuden den 1 januari kan en person inte dömas för att ha gjort samma sak i december när handlingen fortfarande var laglig."
  },
  {
    "term": "PROPORTIONALITETSPRINCIPEN",
    "shortDefinition": "Straff och andra åtgärder ska stå i proportion till handlingen.",
    "details": "En åtgärd får inte vara mer ingripande än vad som är rimligt och nödvändigt. Ju mer ingripande en åtgärd är, desto starkare skäl krävs.",
    "example": "En mindre förseelse ska inte leda till ett mycket hårt straff som inte står i proportion till det personen har gjort."
  },
  {
    "term": "OBJEKTIVITETSPRINCIPEN",
    "shortDefinition": "Myndigheter och domstolar ska vara sakliga och opartiska.",
    "details": "Beslut ska grundas på relevanta fakta och gällande regler. Personliga åsikter, relationer eller intressen ska inte påverka hur en person behandlas.",
    "example": "En polis får inte behandla en misstänkt hårdare för att polisen personligen ogillar personen."
  },
  {
    "term": "STRIKT ANSVAR",
    "shortDefinition": "Ansvar utan krav på uppsåt eller oaktsamhet.",
    "details": "En person eller organisation kan i vissa situationer hållas ansvarig utan att det behöver visas att någon handlat avsiktligt eller oaktsamt. Fokus ligger på att vissa förutsättningar för ansvar är uppfyllda.",
    "example": "Ett företag kan i vissa situationer bli ansvarigt för en skada som en produkt orsakar utan att företaget avsiktligt har orsakat skadan."
  },
  {
    "term": "RENA HANDLINGSBROTT",
    "shortDefinition": "Själva handlingen är tillräcklig för att brottet ska vara fullbordat.",
    "details": "Det krävs inte att handlingen leder till någon särskild skada eller annan effekt. Brottet är fullbordat när den förbjudna handlingen har utförts.",
    "example": "Vid rattfylleri behöver föraren inte orsaka en trafikolycka. Själva körningen under alkoholpåverkan kan vara tillräcklig."
  },
  {
    "term": "EFFEKTBROTT",
    "shortDefinition": "En viss effekt måste uppstå för att brottet ska vara fullbordat.",
    "details": "Det räcker inte att en person utför en viss handling. Handlingen måste leda till den effekt eller följd som anges i brottsbestämmelsen.",
    "example": "För att någon ska dömas för mord måste en annan person ha avlidit till följd av gärningen."
  },
  {
    "term": "BROTTSREKVISIT",
    "shortDefinition": "De krav som måste vara uppfyllda för att en handling ska utgöra ett visst brott.",
    "details": "Varje brott har bestämda rekvisit i lagen. Domstolen prövar om dessa krav är uppfyllda för att avgöra om personen har begått brottet.",
    "example": "För att någon ska dömas för stöld måste rekvisiten för stöld vara uppfyllda. Det räcker inte att handlingen bara uppfattas som fel."
  },
  {
    "term": "OBJEKTIVA BROTTSREKVISIT",
    "shortDefinition": "De yttre och faktiska omständigheterna kring ett brott.",
    "details": "Fokus ligger på vad personen faktiskt har gjort och vad som har inträffat, exempelvis handlingen, föremålet eller den effekt som handlingen orsakat.",
    "example": "En person tar någon annans mobiltelefon. Att personen tar mobilen och att den tillhör någon annan är faktiska omständigheter som kan prövas."
  },
  {
    "term": "SUBJEKTIVA BROTTSREKVISIT",
    "shortDefinition": "Gärningspersonens inställning till handlingen och det som inträffar.",
    "details": "Fokus ligger på vad personen avsåg, insåg eller borde ha förstått. Det handlar framför allt om uppsåt och, när lagen föreskriver det, oaktsamhet.",
    "example": "En person tar medvetet någon annans mobiltelefon för att behålla den. Att personen vet att mobilen tillhör någon annan och ändå tar den handlar om personens inställning till gärningen."
  }
];

const responsibilityQuestions = [
  {
    "category": "Strikt ansvar",
    "question": "Vad innebär strikt ansvar?",
    "options": [
      "Ansvar kan uppstå utan att uppsåt eller vårdslöshet behöver bevisas",
      "Ansvar uppstår bara om någon avsiktligt orsakat skada.",
      "Ansvar uppstår bara om en domstol kan visa en särskild effekt."
    ],
    "answer": 0,
    "explanation": "Strikt ansvar innebär att uppsåt eller vårdslöshet inte alltid behöver bevisas.",
    "correctExplanation": "Strikt ansvar innebär att ansvar i vissa fall kan uppstå utan att uppsåt eller oaktsamhet behöver bevisas.",
    "answerType": "text"
  },
  {
    "category": "Strikt ansvar",
    "question": "Vilket begrepp passar bäst? En person eller verksamhet kan hållas ansvarig även om ingen vårdslöshet kan visas.",
    "options": [
      "Strikt ansvar",
      "Rent handlingsbrott",
      "Effektbrott",
      "Brottsrekvisit"
    ],
    "answer": 0,
    "explanation": "Det beskriver strikt ansvar.",
    "correctExplanation": "Strikt ansvar innebär att ansvar i vissa fall kan uppstå utan att uppsåt eller oaktsamhet behöver bevisas.",
    "answerType": "concept"
  },
  {
    "category": "Strikt ansvar",
    "question": "Vad ligger i fokus vid strikt ansvar?",
    "options": [
      "Att uppsåt alltid kan bevisas.",
      "Ansvar för resultatet eller en viss risk",
      "Att ingen handling behöver ha skett."
    ],
    "answer": 1,
    "explanation": "Vid strikt ansvar ligger fokus på resultatet eller ansvaret för en viss risk, inte på att bevisa uppsåt.",
    "correctExplanation": "Strikt ansvar innebär att ansvar i vissa fall kan uppstå utan att uppsåt eller oaktsamhet behöver bevisas.",
    "answerType": "text"
  },
  {
    "category": "Strikt ansvar",
    "question": "Vilket påstående stämmer bäst om strikt ansvar?",
    "options": [
      "Det kräver alltid att personen ville orsaka skadan.",
      "Det kan gälla utan bevisat uppsåt eller vårdslöshet",
      "Det betyder att inget ansvar kan utdömas."
    ],
    "answer": 1,
    "explanation": "Strikt ansvar kan gälla även när uppsåt eller vårdslöshet inte kan visas.",
    "correctExplanation": "Strikt ansvar innebär att ansvar i vissa fall kan uppstå utan att uppsåt eller oaktsamhet behöver bevisas.",
    "answerType": "text"
  },
  {
    "category": "Strikt ansvar",
    "question": "En tillverkare hålls ansvarig för skada från en defekt produkt trots att ingen försumlighet kan visas. Vilket begrepp passar bäst?",
    "options": [
      "Effektbrott",
      "Strikt ansvar",
      "Rent handlingsbrott",
      "Brottsrekvisit"
    ],
    "answer": 1,
    "explanation": "Det är ett exempel på strikt ansvar i materialet.",
    "correctExplanation": "Strikt ansvar innebär att ansvar i vissa fall kan uppstå utan att uppsåt eller oaktsamhet behöver bevisas.",
    "answerType": "concept"
  },
  {
    "category": "Strikt ansvar",
    "question": "Vilket krav behöver inte alltid bevisas vid strikt ansvar?",
    "options": [
      "Uppsåt eller vårdslöshet",
      "Att det finns en lag",
      "Att en bedömning görs"
    ],
    "answer": 0,
    "explanation": "Det centrala är att uppsåt eller vårdslöshet inte alltid behöver bevisas.",
    "correctExplanation": "Strikt ansvar innebär att ansvar i vissa fall kan uppstå utan att uppsåt eller oaktsamhet behöver bevisas.",
    "answerType": "text"
  },
  {
    "category": "Rena handlingsbrott",
    "question": "Vad är ett rent handlingsbrott?",
    "options": [
      "Ett brott där själva handlingen är tillräcklig",
      "Ett brott där en viss skada alltid måste uppstå.",
      "Ett brott som bara kan begås av företag."
    ],
    "answer": 0,
    "explanation": "Vid rena handlingsbrott är själva handlingen kriminaliserad.",
    "correctExplanation": "Vid rena handlingsbrott är själva handlingen kriminaliserad och någon särskild effekt behöver inte uppstå.",
    "answerType": "text"
  },
  {
    "category": "Rena handlingsbrott",
    "question": "Behöver en särskild skada uppstå för att ett rent handlingsbrott ska vara fullbordat?",
    "options": [
      "Ja, alltid",
      "Nej",
      "Bara om gärningspersonen erkänner"
    ],
    "answer": 1,
    "explanation": "Ingen särskild effekt eller skada behöver uppstå.",
    "correctExplanation": "Vid rena handlingsbrott är själva handlingen kriminaliserad och någon särskild effekt behöver inte uppstå.",
    "answerType": "text"
  },
  {
    "category": "Rena handlingsbrott",
    "question": "Vilket begrepp passar bäst? Det räcker att den förbjudna handlingen utförs.",
    "options": [
      "Effektbrott",
      "Rent handlingsbrott",
      "Strikt ansvar",
      "Brottsrekvisit"
    ],
    "answer": 1,
    "explanation": "Det är kännetecknande för ett rent handlingsbrott.",
    "correctExplanation": "Vid rena handlingsbrott är själva handlingen kriminaliserad och någon särskild effekt behöver inte uppstå.",
    "answerType": "concept"
  },
  {
    "category": "Rena handlingsbrott",
    "question": "Olovlig körning används i materialet som exempel på...",
    "options": [
      "Rent handlingsbrott",
      "Effektbrott",
      "Strikt ansvar",
      "Brottsrekvisit"
    ],
    "answer": 0,
    "explanation": "Olovlig körning är ett exempel där själva handlingen är tillräcklig.",
    "correctExplanation": "Vid rena handlingsbrott är själva handlingen kriminaliserad och någon särskild effekt behöver inte uppstå.",
    "answerType": "concept"
  },
  {
    "category": "Rena handlingsbrott",
    "question": "En person kör utan giltigt körkort men ingen skadas. Vilket begrepp passar bäst?",
    "options": [
      "Rent handlingsbrott",
      "Effektbrott",
      "Strikt ansvar",
      "Brottsrekvisit"
    ],
    "answer": 0,
    "explanation": "Brottet kan vara fullbordat genom själva handlingen.",
    "correctExplanation": "Vid rena handlingsbrott är själva handlingen kriminaliserad och någon särskild effekt behöver inte uppstå.",
    "answerType": "concept"
  },
  {
    "category": "Rena handlingsbrott",
    "question": "Vad är avgörande vid ett rent handlingsbrott?",
    "options": [
      "Att en förbjuden handling utförs",
      "Att en viss skada uppstår",
      "Att gärningspersonen betalar skadestånd"
    ],
    "answer": 0,
    "explanation": "Själva den förbjudna handlingen är avgörande.",
    "correctExplanation": "Vid rena handlingsbrott är själva handlingen kriminaliserad och någon särskild effekt behöver inte uppstå.",
    "answerType": "text"
  },
  {
    "category": "Effektbrott",
    "question": "Vad krävs för ett effektbrott?",
    "options": [
      "Att en viss effekt eller skada uppstår",
      "Att ingen konsekvens uppstår.",
      "Att handlingen sker inför vittnen."
    ],
    "answer": 0,
    "explanation": "Effektbrott kräver att en bestämd effekt eller skada uppstår.",
    "correctExplanation": "Kravet på en bestämd skada eller följd kännetecknar ett effektbrott.",
    "answerType": "text"
  },
  {
    "category": "Effektbrott",
    "question": "Vilket begrepp passar bäst? Handlingens konsekvens är avgörande för om brottet är fullbordat.",
    "options": [
      "Strikt ansvar",
      "Rent handlingsbrott",
      "Effektbrott",
      "Brottsrekvisit"
    ],
    "answer": 2,
    "explanation": "Det beskriver ett effektbrott.",
    "correctExplanation": "Kravet på en bestämd skada eller följd kännetecknar ett effektbrott.",
    "answerType": "concept"
  },
  {
    "category": "Effektbrott",
    "question": "Vad behöver rättsväsendet kunna visa vid ett effektbrott?",
    "options": [
      "Att skadan eller effekten orsakades av handlingen",
      "Att gärningspersonen alltid erkände.",
      "Att brottet skedde på offentlig plats."
    ],
    "answer": 0,
    "explanation": "Det behöver finnas ett samband mellan handlingen och den effekt som krävs.",
    "correctExplanation": "Kravet på en bestämd skada eller följd kännetecknar ett effektbrott.",
    "answerType": "text"
  },
  {
    "category": "Effektbrott",
    "question": "Skadegörelse används i materialet som exempel på...",
    "options": [
      "Effektbrott",
      "Strikt ansvar",
      "Rent handlingsbrott",
      "Brottsrekvisit"
    ],
    "answer": 0,
    "explanation": "Skadegörelse kräver att materiell skada uppstår.",
    "correctExplanation": "Kravet på en bestämd skada eller följd kännetecknar ett effektbrott.",
    "answerType": "concept"
  },
  {
    "category": "Effektbrott",
    "question": "Vilket påstående stämmer bäst om effektbrott?",
    "options": [
      "En viss effekt eller skada måste inträffa",
      "Ingen effekt behöver inträffa.",
      "Det krävs aldrig något samband mellan handling och skada."
    ],
    "answer": 0,
    "explanation": "Effektbrott förutsätter en viss effekt eller skada.",
    "correctExplanation": "Kravet på en bestämd skada eller följd kännetecknar ett effektbrott.",
    "answerType": "text"
  },
  {
    "category": "Effektbrott",
    "question": "En person försöker skada ett föremål men ingen skada uppstår. Vilken viktig fråga blir central om brottet är ett effektbrott?",
    "options": [
      "Om den effekt som lagen kräver faktiskt uppstod",
      "Om personen är över 18 år.",
      "Om någon såg händelsen."
    ],
    "answer": 0,
    "explanation": "För ett fullbordat effektbrott måste den föreskrivna effekten ha uppstått.",
    "correctExplanation": "Kravet på en bestämd skada eller följd kännetecknar ett effektbrott.",
    "answerType": "text"
  },
  {
    "category": "Jämförelse",
    "question": "Vilken är den viktigaste skillnaden mellan rena handlingsbrott och effektbrott?",
    "options": [
      "Effektbrott kräver en viss effekt; rena handlingsbrott gör det inte.",
      "Rena handlingsbrott kräver alltid skada; effektbrott gör det inte.",
      "Det finns ingen skillnad."
    ],
    "answer": 0,
    "explanation": "Skillnaden är om en bestämd effekt eller skada måste uppstå.",
    "correctExplanation": "Ett effektbrott kräver att en viss effekt eller följd uppstår.",
    "answerType": "text"
  },
  {
    "category": "Jämförelse",
    "question": "Vilket begrepp hör ihop med formuleringen: 'ingen specifik effekt eller skada behöver uppstå'?",
    "options": [
      "Rent handlingsbrott",
      "Effektbrott",
      "Strikt ansvar",
      "Brottsrekvisit"
    ],
    "answer": 0,
    "explanation": "Formuleringen beskriver rena handlingsbrott.",
    "correctExplanation": "Vid rena handlingsbrott räcker själva den förbjudna handlingen.",
    "answerType": "concept"
  },
  {
    "category": "Jämförelse",
    "question": "Vilket begrepp hör ihop med formuleringen: 'en viss effekt eller skada måste uppstå'?",
    "options": [
      "Rent handlingsbrott",
      "Effektbrott",
      "Strikt ansvar",
      "Brottsrekvisit"
    ],
    "answer": 1,
    "explanation": "Formuleringen beskriver effektbrott.",
    "correctExplanation": "Ett effektbrott kräver att en viss effekt eller följd uppstår.",
    "answerType": "concept"
  },
  {
    "category": "Jämförelse",
    "question": "Vilket begrepp skiljer sig från de andra genom att det handlar om ansvar utan krav på bevisat uppsåt eller vårdslöshet?",
    "options": [
      "Strikt ansvar",
      "Rent handlingsbrott",
      "Effektbrott",
      "Brottsrekvisit"
    ],
    "answer": 0,
    "explanation": "Strikt ansvar handlar om själva ansvarsformen.",
    "correctExplanation": "Strikt ansvar kan föreligga utan att uppsåt eller oaktsamhet behöver bevisas.",
    "answerType": "concept"
  },
  {
    "category": "Jämförelse",
    "question": "Vilket alternativ parar ihop begrepp och förklaring korrekt?",
    "options": [
      "Effektbrott – en viss effekt måste uppstå.",
      "Rent handlingsbrott – en viss skada måste alltid uppstå.",
      "Strikt ansvar – uppsåt måste alltid bevisas."
    ],
    "answer": 0,
    "explanation": "Effektbrott kräver en bestämd effekt eller skada.",
    "correctExplanation": "Ett effektbrott kräver att en viss effekt eller följd uppstår.",
    "answerType": "text"
  },
  {
    "category": "Jämförelse",
    "question": "Vilket alternativ är korrekt?",
    "options": [
      "Rena handlingsbrott fokuserar på att den förbjudna handlingen utförts.",
      "Effektbrott är alltid brott utan konsekvens.",
      "Strikt ansvar betyder att ingen kan hållas ansvarig."
    ],
    "answer": 0,
    "explanation": "Vid rena handlingsbrott är själva handlingen central.",
    "correctExplanation": "Vid rena handlingsbrott räcker själva den förbjudna handlingen.",
    "answerType": "text"
  },
  {
    "category": "Strikt ansvar",
    "question": "Vilken situation beskriver strikt ansvar bäst?",
    "options": [
      "En verksamhet kan hållas ansvarig trots att oaktsamhet inte kan visas",
      "En person döms eftersom en förbjuden handling utförts utan att någon effekt krävs.",
      "En person döms eftersom handlingen orsakat en viss effekt."
    ],
    "answer": 0,
    "explanation": "Det centrala är att ansvar kan uppstå utan att uppsåt eller oaktsamhet behöver visas.",
    "correctExplanation": "Strikt ansvar innebär att ansvar i vissa fall kan uppstå utan att uppsåt eller oaktsamhet behöver bevisas.",
    "answerType": "text"
  },
  {
    "category": "Strikt ansvar",
    "question": "Vad skiljer strikt ansvar från vanligt skuldansvar?",
    "options": [
      "Uppsåt eller oaktsamhet behöver inte alltid bevisas",
      "Ingen handling behöver ha utförts.",
      "Ingen lagregel behöver finnas."
    ],
    "answer": 0,
    "explanation": "Skillnaden ligger i kravet på skuld: vid strikt ansvar kan ansvar i vissa fall uppstå utan bevisat uppsåt eller oaktsamhet.",
    "correctExplanation": "Strikt ansvar innebär att ansvar i vissa fall kan uppstå utan att uppsåt eller oaktsamhet behöver bevisas.",
    "answerType": "text"
  },
  {
    "category": "Strikt ansvar",
    "question": "Vilket påstående stämmer bäst?",
    "options": [
      "Strikt ansvar handlar om vilka krav på skuld som ställs för ansvar.",
      "Strikt ansvar betyder att själva handlingen alltid räcker för ett brott.",
      "Strikt ansvar betyder att en viss effekt alltid måste uppstå."
    ],
    "answer": 0,
    "explanation": "Strikt ansvar handlar om ansvarsformen, inte om skillnaden mellan handlingsbrott och effektbrott.",
    "correctExplanation": "Strikt ansvar innebär att ansvar i vissa fall kan uppstå utan att uppsåt eller oaktsamhet behöver bevisas.",
    "answerType": "text"
  },
  {
    "category": "Strikt ansvar",
    "question": "En tillverkare blir ansvarig för en skada trots att det inte går att visa att företaget varit oaktsamt. Vilket begrepp passar bäst?",
    "options": [
      "Strikt ansvar",
      "Rent handlingsbrott",
      "Effektbrott",
      "Brottsrekvisit"
    ],
    "answer": 0,
    "explanation": "Situationen illustrerar strikt ansvar eftersom oaktsamhet inte behöver visas.",
    "correctExplanation": "Strikt ansvar innebär att ansvar i vissa fall kan uppstå utan att uppsåt eller oaktsamhet behöver bevisas.",
    "answerType": "concept"
  },
  {
    "category": "Strikt ansvar",
    "question": "Vilket krav är det framför allt som kan saknas vid strikt ansvar?",
    "options": [
      "Krav på uppsåt eller oaktsamhet",
      "Krav på att det finns en rättsregel.",
      "Krav på att någon kan knytas till händelsen."
    ],
    "answer": 0,
    "explanation": "Strikt ansvar innebär inte att rättsliga krav försvinner, utan att just uppsåt eller oaktsamhet inte alltid behöver bevisas.",
    "correctExplanation": "Strikt ansvar innebär att ansvar i vissa fall kan uppstå utan att uppsåt eller oaktsamhet behöver bevisas.",
    "answerType": "text"
  },
  {
    "category": "Rena handlingsbrott",
    "question": "Vad kännetecknar ett rent handlingsbrott?",
    "options": [
      "Själva den förbjudna handlingen kan vara tillräcklig",
      "En bestämd effekt måste alltid uppstå.",
      "Uppsåt eller oaktsamhet behöver aldrig bedömas."
    ],
    "answer": 0,
    "explanation": "Vid ett rent handlingsbrott krävs ingen särskild effekt för att brottet ska vara fullbordat.",
    "correctExplanation": "Vid rena handlingsbrott är själva handlingen kriminaliserad och någon särskild effekt behöver inte uppstå.",
    "answerType": "text"
  },
  {
    "category": "Rena handlingsbrott",
    "question": "En person kör rattfull men orsakar ingen olycka. Vad visar exemplet?",
    "options": [
      "Brottet kan vara fullbordat genom själva körningen",
      "Brottet kan bara vara fullbordat om någon skadas.",
      "Brottet är ett exempel på strikt ansvar."
    ],
    "answer": 0,
    "explanation": "Rattfylleri kan vara fullbordat utan att en särskild skada eller effekt uppstår.",
    "correctExplanation": "Vid rena handlingsbrott är själva handlingen kriminaliserad och någon särskild effekt behöver inte uppstå.",
    "answerType": "text"
  },
  {
    "category": "Rena handlingsbrott",
    "question": "Vad behöver inte inträffa vid ett rent handlingsbrott?",
    "options": [
      "En särskild effekt eller skada",
      "Den förbjudna handlingen.",
      "De rekvisit som lagen anger."
    ],
    "answer": 0,
    "explanation": "Själva handlingen måste ske, men någon särskild effekt behöver inte uppstå.",
    "correctExplanation": "Vid rena handlingsbrott är själva handlingen kriminaliserad och någon särskild effekt behöver inte uppstå.",
    "answerType": "text"
  },
  {
    "category": "Rena handlingsbrott",
    "question": "Vilken formulering passar bäst för ett rent handlingsbrott?",
    "options": [
      "Det avgörande är att den förbjudna handlingen utförs",
      "Det avgörande är att handlingen leder till en viss följd.",
      "Det avgörande är att oaktsamhet inte kan bevisas."
    ],
    "answer": 0,
    "explanation": "Rena handlingsbrott definieras av att själva handlingen är central.",
    "correctExplanation": "Vid rena handlingsbrott är själva handlingen kriminaliserad och någon särskild effekt behöver inte uppstå.",
    "answerType": "text"
  },
  {
    "category": "Rena handlingsbrott",
    "question": "En person kör utan giltigt körkort och ingen olycka sker. Vilket begrepp passar bäst?",
    "options": [
      "Rent handlingsbrott",
      "Effektbrott",
      "Strikt ansvar",
      "Brottsrekvisit"
    ],
    "answer": 0,
    "explanation": "Olovlig körning kan vara fullbordad genom själva körningen utan att någon särskild effekt uppstår.",
    "correctExplanation": "Vid rena handlingsbrott är själva handlingen kriminaliserad och någon särskild effekt behöver inte uppstå.",
    "answerType": "concept"
  },
  {
    "category": "Rena handlingsbrott",
    "question": "Vilket påstående är fel om rena handlingsbrott?",
    "options": [
      "En viss skada måste alltid uppstå",
      "Själva handlingen kan vara tillräcklig.",
      "Brottet kan vara fullbordat utan att någon särskild effekt uppstår."
    ],
    "answer": 0,
    "explanation": "Det är just frånvaron av krav på en särskild effekt som kännetecknar rena handlingsbrott.",
    "correctExplanation": "Vid rena handlingsbrott är själva handlingen kriminaliserad och någon särskild effekt behöver inte uppstå.",
    "answerType": "text"
  },
  {
    "category": "Effektbrott",
    "question": "Vad kännetecknar ett effektbrott?",
    "options": [
      "En viss effekt eller följd måste uppstå",
      "Själva handlingen räcker alltid oavsett följd.",
      "Uppsåt eller oaktsamhet behöver aldrig bedömas."
    ],
    "answer": 0,
    "explanation": "För ett fullbordat effektbrott måste den effekt som lagen kräver ha uppstått.",
    "correctExplanation": "Kravet på en bestämd skada eller följd kännetecknar ett effektbrott.",
    "answerType": "text"
  },
  {
    "category": "Effektbrott",
    "question": "För att någon ska dömas för fullbordat mord måste en person ha avlidit. Vad illustrerar detta?",
    "options": [
      "Effektbrott",
      "Rent handlingsbrott",
      "Strikt ansvar",
      "Brottsrekvisit"
    ],
    "answer": 0,
    "explanation": "Mord är ett tydligt exempel på ett brott där en viss effekt – dödsfallet – måste ha inträffat.",
    "correctExplanation": "Kravet på en bestämd skada eller följd kännetecknar ett effektbrott.",
    "answerType": "concept"
  },
  {
    "category": "Effektbrott",
    "question": "Vad behöver dessutom kunna kopplas till gärningen vid ett effektbrott?",
    "options": [
      "Den effekt som har uppstått",
      "Gärningspersonens framtida beteende.",
      "Vilken påföljd domstolen senare väljer."
    ],
    "answer": 0,
    "explanation": "Det måste finnas ett relevant samband mellan gärningen och den effekt som lagen kräver.",
    "correctExplanation": "Kravet på en bestämd skada eller följd kännetecknar ett effektbrott.",
    "answerType": "text"
  },
  {
    "category": "Effektbrott",
    "question": "En person försöker orsaka en viss skada men skadan uppstår inte. Vad är centralt om brottet är ett effektbrott?",
    "options": [
      "Att den föreskrivna effekten saknas för ett fullbordat brott",
      "Att själva försöket automatiskt är ett fullbordat effektbrott.",
      "Att det därför blir ett rent handlingsbrott."
    ],
    "answer": 0,
    "explanation": "Om den effekt som brottsbestämmelsen kräver inte uppstår är just det fullbordade effektbrottet inte uppfyllt.",
    "correctExplanation": "Kravet på en bestämd skada eller följd kännetecknar ett effektbrott.",
    "answerType": "text"
  },
  {
    "category": "Effektbrott",
    "question": "Vilken fråga är viktigast för att avgöra om ett effektbrott är fullbordat?",
    "options": [
      "Har den effekt som lagen kräver faktiskt uppstått?",
      "Har gärningspersonen erkänt?",
      "Skedde gärningen på en offentlig plats?"
    ],
    "answer": 0,
    "explanation": "Den föreskrivna effekten är central för om effektbrottet är fullbordat.",
    "correctExplanation": "Kravet på en bestämd skada eller följd kännetecknar ett effektbrott.",
    "answerType": "text"
  },
  {
    "category": "Jämförelse",
    "question": "Vad är huvudskillnaden mellan ett rent handlingsbrott och ett effektbrott?",
    "options": [
      "Effektbrott kräver en viss effekt; rena handlingsbrott gör det inte.",
      "Rena handlingsbrott kräver uppsåt; effektbrott gör det aldrig.",
      "Effektbrott gäller bara företag; rena handlingsbrott gäller personer."
    ],
    "answer": 0,
    "explanation": "Skillnaden gäller om en särskild effekt måste uppstå för att brottet ska vara fullbordat.",
    "correctExplanation": "Ett effektbrott kräver att en viss effekt eller följd uppstår.",
    "answerType": "text"
  },
  {
    "category": "Jämförelse",
    "question": "Vilket begrepp handlar främst om skuldkravet och inte om huruvida en effekt måste uppstå?",
    "options": [
      "Strikt ansvar",
      "Rent handlingsbrott",
      "Effektbrott",
      "Brottsrekvisit"
    ],
    "answer": 0,
    "explanation": "Strikt ansvar handlar om kravet på uppsåt eller oaktsamhet, medan de två andra begreppen skiljer på handling och effekt.",
    "correctExplanation": "Strikt ansvar kan föreligga utan att uppsåt eller oaktsamhet behöver bevisas.",
    "answerType": "concept"
  },
  {
    "category": "Jämförelse",
    "question": "Vilket par är korrekt?",
    "options": [
      "Rent handlingsbrott – ingen särskild effekt krävs.",
      "Effektbrott – ingen särskild effekt krävs.",
      "Strikt ansvar – uppsåt måste alltid bevisas."
    ],
    "answer": 0,
    "explanation": "Vid rena handlingsbrott kan själva handlingen vara tillräcklig.",
    "correctExplanation": "Ett effektbrott kräver att en viss effekt eller följd uppstår.",
    "answerType": "text"
  },
  {
    "category": "Jämförelse",
    "question": "En lag förbjuder själva körningen under vissa förhållanden, oavsett om någon skadas. Vilken typ av brott beskrivs?",
    "options": [
      "Rent handlingsbrott",
      "Effektbrott",
      "Strikt ansvar",
      "Brottsrekvisit"
    ],
    "answer": 0,
    "explanation": "När själva handlingen är tillräcklig och ingen särskild effekt krävs är det ett rent handlingsbrott.",
    "correctExplanation": "Vid rena handlingsbrott räcker själva den förbjudna handlingen.",
    "answerType": "concept"
  },
  {
    "category": "Jämförelse",
    "question": "En brottsbestämmelse kräver att en viss skada uppstår. Vilken typ av brott beskrivs?",
    "options": [
      "Effektbrott",
      "Rent handlingsbrott",
      "Strikt ansvar",
      "Brottsrekvisit"
    ],
    "answer": 0,
    "explanation": "Kravet på en bestämd skada eller följd kännetecknar ett effektbrott.",
    "correctExplanation": "Ett effektbrott kräver att en viss effekt eller följd uppstår.",
    "answerType": "concept"
  }
];

const rekvisitQuestions = [
  {
    "category": "Brottsrekvisit",
    "question": "Vad är brottsrekvisit?",
    "options": [
      "Förutsättningar som måste vara uppfyllda för ett visst brott",
      "En lista över alla svenska domstolar.",
      "Ett annat ord för straff."
    ],
    "answer": 0,
    "explanation": "Brottsrekvisit är de villkor i lagen som måste vara uppfyllda för att ett visst brott ska föreligga.",
    "correctExplanation": "Brottsrekvisit är de krav i lagen som måste vara uppfyllda för att ett visst brott ska föreligga.",
    "answerType": "text"
  },
  {
    "category": "Brottsrekvisit",
    "question": "Vilka två huvudtyper av brottsrekvisit tränar vi på här?",
    "options": [
      "Objektiva och subjektiva",
      "Allmänna och privata.",
      "Skriftliga och muntliga."
    ],
    "answer": 0,
    "explanation": "Materialet skiljer mellan objektiva och subjektiva brottsrekvisit.",
    "correctExplanation": "Brottsrekvisit är de krav i lagen som måste vara uppfyllda för att ett visst brott ska föreligga.",
    "answerType": "text"
  },
  {
    "category": "Brottsrekvisit",
    "question": "Många brott kräver...",
    "options": [
      "både objektiva och subjektiva rekvisit",
      "bara subjektiva rekvisit.",
      "inga rekvisit alls."
    ],
    "answer": 0,
    "explanation": "Många brott kräver både en brottslig handling och en relevant inställning hos gärningspersonen.",
    "correctExplanation": "Brottsrekvisit är de krav i lagen som måste vara uppfyllda för att ett visst brott ska föreligga.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "Vad fokuserar objektiva brottsrekvisit på?",
    "options": [
      "Yttre omständigheter och faktiska handlingar",
      "Gärningspersonens tankar och avsikter.",
      "Vilket straff domstolen väljer."
    ],
    "answer": 0,
    "explanation": "Objektiva rekvisit beskriver det som faktiskt har gjorts eller inträffat.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "Vilken fråga passar bäst för objektiva brottsrekvisit?",
    "options": [
      "Vad gjorde personen?",
      "Vad tänkte personen?",
      "Vilket straff bör personen få?"
    ],
    "answer": 0,
    "explanation": "Objektiva rekvisit handlar om den faktiska handlingen och de yttre omständigheterna.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "En person tar någon annans mobiltelefon utan lov. Vilken typ av rekvisit beskriver detta främst?",
    "options": [
      "Objektivt",
      "Subjektivt",
      "Brottsrekvisit",
      "Strikt ansvar"
    ],
    "answer": 0,
    "explanation": "Påståendet beskriver den faktiska handlingen.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "En person slår en annan person. Vilken typ av rekvisit beskriver själva slaget?",
    "options": [
      "Objektivt",
      "Subjektivt",
      "Brottsrekvisit",
      "Strikt ansvar"
    ],
    "answer": 0,
    "explanation": "Själva slaget är en yttre, faktisk handling.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "Ett fönster går sönder efter att någon kastat en sten. Vilken typ av rekvisit beskriver den uppkomna skadan?",
    "options": [
      "Objektivt",
      "Subjektivt",
      "Brottsrekvisit",
      "Strikt ansvar"
    ],
    "answer": 0,
    "explanation": "Den faktiska skadan är en yttre omständighet.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "En person kör en bil utan giltigt körkort. Vad beskriver detta främst?",
    "options": [
      "Objektivt rekvisit",
      "Subjektivt rekvisit",
      "Brottsrekvisit",
      "Strikt ansvar"
    ],
    "answer": 0,
    "explanation": "Det beskriver den konkreta handlingen.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "Vilket av följande är objektivt?",
    "options": [
      "Att någon tar ett föremål som tillhör någon annan",
      "Att någon vill behålla föremålet.",
      "Att någon känner skuld efteråt."
    ],
    "answer": 0,
    "explanation": "Att ta föremålet är själva den yttre handlingen.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "Vilket påstående beskriver ett objektivt rekvisit?",
    "options": [
      "Personen bryter upp en låst dörr",
      "Personen har för avsikt att stjäla.",
      "Personen vet att handlingen är olaglig."
    ],
    "answer": 0,
    "explanation": "Att bryta upp dörren är en faktisk handling.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "En person överför pengar från någon annans konto. Vad beskriver själva överföringen?",
    "options": [
      "Objektivt rekvisit",
      "Subjektivt rekvisit",
      "Brottsrekvisit",
      "Strikt ansvar"
    ],
    "answer": 0,
    "explanation": "Överföringen är en konkret handling.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "En cykel tillhör någon annan. Vilken typ av omständighet är ägandeförhållandet?",
    "options": [
      "Objektiv",
      "Subjektiv",
      "Brottsrekvisit",
      "Strikt ansvar"
    ],
    "answer": 0,
    "explanation": "Vem som äger cykeln är en yttre faktisk omständighet.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "Vad fokuserar subjektiva brottsrekvisit på?",
    "options": [
      "Gärningspersonens avsikt, medvetenhet eller oaktsamhet",
      "Den fysiska platsen där handlingen skedde.",
      "Domstolens organisation."
    ],
    "answer": 0,
    "explanation": "Subjektiva rekvisit handlar om gärningspersonens inställning till handlingen.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "Vilken fråga passar bäst för subjektiva brottsrekvisit?",
    "options": [
      "Vad tänkte eller avsåg personen?",
      "Vad hände rent fysiskt?",
      "Vilken domstol prövar målet?"
    ],
    "answer": 0,
    "explanation": "Subjektiva rekvisit handlar om avsikt, medvetenhet och oaktsamhet.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "En person tar en mobiltelefon med avsikt att behålla den. Vad beskriver avsikten främst?",
    "options": [
      "Subjektivt rekvisit",
      "Objektivt rekvisit",
      "Brottsrekvisit",
      "Strikt ansvar"
    ],
    "answer": 0,
    "explanation": "Avsikten att behålla mobilen beskriver gärningspersonens inställning.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "En person slår någon med avsikt att skada. Vad beskriver avsikten?",
    "options": [
      "Subjektivt rekvisit",
      "Objektivt rekvisit",
      "Brottsrekvisit",
      "Strikt ansvar"
    ],
    "answer": 0,
    "explanation": "Avsikten att skada är subjektiv.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "Vilket av följande är subjektivt?",
    "options": [
      "Personen vill behålla det stulna föremålet",
      "Personen tar föremålet.",
      "Föremålet tillhör någon annan."
    ],
    "answer": 0,
    "explanation": "Viljan eller avsikten är ett subjektivt rekvisit.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "Gärningspersonen vet att väskan tillhör någon annan men tar den ändå. Vad beskriver medvetenheten?",
    "options": [
      "Subjektivt rekvisit",
      "Objektivt rekvisit",
      "Brottsrekvisit",
      "Strikt ansvar"
    ],
    "answer": 0,
    "explanation": "Medvetenheten hör till gärningspersonens inre inställning.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "Vilket begrepp hör främst ihop med subjektiva rekvisit?",
    "options": [
      "Uppsåt",
      "Fysisk handling",
      "Skadans storlek"
    ],
    "answer": 0,
    "explanation": "Uppsåt är centralt när man bedömer subjektiva rekvisit.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "Vilket begrepp kan också vara relevant för subjektiva rekvisit?",
    "options": [
      "Oaktsamhet",
      "Tingsrätt",
      "Äganderätt till en byggnad"
    ],
    "answer": 0,
    "explanation": "Oaktsamhet kan vara den subjektiva förutsättning som lagen kräver.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "En person orsakar en skada genom oaktsamhet. Vilken del beskriver personens inställning?",
    "options": [
      "Oaktsamheten",
      "Själva skadan",
      "Brottsrekvisit",
      "Strikt ansvar"
    ],
    "answer": 0,
    "explanation": "Oaktsamheten är kopplad till den subjektiva sidan.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Kombination av rekvisit",
    "question": "Stöld kräver både att någon olovligen tar något och en relevant avsikt. Vad visar detta?",
    "options": [
      "Att brottet kan kräva både objektiva och subjektiva rekvisit.",
      "Att bara objektiva rekvisit spelar roll.",
      "Att rekvisit inte behövs."
    ],
    "answer": 0,
    "explanation": "Många brott kräver att båda typerna av rekvisit är uppfyllda.",
    "correctExplanation": "Det som beskriver personens avsikt eller medvetenhet hör till de subjektiva brottsrekvisiten.",
    "answerType": "text"
  },
  {
    "category": "Kombination av rekvisit",
    "question": "En person tar av misstag en identisk jacka som tillhör någon annan. Vilken del behöver undersökas särskilt?",
    "options": [
      "Det subjektiva rekvisitet – personens avsikt och medvetenhet.",
      "Vilken domstolsbyggnad som ligger närmast.",
      "Om jackan är dyr."
    ],
    "answer": 0,
    "explanation": "Den faktiska handlingen kan ha skett, men personens avsikt behöver också bedömas.",
    "correctExplanation": "Det som beskriver själva handlingen eller den faktiska omständigheten hör till de objektiva brottsrekvisiten.",
    "answerType": "text"
  },
  {
    "category": "Kombination av rekvisit",
    "question": "En person slår en annan och orsakar skada. För att bedöma brottet behöver man också undersöka...",
    "options": [
      "gärningspersonens uppsåt eller oaktsamhet.",
      "vilket gymnasium personen gått på.",
      "vilken tid rättegången börjar."
    ],
    "answer": 0,
    "explanation": "Utöver handlingen behöver den subjektiva sidan bedömas.",
    "correctExplanation": "Det som beskriver själva handlingen eller den faktiska omständigheten hör till de objektiva brottsrekvisiten.",
    "answerType": "text"
  },
  {
    "category": "Kombination av rekvisit",
    "question": "Vilket par är korrekt?",
    "options": [
      "Objektivt = handlingen. Subjektivt = avsikten.",
      "Objektivt = avsikten. Subjektivt = handlingen.",
      "Objektivt = straffet. Subjektivt = domstolen."
    ],
    "answer": 0,
    "explanation": "Objektivt beskriver det yttre; subjektivt beskriver gärningspersonens inställning.",
    "correctExplanation": "Det som beskriver själva handlingen eller den faktiska omständigheten hör till de objektiva brottsrekvisiten.",
    "answerType": "text"
  },
  {
    "category": "Kombination av rekvisit",
    "question": "En person förstör medvetet någon annans cykel. Vad är 'förstör cykeln'?",
    "options": [
      "Objektivt rekvisit",
      "Subjektivt rekvisit",
      "Brottsrekvisit",
      "Strikt ansvar"
    ],
    "answer": 0,
    "explanation": "Det beskriver den faktiska handlingen och skadan.",
    "correctExplanation": "Det som beskriver personens avsikt eller medvetenhet hör till de subjektiva brottsrekvisiten.",
    "answerType": "text"
  },
  {
    "category": "Kombination av rekvisit",
    "question": "En person förstör medvetet någon annans cykel. Vad är 'medvetet'?",
    "options": [
      "Subjektivt rekvisit",
      "Objektivt rekvisit",
      "Brottsrekvisit",
      "Strikt ansvar"
    ],
    "answer": 0,
    "explanation": "Medvetenheten beskriver gärningspersonens inställning.",
    "correctExplanation": "Det som beskriver personens avsikt eller medvetenhet hör till de subjektiva brottsrekvisiten.",
    "answerType": "text"
  },
  {
    "category": "Kombination av rekvisit",
    "question": "Vilket påstående stämmer?",
    "options": [
      "Objektiva och subjektiva rekvisit bedömer olika delar av samma händelse.",
      "Objektiva och subjektiva rekvisit betyder exakt samma sak.",
      "Subjektiva rekvisit handlar bara om straffets längd."
    ],
    "answer": 0,
    "explanation": "De två typerna kompletterar varandra när ett brott bedöms.",
    "correctExplanation": "Det som beskriver själva handlingen eller den faktiska omständigheten hör till de objektiva brottsrekvisiten.",
    "answerType": "text"
  },
  {
    "category": "Kombination av rekvisit",
    "question": "Varför används både objektiva och subjektiva rekvisit?",
    "options": [
      "För att bedöma både vad som hände och gärningspersonens inställning.",
      "För att välja vilken domstol som ligger närmast.",
      "För att bestämma hur många vittnen som behövs."
    ],
    "answer": 0,
    "explanation": "Bedömningen omfattar både den yttre handlingen och den subjektiva sidan.",
    "correctExplanation": "Det som beskriver själva handlingen eller den faktiska omständigheten hör till de objektiva brottsrekvisiten.",
    "answerType": "text"
  },
  {
    "category": "Brottsrekvisit",
    "question": "Varför prövar domstolen brottsrekvisiten?",
    "options": [
      "För att avgöra om gärningen motsvarar det brott som lagen beskriver",
      "För att avgöra vilken domstol som ska döma i framtiden.",
      "För att avgöra om den misstänkte verkar vara en bra person."
    ],
    "answer": 0,
    "explanation": "Domstolen jämför det som hänt med rekvisiten i brottsbestämmelsen.",
    "correctExplanation": "Brottsrekvisit är de krav i lagen som måste vara uppfyllda för att ett visst brott ska föreligga.",
    "answerType": "text"
  },
  {
    "category": "Brottsrekvisit",
    "question": "Vilka två huvudtyper av rekvisit arbetar vi med här?",
    "options": [
      "Objektiva och subjektiva rekvisit",
      "Formella och informella rekvisit.",
      "Rättsliga och moraliska rekvisit."
    ],
    "answer": 0,
    "explanation": "Vi skiljer mellan objektiva rekvisit, som rör det yttre händelseförloppet, och subjektiva rekvisit, som rör gärningspersonens inställning.",
    "correctExplanation": "Brottsrekvisit är de krav i lagen som måste vara uppfyllda för att ett visst brott ska föreligga.",
    "answerType": "text"
  },
  {
    "category": "Brottsrekvisit",
    "question": "En handling uppfattas som mycket omoralisk men uppfyller inte rekvisiten för något brott. Vad innebär det?",
    "options": [
      "Handlingen kan inte dömas som just det brottet bara för att den uppfattas som fel",
      "Domstolen kan ändå skapa nya rekvisit i efterhand.",
      "Moralisk bedömning ersätter brottsrekvisiten."
    ],
    "answer": 0,
    "explanation": "För straffansvar måste de rekvisit som lagen anger vara uppfyllda.",
    "correctExplanation": "Brottsrekvisit är de krav i lagen som måste vara uppfyllda för att ett visst brott ska föreligga.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "Vad beskriver objektiva brottsrekvisit främst?",
    "options": [
      "Det som faktiskt har gjorts eller inträffat",
      "Vad gärningspersonen tänkte eller avsåg.",
      "Vilket straff domstolen anser lämpligt."
    ],
    "answer": 0,
    "explanation": "Objektiva rekvisit rör brottets yttre och faktiska omständigheter.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "En person tar någon annans mobiltelefon. Vilken del är objektiv?",
    "options": [
      "Att personen faktiskt tar mobilen och att den tillhör någon annan",
      "Att personen vill behålla mobilen.",
      "Att personen känner skuld efteråt."
    ],
    "answer": 0,
    "explanation": "Själva tagandet och ägandeförhållandet är yttre, faktiska omständigheter.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "Vilken fråga hör främst till objektiva rekvisit?",
    "options": [
      "Vad gjorde personen faktiskt?",
      "Vad ville personen uppnå?",
      "Vad trodde personen skulle hända?"
    ],
    "answer": 0,
    "explanation": "Objektiva rekvisit fokuserar på det yttre händelseförloppet.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "En person slår en annan och den andre får en skada. Vad är objektivt i beskrivningen?",
    "options": [
      "Slaget och den uppkomna skadan",
      "Avsikten bakom slaget.",
      "Personens inställning efter händelsen."
    ],
    "answer": 0,
    "explanation": "Handlingen och den faktiska skadan är objektiva omständigheter.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "Vilket av följande är ett objektivt förhållande?",
    "options": [
      "Att cykeln tillhör någon annan",
      "Att personen tror att cykeln är sin egen.",
      "Att personen vill sälja cykeln."
    ],
    "answer": 0,
    "explanation": "Vem som faktiskt äger cykeln är en yttre och objektiv omständighet.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "En person bryter upp en låst dörr. Vad beskriver detta främst?",
    "options": [
      "Ett objektivt rekvisit",
      "Ett subjektivt rekvisit",
      "En påföljd"
    ],
    "answer": 0,
    "explanation": "Att bryta upp dörren är en konkret, yttre handling.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Objektiva brottsrekvisit",
    "question": "Vilket påstående beskriver inte ett objektivt rekvisit?",
    "options": [
      "Personen hade för avsikt att behålla föremålet",
      "Personen tog föremålet.",
      "Föremålet tillhörde någon annan."
    ],
    "answer": 0,
    "explanation": "Avsikten hör till den subjektiva sidan, medan handlingen och ägandeförhållandet är objektiva.",
    "correctExplanation": "Objektiva brottsrekvisit handlar om vad som faktiskt har gjorts eller inträffat.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "Vad beskriver subjektiva brottsrekvisit främst?",
    "options": [
      "Gärningspersonens inställning till gärningen",
      "Det som rent fysiskt har inträffat.",
      "Vilken domstol som prövar målet."
    ],
    "answer": 0,
    "explanation": "Subjektiva rekvisit rör exempelvis uppsåt, medvetenhet och i vissa fall oaktsamhet.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "Vilken fråga hör främst till subjektiva rekvisit?",
    "options": [
      "Vad avsåg eller insåg personen?",
      "Vilken skada uppstod?",
      "Vem ägde föremålet?"
    ],
    "answer": 0,
    "explanation": "Subjektiva rekvisit fokuserar på gärningspersonens avsikt, insikt eller oaktsamhet.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "En person vet att mobilen tillhör någon annan men tar den ändå. Vad är subjektivt i exemplet?",
    "options": [
      "Personens medvetenhet om att mobilen tillhör någon annan",
      "Att mobilen faktiskt tas.",
      "Att mobilen faktiskt tillhör någon annan."
    ],
    "answer": 0,
    "explanation": "Medvetenheten är en del av personens inre inställning till gärningen.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "Vilket begrepp hör tydligast ihop med subjektiva rekvisit?",
    "options": [
      "Uppsåt",
      "Skadans storlek",
      "Ägandeförhållande"
    ],
    "answer": 0,
    "explanation": "Uppsåt är centralt vid bedömningen av den subjektiva sidan.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "Vad innebär att oaktsamhet kan vara ett subjektivt rekvisit?",
    "options": [
      "Att lagen i vissa fall kan kräva att personen varit oaktsam",
      "Att varje skada automatiskt innebär oaktsamhet.",
      "Att objektiva rekvisit inte längre behöver prövas."
    ],
    "answer": 0,
    "explanation": "För vissa brott kan oaktsamhet vara den skuldform som lagen kräver.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "En person tar en jacka i tron att den är den egna. Vilken del behöver särskilt undersökas?",
    "options": [
      "Personens avsikt och medvetenhet",
      "Om jackan har en viss färg.",
      "Vilken domstol som ligger närmast."
    ],
    "answer": 0,
    "explanation": "Misstaget kan vara viktigt för den subjektiva bedömningen eftersom personen kanske saknade relevant uppsåt.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Subjektiva brottsrekvisit",
    "question": "Vilket påstående beskriver inte ett subjektivt rekvisit?",
    "options": [
      "Fönstret gick sönder",
      "Personen ville slå sönder fönstret.",
      "Personen insåg risken för att fönstret skulle gå sönder."
    ],
    "answer": 0,
    "explanation": "Att fönstret faktiskt går sönder är en objektiv effekt; vilja och insikt hör till den subjektiva sidan.",
    "correctExplanation": "Subjektiva brottsrekvisit handlar om gärningspersonens avsikt, insikt eller oaktsamhet.",
    "answerType": "text"
  },
  {
    "category": "Kombination av rekvisit",
    "question": "En person tar någon annans mobiltelefon med avsikt att behålla den. Vad behöver bedömas?",
    "options": [
      "Både den faktiska handlingen och personens avsikt.",
      "Bara telefonens värde.",
      "Bara personens avsikt, inte vad som faktiskt hände."
    ],
    "answer": 0,
    "explanation": "Brottsbedömningen kan kräva både objektiva och subjektiva rekvisit.",
    "correctExplanation": "Det som beskriver personens avsikt eller medvetenhet hör till de subjektiva brottsrekvisiten.",
    "answerType": "text"
  },
  {
    "category": "Kombination av rekvisit",
    "question": "En person tar av misstag en identisk jacka som tillhör någon annan. Varför räcker det inte att bara konstatera att jackan togs?",
    "options": [
      "Personens avsikt och medvetenhet kan också vara avgörande.",
      "Brottsrekvisit gäller bara om föremålet är dyrt.",
      "Den objektiva handlingen saknar alltid betydelse."
    ],
    "answer": 0,
    "explanation": "Det objektiva händelseförloppet kan vara klart, men den subjektiva sidan kan avgöra om brottsrekvisiten är uppfyllda.",
    "correctExplanation": "Det som beskriver själva handlingen eller den faktiska omständigheten hör till de objektiva brottsrekvisiten.",
    "answerType": "text"
  },
  {
    "category": "Kombination av rekvisit",
    "question": "Varför skiljer man mellan objektiva och subjektiva rekvisit?",
    "options": [
      "För att bedöma både vad som faktiskt hände och personens inställning till det.",
      "För att välja mellan tingsrätt och hovrätt.",
      "För att bestämma om ett brott ska tas upp i media."
    ],
    "answer": 0,
    "explanation": "Brottsbedömningen kan behöva omfatta både det yttre händelseförloppet och den subjektiva sidan.",
    "correctExplanation": "Det som beskriver själva handlingen eller den faktiska omständigheten hör till de objektiva brottsrekvisiten.",
    "answerType": "text"
  }
];

const studyAdvice = {
  "responsibility": {
    "Strikt ansvar": "Strikt ansvar – särskilt att uppsåt eller vårdslöshet inte alltid behöver bevisas.",
    "Rena handlingsbrott": "Rena handlingsbrott – själva handlingen räcker; en särskild effekt behöver inte uppstå.",
    "Effektbrott": "Effektbrott – en viss effekt eller skada måste uppstå och kunna kopplas till handlingen.",
    "Jämförelse": "Skillnaden mellan strikt ansvar, rena handlingsbrott och effektbrott."
  },
  "rekvisit": {
    "Brottsrekvisit": "Brottsrekvisit – vilka förutsättningar som måste vara uppfyllda för ett brott.",
    "Objektiva brottsrekvisit": "Objektiva brottsrekvisit – handlingen och de yttre, faktiska omständigheterna.",
    "Subjektiva brottsrekvisit": "Subjektiva brottsrekvisit – uppsåt, avsikt, medvetenhet och oaktsamhet.",
    "Kombination av rekvisit": "Hur objektiva och subjektiva rekvisit kombineras i samma brott."
  }
};

