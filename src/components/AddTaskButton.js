import { useState } from "react";
import Select from "./Select";
const AddTaskButton = ({ onSave }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    duration: 1,
  });

  const [editMode, setEditMode] = useState(false);

  const onChangeTitle = (event) => {
    setTask({ ...task, title: event.target.value });
  };

  const onChangeDuration = (event) => {
    setTask({ ...task, duration: event.target.value });
  };

  const onChangeDescription = (event) => {
    setTask({ ...task, description: event.target.value });
  };

  const resetForm = () => {
    setTask({
      title: "",
      description: "",
      duration: 0,
    });
  };

  const handleOnSave = () => {
    if (!task.title || !task.duration || !task.description) {
      alert("Please, fill all fields!");
    }

    onSave(task);
    resetForm();
  };
  if (editMode) {
    return (
      <div className="add-task-container border-left">
        <input
          placeholder="Task title..."
          value={task.title}
          onChange={onChangeTitle}
          maxLength={31}
        />
        <textarea
          className="rounded"
          name=""
          id=""
          cols="30"
          rows="10"
          value={task.description}
          onChange={onChangeDescription}
        />

        <div className="d-flex gap-1 flex-wrap mt-3">
          <Select
            data={[
              { name: "15min", value: 1 },
              { name: "30min", value: 2 },
              { name: "45min", value: 3 },
              { name: "60min", value: 4 },
            ]}
            value={task.duration}
            onChange={onChangeDuration}
            className="form-select select select-secondary"
          />
          <button
            className="shadow ms-auto btn btn-sm btn-light"
            onClick={() => {
              setEditMode(!editMode);
              resetForm();
            }}
          >
            Cancel
          </button>
          <button className="btn btn-sm btn-dark" onClick={handleOnSave}>
            Save
          </button>
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
