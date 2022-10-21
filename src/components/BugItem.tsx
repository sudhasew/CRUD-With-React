import { useState } from "react";
import Bug from "../services/Bug";

interface Props {
  bug: Bug;
  onDelete: () => void;
  onToggleFixed: () => void;
}

function BugItem({ bug, onDelete, onToggleFixed }: Props) {
  return (
    <>
      <button onClick={onToggleFixed}>
        Mark {bug.fixed ? "Not Fixed" : "Fixed"}
      </button>
      <button style={{ marginLeft: "10px" }} onClick={onDelete}>
        Delete
      </button>
    </>
  );
}

export default BugItem;
