import { useState } from "react";
import Bug from "../services/Bug";
import { AddBugForm } from "./AddBugForm";
import BugItem from "./BugItem";

export function BugList() {
  const [bugs, setBugs] = useState<Bug[]>([
    {
      description: "CSS overlap",
      fixed: false,
    },
    {
      description: "Rounded Corners",
      fixed: false,
    },
    {
      description: "Crashes when lose",
      fixed: true,
    },
  ]);

  function handleAdd(bug: Bug) {
    console.log("bugs here are", bug);
    setBugs((prevBugs) => [...prevBugs, bug]);
  }

  function handleDelete(i: number) {
    setBugs((prevBugs) => [
      ...prevBugs.slice(0, i),
      ...[...prevBugs.slice(i + 1)],
    ]);
  }

  function handleToggleFixed(i: number) {
    setBugs((prevBugs) => {
      const prevBug = prevBugs[i];
      let newBug = {
        ...prevBug,
        fixed: !prevBug.fixed,
      };
      return [...prevBugs.slice(0, i), newBug, ...prevBugs.slice(i + 1)];
    });
  }

  return (
    <>
      <h1
        style={{
          color: "slateblue",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Bugs List
      </h1>
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <th>Description</th>
              <th>Fixed</th>
              <th>Actions</th>
            </tr>
            {bugs.map((bug, i) => (
              <tr key={i} className="bug-list">
                <td>{bug.description}</td>
                <td className="fixed">{bug.fixed === true ? "Yes" : "No"}</td>
                <td>
                  <BugItem
                    onDelete={() => handleDelete(i)}
                    bug={bug}
                    onToggleFixed={() => handleToggleFixed(i)}
                  ></BugItem>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddBugForm onSubmit={handleAdd} />
    </>
  );
}
