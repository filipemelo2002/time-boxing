import ActivityItem from "./ActivityItem";
import AddTaskButton from "./AddTaskButton";

const TopPriorities = ({ topPriorities = [], onAddTopPriority }) => {
  return (
    <div className="top-prioritites">
      <div className="d-flex w-100 border-2 border-bottom">
        <h4 className="text-white fw-bold  pb-3">Top Prioritites</h4>
        <span className="text-white ms-auto fw-bold">1/3</span>
      </div>

      <div className="d-flex flex-column gap-3 mt-3">
        {topPriorities.map((topPriority, index) => (
          <ActivityItem
            key={index}
            title={topPriority.title}
            description={topPriority.description}
            done={topPriority.done}
          />
        ))}
      </div>
      <div className="mt-3">
        <AddTaskButton />
      </div>
    </div>
  );
};

export default TopPriorities;
