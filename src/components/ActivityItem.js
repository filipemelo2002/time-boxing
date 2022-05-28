import { useState } from "react";
import { ReactComponent as Icon } from "../assets/check.svg";
import Select from "./Select";

const ActivityItem = ({ done, title, description, duration, onRemove }) => {
  const [openDescription, setOpenDescription] = useState(false);
  return (
    <div
      className="activity-item border-left d-flex flex-column gap-3 bg-white rounded p-3 "
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
            done ? "btn-primary" : "btn-light"
          }`}
        >
          <Icon />
        </button>
      </div>
      {openDescription && (
        <>
          <p>{description}</p>
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
            >
              Delete
            </button>
            <button className="btn btn-sm btn-dark">Start</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityItem;
