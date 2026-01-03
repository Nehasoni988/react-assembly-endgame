export const Language = ({ language, color }) => {
  return (
    <div
      className={`language_badge ${language.eliminate ? "eliminate" : ""}`}
      style={{ background: color }}
    >
      <div className="actual-text">{language.title}</div>
      <div className="overlay-text">👻</div>
    </div>
  );
};
