import Bug from "../services/Bug";

interface Props {
  bug: Bug;
  onToggleFixed: () => void;
}

function UpdateBugItem({ bug, onToggleFixed }: Props) {
  return (
    <div>
      <button onClick={onToggleFixed}>
        {bug.description}
        Mark {bug.fixed ? "Not Fixed" : "Fixed"}
      </button>
    </div>
  );
}

export default UpdateBugItem;
