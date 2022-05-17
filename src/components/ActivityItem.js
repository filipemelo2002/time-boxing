import { ReactComponent as Icon } from "../assets/check.svg";

const ActivityItem = ({ done }) => {
  return (
    <div className="activity-item d-flex border-left bg-white rounded p-3 align-items-center">
      <h4
        className={`fw-bold m-0 ${
          done ? "text-decoration-line-through text-gray" : ""
        }`}
      >
        Lorem ipsum dolor...
      </h4>

      <button
        className={`btn p-0 ms-auto ${done ? "btn-primary" : "btn-light"}`}
      >
        <Icon />
      </button>
    </div>
  );
};

export default ActivityItem;
