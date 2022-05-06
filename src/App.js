import BrainDump from "./components/BrainDump";
import Select from "./components/Select";
function App() {
  return (
    <div>
      <button className="m-5 btn btn-sm btn-primary">Save</button>
      <button className="m-5 btn btn btn-primary">Save</button>
      <button className="m-5 btn btn-lg btn-primary">Save</button>
      <br />
      <button className="m-5 btn btn-sm btn-secondary">Save</button>
      <button className="m-5 btn btn btn-secondary">Save</button>
      <button className="m-5 btn btn-lg btn-secondary">Save</button>
      <br />
      <button className="m-5 btn btn-sm btn-light">Save</button>
      <button className="m-5 btn btn btn-light">Save</button>
      <button className="m-5 btn btn-lg btn-light">Save</button>
      <br />
      <button className="m-5 btn btn-sm btn-dark">Save</button>
      <button className="m-5 btn btn-dark">Save</button>
      <button className="m-5 btn btn-lg btn-dark">Save</button>
      <br />
      <div className="d-flex mx-5">
        <Select
          className="form-select select select-primary w-auto "
          data={[
            { name: "Option 1", value: "1" },
            { name: "Option 2", value: "2" },
            { name: "Option 3", value: "3" },
          ]}
        />

        <Select
          className="form-select select select-secondary w-auto mx-5"
          data={[
            { name: "Option 1", value: "1" },
            { name: "Option 2", value: "2" },
            { name: "Option 3", value: "3" },
          ]}
        />
      </div>
      <div className="m-5">
        <BrainDump />
      </div>
    </div>
  );
}

export default App;
