const BrainDump = ({ onChange, value }) => {
  return (
    <div className="braindump mx-auto">
      <h4 className="text-white fw-bold border-2 border-bottom pb-3">
        Brain Dump
      </h4>
      <textarea className="rounded-1" onChange={onChange} value={value} />
    </div>
  );
};

export default BrainDump;
