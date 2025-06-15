import React, { useState } from "react";

function GuessTheNumber() {
  //   function to generate number to be guessed
  const generateNumber = () => Math.floor(Math.random() * 100) + 1;

  // states
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [num, setNum] = useState(generateNumber);

  // Function to handle guess checking
  const handleGuess = () => {
    const guessed = parseInt(input);
    if (isNaN(guessed) || guessed < 1 || guessed > 100) {
      setMessage("Please enter a number between 1 and 100");
      return;
    }
    setCount((count) => count + 1);
    if (guessed === num) {
      setMessage(
        `Congratulations! You guessed the number in ${count + 1} attempts.`
      );
    } else if (guessed < num) {
      setMessage("Too low! Try again");
    } else {
      setMessage("Too high! Try again");
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setNum(generateNumber());
    setCount(0);
    setMessage("");
    setInput("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}>
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="button" onClick={handleGuess}>
        Check Guess
      </button>
      <button type="button" onClick={resetGame}>
        Reset Game
      </button>

      <p>{message}</p>
    </div>
  );
}

export default GuessTheNumber;
