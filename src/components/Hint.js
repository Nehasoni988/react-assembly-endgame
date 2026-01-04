import { getHint } from "../utils/helper";

export const Hint = ({ correctWord }) => {
  const hint = getHint(correctWord);

  return (
    <div className="hint">
      <span style={{ fontWeight: "bold", fontSize: '20px' }}>Hint</span>: {hint}
    </div>
  );
};
