import "./App.css";
import { Header } from "./components/Header";
import {
  getAlphaCharacters,
  getRandomWord,
  ALERT_TYPE,
  GAME_STATUS,
} from "./utils/helper";
import { Hint } from "./components/Hint";
import { BlankBox } from "./components/BlankBox";
import { Keyboard } from "./components/Keyboard";
import { Alert } from "./components/Alert";
import { useEffect, useState } from "react";
import { Attempts } from "./components/Attempts";
import { Footer } from "./components/Footer";

function App() {
  // Constants
  const initialState = {
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

  /**
   * State
   */
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
  const MAX_ATTEMPTS = 3;

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
          "You lose! Better luck next time! 😭"
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

  function handleKeyPress(char) {
    // If game is won or lost, do not allow any key press
    if (gameStatus !== GAME_STATUS.PLAYING) return false;

    if (!correctWord.includes(char)) {
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
    if (guessWord.join("") === correctWord) {
      showNotification(2, "You win!", "Well done 🏆");
      setGameStatus(GAME_STATUS.WON);
    }
  }

  function startNewGame() {
    // Reset whole state
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
        <Attempts attempts={attempts} maxAttempts={MAX_ATTEMPTS}></Attempts>

        {/* Header */}
        <Header></Header>

        {/* Alert Box */}
        <Alert notification={notification}></Alert>

        {/* Labguages */}
        <div className="hint_container flex-box">
          <Hint correctWord={correctWord}></Hint>
        </div>

        {/* Characters */}
        <div className="type_container">
          <BlankBox
            correctWord={correctWord}
            correctChars={correctChars}
            gameOver={attempts >= MAX_ATTEMPTS}
            onGuessWordUpdate={(data) => handleGuesseWordUpdate(data)}
          ></BlankBox>
        </div>

        {/* Keyboard */}
        <div className="keyboard_container">
          <div className="keys-container flex-box">
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
        </div>

        {/* New Game button */}
        {gameStatus == GAME_STATUS.PLAYING ? (
          <div className="press-key">Press any key</div>
        ) : (
          <button
            className="type_container new-game-btn"
            onClick={() => startNewGame()}
          >
            New Game
          </button>
        )}

        {/* Footer */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
