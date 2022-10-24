import Bug from "../services/Bug";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  bug: Bug;
  onDelete: () => void;
  onToggleFixed: () => void;
}

function BugItem({ bug, onDelete, onToggleFixed }: Props) {
  const notify = () =>
    toast.warn(`You have deleted "${bug.description.toUpperCase()}"`, {
      position: "top-right",
      className: "notifyWarn",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const onClick = () => {
    onDelete();
    notify();
  };

  return (
    <>
      <button
        className={bug.fixed ? "lineThrough" : "notLineThrough"}
        onClick={onToggleFixed}
      >
        Mark {bug.fixed ? "!Fixed" : "Fixed"}
      </button>
      <button className="delBtn" onClick={onClick}>
        Delete
      </button>
      <ToastContainer />
    </>
  );
}

export default BugItem;
