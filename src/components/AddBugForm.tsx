import { ChangeEvent, FormEvent, useState } from "react";
import Bug from "../services/Bug";

interface Props {
  onSubmit: (bug: Bug) => void;
}

export const AddBugForm = ({ onSubmit }: Props) => {
  const [active, setActive] = useState(false);
  const [description, setDescriptipon] = useState("");
  function handleInput(e: FormEvent) {
    onSubmit({ description: description, fixed: active });
    e.preventDefault();
  }

  return (
    <form onSubmit={handleInput} className="form-container container">
      <h2 className="addBug">Add a bug</h2>
      <div className="input-label">
        <label className="label"> Description </label>
        <input
          type="text"
          name={description}
          id="description"
          onChange={(e) => setDescriptipon(e.target.value)}
        />
        <br />
        <input
          className="check"
          type="checkbox"
          checked={active}
          onChange={() => setActive(!active)}
        />
        <label style={{ marginLeft: "10px" }}>Fixed</label>
      </div>

      <button className="btnSave" onClick={() => handleInput}>
        Save
      </button>
    </form>
  );
};
