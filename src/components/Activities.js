import { useMemo, useState } from "react";
import { useTimeBoxing } from "../contexts/TimeBoxingContext";
import ActivityItem from "./ActivityItem";
import AddTaskButton from "./AddTaskButton";
import Select from "./Select";

const Activities = () => {
  const [time, setTime] = useState(new Date().getHours());
  const { activities, onAddActivity } = useTimeBoxing();
  const totalActivitiesDuration = useMemo(() => {
    const currentTimeActivities = activities.filter(
      (activity) => activity.time === time
    );
    const durationSum = currentTimeActivities.reduce(
      (sum, activity) => sum + activity.duration,
      0
    );
    return durationSum;
  }, [activities, time]);
  return (
    <div className="activities-component w-100">
      <div className="d-flex border-2 border-bottom">
        <h4 className="text-white fw-bold align-self-center">Activites</h4>

        <Select
          className="form-select select select-primary w-auto ms-auto mb-2"
          data={[
            { name: "00:00", value: 0 },
            { name: "01:00", value: 1 },
            { name: "02:00", value: 2 },
            { name: "03:00", value: 3 },
            { name: "04:00", value: 4 },
            { name: "05:00", value: 5 },
            { name: "06:00", value: 6 },
            { name: "07:00", value: 7 },
            { name: "08:00", value: 8 },
            { name: "09:00", value: 9 },
            { name: "10:00", value: 10 },
            { name: "11:00", value: 11 },
            { name: "12:00", value: 12 },
            { name: "13:00", value: 13 },
            { name: "14:00", value: 14 },
            { name: "15:00", value: 15 },
            { name: "16:00", value: 16 },
            { name: "17:00", value: 17 },
            { name: "18:00", value: 18 },
            { name: "19:00", value: 19 },
            { name: "20:00", value: 20 },
            { name: "21:00", value: 21 },
            { name: "22:00", value: 22 },
            { name: "23:00", value: 23 },
          ]}
          value={time}
          onChange={(event) => setTime(Number(event.target.value))}
        />
      </div>
      <div className="d-flex flex-column gap-3 mt-3">
        {activities
          .filter((activity) => activity.time === time)
          .map((activity) => (
            <ActivityItem
              key={activity.id}
              title={activity.title}
              description={activity.description}
              done={activity.done}
              duration={activity.duration}
              onRemove={() => {}}
            />
          ))}
      </div>

      {totalActivitiesDuration < 4 && (
        <div className="mt-3">
          <AddTaskButton
            onSave={(task) => onAddActivity({ ...task, time })}
            maxDuration={4 - totalActivitiesDuration}
          />
        </div>
      )}
    </div>
  );
};

export default Activities;
