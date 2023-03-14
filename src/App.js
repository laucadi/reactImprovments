import "./App.css";
import ImagesExample from "./ImagesExample";
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
      {/* <InputFile2 /> */}
      {/* <InputFile /> */}
      <ImagesExample />
    </div>
  );
}

export default App;
