import { useTimeBoxing } from "../contexts/TimeBoxingContext";
import ActivityItem from "./ActivityItem";
import AddTaskButton from "./AddTaskButton";
import { ACTIVITY_TYPES } from "../constants";

const TopPriorities = () => {
  const {
    topPriorities,
    onAddTopPriority,
    onStartActivity,
    onRemoveTopPriority,
    setActivityAsDone,
  } = useTimeBoxing();

  return (
    <div className="top-prioritites">
      <div className="d-flex w-100 border-2 border-bottom">
        <h4 className="text-white fw-bold  pb-3">Top Prioritites</h4>
        <span className="text-white ms-auto fw-bold">
          {topPriorities.length}/3
        </span>
      </div>

      <div className="d-flex flex-column gap-3 mt-3">
        {topPriorities.map((topPriority) => (
          <ActivityItem
            id={topPriority.id}
            key={topPriority.id}
            title={topPriority.title}
            description={topPriority.description}
            done={topPriority.done}
            onRemove={() => onRemoveTopPriority(topPriority.id)}
            onStartAcivity={() =>
              onStartActivity({
                id: topPriority.id,
                type: ACTIVITY_TYPES.TOP_PRIORITIES,
              })
            }
            onDone={() =>
              setActivityAsDone({
                id: topPriority.id,
                type: ACTIVITY_TYPES.TOP_PRIORITIES,
              })
            }
          />
        ))}
      </div>
      {topPriorities.length < 3 && (
        <div className="mt-3">
          <AddTaskButton onSave={(task) => onAddTopPriority(task)} />
        </div>
      )}
    </div>
  );
};

export default TopPriorities;
