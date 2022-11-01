import { FormEvent, useRef } from "react";

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
      <form
        className="input"
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <div className="inputbox">
          <input
            type="text"
            placeholder="Enter description..."
            value={bug}
            ref={inputRef}
            onChange={(e) => setBug(e.target.value)}
            className="input_container"
          />
          <button className="saveBtn" type="submit">
            Save
          </button>
        </div>

        <div className="checkbox">
          <input
            className="check"
            type="checkbox"
            checked={active}
            onChange={handleCheck}
          />
          <label className="fixedCheck">Is Bug Fixed?</label>
        </div>
      </form>
    </>
  );
};
