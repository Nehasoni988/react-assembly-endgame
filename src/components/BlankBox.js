import { useEffect, useState } from "react";
import { getBlankArrayOfSize } from "../utils/helper";

export const BlankBox = ({
  correctWord,
  correctChars,
  onGuessWordUpdate,
  gameOver,
}) => {
  // Constants
  const initialState = {
    guessWord: getBlankArrayOfSize(8),
  };

  // State
  const [guessWord, setGuessWord] = useState(initialState.guessWord);

  // Hooks
  useEffect(
    function () {
      if (!correctChars.length) {
        setGuessWord(initialState.guessWord);
        return;
      }

      // Always pick the last pushed char because all previous pushed are set already
      let lastCorrectChar = correctChars[correctChars.length - 1];

      setGuessWord((prev) =>
        correctWord
          .split("")
          .map((val, i) =>
            val === lastCorrectChar ? lastCorrectChar : prev[i]
          )
      );
    },
    [correctChars]
  );

  useEffect(
    function () {
      onGuessWordUpdate(guessWord.join(""));
    },
    [guessWord]
  );

  // Template
  return (
    <div className="flex-box">
      {guessWord.map((val, i) => (
        <button
          key={i}
          className={`
            blankBox 
            box-style 
            flex-box 
            ${guessWord[i] ? "" : "blank-space"}
          `}
        >
          {gameOver ? correctWord[i] : val}
        </button>
      ))}
    </div>
  );
};
