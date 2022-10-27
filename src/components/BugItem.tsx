import Bug from "../services/Bug";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AiFillEdit } from "react-icons/ai";
interface Props {
  bug: Bug;
  onDelete: () => void;
  onToggleFixed: () => void;
}

function BugItem({ bug, onDelete, onToggleFixed }: Props) {
  const notify = () =>
    toast.warn(`You have deleted "${bug.description}"`, {
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
    <div className="bugItem-container">
      <button className="edit">
        <AiFillEdit />
      </button>
      <button className="checkMark" onClick={onToggleFixed}>
        {bug.fixed ? (
          <FontAwesomeIcon className="faXmark" icon={faXmark} />
        ) : (
          <FontAwesomeIcon className="faCheck" icon={faCheck} />
        )}
      </button>
      <button className="delBtn" onClick={onClick}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <ToastContainer />
    </div>
  );
}

export default BugItem;
