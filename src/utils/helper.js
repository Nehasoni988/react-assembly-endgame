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
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Ruby",
    "Assembly",
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

export const getRandomWord = (min = 0, max = 7) => {
  let words = [
    "REFACTOR",
    "ABSTRACT",
    "CALLBACK",
    "PROMISE",
    "ARGUMENT",
    "VARIABLE",
    "COMPILER",
    "BALLOONS",
  ];

  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);

  return words[randomNum];
};
