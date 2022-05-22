import ActivityItem from "./ActivityItem";
import AddTaskButton from "./AddTaskButton";
import Select from "./Select";

const Activities = () => {
  return (
    <div className="activities-component">
      <div className="d-flex w-100 border-2 border-bottom">
        <h4 className="text-white fw-bold align-self-center">Activites</h4>

        <Select
          className="form-select select select-primary w-auto ms-auto mb-2"
          data={[
            { name: "00:00", value: "0" },
            { name: "01:00", value: "1" },
            { name: "02:00", value: "2" },
            { name: "03:00", value: "3" },
            { name: "04:00", value: "4" },
            { name: "05:00", value: "5" },
            { name: "06:00", value: "6" },
            { name: "07:00", value: "7" },
            { name: "08:00", value: "8" },
            { name: "09:00", value: "9" },
            { name: "10:00", value: "10" },
            { name: "11:00", value: "11" },
            { name: "12:00", value: "12" },
            { name: "13:00", value: "13" },
            { name: "14:00", value: "14" },
            { name: "15:00", value: "15" },
            { name: "16:00", value: "16" },
            { name: "17:00", value: "17" },
            { name: "18:00", value: "18" },
            { name: "19:00", value: "19" },
            { name: "20:00", value: "20" },
            { name: "21:00", value: "21" },
            { name: "22:00", value: "22" },
            { name: "23:00", value: "23" },
          ]}
        />
      </div>
      <div className="d-flex flex-column gap-3 mt-3">
        <ActivityItem />
        <ActivityItem done={true} />
      </div>
      <div className="mt-3">
        <AddTaskButton />
      </div>
    </div>
  );
};

export default Activities;
