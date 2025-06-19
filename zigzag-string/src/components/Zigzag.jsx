import React from "react";
import { useState } from "react";

function Zigzag() {
  const [string, setString] = useState("");
  const [reversedString, setReversedString] = useState("");

  const generateZigZagString = () => {
    let str = string.trim();
    let ans = "";
    str.split(",").forEach((item, index) => {
      if (index % 2 == 0) {
        ans += item;
      } else {
        console.log(item);
        ans += item.split("").reverse().join("");
      }
    });
    setReversedString(ans);
  };
  return (
    <div>
      <h3>Array to Zigzag String</h3>
      <input
        type="text"
        placeholder="Enter strings like one,two,three"
        data-testid="input-box"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <button
        type="button"
        data-testid="submit-button"
        onClick={generateZigZagString}>
        Submit
      </button>
      <p data-testid="output-result">Output: {reversedString}</p>
    </div>
  );
}

export default Zigzag;
