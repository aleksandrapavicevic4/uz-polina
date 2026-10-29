// Cenovnik od 09.06.2026. Opisi i priprema su sa starog sajta; gde ih nema, polje je prazno.
// insurancePrice — cena za imaoce privatnog zdravstvenog osiguranja (popust 10%).

export const pricesValidFrom = "09.06.2026.";

export const services = [
  {
    id: "kukovi",
    name: "Ultrazvučni pregled kukova",
    price: "8.000",
    insurancePrice: "7.200",
    description:
      "Rano otkrivanje poremećaja razvoja kukova kod beba: procena razvoja koštanih i hrskavičavih struktura, acetabuluma i položaja glave butne kosti. Pregled se radi do 6. meseca, a preporuka je u 2., najkasnije u 3. mesecu života.",
    preparation: "",
    icon: "Baby",
    featured: true,
  },
  {
    id: "cns",
    name: "Ultrazvučni pregled CNS-a",
    price: "8.000",
    insurancePrice: "7.200",
    description:
      "Pregled mozga i likvornih prostora kod beba u prvim mesecima života, radi procene stepena razvoja moždanih struktura i otkrivanja različitih stanja.",
    preparation: "",
    icon: "Brain",
    featured: true,
  },
  {
    id: "uro-trakt",
    name: "Ultrazvučni pregled uro-trakta",
    price: "8.000",
    insurancePrice: "7.200",
    description:
      "Pregled bubrega i mokraćnih puteva: otkrivanje urođenih anomalija, cista, tumora, infekcija i kamena, procena oblika i veličine bubrega i bešike, smetnji u oticanju mokraće i praćenje posle operacija. Radi se kod ponovljenih urinarnih infekcija i sumnje na vezikoureteralni refluks.",
    preparation: "",
    icon: "Droplets",
    featured: true,
  },
  {
    id: "abdomen",
    name: "Ultrazvučni pregled abdomena",
    price: "8.000",
    insurancePrice: "7.200",
    description:
      "Pregled bubrega, nadbubrega, jetre, slezine, mokraćne bešike, žučne kese, pankreasa, velikih krvnih sudova i limfnih čvorova. Radi se kod bolova u stomaku i sumnje na upalu slepog creva, a obuhvata i pregled creva kod sumnje na zapaljenske bolesti creva.",
    preparation:
      "Tri dana pre pregleda detetu dajte laganu hranu (kuvano povrće, meso, dvopek, čaj, sok od jabuke), bez hrane koja nadima (pasulj, kupus), mlečnih proizvoda i slatkiša. Na dan pregleda dete ne jede najmanje 4 sata pre pregleda, a poslednji obrok treba da bude lagan. Oko 1,5 sat pre pregleda dete treba da popije 1–3 čaše vode u roku od pola sata i da ne mokri do pregleda. Kod hitnih stanja, kao što je sumnja na upalu slepog creva, pregled se radi bez pripreme.",
    icon: "Stethoscope",
    featured: true,
  },
  {
    id: "mala-karlica",
    name: "Ultrazvučni pregled male karlice",
    price: "8.000",
    insurancePrice: "7.200",
    description:
      "Kod dečaka i devojčica: preuranjeni pubertet i problemi sa mokrenjem. Kod devojčica: ginekološki problemi pre i tokom puberteta.",
    preparation: "",
    icon: "ScanLine",
  },
  {
    id: "ls-kicma",
    name: "Ultrazvučni pregled LS kičme",
    price: "8.000",
    insurancePrice: "7.200",
    description: "",
    preparation: "",
    icon: "Bone",
  },
  {
    id: "testisi",
    name: "Ultrazvučni pregled testisa",
    price: "8.000",
    insurancePrice: "7.200",
    description: "Nespušteni testisi, torzija testisa, povrede i tumori.",
    preparation: "",
    icon: "ScanLine",
  },
  {
    id: "vrat",
    name: "Ultrazvučni pregled mekih tkiva vrata",
    price: "8.000",
    insurancePrice: "7.200",
    description: "Pregled štitne žlezde, svih pljuvačnih žlezda i limfnih čvorova vrata.",
    preparation: "Nije potrebna posebna priprema.",
    icon: "Activity",
  },
  {
    id: "stitna",
    name: "Ultrazvučni pregled štitne žlezde",
    price: "8.000",
    insurancePrice: "7.200",
    description: "",
    preparation: "Nije potrebna posebna priprema.",
    icon: "Activity",
  },
  {
    id: "meka-tkiva",
    name: "Ultrazvučni pregled mekih tkiva",
    price: "8.000",
    insurancePrice: "7.200",
    description: "",
    preparation: "",
    icon: "Layers",
  },
  {
    id: "grudni-kos",
    name: "Ultrazvučni pregled grudnog koša",
    price: "8.000",
    insurancePrice: "7.200",
    description: "",
    preparation: "",
    icon: "Layers",
  },
  {
    id: "dojka",
    name: "Ultrazvučni pregled dojke",
    price: "8.000",
    insurancePrice: "7.200",
    description:
      "Otkrivanje cista, upalnih procesa, dobroćudnih i drugih promena na dojci. Color Doppler prikazuje prokrvljenost promena i regionalne limfne čvorove. Preventivni pregled preporučuje se jednom godišnje od 25. godine, a pošto nema zračenja, može se raditi i češće.",
    preparation: "",
    icon: "Heart",
    featured: true,
  },
  {
    id: "pazusna-jama",
    name: "Ultrazvučni pregled podpazušne jame",
    price: "8.000",
    insurancePrice: "7.200",
    description: "",
    preparation: "",
    icon: "Layers",
  },
  {
    id: "doppler-jetra",
    name: "Color Doppler krvnih sudova jetre",
    price: "10.000",
    insurancePrice: "9.000",
    description: "Procena protoka krvi kroz krvne sudove abdomena.",
    preparation: "",
    icon: "Waves",
  },
  {
    id: "doppler-renalni",
    name: "Color Doppler renalnih krvnih sudova",
    price: "10.000",
    insurancePrice: "9.000",
    description: "Procena protoka krvi kroz krvne sudove bubrega.",
    preparation: "",
    icon: "Waves",
  },
  {
    id: "doppler-ekstremiteti",
    name: "Doppler ekstremiteta",
    price: "10.000",
    insurancePrice: "9.000",
    description: "",
    preparation: "",
    icon: "Waves",
  },
  {
    id: "cistografija",
    name: "Ultrazvučna kontrastna mikciona urografija (cistografija)",
    price: "30.000",
    insurancePrice: "27.000",
    description:
      "Ultrazvučni pregled mokraćne bešike i mokraćnih puteva uz kontrastno sredstvo, radi otkrivanja vezikoureteralnog refluksa, čestog uzroka ponovljenih urinarnih infekcija kod dece. Za razliku od rendgenske cistografije, dete nije izloženo zračenju. Pregled traje najviše 30 minuta, uz prisustvo roditelja.",
    preparation:
      "Za zdravu decu nije potrebna posebna priprema niti sedacija, a dobro je detetu unapred objasniti šta ga čeka. Potreban je negativan nalaz sedimenta urina i urinokulture, ne stariji od 7 dana. Ako dete nije na profilaksi, pedijatar, nefrolog ili urolog može preporučiti antibiotik, obično 3–5 dana. Ako je dete već na profilaksi, potrebna je konsultacija sa lekarom.",
    icon: "HeartPulse",
    featured: true,
  },
];

