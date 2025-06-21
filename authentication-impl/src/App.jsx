import React from "react";
import { UserProvider } from "./contexts/userContext";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <Dashboard />
      </div>
    </UserProvider>
  );
};

export default App;
