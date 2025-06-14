import React, { useState } from "react";

function ChipsInput() {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => setInputValue(e.target.value);

  const handleKeyDown = (event) => {
    if (event.key == "Enter" && inputValue.trim() !== "") {
      setChips((prev) => [...prev, inputValue]);
      setInputValue("");
      // console.log(chips); // will always give inaccurate logs try this instead
      // setChips((prev) => {
      // const temp = [...prev, inputValue]
      // console.log(temp)
      // return temp
      // });
    }
  };

  const handleRemoveChip = (index) => {
    console.log(index);
    setChips(chips.filter((_, idx) => idx !== index));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={inputValue}
        onChange={handleInputValue}
        onKeyDown={handleKeyDown}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "40px 0",
          padding: "20px",
        }}>
        {chips.map((chip, index) => (
          <div
            key={index}
            style={{
              border: "1px black solid",
              padding: "5px",
              margin: "5px",
            }}>
            {chip}
            <button
              style={{
                textDecoration: "none",
                backgroundColor: "white",
                cursor: "pointer",
                border: "none",
              }}
              onClick={() => handleRemoveChip(index)}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
