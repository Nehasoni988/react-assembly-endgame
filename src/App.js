import "./App.css";
import { Header } from "./components/Header";
import {
  getLanguages,
  getAlphaCharacters,
  getRandomWord,
  ALERT_TYPE,
  GAME_STATUS,
  MAX_ATTEMPTS,
} from "./utils/helper";
import { Language } from "./components/Language";
import { BlankBox } from "./components/BlankBox";
import { Keyboard } from "./components/Keyboard";
import { Alert } from "./components/Alert";
import { useEffect, useRef, useState } from "react";
import { Attempts } from "./components/Attempts";

function App() {
  /**
   * State
   */
  const initialState = {
    languages: getLanguages(),
    correctWord: getRandomWord(),
    correctChars: [],
    wrongChars: [],
    notification: {
      type: ALERT_TYPE.NONE,
      title: "",
      desc: "",
    },
    attempts: 0,
  };

  const [languages, setLanguages] = useState(initialState.languages);
  const [correctWord, setCorrectWord] = useState(initialState.correctWord);
  const [correctChars, setCorrectChars] = useState([
    ...initialState.correctChars,
  ]);
  const [wrongChars, setWrongChars] = useState([...initialState.wrongChars]);
  const [notification, setNotification] = useState({
    ...initialState.notification,
  });
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.PLAYING);
  const [attempts, setAttempts] = useState(initialState.attempts);

  /**
   * Hooks
   */

  useEffect(
    function () {
      if (attempts === MAX_ATTEMPTS) {
        // Notify about Game Over
        showNotification(
          ALERT_TYPE.ERROR,
          `Game Over!`,
          "You lose! Better start learning Assembly 😭"
        );
        setGameStatus(GAME_STATUS.LOST);
      }
    },
    [attempts]
  );

  /**
   * Functions
   */

  function showNotification(type = ALERT_TYPE.NONE, title = "", desc = "") {
    setNotification({
      type,
      title,
      desc,
    });
  }

  function eliminateLanguage() {
    let eliminateIndex = languages.findIndex((item) => !item.eliminate);
    // If language is remaining to be eliminate (except last one)
    if (eliminateIndex !== -1) {
      setLanguages((prev) =>
        prev.map((item, index) => {
          if (index !== eliminateIndex) return item;
          // Notify about language elimination
          showNotification(
            ALERT_TYPE.WARNING,
            "Oh no! 😥",
            `Farewell ${item.title} 👋`
          );
          return { ...item, eliminate: true };
        })
      );
    }
  }

  function handleKeyPress(char) {
    // If game is won or lost, do not allow any key press
    if (gameStatus !== GAME_STATUS.PLAYING) return false;

    if (!correctWord.includes(char)) {
      // eliminate one of the programming language on every wrong guess
      eliminateLanguage();
      // Set wrong characters
      setWrongChars((prev) => [...prev, char]);
      // Increase the attemps
      setAttempts((prev) => prev + 1);
    } else {
      // Set correct characters
      setCorrectChars((prev) => [...prev, char]);
      // show notification
      showNotification(ALERT_TYPE.SUCCESS, "Good job! 👍");
    }
  }

  function handleGuesseWordUpdate(guessWord) {
    if (guessWord === correctWord) {
      showNotification(2, "You win!", "Well done 🏆");
      setGameStatus(GAME_STATUS.WON);
    }
  }

  function startNewGame() {
    // Reset whole state
    setLanguages(initialState.languages);
    setCorrectWord(getRandomWord());
    setCorrectChars(initialState.correctChars);
    setWrongChars(initialState.wrongChars);
    setAttempts(initialState.attempts);
    setNotification({ ...initialState.notification });
    setGameStatus(GAME_STATUS.PLAYING);
  }

  return (
    <div className="App flex-box">
      <div className="game_container">
        {/* Attempts */}
        <Attempts attempts={attempts}></Attempts>

        {/* Header */}
        <Header></Header>

        {/* Alert Box */}
        <Alert notification={notification}></Alert>

        {/* Labguages */}
        <div className="language_container flex-box">
          {languages.map((item) => (
            <Language
              key={item.id}
              language={item}
              color={item.background}
            ></Language>
          ))}
        </div>

        {/* Characters */}
        <div className="type_container">
          <BlankBox
            correctWord={correctWord}
            correctChars={correctChars}
            gameOver={attempts === 8}
            onGuessWordUpdate={(data) => handleGuesseWordUpdate(data)}
          ></BlankBox>
        </div>

        {/* Keyboard */}
        <div className="keyboard_container flex-box">
          {getAlphaCharacters().map((item) => (
            <Keyboard
              key={item}
              keyValue={item}
              correctChars={correctChars}
              wrongChars={wrongChars}
              onClickCb={() => handleKeyPress(item)}
            ></Keyboard>
          ))}
        </div>

        {/* New Game button */}
        {gameStatus !== GAME_STATUS.PLAYING && (
          <button
            className="type_container new-game-btn"
            onClick={() => startNewGame()}
          >
            New Game
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
