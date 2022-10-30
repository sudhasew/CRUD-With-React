import "./App.css";
import { BugList } from "./components/BugList";

function App() {
  return (
    <>
      <h1 className="crudHeading">CRUD With React</h1>
      <div className="App">
        <BugList />
      </div>
    </>
  );
}

export default App;
