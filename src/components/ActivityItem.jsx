import { useState } from "react";
import { ReactComponent as Icon } from "../assets/check.svg";
import Select from "./Select";
import { useTimeBoxing } from "../contexts/TimeBoxingContext";

const ActivityItem = ({
  id,
  onStartAcivity,
  done,
  title,
  description,
  duration,
  onRemove,
  onDone,
}) => {
  const [openDescription, setOpenDescription] = useState(false);

  const { timer } = useTimeBoxing();
  return (
    <div
      className={`${
        timer.counting && timer.id !== id ? "opacity-75" : ""
      } activity-item border-left d-flex flex-column gap-3 bg-white rounded p-3 `}
      onClick={() => setOpenDescription(!openDescription)}
    >
      <div className="d-flex align-items-center">
        <h4
          className={`fw-bold m-0 ${
            done ? "text-decoration-line-through text-gray" : ""
          }`}
        >
          {title}
        </h4>

        <button
          className={`shadow btn p-0 ms-auto ${
            done ? "btn-success" : "btn-light"
          }`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onDone();
          }}
        >
          <Icon />
        </button>
      </div>
      {openDescription && (
        <>
          <p className={done ? "text-decoration-line-through text-gray" : ""}>
            {description}
          </p>
          <div className="d-flex gap-3">
            <Select
              data={[
                { name: "15 min", value: 1 },
                { name: "30 min", value: 2 },
                { name: "45 min", value: 3 },
                { name: "60 min", value: 4 },
              ]}
              value={duration}
              disabled
              className="form-select select select-secondary me-auto"
            />
            <button
              className="shadow btn btn-sm btn-light"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                onRemove();
              }}
              disabled={timer.counting}
            >
              Delete
            </button>
            <button
              className={`btn btn-sm btn-dark ${
                timer.id === id || done ? "d-none" : ""
              }`}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                onStartAcivity();
              }}
              disabled={timer.counting}
            >
              Start
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityItem;
