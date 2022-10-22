import Bug from "../services/Bug";

interface Props {
  bug: Bug;
  onDelete: () => void;
  onToggleFixed: () => void;
}

function BugItem({ bug, onDelete, onToggleFixed }: Props) {
  return (
    <>
      <button
        className={bug.fixed ? "lineThrough" : "notLineThrough"}
        onClick={onToggleFixed}
      >
        Mark {bug.fixed ? "!Fixed" : "Fixed"}
      </button>
      <button className="delBtn" onClick={onDelete}>
        Delete
      </button>
    </>
  );
}

export default BugItem;
