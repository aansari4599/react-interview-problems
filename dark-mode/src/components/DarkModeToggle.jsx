import React, { useState } from "react";
import "./styles.css";

function DarkModeToggle() {
  const dark = "dark-mode";
  const light = "light-mode";

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`container ${isDarkMode ? dark : light}`}>
      <h1>Dark Mode Toggle</h1>
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
          />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </div>
  );
}

export default DarkModeToggle;
