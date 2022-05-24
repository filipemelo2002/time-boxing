import { useState } from "react";
import Select from "./Select";
const AddTaskButton = ({ onSave, onDelete, task }) => {
  const [editMode, setEditMode] = useState(false);

  if (editMode) {
    return (
      <div className="add-task-container border-left">
        <input placeholder="Task title..." />
        <textarea
          className="rounded"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <Select
          data={[
            { name: "15min", value: 1 },
            { name: "30min", value: 2 },
            { name: "45min", value: 3 },
            { name: "60min", value: 4 },
          ]}
          className="form-select select select-secondary mt-3"
        />

        <div className="d-flex gap-3 mt-3">
          {task && <button className="btn btn-sm btn-light">Delete</button>}
          <button
            className="ms-auto btn btn-sm btn-light"
            onClick={() => setEditMode(!editMode)}
          >
            Cancel
          </button>
          <button className="btn btn-sm btn-dark">Save</button>
        </div>
      </div>
    );
  }

  return (
    <button
      className="btn btn-secondary add-activity-button w-100"
      onClick={() => setEditMode(!editMode)}
    >
      Add Task
    </button>
  );
};

export default AddTaskButton;
