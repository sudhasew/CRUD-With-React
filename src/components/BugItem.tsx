import Bug from "../services/Bug";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone, MdClose } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

interface Props {
  bug: Bug;
  bugs: Bug[];
  setBugs: React.Dispatch<React.SetStateAction<Bug[]>>;
}

function BugItem({ bug, bugs, setBugs }: Props) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editBug, setEditBug] = useState<string>(bug.description);

  const handleEdit = () => {
    if (!edit && !bug.fixed) {
      setEdit(!edit);
    }
  };

  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    if (editBug.trim() === "") {
      window.alert("Please enter valid bug");
      setEdit(true);
      setEditBug("");
    } else {
      setBugs(
        bugs.map((bug) => (bug.id === id ? { ...bug, bug: editBug } : bug))
      );
      setEdit(false);
    }
  };

  const handleFixed = (id: number) => {
    setBugs(
      bugs.map((bug) => (bug.id === id ? { ...bug, fixed: !bug.fixed } : bug))
    );
  };

  const handleDelete = (id: number) => {
    if (bug.fixed) {
      if (window.confirm(`Do you want to delete "${editBug}" bug`)) {
        setBugs(bugs.filter((t) => t.id !== id));
      }
    } else {
      window.alert(`Did you complete your "${editBug}" bug`);
      if (bug.fixed) {
        setBugs(bugs.filter((t) => t.id !== id));
      }
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="bugs-single-input"
      onSubmit={(e) => handleSubmit(e, bug.id)}
    >
      {edit ? (
        <input
          className="bugs-single-text"
          value={editBug}
          onChange={(e) => setEditBug(e.target.value)}
          ref={inputRef}
        />
      ) : bug.fixed ? (
        <span className="line-through">{editBug}</span>
      ) : (
        <span className="bugs-single-text">{editBug}</span>
      )}

      <div className="icons">
        <span>
          {bug.fixed ? (
            <MdClose className="icon" onClick={() => handleFixed(bug.id)} />
          ) : (
            <MdDone className="icon" onClick={() => handleFixed(bug.id)} />
          )}
        </span>

        <span className="icon" onClick={handleEdit}>
          <AiFillEdit />
        </span>

        <span className="icon" onClick={() => handleDelete(bug.id)}>
          <AiFillDelete />
        </span>

        <ToastContainer />
      </div>
    </form>
  );
}

export default BugItem;
