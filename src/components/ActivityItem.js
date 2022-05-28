import { useState } from "react";
import { ReactComponent as Icon } from "../assets/check.svg";

const ActivityItem = ({ done, title, description, duration }) => {
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
          className={`btn p-0 ms-auto ${done ? "btn-primary" : "btn-light"}`}
        >
          <Icon />
        </button>
      </div>
      {openDescription && (
        <>
          <p>{description}</p>
          <button className="btn btn-sm btn-dark me-auto">Delete</button>
        </>
      )}
    </div>
  );
};

export default ActivityItem;
