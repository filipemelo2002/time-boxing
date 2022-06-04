import { useState } from "react";
import { uuidv4 } from "../utils";
import Select from "./Select";
const AddTaskButton = ({ onSave, maxDuration = 4 }) => {
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
    setTask({ ...task, duration: Number(event.target.value) });
  };

  const onChangeDescription = (event) => {
    setTask({ ...task, description: event.target.value });
  };

  const resetForm = () => {
    setTask({
      title: "",
      description: "",
      duration: 1,
    });
    setEditMode(false);
  };

  const handleOnSave = () => {
    if (!task.title || !task.duration || !task.description) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    onSave({
      ...task,
      id: uuidv4(),
      time: task.duration * 15 * 60,
    });
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
              { name: "15 min", value: 1 },
              { name: "30 min", value: 2 },
              { name: "45 min", value: 3 },
              { name: "60 min", value: 4 },
            ].filter(({ value }) => value <= maxDuration)}
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
