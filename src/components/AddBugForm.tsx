import { FormEvent, useState } from "react";
import Bug from "../services/Bug";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  onSubmit: (bug: Bug) => void;
}

export const AddBugForm = ({ onSubmit }: Props) => {
  const [active, setActive] = useState(false);
  const [description, setDescriptipon] = useState("");

  const notify = () =>
    toast.info(`You added "${description.toUpperCase()}" to bug list!`, {
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

  function handleInput(e: FormEvent) {
    onSubmit({ description: description, fixed: active });
    e.preventDefault();
    notify();
  }

  const handleCheck = () => {
    setActive(!active);
  };

  return (
    <>
      <h2 className="addBug">Form: Add a bug</h2>
      <form onSubmit={handleInput} className="form-container">
        <div className="desc-container">
          <label className="label"> Description </label>
          <input
            type="text"
            placeholder="enter bug description"
            name={description.toUpperCase()}
            id="description"
            onChange={(e) => setDescriptipon(e.target.value)}
          />
          <button className="btnSave" onClick={() => handleInput}>
            Save
          </button>
          <ToastContainer />
        </div>
        <input
          className="check"
          type="checkbox"
          checked={active}
          onChange={handleCheck}
        />
        <label className="fixedCheck" style={{ marginLeft: "10px" }}>
          Fixed
        </label>
      </form>
    </>
  );
};