export const combinedServices = [
  { name: "Kukovi i abdomen", price: "10.000", insurancePrice: "9.000" },
  { name: "Kukovi i uro-trakt", price: "10.000", insurancePrice: "9.000" },
  { name: "Kukovi, CNS i uro-trakt", price: "11.000", insurancePrice: "9.900" },
  { name: "Uro-trakt i LS kičma", price: "10.000", insurancePrice: "9.000" },
  { name: "Vrat i abdomen", price: "10.000", insurancePrice: "9.000" },
  { name: "Štitna žlezda i abdomen", price: "10.000", insurancePrice: "9.000" },
  { name: "Dojka i abdomen", price: "10.000", insurancePrice: "9.000" },
  { name: "Dojka i štitna žlezda", price: "10.000", insurancePrice: "9.000" },
  { name: "Abdomen, dojka i štitna žlezda", price: "11.000", insurancePrice: "9.900" },
  { name: "Dve regije", price: "10.000", insurancePrice: "9.000" },
  { name: "Tri regije", price: "11.000", insurancePrice: "9.900" },
  { name: "Pregled za dva člana porodice", price: "10.000", insurancePrice: "9.000" },
];

export const otherServices = [
  { name: "Konsultacija profesora i primarijusa", price: "6.000", insurancePrice: "5.400" },
  { name: "Specijalistički pregled", price: "8.000", insurancePrice: "7.200" },
  { name: "Ultrazvučni pregled specijaliste radiologije", price: "6.000", insurancePrice: "5.400" },
  { name: "Sistematski ultrazvučni pregled sa popustom 50%", price: "4.000", insurancePrice: "4.000" },
];
