import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AddBugForm } from "./components/AddBugForm";
import Bug from "./services/Bug";
import { BugList } from "./components/BugList";

function App() {
  return (
    <div className="App">
      <BugList />
    </div>
  );
}

export default App;
