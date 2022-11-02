import { useState } from "react";
import "./App.css";
import { BugList } from "./components/BugList";
import Bug from "./models/Bug";

function App() {
  return (
    <div className="App">
      <BugList />
    </div>
  );
}

export default App;
