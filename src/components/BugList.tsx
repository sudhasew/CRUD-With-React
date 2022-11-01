import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Bug from "../services/Bug";
import { AddBugForm } from "./AddBugForm";
import BugItem from "./BugItem";

export function BugList() {
  const [bug, setBug] = useState<string>("");
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [active, setActive] = useState(false);

  function handleAdd(e: React.FormEvent) {
    e.preventDefault();

    if (bug) {
      if (bugs.find((b) => b.description.toUpperCase() === bug.toUpperCase())) {
        if (window.confirm(`Do you want to add ${bug} again`)) {
          setBugs([
            ...bugs,
            { id: Date.now(), description: bug, fixed: active },
          ]);
          setBug("");
        } else {
          setBug("");
          return;
        }
      } else {
        setBugs([...bugs, { id: Date.now(), description: bug, fixed: active }]);
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
      <AddBugForm
        bug={bug}
        setBug={setBug}
        handleAdd={handleAdd}
        active={active}
        handleCheck={handleCheck}
      />
      <div className="bugsList">
        {bugs.map((bug) => (
          <BugItem
            bug={bug}
            key={bug.id}
            bugs={bugs}
            setBugs={setBugs}
          ></BugItem>
        ))}
      </div>
    </>
  );
}
