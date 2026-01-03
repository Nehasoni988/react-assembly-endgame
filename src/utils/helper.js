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
  let words = [
    "DANGAL",
    "3 IDIOTS",
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

  let randomNum = Math.floor(Math.random() * words.length);

  return words[randomNum];
};
