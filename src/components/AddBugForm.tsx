import { FormEvent, useRef } from "react";
import { ToastContainer } from "react-toastify";

interface Props {
  bug: string;
  setBug: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: FormEvent) => void;
  active: boolean;
  handleCheck: () => void;
}

export const AddBugForm = ({
  bug,
  setBug,
  handleAdd,
  active,
  handleCheck,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <h2 className="addBug">Form: Add a bug</h2>
      <form
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
        className="form-container"
      >
        <div className="desc-container">
          <label className="label"> Description </label>
          <input
            type="text"
            placeholder="enter bug description"
            value={bug}
            ref={inputRef}
            onChange={(e) => setBug(e.target.value)}
            id="description"
          />
          <button className="btnSave">Save</button>
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
