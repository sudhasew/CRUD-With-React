import { FormEvent, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Bug from "../services/Bug";
import { AddBugForm } from "./AddBugForm";
import BugItem from "./BugItem";

export function BugList() {
  const [bug, setBug] = useState<string>("");
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [active, setActive] = useState(false);

  // const [buggy, setBuggy] = useState<Bug>();

  function handleAdd(e: FormEvent) {
    e.preventDefault();

    if (bug) {
      if (bugs.find((b) => b.description === bug.toUpperCase())) {
        if (window.confirm(`Do you want to add ${bug} again`)) {
          setBugs([
            ...bugs,
            { id: Date.now(), description: bug.toUpperCase(), fixed: active },
          ]);
          setBug("");
        } else {
          setBug("");
          return;
        }
      } else {
        setBugs([
          ...bugs,
          { id: Date.now(), description: bug.toUpperCase(), fixed: active },
        ]);
      }
      setBug("");
    }

    if (bug === "") {
      window.alert("Please add a valid bug");
      return;
    }
  }

  const handleCheck = () => {
    setActive(!active);
  };

  return (
    <>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Bugs List
      </h1>

      <div className="table-container">
        {bugs.length > 0 ? (
          bugs.map((bug) => {
            return (
              <div key={bug.id} className="bug-list">
                <BugItem
                  bug={bug}
                  key={bug.id}
                  bugs={bugs}
                  setBugs={setBugs}
                ></BugItem>
              </div>
            );
          })
        ) : (
          <div>
            <p className="bug-msg">Add a bug</p>
          </div>
        )}
      </div>

      <AddBugForm
        bug={bug}
        setBug={setBug}
        handleAdd={handleAdd}
        active={active}
        handleCheck={handleCheck}
      />
    </>
  );
}
