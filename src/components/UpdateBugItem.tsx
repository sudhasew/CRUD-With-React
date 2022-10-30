import Bug from "../services/Bug";

interface Props {
  bug: Bug;
  onToggleFixed: () => void;
}

function UpdateBugItem({ onToggleFixed }: Props) {
  return (
    <div>
      <button onClick={onToggleFixed}></button>
    </div>
  );
}

export default UpdateBugItem;
