import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

export default function Counter() {
  const [currentCount, setCurrentCount] = useState(0);
  const previousCount = usePrevious(currentCount);

  return (
    <div className="App">
      <h2>Current Count: {currentCount}</h2>
      <h2>Previous Count: {previousCount}</h2>
      <button
        onClick={() => setCurrentCount((currentCount) => currentCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCurrentCount(0)}>Reset</button>
      <button
        onClick={() => setCurrentCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
    </div>
  );
}
