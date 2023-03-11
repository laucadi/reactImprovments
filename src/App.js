import "./App.css";
import InputFile from "./InputFile";
import InputFile2 from "./InputFile2";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <InputFile2 />
      {/* <InputFile /> */}
    </div>
  );
}

export default App;
