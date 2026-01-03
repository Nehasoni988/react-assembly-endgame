export const ALERT_TYPE = {
  NONE: -1,
  ERROR: 0,
  WARNING: 1,
  SUCCESS: 2,
};

export const GAME_STATUS = {
  WON: 0,
  LOST: 1,
  PLAYING: 2,
};

export const MAX_ATTEMPTS = 8;

export const movies = [
  "DANGAL",
  "THREE IDIOTS",
  "PK",
  "BAJRANGI BHAIJAAN",
  "SULTAN",
  "PADMAAVAT",
  "KABIR SINGH",
  "CHHICHHORE",
  "TANHAAJI",
  "GOLMAAL",
  "ZINDAGI NA MILEGI DOBARA",
  "BHOOTNATH",
  "RAAZ",
  "OM SHANTI OM",
  "RA.ONE",
  "BARFI",
  "ANDHADHUN",
  "DRISHYAM",
  "KEDARNATH",
  "URI",
  "GULLY BOY",
  "STUDENT OF THE YEAR",
  "RANBHOOMI",
  "DEEWANGI",
  "KABHI KHUSHI KABHIE GHAM",
  "VEER-ZARA",
  "JODHAA AKBAR",
  "SANGHARSH",
  "DILWALE",
  "BHAAG MILKHA BHAAG",
  "RAJNI",
  "RANG DE BASANTI",
  "LAGAAN",
  "CHAK DE INDIA",
  "FAN",
  "RAAZI",
  "MISSION MANGAL",
  "TALAASH",
  "KHOOBSURAT",
  "JUNGLE",
  "BADRINATH KI DULHANIA",
  "HUMSAFAR",
  "AIRLIFT",
  "BARBIE",
  "HUM APKE HAIN KAUN",
  "MY NAME IS KHAN",
  "ISHQ",
  "BOMBAY",
  "SAAJAN",
  "VEERE DI WEDDING",
  "GABBAR IS BACK",
];

export const hints = [
  "Wrestler dad, tiny champ dreams", // DANGAL
  "Three friends, endless chaos", // 3 IDIOTS
  "Alien with a moral compass", // PK
  "Lost a kid, found a heart", // BAJRANGI BHAIJAAN
  "Fighting in the ring, ruling hearts", // SULTAN
  "Queen, controversy, and grandeur", // PADMAAVAT
  "Heartbroken rebel falls in love", // KABIR SINGH
  "College tales with a twist", // CHHICHHORE
  "Maratha warrior, epic battle", // TANHAAJI
  "Laughs, chaos, a lot of fools", // GOLMAAL
  "Friends road trip, grown-up fun", // ZINDAGI NA MILEGI DOBARA
  "Ghostly mischief at home", // BHOOTNATH
  "Scary, suspense, secret revealed", // RAAZ
  "Reincarnation, songs, drama", // OM SHANTI OM
  "Superhero villain, flashy suit", // RA.ONE
  "Silent gestures, love speaks", // BARFI
  "Piano, murders, suspense galore", // ANDHADHUN
  "Missing girl, clever plan", // DRISHYAM
  "Mountain, love, tragedy", // KEDARNATH
  "Army strikes back, patriotism", // URI
  "Rapper rises from streets", // GULLY BOY
  "School, love, and rivalry", // STUDENT OF THE YEAR
  "Action-packed revenge story", // RANBHOOMI
  "Obsessed love, dangerous", // DEEWANGI
  "Family drama, many hugs", // KABHI KHUSHI KABHIE GHAM
  "Cross-border love saga", // VEER-ZARA
  "Power struggle, battle of minds", // JODHAA AKBAR
  "Fight for justice, intense", // SANGHARSH
  "Action, romance, Bollywood flair", // DILWALE
  "Run, chase, win the race", // BHAAG MILKHA BHAAG
  "One man, many punches", // RAJNI
  "Youth rebellion, friendship test", // RANG DE BASANTI
  "Village vs empire, cricket decides", // LAGAAN
  "Coach, girls, hockey glory", // CHAK DE INDIA
  "Fan of a superstar turns crazy", // FAN
  "Spy lady with secrets", // RAAZI
  "Mission to Mars, desi style", // MISSION MANGAL
  "Detective work, hidden clues", // TALAASH
  "Beauty and brains collide", // KHOOBSURAT
  "Survival in the wild jungle", // JUNGLE
  "Romantic chaos, couple goals", // BADRINATH KI DULHANIA
  "Couple journeys, emotional", // HUMSAFAR
  "Evacuation thriller, real hero", // AIRLIFT
  "Pink, fun, and friendship", // BARBIE
  "Family, comedy, who is who?", // HUM APKE HAIN KAUN
  "Autistic hero fights fate", // MY NAME IS KHAN
  "Old-school love, heart beats", // ISHQ
  "City, love, drama unfold", // BOMBAY
  "Love letters, drama ensues", // SAAJAN
  "Girls' party, no men allowed", // VEERE DI WEDDING
  "Vigilante strikes back hard", // GABBAR IS BACK
];

export const getLanguages = () => {
  let languages = [
    "Shah Rukh Khan",
    "Aamir Khan",
    "Salman Khan",
    "Ranbir Kapoor",
    "Hrithik Roshan",
    "Deepika Padukone",
    "Alia Bhatt",
    "Sanjay Leela Bhansali",
    "Box Office Flop 💣",
  ];

  let colors = [
    "orange",
    "blue",
    "teal",
    "blueviolet",
    "brown",
    "green",
    "darkmagenta",
    "red",
    "deeppink",
  ];

  return [
    ...languages.map((val, index) => ({
      id: index + 1,
      title: val,
      background: colors[index],
      eliminate: false,
    })),
  ];
};

export const getBlankArrayOfSize = (size) => [...Array(size)];

export const getAlphaCharacters = () => [
  ...Array(26)
    .keys()
    .map((num) => String.fromCharCode(num + 65)),
];

export const getRandomWord = () => {
  let randomNum = Math.floor(Math.random() * movies.length);

  return movies[randomNum];
};

export const getHint = (title) => {
  let index = movies.findIndex((item) => item === title);
  return hints[index];
};
