import { MAX_ATTEMPTS } from "../utils/helper";

export const Attempts = ({ attempts, maxAttempts = MAX_ATTEMPTS }) => {
  return (
    <h3>
      Total attempts : {attempts} / {maxAttempts}
    </h3>
  );
};
