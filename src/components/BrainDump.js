import { useTimeBoxing } from "../contexts/TimeBoxingContext";

const BrainDump = () => {
  const { brainDump, onChangeBrainDump } = useTimeBoxing();
  return (
    <div className="braindump mx-auto">
      <h4 className="text-white fw-bold border-2 border-bottom pb-3">
        Brain Dump
      </h4>
      <textarea
        className="rounded-1"
        onChange={(event) => onChangeBrainDump(event.target.value)}
        value={brainDump}
      />
    </div>
  );
};

export default BrainDump;
