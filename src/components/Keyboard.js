export const Keyboard = ({ keyValue, correctChars, wrongChars, onClickCb }) => {
  const isCorrectKey = correctChars.includes(keyValue);
  const isWrongKey = wrongChars.includes(keyValue);
  const isDisabled = isCorrectKey || isWrongKey;

  function handleClick() {
    // If that key is already used, then do not allow further processing
    if (isDisabled) return;

    onClickCb();
  }

  return (
    <button
      className={`keyboard_key box-style ${
        isCorrectKey ? "success_key" : isWrongKey ? "wrong_key" : ""
      }`}
      onClick={() => handleClick()}
    >
      {keyValue}
    </button>
  );
};
