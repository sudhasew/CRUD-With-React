import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Bug from "../services/Bug";
import { AddBugForm } from "./AddBugForm";
import BugItem from "./BugItem";

export function BugList() {
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [bug, setBug] = useState("");
  const [active, setActive] = useState(false);

  const notify = () =>
    toast.info(`You added "${bug}" to bug list!`, {
      className: "notifyInfo",
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  function handleAdd(e: FormEvent) {
    e.preventDefault();
    if (bug) {
      setBugs([
        ...bugs,
        {
          description: bug,
          fixed: active,
        },
      ]);
      setBug("");
    }

    if (bug == "") {
      toast.error("Please add a valid bug", {
        className: "notify",
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    notify();
  }

  const handleCheck = () => {
    setActive(!active);
  };

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
          color: "white",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Bugs List
      </h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Fixed</th>
              <th>Actions</th>
            </tr>
          </thead>
          {bugs.length > 0 ? (
            bugs.map((bug, i) => {
              return (
                <tbody key={i}>
                  <tr className="bug-list">
                    <td
                      className={
                        bug.description ? "notLine-through" : "line-through"
                      }
                    >
                      {bug.description}
                    </td>
                    <td className="fixed">
                      {bug.fixed === true ? "Yes" : "No"}
                    </td>
                    <td>
                      <BugItem
                        onDelete={() => handleDelete(i)}
                        bug={bug}
                        onToggleFixed={() => handleToggleFixed(i)}
                      ></BugItem>
                    </td>
                  </tr>
                </tbody>
              );
            })
          ) : (
            <tbody className="no-results">
              <tr className="bug-msg">
                <td>Add a bug</td>
              </tr>
            </tbody>
          )}
        </table>
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
