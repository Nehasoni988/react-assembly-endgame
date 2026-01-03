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

export const hints = [
  "Wrestling, Aamir Khan, Father-Daughter Story",
  "Engineering, Friendship, Famous Line 'All is well'",
  "Alien, Comedy, Rajkumar Hirani Film",
  "Little Brother Helps, Salman Khan, Heartwarming",
  "Wrestler, Salman Khan, Comeback Story",
  "Queen of Mewar, Epic, Period Drama",
  "Angry, Love Story, Shahid Kapoor",
  "College Life, Friendships, Tragic Twist",
  "Maratha Warrior, Ajay Devgn, Historical",
  "Comedy, Rohit Shetty, Ensemble Cast",
  "Road Trip, Friendship, Three Friends",
  "Ghost, Amitabh Bachchan, Family Movie",
  "Horror, Supernatural, Scary",
  "Bollywood, Doppelganger, Shah Rukh Khan",
  "Superhero, Visual Effects, Shah Rukh Khan",
  "Mute Boy, Love, Emotional Story",
  "Thriller, Murder Mystery, Tabu",
  "Family, Suspense, Vijay Sethupathi",
  "Himalayan Love, Disaster, Sushant Singh Rajput",
  "Army, Kashmir, Vicky Kaushal",
  "Rap, Mumbai Slums, Ranveer Singh",
  "School, Competition, Youth Film",
  "Action, Revenge, Not Very Famous",
  "Crazy Love, Obsession, Romance",
  "Family Drama, Karan Johar, Ensemble Cast",
  "Love Story Across Borders, Shah Rukh Khan",
  "Mughal Era, Aishwarya Rai, Epic Romance",
  "Suspense, Psychological, Manoj Bajpayee",
  "Romantic Comedy, Shah Rukh Khan, Action Mix",
  "Sports, Milkha Singh, Biopic",
  "Superstar, Rajinikanth, Classic",
  "Patriotism, Friendship, College Rebellion",
  "Cricket, British Era, Oscar Nominee",
  "Hockey, Shah Rukh Khan, Underdog Story",
  "Fan Obsession, Shah Rukh Khan, Thriller",
  "Spy, Alia Bhatt, Indian Agent",
  "Space Mission, Real Life Story, Vidya Balan",
  "Detective, Crime, Aamir Khan",
  "Romantic, Funny, Sonam Kapoor",
  "Jungle Adventure, Survival, Action",
  "Romantic Comedy, Alia & Varun, Popular Hit",
  "Couple Drama, Romantic, TV Style",
  "Rescue, Flight, Akshay Kumar",
  "Fantasy, Doll, Barbie Movie",
  "Family Drama, Wedding, Classic",
  "Romantic Drama, SRK & Kajol, 2000s",
  "Love, Bollywood, Musical",
  "Historical, Slums, Friendship",
  "Romance, Comedy, Family Wedding",
  "Action, Amitabh Bachchan, Crime Thriller",
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
