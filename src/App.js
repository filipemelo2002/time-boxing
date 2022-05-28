import BrainDump from "./components/BrainDump";
import TopPriorities from "./components/TopPrioritites";
import Timer from "./components/Timer";
import Activities from "./components/Activities";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { useTimeBoxing } from "./contexts/TimeBoxingContext";

function App() {
  const { brainDump, topPriorities, onAddTopPriority, onChangeBrainDump } =
    useTimeBoxing();

  return (
    <>
      <div className="d-grid template-columns-2 m-auto px-2 gap-3">
        <div className="d-flex flex-column align-items-center gap-4 justify-content-center">
          <Logo className="mt-4 me-auto img-logo img-logo-container" />
          <Timer />
          <TopPriorities
            topPriorities={topPriorities}
            onAddTopPriority={onAddTopPriority}
          />
          <Activities />
        </div>
        <BrainDump
          value={brainDump}
          onChange={(event) => onChangeBrainDump(event.target.value)}
        />
      </div>
    </>
  );
}

export default App;
